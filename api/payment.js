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
  
  // Get body - handle different formats
  let body = {}
  if (req.body) {
    if (typeof req.body === 'string') {
      try { body = JSON.parse(req.body) } catch (e) { body = {} }
    } else {
      body = req.body
    }
  }
  
  // Test endpoint
  if (pathname === '/api/payment/test' || pathname === '/api/payment/test?') {
    return res.json({ status: 'ok', message: 'API working' })
  }
  
  // Checkout endpoint - handle with or without trailing slash
  const isCheckout = pathname.match(/^\/api\/payment\/create-checkout(\?.*)?$/)
  if (req.method === 'POST' && isCheckout) {
    const plan = body.plan
    const email = body.customerEmail || body.email
    
    if (!plan || !PLANS[plan]) {
      return res.status(400).json({ error: 'Invalid plan' })
    }
    
    const priceInCents = PLANS[plan]
    const name = PLAN_NAMES[plan]
    
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'nzd',
          product_data: { name: name },
          unit_amount: priceInCents
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
  const verifyMatch = pathname.match(/^\/api\/payment\/verify\/([^/?]+)(\?.*)?$/)
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
  if (pathname === '/api/payment/webhook' || pathname.match(/^\/api\/payment\/webhook(\?.*)?$/)) {
    const sig = req.headers['stripe-signature']
    let rawBody = req.body
    if (typeof rawBody === 'object' && rawBody !== null) {
      rawBody = JSON.stringify(rawBody)
    }
    try {
      const event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET || '')
      return res.json({ received: true })
    } catch (e) {
      return res.status(400).json({ error: 'Webhook failed' })
    }
  }
  
  return res.status(404).json({ error: 'Not found', path: pathname })
}