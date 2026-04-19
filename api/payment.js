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
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Get clean path without query string
  const fullUrl = req.url || ''
  const urlPath = fullUrl.split('?')[0]
  const method = req.method || 'GET'

  // Parse body
  let parsedBody = {}
  if (req.body) {
    if (typeof req.body === 'string') {
      try { parsedBody = JSON.parse(req.body) } catch (e) {}
    } else if (typeof req.body === 'object') {
      parsedBody = req.body
    }
  }

  try {
    // Create checkout endpoint
    if (method === 'POST' && urlPath === '/api/payment/create-checkout') {
      const plan = parsedBody.plan
      const customerEmail = parsedBody.customerEmail
      const planConfig = PLANS_CONFIG[plan]
      
      if (!planConfig) {
        return res.status(400).json({ error: 'Invalid plan' })
      }
      
      const sessionConfig = {
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
        success_url: 'https://ascendant-strategy-6vvr.vercel.app/payment/success?session_id={CHECKOUT_SESSION_ID}&plan=' + plan,
        cancel_url: 'https://ascendant-strategy-6vvr.vercel.app/pricing',
        metadata: { plan: plan }
      }
      
      if (customerEmail) {
        sessionConfig.customer_email = customerEmail
      }
      
      const session = await stripe.checkout.sessions.create(sessionConfig)
      
      return res.status(200).json({ url: session.url })
    }

    // Verify endpoint
    if (method === 'GET' && urlPath.startsWith('/api/payment/verify/')) {
      const sessionId = urlPath.split('/').pop()
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

    // Webhook endpoint
    if (method === 'POST' && urlPath === '/api/payment/webhook') {
      const sig = req.headers['stripe-signature']
      let rawBody = req.body
      
      if (typeof rawBody === 'object' && rawBody !== null) {
        rawBody = JSON.stringify(rawBody)
      }
      
      try {
        const event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET || '')
        
        if (event.type === 'checkout.session.completed') {
          console.log('Payment successful:', event.data.object.id)
        }
        
        return res.status(200).json({ received: true })
      } catch (error) {
        return res.status(400).json({ error: 'Webhook error' })
      }
    }

    // Test endpoint
    if (method === 'GET' && urlPath === '/api/payment/test') {
      return res.status(200).json({ message: 'Payment API working!' })
    }

    return res.status(404).json({ error: 'Endpoint not found' })

  } catch (error) {
    console.error('API Error:', error.message)
    return res.status(500).json({ error: error.message })
  }
}