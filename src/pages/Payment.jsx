import { useState } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'

const PLANS = {
  strategy: {
    id: 'strategy',
    name: 'Funnel Strategy Session',
    price: 150,
    originalPrice: 497,
    tagline: 'Quick Win',
    description: 'Get your complete sales funnel strategy mapped out. We audit your current setup and create a custom blueprint for your business.',
    features: [
      { icon: '🔍', text: 'Full sales funnel audit (all 4 stages)' },
      { icon: '📋', text: 'Custom funnel strategy blueprint' },
      { icon: '📄', text: 'Lead magnet creation + copy' },
      { icon: '📧', text: 'Email sequence outline (5-7 emails)' },
      { icon: '📢', text: 'Facebook/Instagram ad campaign setup' },
      { icon: '🔎', text: 'Google Ads campaign structure' },
      { icon: '💬', text: '60-min strategy consultation' },
      { icon: '📧', text: 'Email support for 30 days' },
    ],
    bonuses: [
      { text: 'FREE lead magnet template ($47 value)', highlight: true },
      { text: 'FREE email swipe file ($97 value)', highlight: true },
      { text: 'FREE ad creative brief template ($50 value)', highlight: true },
      { text: '30-day priority support', highlight: false },
    ],
    guarantee: '100% Money-Back Guarantee — Not happy with your strategy? Full refund within 7 days.',
    savings: '$347 savings',
    deliveryTime: 'Strategy blueprint delivered within 3-5 business days',
    spotsLeft: 7,
  },
  full: {
    id: 'full',
    name: 'Full Funnel Implementation',
    price: 750,
    originalPrice: 1997,
    tagline: 'Most Popular',
    description: 'We build your complete automated sales machine. From lead capture to checkout — everything wired up and ready to convert.',
    features: [
      { icon: '🏗️', text: 'Complete sales funnel (4-6 pages)' },
      { icon: '📄', text: 'Lead magnet creation + landing page' },
      { icon: '📧', text: '10-email follow-up sequence' },
      { icon: '🤖', text: 'Email automation setup (Mailchimp/ConvertKit)' },
      { icon: '💰', text: 'High-converting sales page' },
      { icon: '🛒', text: 'Checkout integration + upsell flow' },
      { icon: '📢', text: 'Facebook/Instagram ad campaign setup' },
      { icon: '🔎', text: 'Google Ads campaign structure' },
      { icon: '🎯', text: 'Retargeting pixel setup' },
    ],
    bonuses: [
      { text: 'FREE logo design ($200 value)', highlight: true },
      { text: 'FREE 3-month hosting ($150 value)', highlight: true },
      { text: 'FREE SSL certificate setup', highlight: true },
      { text: 'FREE ad spend strategy guide ($97 value)', highlight: false },
      { text: 'Email swipe file ($97 value)', highlight: false },
    ],
    guarantee: '100% Satisfaction Guarantee — We\'ll revise until you\'re 100% happy or get your money back.',
    savings: '$1,247 savings',
    deliveryTime: 'Complete funnel delivered within 2 weeks',
    spotsLeft: 4,
  },
  agency: {
    id: 'agency',
    name: 'Growth Partner Package',
    price: 1500,
    originalPrice: 4997,
    tagline: 'Full Service',
    description: 'Your complete growth team. We handle everything — funnels, ads, email marketing, and continuous optimization.',
    features: [
      { icon: '🚀', text: '3 complete sales funnels built' },
      { icon: '✏️', text: 'Unlimited landing page revisions' },
      { icon: '📧', text: 'Full email marketing setup (20+ emails)' },
      { icon: '📢', text: 'Facebook/Instagram ad management' },
      { icon: '🔎', text: 'Google Ads management' },
      { icon: '💼', text: 'LinkedIn ad campaign setup' },
      { icon: '🎯', text: 'Advanced retargeting strategy' },
      { icon: '📹', text: 'Weekly strategy calls' },
      { icon: '📈', text: 'Monthly funnel optimization' },
      { icon: '🧪', text: 'A/B testing on all campaigns' },
      { icon: '👤', text: 'Dedicated strategist + WhatsApp access' },
      { icon: '📊', text: 'Full analytics dashboard' },
    ],
    bonuses: [
      { text: 'FREE funnel audit every month ($150/mo value)', highlight: true },
      { text: 'FREE competitor analysis reports ($50 value)', highlight: true },
      { text: 'FREE landing page A/B testing', highlight: true },
      { text: 'Bonus: Scale to $50K/month roadmap ($497 value)', highlight: false },
      { text: 'Bonus: Private mastermind access ($997 value)', highlight: false },
      { text: 'VIP WhatsApp access', highlight: false },
    ],
    guarantee: 'Double Your Money Back — Don\'t see results in 60 days? We refund double your investment.',
    savings: '$3,497 savings',
    deliveryTime: 'First funnel within 2 weeks, then rolling optimization',
    spotsLeft: 2,
  },
}

