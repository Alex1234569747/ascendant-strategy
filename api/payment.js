import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const PLANS = {
  strategy: 15000,
  full: 75000,
  agency: 150000
}

const PLAN_NAMES = {
  strategy: 'Funnel Strategy Session',
  full: 'Full Funnel Implementation',
  agency: 'Growth Partner Package'
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const pathname = req.url || ''
  
  // Try to get raw body string for parsing
  let rawString = ''
  if (req.rawBody) {
    rawString = typeof req.rawBody === 'string' ? req.rawBody : req.rawBody.toString()
  } else if (req.body) {
    // Check if body is already parsed correctly
    if (typeof req.body === 'object' && req.body.plan) {
      // Already parsed
      const plan = req.body.plan
      const email = req.body.customerEmail || req.body.email
      
      if (req.method === 'POST' && pathname.match(/^\/api\/payment\/create-checkout/)) {
        if (!plan || !PLANS[plan]) {
          return res.status(400).json({ error: 'Invalid plan', got: plan })
        }
        
        const session = await stripe.checkout.sessions.create({
          mode: 'payment',
          line_items: [{
            price_data: {
              currency: 'nzd',
              product_data: { name: PLAN_NAMES[plan] },
              unit_amount: PLANS[plan]
            },
            quantity: 1
          }],
          customer_email: email || undefined,
          success_url: 'https://ascendant-strategy-6vvr.vercel.app/payment/success?session_id={CHECKOUT_SESSION_ID}&plan=' + plan,
          cancel_url: 'https://ascendant-strategy-6vvr.vercel.app/pricing'
        })
        
        return res.json({ url: session.url })
      }
    }
    // Otherwise use body as is
    rawString = JSON.stringify(req.body)
  }
  
  // Parse JSON from raw string
  let bodyData = {}
  try {
    if (rawString && rawString.trim()) {
      bodyData = JSON.parse(rawString)
    }
  } catch (e) {}
  
  const plan = bodyData.plan || ''
  const email = bodyData.customerEmail || bodyData.email || ''
  
  // Test endpoint
  if (pathname.match(/^\/api\/payment\/test/)) {
    return res.json({ 
      status: 'ok', 
      raw: rawString.substring(0, 100),
      body: bodyData
    })
  }
  
  // Checkout endpoint
  if (req.method === 'POST' && pathname.match(/^\/api\/payment\/create-checkout/)) {
    if (!plan || !PLANS[plan]) {
      return res.status(400).json({ error: 'Invalid plan', got: plan, raw: rawString })
    }
    
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'nzd',
          product_data: { name: PLAN_NAMES[plan] },
          unit_amount: PLANS[plan]
        },
        quantity: 1
      }],
      customer_email: email || undefined,
      success_url: 'https://ascendant-strategy-6vvr.vercel.app/payment/success?session_id={CHECKOUT_SESSION_ID}&plan=' + plan,
      cancel_url: 'https://ascendant-strategy-6vvr.vercel.app/pricing'
    })
    
    return res.json({ url: session.url })
  }
  
  // Verify endpoint
  const verifyMatch = pathname.match(/^\/api\/payment\/verify\/([^/?]+)/)
  if (req.method === 'GET' && verifyMatch) {
    const session = await stripe.checkout.sessions.retrieve(verifyMatch[1])
    return res.json({
      success: session.payment_status === 'paid',
      status: session.status
    })
  }
  
  // Webhook
  if (pathname.match(/^\/api\/payment\/webhook/)) {
    try {
      const event = stripe.webhooks.constructEvent(
        rawString || JSON.stringify(req.body),
        req.headers['stripe-signature'],
        process.env.STRIPE_WEBHOOK_SECRET || ''
      )
      return res.json({ received: true })
    } catch (e) {
      return res.status(400).json({ error: 'Webhook failed' })
    }
  }
  
  return res.status(404).json({ error: 'Not found' })
}