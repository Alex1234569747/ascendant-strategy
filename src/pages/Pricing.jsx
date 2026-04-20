import { Link } from 'react-router-dom'

const SERVICES = [
  {
    id: 'strategy',
    name: 'Funnel Strategy Session',
    price: 150,
    originalPrice: 497,
    tagline: 'Quick Win',
    desc: 'Get your complete sales funnel strategy mapped out. We audit your current setup and create a custom blueprint for your business.',
    features: [
      'Full sales funnel audit (all 4 stages)',
      'Custom funnel strategy blueprint',
      'Lead magnet creation + copy',
      'Email sequence outline (5-7 emails)',
      'Facebook/Instagram ad campaign setup',
      'Google Ads campaign structure',
      '60-min strategy consultation',
      'Email support for 30 days'
    ],
    bonuses: [
      '+ FREE lead magnet template ($47 value)',
      '+ FREE email swipe file ($97 value)',
      '+ FREE ad creative brief template ($50 value)',
      '+ 30-day priority support'
    ],
    guarantee: '100% Money-Back Guarantee — Not happy with your strategy? Full refund within 7 days.',
    spotsLeft: 7,
    recommended: false,
  },
  {
    id: 'full',
    name: 'Full Funnel Implementation',
    price: 750,
    originalPrice: 1997,
    tagline: 'Most Popular',
    desc: 'We build your complete automated sales machine. From lead capture to checkout — everything wired up and ready to convert.',
    features: [
      'Complete sales funnel (4-6 pages)',
      'Lead magnet creation + landing page',
      '10-email follow-up sequence',
      'Email automation setup (Mailchimp/ConvertKit)',
      'High-converting sales page',
      'Checkout integration + upsell flow',
      'Facebook/Instagram ad campaign setup',
      'Google Ads campaign structure',
      'Retargeting pixel setup',
      '30 days of optimization support'
    ],
    bonuses: [
      '+ FREE logo design ($200 value)',
      '+ FREE 3-month hosting ($150 value)',
      '+ FREE SSL certificate setup',
      '+ FREE ad spend strategy guide ($97 value)',
      '+ Bonus: Email swipe file ($97 value)'
    ],
    guarantee: '100% Satisfaction Guarantee — We\'ll revise until you\'re 100% happy or get your money back.',
    spotsLeft: 4,
    recommended: true,
  },
  {
    id: 'agency',
    name: 'Growth Partner Package',
    price: 1500,
    originalPrice: 4997,
    tagline: 'Full Service',
    desc: 'Your complete growth team. We handle everything — funnels, ads, email marketing, and continuous optimization.',
    features: [
      '3 complete sales funnels built',
      'Unlimited landing page revisions',
      'Full email marketing setup (20+ emails)',
      'Facebook/Instagram ad management',
      'Google Ads management',
      'LinkedIn ad campaign setup',
      'Advanced retargeting strategy',
      'Weekly strategy calls',
      'Monthly funnel optimization',
      'A/B testing on all campaigns',
      'Dedicated strategist + WhatsApp access',
      'Full analytics dashboard'
    ],
    bonuses: [
      '+ FREE funnel audit every month ($150/mo value)',
      '+ FREE competitor analysis reports ($50 value)',
      '+ FREE landing page A/B testing',
      '+ Bonus: Scale to $50K/month roadmap ($497 value)',
      '+ Bonus: Private mastermind access ($997 value)',
      '+ VIP WhatsApp access',
      '+ SLA guarantee — 24hr response time'
    ],
    guarantee: 'Double Your Money Back — Don\'t see results in 60 days? We refund double your investment.',
    spotsLeft: 2,
    recommended: false,
  },
]