export default function Payment() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const planId = searchParams.get('plan') || 'full'
  const plan = PLANS[planId] || PLANS.full

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')

  const handleCheckout = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          plan: plan.id,
          email: email || undefined
        })
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error || 'Failed to create checkout session')
        setLoading(false)
      }
    } catch (err) {
      console.error('Checkout error:', err)
      setError('Failed to connect to payment server: ' + err.message)
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#18181b' }}>
      {/* Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#18181b', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.2rem', fontWeight: 700 }}>
          <span style={{ color: '#dc2626' }}>▲</span> Ascendant Strategy
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ color: '#71717a', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Home</Link>
          <Link to="/pricing" style={{ color: '#71717a', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Pricing</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Page Title */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ 
            background: plan.id === 'full' ? '#dc2626' : 'rgba(220, 38, 38, 0.1)',
            color: plan.id === 'full' ? '#fff' : '#dc2626',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.8rem',
            fontWeight: 600,
            display: 'inline-block',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {plan.tagline}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.5rem', fontWeight: 700 }}>
            Complete Your <span style={{ color: '#dc2626' }}>Purchase</span>
          </h1>
          <p style={{ color: '#71717a' }}>
            Secure payment powered by Stripe · 256-bit SSL encryption
          </p>
        </div>

        {/* Spots Left Warning */}
        {plan.spotsLeft <= 4 && (
          <div style={{ 
            background: 'rgba(220, 38, 38, 0.1)', 
            border: '1px solid #dc2626',
            borderRadius: '12px',
            padding: '1rem',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#dc2626',
            fontWeight: 600
          }}>
            🚨 Only {plan.spotsLeft} spots left at this price — Once they're gone, the price goes up!
          </div>
        )}

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem' }}>
          {/* Left: Order Summary */}
          <div style={{ background: '#fff', borderRadius: '24px', padding: '2.5rem', border: '1px solid rgba(0,0,0,0.08)' }}>
            {/* Savings Badge */}
            <div style={{ 
              background: '#dc2626',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              🎉 You save {plan.savings}!
            </div>

            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{plan.name}</h2>
            <p style={{ color: '#71717a', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>{plan.description}</p>

            {/* Pricing */}
            <div style={{ 
              background: 'rgba(220, 38, 38, 0.05)', 
              borderRadius: '16px',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#dc2626', fontSize: '1.5rem', fontWeight: 600 }}>NZ$</span>
                <span style={{ fontSize: '3.5rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>{plan.price}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ 
                  background: '#dc2626', 
                  color: '#fff', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '6px', 
                  fontSize: '0.8rem', 
                  fontWeight: 600 
                }}>
                  SAVE ${(plan.originalPrice - plan.price).toLocaleString()}
                </span>
                <span style={{ color: '#a1a1aa', fontSize: '0.9rem', textDecoration: 'line-through' }}>
                  NZ${plan.originalPrice}
                </span>
              </div>
            </div>

            {/* Features List */}
            <h4 style={{ fontSize: '0.8rem', color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontWeight: 600 }}>
              What's Included
            </h4>
            <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
              {plan.features.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <span style={{ fontSize: '1.25rem' }}>{feature.icon}</span>
                  <span style={{ fontSize: '0.9rem' }}>{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Bonuses */}
            <div style={{ 
              background: 'rgba(220, 38, 38, 0.05)', 
              border: '2px solid rgba(220, 38, 38, 0.2)',
              borderRadius: '16px',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                color: '#dc2626', 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                🎁 <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Exclusive Bonuses — Yours FREE</span>
              </div>
              {plan.bonuses.map((bonus, i) => (
                <div key={i} style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.5rem 0',
                  fontSize: '0.9rem'
                }}>
                  <span style={{ color: '#dc2626', fontWeight: 700 }}>✓</span>
                  <span>{bonus.text}</span>
                </div>
              ))}
            </div>

            {/* Delivery & Guarantee */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem',
                background: 'rgba(220, 38, 38, 0.05)',
                borderRadius: '10px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>⚡</span>
                <span style={{ fontSize: '0.9rem' }}>{plan.deliveryTime}</span>
              </div>
              <div style={{ 
                padding: '1rem',
                background: 'rgba(220, 38, 38, 0.05)',
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <span style={{ color: '#dc2626', fontSize: '0.85rem' }}>🛡️ {plan.guarantee}</span>
              </div>
            </div>
          </div>

          {/* Right: Payment Form */}
          <div style={{ background: '#fff', borderRadius: '24px', padding: '2.5rem', border: '1px solid rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.08)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
              Payment Details
            </h2>

            {/* Stripe Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', padding: '1rem', background: 'rgba(220, 38, 38, 0.05)', borderRadius: '10px' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#dc2626">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1rem' }}>Secure Stripe Checkout</div>
                <div style={{ fontSize: '0.8rem', color: '#71717a' }}>256-bit SSL encryption</div>
              </div>
            </div>

            {/* Email Input */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#71717a', marginBottom: '0.5rem', fontWeight: 500 }}>
                Email Address *
              </label>
              <input 
                type="email" 
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  background: '#fafafa',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  color: '#18181b',
                  fontSize: '1rem'
                }}
              />
            </div>

            {/* Total */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem',
              background: 'rgba(220, 38, 38, 0.08)',
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}>
              <div>
                <span style={{ color: '#71717a', fontSize: '0.85rem' }}>Total Due Today</span>
                <div style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.25rem', fontWeight: 600 }}>
                  Includes all bonuses worth ${plan.id === 'strategy' ? '194' : plan.id === 'full' ? '544' : '1,644'}+
                </div>
              </div>
              <span style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>
                <span style={{ color: '#dc2626', fontSize: '1.25rem' }}>NZ$</span>
                {plan.price}
              </span>
            </div>

            {/* Pay Button */}
            <button
              onClick={handleCheckout}
              disabled={loading}
              style={{
                width: '100%',
                padding: '1.5rem',
                background: loading ? 'rgba(220, 38, 38, 0.5)' : '#dc2626',
                border: 'none',
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: '14px',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                boxShadow: '0 8px 30px rgba(220, 38, 38, 0.3)',
                transition: 'all 0.3s'
              }}
            >
              {loading ? (
                <>
                  <span style={{ 
                    width: '22px', 
                    height: '22px', 
                    border: '3px solid rgba(255,255,255,0.3)', 
                    borderTopColor: '#fff',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></span>
                  Processing...
                </>
              ) : (
                <>
                  🔒 Pay NZ${plan.price} Now
                </>
              )}
            </button>

            {/* Error Message */}
            {error && (
              <div style={{ 
                marginTop: '1.5rem',
                padding: '1.25rem',
                background: 'rgba(220, 38, 38, 0.1)',
                border: '1px solid rgba(220, 38, 38, 0.3)',
                borderRadius: '12px',
                color: '#dc2626',
                fontSize: '0.9rem'
              }}>
                {error}
              </div>
            )}

            {/* Trust Badges */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1.5rem', 
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(0,0,0,0.05)'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>🔒</div>
                <div style={{ color: '#71717a', fontSize: '0.7rem' }}>Secure</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>✓</div>
                <div style={{ color: '#71717a', fontSize: '0.7rem' }}>Verified</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>⭐</div>
                <div style={{ color: '#71717a', fontSize: '0.7rem' }}>5-Star</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>🛡️</div>
                <div style={{ color: '#71717a', fontSize: '0.7rem' }}>Guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Payment Option */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(0,0,0,0.05)' 
        }}>
          <p style={{ color: '#71717a', marginBottom: '1rem', fontSize: '0.95rem' }}>
            Prefer to pay via invoice or direct bank transfer?
          </p>
          <Link 
            to="/contact" 
            style={{ 
              color: '#dc2626',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            Contact us to arrange alternative payment →
          </Link>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}