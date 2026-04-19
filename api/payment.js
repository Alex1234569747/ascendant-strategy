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

function parseBody(body) {
  // Handle the weird Vercel double-parse issue
  // Body comes as: {"{\"plan\":\"full\"}": ""} where the key is a JSON string
  if (body && typeof body === 'object' && !Array.isArray(body)) {
    const keys = Object.keys(body)
    
    if (keys.length === 1) {
      const key = keys[0]
      // Try to parse the key as JSON - it contains our data
      try {
        const parsed = JSON.parse(key)
        return parsed
      } catch (e) {
        // Not JSON, return as is
        return body
      }
    }
    
    return body
  }
  
  return {}
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const pathname = req.url || ''
  
  const body = parseBody(req.body)
  const plan = body.plan || ''
  const email = body.customerEmail || body.email || ''
  
  // Test endpoint
  if (pathname.match(/^\/api\/payment\/test/)) {
    return res.json({ 
      status: 'ok', 
      plan: plan,
      email: email,
      body: body
    })
  }
  
  // Checkout endpoint
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
      const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body)
      const event = stripe.webhooks.constructEvent(
        rawBody,
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