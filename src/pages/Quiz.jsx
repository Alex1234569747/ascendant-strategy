import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const BUSINESS_TYPES = [
  { value: 'coaching', label: 'Coaching / Consulting' },
  { value: 'saas', label: 'SaaS / Software' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'agency', label: 'Agency / Freelance' },
  { value: 'course', label: 'Online Course' },
  { value: 'realestate', label: 'Real Estate' },
  { value: 'health', label: 'Health / Fitness' },
  { value: 'finance', label: 'Finance / Crypto' },
  { value: 'local', label: 'Local Business' },
  { value: 'other', label: 'Other' },
]

const REVENUE_GOALS = [
  { value: '5k', label: '$5K - $10K/month' },
  { value: '10k', label: '$10K - $25K/month' },
  { value: '25k', label: '$25K - $50K/month' },
  { value: '50k', label: '$50K - $100K/month' },
  { value: '100k', label: '$100K+/month' },
]

const CHALLENGES = [
  { value: 'leads', label: 'Not enough leads', icon: '👥' },
  { value: 'conversion', label: 'Leads not converting', icon: '📉' },
  { value: 'closing', label: 'Can\'t close deals', icon: '🚪' },
  { value: 'scale', label: 'Can\'t scale', icon: '📈' },
  { value: 'retention', label: 'Customers leaving', icon: '↩️' },
  { value: 'time', label: 'Not enough time', icon: '⏰' },
]

const TIMELINES = [
  { value: 'asap', label: 'ASAP', desc: 'I\'m ready to invest now' },
  { value: '1month', label: '1 Month', desc: 'Within 30 days' },
  { value: '3months', label: '3 Months', desc: 'Building momentum' },
  { value: '6months', label: '6+ Months', desc: 'Long-term growth' },
]

const BUDGETS = [
  { value: '500', label: '$500 - $1,500', desc: 'Strategy & Audit' },
  { value: '1500', label: '$1,500 - $3,000', desc: 'Implementation' },
  { value: '5000', label: '$3,000 - $10,000', desc: 'Full Service' },
  { value: '10000', label: '$10,000+', desc: 'Agency Partnership' },
]

const SERVICES = [
  {
    id: 'strategy',
    name: 'Funnel Strategy Session',
    price: 150,
    originalPrice: 497,
    tagline: 'Quick Win',
    features: [
      'Full sales funnel audit (all 4 stages)',
      'Custom funnel strategy blueprint',
      'Lead magnet creation + copy',
      'Email sequence outline (5-7 emails)',
      'Facebook/Instagram ad campaign setup',
      'Google Ads campaign structure',
      '60-min strategy consultation'
    ],
    bonuses: [
      '+ FREE lead magnet template ($47)',
      '+ FREE email swipe file ($97)',
      '+ FREE ad creative brief ($50)'
    ],
    guarantee: '7-day money-back guarantee',
    spotsLeft: 7,
    recommended: false,
  },
  {
    id: 'full',
    name: 'Full Funnel Implementation',
    price: 750,
    originalPrice: 1997,
    tagline: 'Most Popular',
    features: [
      'Complete sales funnel (4-6 pages)',
      'Lead magnet + landing page',
      '10-email follow-up sequence',
      'Email automation setup',
      'High-converting sales page',
      'Checkout + upsell flow',
      'Facebook/Instagram ad setup',
      'Google Ads structure',
      'Retargeting pixel setup'
    ],
    bonuses: [
      '+ FREE logo design ($200)',
      '+ FREE 3-month hosting ($150)',
      '+ Email swipe file ($97)'
    ],
    guarantee: '100% satisfaction or full refund',
    spotsLeft: 4,
    recommended: true,
  },
  {
    id: 'agency',
    name: 'Growth Partner Package',
    price: 1500,
    originalPrice: 4997,
    tagline: 'Full Service',
    features: [
      '3 complete sales funnels',
      'Full email marketing (20+ emails)',
      'Facebook/Instagram ad management',
      'Google Ads management',
      'LinkedIn ad campaign setup',
      'Advanced retargeting strategy',
      'Weekly strategy calls',
      'Monthly optimization',
      'Dedicated strategist + WhatsApp'
    ],
    bonuses: [
      '+ Scale to $50K roadmap ($497)',
      '+ Private mastermind ($997)',
      '+ Monthly funnel audit'
    ],
    guarantee: 'Double money back in 60 days',
    spotsLeft: 2,
    recommended: false,
  },
]

