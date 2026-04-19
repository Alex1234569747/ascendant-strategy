import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const PLANS_CONFIG = {
  strategy: { 
    name: 'Funnel Strategy Session', 
    price: 15000,
    description: 'Full sales funnel strategy + ad campaign setup'
  },
  full: { 
    name: 'Full Funnel Implementation', 
    price: 75000,
    description: 'Complete automated sales machine'
  },
  agency: { 
    name: 'Growth Partner Package', 
    price: 150000,
    description: 'Your complete growth team'
  }
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const { url, method, body } = req

  try {
    // POST /api/payment/create-checkout
    if (method === 'POST' && url === '/api/payment/create-checkout') {
      const { plan, customerEmail } = body ? JSON.parse(body) : {}
      const planConfig = PLANS_CONFIG[plan]
      
      if (!planConfig) {
        return res.status(400).json({ error: 'Invalid plan' })
      }
      
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [{
          price_data: {
            currency: 'nzd',
            product_data: { 
              name: planConfig.name,
              description: planConfig.description
            },
            unit_amount: planConfig.price
          },
          quantity: 1
        }],
        customer_email: customerEmail || undefined,
        success_url: `${process.env.FRONTEND_URL || 'https://ascendantstrategy.vercel.app'}/payment/success?session_id={CHECKOUT_SESSION_ID}&plan=${plan}`,
        cancel_url: `${process.env.FRONTEND_URL || 'https://ascendantstrategy.vercel.app'}/payment?plan=${plan}`,
        metadata: { plan }
      })
      
      return res.status(200).json({ url: session.url })
    }

    // GET /api/payment/verify/:sessionId
    if (method === 'GET' && url.startsWith('/api/payment/verify/')) {
      const sessionId = url.split('/').pop()
      const session = await stripe.checkout.sessions.retrieve(sessionId)
      
      return res.status(200).json({
        success: session.payment_status === 'paid',
        status: session.status,
        plan: session.metadata?.plan,
        customerEmail: session.customer_email,
        amount: session.amount_total,
        currency: session.currency
      })
    }

    // POST /api/payment/webhook
    if (method === 'POST' && url === '/api/payment/webhook') {
      const sig = req.headers['stripe-signature']
      
      try {
        const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET || '')
        
        if (event.type === 'checkout.session.completed') {
          const session = event.data.object
          console.log('Payment successful:', session.id, 'Plan:', session.metadata?.plan)
        }
        
        return res.status(200).json({ received: true })
      } catch (error) {
        console.error('Webhook error:', error.message)
        return res.status(400).json({ error: 'Webhook error' })
      }
    }

    // Test endpoint
    if (method === 'GET' && url === '/api/payment/test') {
      return res.status(200).json({ message: 'Payment API working!', timestamp: new Date().toISOString() })
    }

    return res.status(404).json({ error: 'Endpoint not found' })

  } catch (error) {
    console.error('API Error:', error.message)
    return res.status(500).json({ error: error.message })
  }
}