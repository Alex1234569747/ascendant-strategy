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
    isNew: false,
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
    isNew: false,
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
    isNew: false,
  },
]

export default function Pricing() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0f14', color: '#e8eaed' }}>
      {/* Urgency Banner */}
      <div style={{ 
        background: 'linear-gradient(90deg, #ff6b35, #f7c948)',
        color: '#0a0f14',
        textAlign: 'center',
        padding: '1rem',
        fontWeight: 700,
        fontSize: '1rem'
      }}>
        ⚡ LIMITED TIME: Get up to $1,400+ in bonuses FREE with your order — Ends in 48 hours!
      </div>

      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(45, 212, 191, 0.12)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#e8eaed', fontSize: '1.1rem' }}>
          <span style={{ color: '#2dd4bf' }}>◆</span> Ascendant Strategy
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <Link to="/quiz" style={{ color: '#8b949e', textDecoration: 'none' }}>Free Quiz</Link>
          <Link to="/contact" style={{ color: '#8b949e', textDecoration: 'none' }}>Contact</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ color: '#ff6b35', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontWeight: 600 }}>
            🔥 Last Chance — Only {SERVICES.reduce((acc, s) => acc + s.spotsLeft, 0)} spots remaining this month
          </div>
          <h1 style={{ fontSize: '3.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}>
            Your Complete <span style={{ background: 'linear-gradient(135deg, #2dd4bf, #5eead4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sales Machine</span>
          </h1>
          <p style={{ color: '#8b949e', fontSize: '1.1rem', marginBottom: '1rem' }}>
            From cold traffic to paying customer — we build the entire automated funnel system.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(45, 212, 191, 0.1)', padding: '0.75rem 1.5rem', borderRadius: '50px' }}>
            <span style={{ color: '#2dd4bf' }}>💰</span>
            <span style={{ color: '#e8eaed' }}>Save up to <strong style={{ color: '#2dd4bf' }}>70%</strong> vs agency retainers — Today only</span>
          </div>
        </div>

        {/* How It Works */}
        <div style={{ 
          background: '#111920', 
          borderRadius: '20px', 
          padding: '2.5rem',
          marginBottom: '3rem',
          border: '1px solid rgba(45, 212, 191, 0.12)'
        }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.75rem', marginBottom: '2rem' }}>
            How Your Sales Funnel Works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'rgba(45, 212, 191, 0.15)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.75rem'
              }}>🎯</div>
              <div style={{ color: '#2dd4bf', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>STEP 1</div>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Drive Traffic</div>
              <div style={{ color: '#8b949e', fontSize: '0.85rem' }}>Facebook Ads, Google Ads, or organic content brings cold visitors</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'rgba(45, 212, 191, 0.15)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.75rem'
              }}>📧</div>
              <div style={{ color: '#2dd4bf', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>STEP 2</div>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Capture Leads</div>
              <div style={{ color: '#8b949e', fontSize: '0.85rem' }}>Landing page + lead magnet captures emails in exchange for free value</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'rgba(45, 212, 191, 0.15)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.75rem'
              }}>🤖</div>
              <div style={{ color: '#2dd4bf', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>STEP 3</div>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Nurture & Sell</div>
              <div style={{ color: '#8b949e', fontSize: '0.85rem' }}>Email sequence builds trust and guides them to your offer</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'rgba(45, 212, 191, 0.15)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.75rem'
              }}>💰</div>
              <div style={{ color: '#2dd4bf', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>STEP 4</div>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Convert & Scale</div>
              <div style={{ color: '#8b949e', fontSize: '0.85rem' }}>Sales page + checkout turns leads into customers automatically</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
          {SERVICES.map((service) => (
            <div key={service.id} style={{ 
              background: '#111920', 
              border: service.recommended ? '2px solid #2dd4bf' : '1px solid rgba(45, 212, 191, 0.12)', 
              borderRadius: '24px', 
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: service.recommended ? '0 0 60px rgba(45, 212, 191, 0.2)' : 'none'
            }}>
              {/* Badge */}
              {service.recommended && (
                <div style={{ 
                  position: 'absolute', 
                  top: '-14px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #2dd4bf, #5eead4)',
                  color: '#0a0f14',
                  padding: '0.5rem 1.5rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  borderRadius: '50px'
                }}>
                  ⭐ BEST VALUE
                </div>
              )}
              
              {/* Spots Left */}
              <div style={{ 
                position: 'absolute', 
                top: '1rem', 
                right: '1rem',
                background: service.spotsLeft <= 2 ? '#ff5252' : 'rgba(45, 212, 191, 0.15)',
                color: service.spotsLeft <= 2 ? '#fff' : '#2dd4bf',
                padding: '0.35rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                borderRadius: '6px'
              }}>
                {service.spotsLeft <= 2 ? '🚨 ' : '• '}{service.spotsLeft} spots left
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {service.tagline}
                </span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{service.name}</h3>
                <p style={{ color: '#8b949e', fontSize: '0.9rem', lineHeight: 1.5 }}>{service.desc}</p>
              </div>
              
              {/* Pricing */}
              <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(45, 212, 191, 0.12)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ color: '#2dd4bf', fontSize: '1.25rem' }}>NZ$</span>
                  <span style={{ fontSize: '3.5rem', fontWeight: 700 }}>{service.price}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <span style={{ 
                    background: '#ff5252', 
                    color: '#fff', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem', 
                    fontWeight: 600 
                  }}>
                    SAVE ${(service.originalPrice - service.price).toLocaleString()}
                  </span>
                  <span style={{ color: '#8b949e', fontSize: '0.85rem', textDecoration: 'line-through' }}>
                    NZ${service.originalPrice}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', flex: 1, marginBottom: '1.5rem' }}>
                {service.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.6rem 0', color: '#e8eaed', fontSize: '0.95rem' }}>
                    <span style={{ color: '#2dd4bf', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Bonuses */}
              <div style={{ 
                background: 'rgba(255, 107, 53, 0.1)', 
                border: '1px solid rgba(255, 107, 53, 0.3)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ 
                  color: '#ff6b35', 
                  fontSize: '0.85rem', 
                  fontWeight: 700, 
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase'
                }}>
                  🎁 Exclusive Bonuses — Yours FREE
                </div>
                {service.bonuses.map((bonus, i) => (
                  <div key={i} style={{ 
                    color: '#e8eaed', 
                    fontSize: '0.85rem', 
                    padding: '0.35rem 0' 
                  }}>
                    {bonus}
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div style={{ 
                background: 'rgba(45, 212, 191, 0.08)', 
                borderRadius: '8px',
                padding: '0.75rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <span style={{ color: '#2dd4bf', fontSize: '0.9rem' }}>🛡️ {service.guarantee}</span>
              </div>

              {/* CTA Button */}
              <Link 
                to={`/payment?plan=${service.id}`}
                style={{ 
                  display: 'block',
                  padding: '1.25rem',
                  background: 'linear-gradient(135deg, #2dd4bf, #5eead4)',
                  border: service.recommended ? 'none' : '2px solid #2dd4bf',
                  color: '#0a0f14',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: '0 8px 30px rgba(45, 212, 191, 0.3)'
                }}
              >
                Get Started Now →
              </Link>

              {/* Trust badges */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1.5rem', 
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(45, 212, 191, 0.08)'
              }}>
                <span style={{ color: '#8b949e', fontSize: '0.75rem' }}>🔒 Secure</span>
                <span style={{ color: '#8b949e', fontSize: '0.75rem' }}>✓ Verified</span>
                <span style={{ color: '#8b949e', fontSize: '0.75rem' }}>⭐ 5-Star</span>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included Breakdown */}
        <div style={{ 
          background: '#111920', 
          borderRadius: '20px', 
          padding: '3rem',
          marginBottom: '3rem',
          border: '1px solid rgba(45, 212, 191, 0.12)'
        }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
            What You Actually <span style={{ color: '#2dd4bf' }}>Get</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {/* Funnel Elements */}
            <div style={{ padding: '1.5rem', background: 'rgba(45, 212, 191, 0.05)', borderRadius: '16px' }}>
              <h3 style={{ color: '#2dd4bf', marginBottom: '1rem', fontSize: '1.1rem' }}>🎯 Sales Funnel Components</h3>
              <ul style={{ listStyle: 'none', color: '#8b949e', fontSize: '0.95rem' }}>
                <li style={{ padding: '0.5rem 0' }}>✓ Landing/Squeeze page</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Lead magnet (PDF, checklist, template)</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Email capture form</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Thank you page</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Sales/confirmation page</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Checkout & payment flow</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Upsell/downsell pages</li>
              </ul>
            </div>
            {/* Ad Strategy */}
            <div style={{ padding: '1.5rem', background: 'rgba(255, 107, 53, 0.05)', borderRadius: '16px' }}>
              <h3 style={{ color: '#ff6b35', marginBottom: '1rem', fontSize: '1.1rem' }}>📢 Ad Campaign Setup</h3>
              <ul style={{ listStyle: 'none', color: '#8b949e', fontSize: '0.95rem' }}>
                <li style={{ padding: '0.5rem 0' }}>✓ Facebook/Instagram ad campaigns</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Google Ads campaign structure</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Audience targeting setup</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Ad creative brief & guidelines</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Retargeting pixel installation</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Conversion tracking setup</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Budget allocation strategy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div style={{ 
          background: '#111920', 
          borderRadius: '20px', 
          padding: '3rem',
          marginBottom: '3rem',
          border: '1px solid rgba(45, 212, 191, 0.12)'
        }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
            Why Choose <span style={{ color: '#2dd4bf' }}>Ascendant Strategy</span>?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Results in Days</div>
              <div style={{ color: '#8b949e', fontSize: '0.9rem' }}>Not months. Your funnel live within 2 weeks.</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💰</div>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>10x ROI</div>
              <div style={{ color: '#8b949e', fontSize: '0.9rem' }}>Our clients average 10x return within 90 days.</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Zero Risk</div>
              <div style={{ color: '#8b949e', fontSize: '0.9rem' }}>Money-back guarantee on every package.</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>200+ Funnels</div>
              <div style={{ color: '#8b949e', fontSize: '0.9rem' }}>Built and counting. Proven track record.</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#0f1419', borderRadius: '20px', border: '1px solid rgba(45, 212, 191, 0.12)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
            <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: '#111920', borderRadius: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#2dd4bf' }}>What's included in the ad campaign setup?</div>
              <div style={{ color: '#8b949e' }}>We create your campaign structure, define target audiences, set up conversion tracking, and provide ad creative guidelines. You handle the ad spend — we handle the strategy.</div>
            </div>
            <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: '#111920', borderRadius: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#2dd4bf' }}>How long does it take?</div>
              <div style={{ color: '#8b949e' }}>Strategy Session: 3-5 days. Full Implementation: 2-3 weeks. Growth Partner: First funnel in 2 weeks, then rolling.</div>
            </div>
            <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: '#111920', borderRadius: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#2dd4bf' }}>Do I need email marketing software?</div>
              <div style={{ color: '#8b949e' }}>We'll set you up with Mailchimp or ConvertKit (free tier works fine to start). We handle the automation setup — you just need an account.</div>
            </div>
            <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: '#111920', borderRadius: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#2dd4bf' }}>Can I get a refund?</div>
              <div style={{ color: '#8b949e' }}>Yes! We offer a 100% money-back guarantee on all packages. If you're not happy, we'll refund you in full.</div>
            </div>
          </div>
          <p style={{ marginTop: '2rem', color: '#8b949e', fontSize: '0.9rem' }}>
            Still have questions? <Link to="/contact" style={{ color: '#2dd4bf' }}>Contact us</Link> directly
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
    </div>
  )
}