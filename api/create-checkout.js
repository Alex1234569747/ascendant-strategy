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

  const plan = req.query.plan || ''
  
  if (!plan || !PLANS[plan]) {
    return res.status(400).json({ error: 'Invalid plan', got: plan, available: Object.keys(PLANS) })
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
    success_url: 'https://ascendant-strategy-6vvr.vercel.app/payment/success?session_id={CHECKOUT_SESSION_ID}&plan=' + plan,
    cancel_url: 'https://ascendant-strategy-6vvr.vercel.app/pricing'
  })
  
  return res.json({ url: session.url })
}