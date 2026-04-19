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
  
  // Parse body - handle Buffer, string, object
  let bodyData = {}
  const rawBody = req.body
  
  if (rawBody) {
    if (Buffer.isBuffer(rawBody)) {
      try {
        bodyData = JSON.parse(rawBody.toString())
      } catch (e) {}
    } else if (typeof rawBody === 'string') {
      try {
        bodyData = JSON.parse(rawBody)
      } catch (e) {}
    } else if (typeof rawBody === 'object') {
      bodyData = rawBody
    }
  }
  
  // Also check for body in different locations (Vercel quirk)
  const plan = bodyData.plan || bodyData.planId || bodyData.product || ''
  const email = bodyData.customerEmail || bodyData.email || bodyData.customer_email || ''
  
  // Test endpoint
  if (pathname.match(/^\/api\/payment\/test/)) {
    return res.json({ 
      status: 'ok', 
      body: bodyData,
      rawType: typeof rawBody,
      rawLength: rawBody ? rawBody.length : 0,
      raw: rawBody ? rawBody.toString().substring(0, 200) : 'none'
    })
  }
  
  // Checkout endpoint
  if (req.method === 'POST' && pathname.match(/^\/api\/payment\/create-checkout/)) {
    if (!plan || !PLANS[plan]) {
      return res.status(400).json({ error: 'Invalid plan', got: plan, body: bodyData })
    }
    
    const priceInCents = PLANS[plan]
    const name = PLAN_NAMES[plan]
    
    const sessionParams = {
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'nzd',
          product_data: { name: name },
          unit_amount: priceInCents
        },
        quantity: 1
      }],
      success_url: 'https://ascendant-strategy-6vvr.vercel.app/payment/success?session_id={CHECKOUT_SESSION_ID}&plan=' + plan,
      cancel_url: 'https://ascendant-strategy-6vvr.vercel.app/pricing'
    }
    
    if (email) {
      sessionParams.customer_email = email
    }
    
    const session = await stripe.checkout.sessions.create(sessionParams)
    
    return res.json({ url: session.url })
  }
  
  // Verify endpoint
  const verifyMatch = pathname.match(/^\/api\/payment\/verify\/([^/?]+)/)
  if (req.method === 'GET' && verifyMatch) {
    const sessionId = verifyMatch[1]
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return res.json({
      success: session.payment_status === 'paid',
      status: session.status,
      plan: session.metadata?.plan,
      amount: session.amount_total,
      currency: session.currency
    })
  }
  
  // Webhook
  if (pathname.match(/^\/api\/payment\/webhook/)) {
    const sig = req.headers['stripe-signature']
    let rawBodyStr = rawBody
    if (!Buffer.isBuffer(rawBody) && typeof rawBody !== 'string') {
      rawBodyStr = JSON.stringify(rawBody)
    }
    try {
      const event = stripe.webhooks.constructEvent(rawBodyStr, sig, process.env.STRIPE_WEBHOOK_SECRET || '')
      return res.json({ received: true })
    } catch (e) {
      return res.status(400).json({ error: 'Webhook failed' })
    }
  }
  
  return res.status(404).json({ error: 'Not found', path: pathname })
}