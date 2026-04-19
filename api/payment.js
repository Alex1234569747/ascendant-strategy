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
  
  let plan = ''
  let email = ''
  let debug = {}
  
  const rawBody = req.body
  if (rawBody && typeof rawBody === 'object') {
    const keys = Object.keys(rawBody)
    if (keys.length === 1) {
      const jsonKey = keys[0]
      
      // Try multiple unescape approaches
      let jsonStr1 = jsonKey.replace(/\\"/g, '"')
      let jsonStr2 = jsonStr1.replace(/\\\\/g, '\\')
      let jsonStr3 = jsonKey.replace(/\\\\"/g, '"')
      
      debug = {
        original: jsonKey,
        len: jsonKey.length,
        chars: jsonKey.split('').slice(0, 20)
      }
      
      // Try parsing different versions
      try { const p = JSON.parse(jsonKey); plan = p.plan || ''; email = p.customerEmail || p.email || '' } catch (e) {}
      if (!plan) try { const p = JSON.parse(jsonStr1); plan = p.plan || ''; email = p.customerEmail || p.email || '' } catch (e) {}
      if (!plan) try { const p = JSON.parse(jsonStr2); plan = p.plan || ''; email = p.customerEmail || p.email || '' } catch (e) {}
      if (!plan) try { const p = JSON.parse(jsonStr3); plan = p.plan || ''; email = p.customerEmail || p.email || '' } catch (e) {}
    }
  }
  
  // Test endpoint
  if (pathname.match(/^\/api\/payment\/test/)) {
    return res.json({ 
      status: 'ok',
      plan: plan,
      success: !!plan,
      debug: debug
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
      const rawBodyStr = typeof rawBody === 'string' ? rawBody : JSON.stringify(rawBody)
      const event = stripe.webhooks.constructEvent(
        rawBodyStr,
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