const STEPS = [
  { id: 'business', title: 'Business' },
  { id: 'revenue', title: 'Revenue' },
  { id: 'goal', title: 'Goal' },
  { id: 'challenge', title: 'Challenge' },
  { id: 'timeline', title: 'Timeline' },
  { id: 'budget', title: 'Budget' },
  { id: 'contact', title: 'Contact' },
]

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const navigate = useNavigate()
  const [answers, setAnswers] = useState({
    businessType: '',
    currentRevenue: '',
    revenueGoal: '',
    challenge: '',
    timeline: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
  })
  const [showResults, setShowResults] = useState(false)

  const step = STEPS[currentStep]
  const progress = ((currentStep + 1) / STEPS.length) * 100

  const canProceed = () => {
    switch (step.id) {
      case 'business': return !!answers.businessType
      case 'revenue': return !!answers.currentRevenue
      case 'goal': return !!answers.revenueGoal
      case 'challenge': return !!answers.challenge
      case 'timeline': return !!answers.timeline
      case 'budget': return !!answers.budget
      case 'contact': return !!answers.name && !!answers.email
      default: return true
    }
  }

  const handleNext = () => {
    if (!canProceed()) return
    if (currentStep === STEPS.length - 1) {
      setShowResults(true)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    navigate('/')
  }

  const getAnalysis = () => {
    let recommendedService = 'full'
    if (answers.budget === '500') recommendedService = 'strategy'
    if (answers.budget === '10000') recommendedService = 'agency'
    
    return { recommendedService }
  }

  if (showResults) {
    const analysis = getAnalysis()
    const recommendedService = SERVICES.find(s => s.id === analysis.recommendedService)

    return (
      <div style={{ minHeight: '100vh', background: '#fafafa', color: '#18181b', padding: '4rem 1.5rem' }}>
        <Helmet>
          <title>Your Funnel Strategy | Ascendant Strategy</title>
          <meta name="description" content="Based on your quiz results, here's the perfect funnel strategy for your business." />
        </Helmet>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#dc2626', fontSize: '0.8rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
              Your Personalized Strategy
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              Analysis <span style={{ color: '#dc2626' }}>Complete</span>
            </h1>
            <p style={{ color: '#71717a', fontSize: '1.1rem' }}>
              Based on your responses, here's the complete funnel system we recommend.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ fontSize: '0.8rem', color: '#71717a', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Focus Area</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{answers.challenge || 'Growth'}</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💡</div>
              <h3 style={{ fontSize: '0.8rem', color: '#71717a', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Goal</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{answers.revenueGoal || '$10K - $25K'}/month</p>
            </div>
            <div style={{ background: 'rgba(220, 38, 38, 0.05)', border: '2px solid #dc2626', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ fontSize: '0.8rem', color: '#71717a', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recommended Package</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{recommendedService?.name}</p>
              <p style={{ color: '#dc2626' }}>Now <strong>NZ${recommendedService?.price}</strong> <span style={{ textDecoration: 'line-through', color: '#a1a1aa', fontSize: '0.9rem' }}>NZ${recommendedService?.originalPrice}</span></p>
            </div>
          </div>

          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', fontFamily: 'Space Grotesk, sans-serif' }}>Choose Your Package</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
            {SERVICES.map((service) => (
              <div key={service.id} style={{ 
                background: '#fff', 
                border: service.recommended ? '2px solid #dc2626' : '1px solid rgba(0,0,0,0.08)', 
                borderRadius: '20px', 
                padding: '2rem',
                textAlign: 'center',
                position: 'relative',
                boxShadow: service.recommended ? '0 20px 60px rgba(220, 38, 38, 0.15)' : 'none'
              }}>
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
                    borderRadius: '50px'
                  }}>
                    ⭐ Best Value
                  </div>
                )}

                <div style={{ 
                  position: 'absolute', 
                  top: '0.75rem', 
                  right: '0.75rem',
                  background: service.spotsLeft <= 2 ? '#dc2626' : 'rgba(220, 38, 38, 0.1)',
                  color: service.spotsLeft <= 2 ? '#fff' : '#dc2626',
                  padding: '0.3rem 0.6rem',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  borderRadius: '4px'
                }}>
                  {service.spotsLeft} left
                </div>
                
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{service.name}</h3>
                <p style={{ fontSize: '0.75rem', color: '#dc2626', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{service.tagline}</p>
                
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ color: '#dc2626', fontSize: '1.25rem', fontWeight: 600 }}>NZ$</span>
                  <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>{service.price}</span>
                </div>
                <div style={{ 
                  background: '#dc2626', 
                  color: '#fff', 
                  padding: '0.2rem 0.5rem', 
                  borderRadius: '4px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600,
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}>
                  SAVE ${(service.originalPrice - service.price).toLocaleString()}
                </div>
                
                <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '1rem', maxHeight: '180px', overflowY: 'auto' }}>
                  {service.features.map((f, i) => (
                    <li key={i} style={{ padding: '0.4rem 0', color: '#52525b', fontSize: '0.85rem' }}>
                      ✓ {f}
                    </li>
                  ))}
                </ul>

                <div style={{ 
                  background: 'rgba(220, 38, 38, 0.05)', 
                  border: '1px solid rgba(220, 38, 38, 0.15)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{ color: '#dc2626', fontSize: '0.7rem', fontWeight: 700, marginBottom: '0.5rem' }}>🎁 BONUSES</div>
                  {service.bonuses.map((bonus, i) => (
                    <div key={i} style={{ fontSize: '0.75rem', padding: '0.2rem 0', color: '#71717a' }}>{bonus}</div>
                  ))}
                </div>

                <div style={{ 
                  background: 'rgba(220, 38, 38, 0.05)', 
                  borderRadius: '6px',
                  padding: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{ color: '#dc2626', fontSize: '0.75rem' }}>🛡️ {service.guarantee}</span>
                </div>
                
                <Link 
                  to={`/payment?plan=${service.id}`}
                  style={{ 
                    display: 'block',
                    padding: '1rem',
                    background: service.recommended ? '#dc2626' : 'transparent',
                    border: '2px solid #dc2626',
                    color: service.recommended ? '#fff' : '#dc2626',
                    fontWeight: 700,
                    borderRadius: '10px',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem'
                  }}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
            <button 
              onClick={() => setShowResults(false)} 
              style={{ 
                background: 'none', 
                border: '1px solid rgba(0,0,0,0.15)', 
                color: '#71717a', 
                cursor: 'pointer',
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                fontSize: '0.9rem'
              }}
            >
              ← Back to Quiz
            </button>
          </div>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        `}</style>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#18181b', padding: '4rem 1.5rem' }}>
      <Helmet>
        <title>Free Funnel Strategy Quiz | Get Your Custom Sales Plan | Ascendant Strategy</title>
        <meta name="description" content="Take our free 3-minute quiz and get a custom sales funnel strategy tailored to your business. No commitment required. Funnel assessment for NZ businesses." />
        <link rel="canonical" href="https://ascendant.company/quiz" />
        <meta property="og:title" content="Free Funnel Strategy Quiz | Ascendant Strategy" />
        <meta property="og:description" content="3 minutes. 10 questions. Get your custom funnel strategy. 100% free, no commitment." />
        <meta property="og:url" content="https://ascendant.company/quiz" />
      </Helmet>
      
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#18181b', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700 }}>
            <span style={{ color: '#dc2626' }}>▲</span> Ascendant Strategy
          </Link>
          <span style={{ fontSize: '0.8rem', color: '#71717a', padding: '0.5rem 1rem', background: '#fff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.08)' }}>
            {step.title}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <div style={{ flex: 1, height: '6px', background: 'rgba(0,0,0,0.08)', borderRadius: '3px' }}>
            <div style={{ width: `${progress}%`, height: '100%', background: '#dc2626', borderRadius: '3px', transition: 'width 0.3s' }} />
          </div>
          <span style={{ fontSize: '0.8rem', color: '#71717a', whiteSpace: 'nowrap', fontWeight: 500 }}>
            {currentStep + 1} of {STEPS.length}
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '2rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          {step.id === 'business' && 'What type of business are you in?'}
          {step.id === 'revenue' && 'What\'s your current monthly revenue?'}
          {step.id === 'goal' && 'What\'s your revenue goal?'}
          {step.id === 'challenge' && 'What\'s your biggest challenge right now?'}
          {step.id === 'timeline' && 'When do you want to see results?'}
          {step.id === 'budget' && 'What\'s your budget for this project?'}
          {step.id === 'contact' && 'Let\'s get in touch'}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {step.id === 'business' && BUSINESS_TYPES.map(opt => (
            <button
              key={opt.value}
              onClick={() => setAnswers(prev => ({ ...prev, businessType: opt.value }))}
              style={{
                padding: '1.25rem',
                background: answers.businessType === opt.value ? 'rgba(220, 38, 38, 0.1)' : '#fff',
                border: answers.businessType === opt.value ? '2px solid #dc2626' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '12px',
                color: '#18181b',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.3s',
                fontWeight: 500
              }}
            >
              {opt.label}
            </button>
          ))}

          {step.id === 'revenue' && ['Pre-revenue', 'Under $5K/month', '$5K - $25K/month', '$25K - $100K/month', '$100K+/month'].map(opt => (
            <button
              key={opt}
              onClick={() => setAnswers(prev => ({ ...prev, currentRevenue: opt }))}
              style={{
                padding: '1.25rem',
                background: answers.currentRevenue === opt ? 'rgba(220, 38, 38, 0.1)' : '#fff',
                border: answers.currentRevenue === opt ? '2px solid #dc2626' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '12px',
                color: '#18181b',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.3s',
                fontWeight: 500
              }}
            >
              {opt}
            </button>
          ))}

          {step.id === 'goal' && REVENUE_GOALS.map(opt => (
            <button
              key={opt.value}
              onClick={() => setAnswers(prev => ({ ...prev, revenueGoal: opt.value }))}
              style={{
                padding: '1.25rem',
                background: answers.revenueGoal === opt.value ? 'rgba(220, 38, 38, 0.1)' : '#fff',
                border: answers.revenueGoal === opt.value ? '2px solid #dc2626' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '12px',
                color: '#18181b',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.3s',
                fontWeight: 500
              }}
            >
              {opt.label}
            </button>
          ))}

          {step.id === 'challenge' && CHALLENGES.map(opt => (
            <button
              key={opt.value}
              onClick={() => setAnswers(prev => ({ ...prev, challenge: opt.value }))}
              style={{
                padding: '1.25rem',
                background: answers.challenge === opt.value ? 'rgba(220, 38, 38, 0.1)' : '#fff',
                border: answers.challenge === opt.value ? '2px solid #dc2626' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '12px',
                color: '#18181b',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s',
                fontWeight: 500
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>{opt.icon}</span>
              <span>{opt.label}</span>
            </button>
          ))}

          {step.id === 'timeline' && TIMELINES.map(opt => (
            <button
              key={opt.value}
              onClick={() => setAnswers(prev => ({ ...prev, timeline: opt.value }))}
              style={{
                padding: '1.25rem',
                background: answers.timeline === opt.value ? 'rgba(220, 38, 38, 0.1)' : '#fff',
                border: answers.timeline === opt.value ? '2px solid #dc2626' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '12px',
                color: '#18181b',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ fontWeight: 600 }}>{opt.label}</div>
              <div style={{ fontSize: '0.8rem', color: '#71717a' }}>{opt.desc}</div>
            </button>
          ))}

          {step.id === 'budget' && BUDGETS.map(opt => (
            <button
              key={opt.value}
              onClick={() => setAnswers(prev => ({ ...prev, budget: opt.value }))}
              style={{
                padding: '1.25rem',
                background: answers.budget === opt.value ? 'rgba(220, 38, 38, 0.1)' : '#fff',
                border: answers.budget === opt.value ? '2px solid #dc2626' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '12px',
                color: '#18181b',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ fontWeight: 600 }}>{opt.label}</div>
              <div style={{ fontSize: '0.8rem', color: '#71717a' }}>{opt.desc}</div>
            </button>
          ))}

          {step.id === 'contact' && (
            <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#71717a', marginBottom: '0.5rem', fontWeight: 500 }}>Your Name *</label>
                <input 
                  type="text" 
                  placeholder="John Smith"
                  value={answers.name}
                  onChange={(e) => setAnswers(prev => ({ ...prev, name: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '10px',
                    color: '#18181b',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#71717a', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address *</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  value={answers.email}
                  onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '10px',
                    color: '#18181b',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <button 
            onClick={handleBack}
            style={{
              padding: '1rem 1.5rem',
              background: 'transparent',
              border: '1px solid rgba(0,0,0,0.15)',
              color: '#71717a',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 500
            }}
          >
            ← Back
          </button>
          <button 
            onClick={handleNext}
            disabled={!canProceed()}
            style={{
              flex: 1,
              padding: '1rem',
              background: canProceed() ? '#dc2626' : 'rgba(220, 38, 38, 0.4)',
              border: 'none',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '10px',
              cursor: canProceed() ? 'pointer' : 'not-allowed'
            }}
          >
            {currentStep === STEPS.length - 1 ? 'Get My Strategy →' : 'Continue →'}
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  )
}