export default function Pricing() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#18181b' }}>
      {/* Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#18181b', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.2rem', fontWeight: 700 }}>
          <span style={{ color: '#dc2626' }}>▲</span> Ascendant Strategy
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ color: '#71717a', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Home</Link>
          <Link to="/quiz" style={{ color: '#71717a', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Free Quiz</Link>
          <Link to="/contact" style={{ color: '#71717a', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Contact</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ color: '#dc2626', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', fontWeight: 600 }}>
            🔥 Only {SERVICES.reduce((acc, s) => acc + s.spotsLeft, 0)} spots remaining this month
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '1rem', fontWeight: 700 }}>
            Your Complete <span style={{ color: '#dc2626' }}>Sales Machine</span>
          </h1>
          <p style={{ color: '#71717a', fontSize: '1.1rem', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            From cold traffic to paying customer — we build the entire automated funnel system.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(220, 38, 38, 0.08)', padding: '0.75rem 1.5rem', borderRadius: '50px' }}>
            <span>💰</span>
            <span>Save up to <strong style={{ color: '#dc2626' }}>70%</strong> vs agency retainers</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
          {SERVICES.map((service) => (
            <div key={service.id} style={{ 
              background: '#fff', 
              border: service.recommended ? '2px solid #dc2626' : '1px solid rgba(0,0,0,0.08)', 
              borderRadius: '24px', 
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: service.recommended ? '0 20px 60px rgba(220, 38, 38, 0.15)' : '0 4px 20px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              {/* Badge */}
              {service.recommended && (
                <div style={{ 
                  position: 'absolute', 
                  top: '-14px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  background: '#dc2626',
                  color: '#fff',
                  padding: '0.5rem 1.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  ⭐ Best Value
                </div>
              )}
              
              {/* Spots Left */}
              <div style={{ 
                position: 'absolute', 
                top: '1rem', 
                right: '1rem',
                background: service.spotsLeft <= 2 ? '#dc2626' : 'rgba(220, 38, 38, 0.1)',
                color: service.spotsLeft <= 2 ? '#fff' : '#dc2626',
                padding: '0.35rem 0.75rem',
                fontSize: '0.7rem',
                fontWeight: 600,
                borderRadius: '6px'
              }}>
                {service.spotsLeft <= 2 ? '🚨 ' : ''}{service.spotsLeft} spots left
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.7rem', color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                  {service.tagline}
                </span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{service.name}</h3>
                <p style={{ color: '#71717a', fontSize: '0.9rem', lineHeight: 1.5 }}>{service.desc}</p>
              </div>
              
              {/* Pricing */}
              <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ color: '#dc2626', fontSize: '1.25rem', fontWeight: 600 }}>NZ$</span>
                  <span style={{ fontSize: '3.5rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>{service.price}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <span style={{ 
                    background: '#dc2626', 
                    color: '#fff', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '4px', 
                    fontSize: '0.75rem', 
                    fontWeight: 600 
                  }}>
                    SAVE ${(service.originalPrice - service.price).toLocaleString()}
                  </span>
                  <span style={{ color: '#a1a1aa', fontSize: '0.85rem', textDecoration: 'line-through' }}>
                    NZ${service.originalPrice}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', flex: 1, marginBottom: '1.5rem' }}>
                {service.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.6rem 0', fontSize: '0.9rem' }}>
                    <span style={{ color: '#dc2626', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Bonuses */}
              <div style={{ 
                background: 'rgba(220, 38, 38, 0.05)', 
                border: '1px solid rgba(220, 38, 38, 0.15)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ 
                  color: '#dc2626', 
                  fontSize: '0.8rem', 
                  fontWeight: 700, 
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase'
                }}>
                  🎁 Exclusive Bonuses
                </div>
                {service.bonuses.map((bonus, i) => (
                  <div key={i} style={{ 
                    fontSize: '0.85rem', 
                    padding: '0.35rem 0',
                    color: '#52525b'
                  }}>
                    {bonus}
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div style={{ 
                background: 'rgba(220, 38, 38, 0.05)', 
                borderRadius: '8px',
                padding: '0.75rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <span style={{ color: '#dc2626', fontSize: '0.85rem' }}>🛡️ {service.guarantee}</span>
              </div>

              {/* CTA Button - RED, SOLID, OBVIOUS */}
              <Link 
                to={`/payment?plan=${service.id}`}
                style={{ 
                  display: 'block',
                  padding: '1.25rem',
                  background: '#dc2626',
                  border: 'none',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  transition: 'all 0.3s',
                  boxShadow: '0 6px 25px rgba(220, 38, 38, 0.4)'
                }}
              >
                Get Started Now
              </Link>

              {/* Trust badges */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1.5rem', 
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(0,0,0,0.05)'
              }}>
                <span style={{ color: '#71717a', fontSize: '0.75rem' }}>🔒 Secure</span>
                <span style={{ color: '#71717a', fontSize: '0.75rem' }}>✓ Verified</span>
                <span style={{ color: '#71717a', fontSize: '0.75rem' }}>⭐ 5-Star</span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#fff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'Space Grotesk, sans-serif' }}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
            <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: '#fafafa', borderRadius: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#dc2626' }}>What's included in the ad campaign setup?</div>
              <div style={{ color: '#71717a' }}>We create your campaign structure, define target audiences, set up conversion tracking, and provide ad creative guidelines. You handle the ad spend — we handle the strategy.</div>
            </div>
            <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: '#fafafa', borderRadius: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#dc2626' }}>How long does it take?</div>
              <div style={{ color: '#71717a' }}>Strategy Session: 3-5 days. Full Implementation: 2-3 weeks. Growth Partner: First funnel in 2 weeks, then rolling.</div>
            </div>
            <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: '#fafafa', borderRadius: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#dc2626' }}>Do I need email marketing software?</div>
              <div style={{ color: '#71717a' }}>We'll set you up with Mailchimp or ConvertKit (free tier works fine to start). We handle the automation setup — you just need an account.</div>
            </div>
            <div style={{ padding: '1.5rem', background: '#fafafa', borderRadius: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#dc2626' }}>Can I get a refund?</div>
              <div style={{ color: '#71717a' }}>Yes! We offer a 100% money-back guarantee on all packages. If you're not happy, we'll refund you in full.</div>
            </div>
          </div>
          <p style={{ marginTop: '2rem', color: '#71717a', fontSize: '0.9rem' }}>
            Still have questions? <Link to="/contact" style={{ color: '#dc2626' }}>Contact us</Link> directly
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  )
}
