import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import './Landing.css'

const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Results', href: '#results' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '/pricing' },
]

export default function Landing() {
  // Ascendant Strategy - Premium Funnel Agency
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="landing">
      <Navigation scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection heroRef={heroRef} heroScale={heroScale} heroOpacity={heroOpacity} />
      <LogoMarquee />
      <ServicesSection />
      <ResultsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingPreview />
      <FinalCTA />
      <Footer />

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </div>
  )
}

function Navigation({ scrolled, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <motion.span 
            className="nav-logo-icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            ▲
          </motion.span>
          <span className="nav-logo-text">Ascendant <em>Strategy</em></span>
        </Link>

        <div className="nav-links">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              {link.href.startsWith('/') ? (
                <Link to={link.href} className="nav-link">{link.name}</Link>
              ) : (
                <a href={link.href} className="nav-link">{link.name}</a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/quiz" className="nav-cta">
            Start Free Quiz
          </Link>
        </motion.div>

        <button 
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </motion.nav>
  )
}

function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="mobile-menu-content">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.href.startsWith('/') ? (
                  <Link to={link.href} className="mobile-nav-link" onClick={onClose}>
                    {link.name}
                  </Link>
                ) : (
                  <a href={link.href} className="mobile-nav-link" onClick={onClose}>
                    {link.name}
                  </a>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/quiz" className="mobile-nav-cta" onClick={onClose}>
                Start Free Quiz
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function HeroSection({ heroRef, heroScale, heroOpacity }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <motion.section 
      ref={ref}
      className="hero"
      style={{ scale: heroScale, opacity: heroOpacity }}
    >
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <motion.div 
          className="hero-orb hero-orb-1"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="hero-orb hero-orb-2"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="badge-dot"></span>
          The #1 Funnel Agency for Ambitious Brands
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          We Build Funnels That
          <span className="hero-accent">
            <span className="accent-text">Print Money</span>
            <svg className="accent-underline" viewBox="0 0 300 12" fill="none">
              <motion.path
                d="M3 9C50 3 100 3 150 6C200 9 250 6 297 9"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Stop losing customers to bad UX. We architect high-converting 
          sales machines that turn clicks into cash — guaranteed.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/quiz" className="cta-primary">
            <span>Get My Funnel Strategy</span>
            <motion.span 
              className="cta-icon"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
          <Link to="/pricing" className="cta-secondary">
            View Pricing
          </Link>
        </motion.div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="hero-stat">
            <span className="stat-number">240+</span>
            <span className="stat-label">Funnels Built</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-number">$18M+</span>
            <span className="stat-label">Revenue Generated</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-number">3.2x</span>
            <span className="stat-label">Avg. Conversion</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="funnel-glow"></div>
        <div className="funnel-card">
          <div className="funnel-header">
            <span className="funnel-dot red"></span>
            <span className="funnel-dot yellow"></span>
            <span className="funnel-dot green"></span>
          </div>
          <div className="funnel-body">
            <div className="funnel-stage">
              <div className="stage-bar" style={{ width: '100%' }}>
                <motion.div 
                  className="stage-fill"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </div>
              <div className="stage-info">
                <span className="stage-value">10,000</span>
                <span className="stage-label">Visitors</span>
              </div>
            </div>
            <div className="funnel-connector">
              <svg width="24" height="40" viewBox="0 0 24 40">
                <path d="M12 0L12 30M6 24L12 30L18 24" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="funnel-stage">
              <div className="stage-bar" style={{ width: '60%' }}>
                <motion.div 
                  className="stage-fill stage-fill-2"
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </div>
              <div className="stage-info">
                <span className="stage-value">2,000</span>
                <span className="stage-label">Leads</span>
              </div>
            </div>
            <div className="funnel-connector">
              <svg width="24" height="40" viewBox="0 0 24 40">
                <path d="M12 0L12 30M6 24L12 30L18 24" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="funnel-stage">
              <div className="stage-bar" style={{ width: '40%' }}>
                <motion.div 
                  className="stage-fill stage-fill-3"
                  initial={{ width: 0 }}
                  animate={{ width: '40%' }}
                  transition={{ delay: 1.4, duration: 1 }}
                />
              </div>
              <div className="stage-info">
                <span className="stage-value">400</span>
                <span className="stage-label">Buyers</span>
              </div>
            </div>
            <div className="funnel-connector">
              <svg width="24" height="40" viewBox="0 0 24 40">
                <path d="M12 0L12 30M6 24L12 30L18 24" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="funnel-stage funnel-stage-final">
              <div className="stage-bar" style={{ width: '20%' }}>
                <motion.div 
                  className="stage-fill stage-fill-final"
                  initial={{ width: 0 }}
                  animate={{ width: '20%' }}
                  transition={{ delay: 1.6, duration: 1 }}
                />
              </div>
              <div className="stage-info">
                <span className="stage-value">$80K</span>
                <span className="stage-label">Revenue</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

function LogoMarquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="marquee-content">
              {['Shopify Brands', 'SaaS Startups', 'Coaching Empire', 'Course Creators', 'DTC Brands', 'Agency Owners'].map((item, j) => (
                <span key={j} className="marquee-item">
                  {item}
                  <span className="marquee-dot">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Lead Magnet Funnels',
      description: 'Transform cold traffic into warm leads on autopilot. Complete machine with landing page, sequences, and CRM.',
      features: ['Landing Page', 'Email Sequences', 'CRM Setup'],
      color: '#3b82f6',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: 'Webinar Funnels',
      description: 'High-ticket sales machines engineered for maximum attendance and conversions at every touchpoint.',
      features: ['Registration Page', 'Webinar Room', 'Sales Flow'],
      color: '#8b5cf6',
      featured: true,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      ),
      title: 'Upsell Flows',
      description: 'Stop leaving money on the table. Strategic post-purchase sequences that increase AOV by 40-60%.',
      features: ['Order Bumps', 'One-Click Upsells', 'Thank You Pages'],
      color: '#06b6d4',
    },
  ]

  return (
    <section id="services" className="services-section" ref={ref}>
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">What We Build</span>
          <h2 className="section-title">
            Engines That Make You
            <span className="title-gradient"> Rich</span>
          </h2>
          <p className="section-desc">
            Forget templates. We build custom funnels that actually convert.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`service-card ${service.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ y: -8 }}
            >
              {service.featured && <div className="featured-badge">Most Popular</div>}
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="service-features">
                {service.features.map((f, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/quiz" className="service-cta">
                Build My Funnel
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: 240, suffix: '+', label: 'Funnels Launched' },
    { value: 18, prefix: '$', suffix: 'M+', label: 'Revenue Generated' },
    { value: 3.2, suffix: 'x', label: 'Avg Conversion Lift' },
    { value: 97, suffix: '%', label: 'Client Retention' },
  ]

  return (
    <section id="results" className="results-section" ref={ref}>
      <div className="results-bg">
        <div className="results-glow"></div>
      </div>
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">Our Track Record</span>
          <h2 className="section-title">
            Numbers That
            <span className="title-gradient"> Speak</span>
          </h2>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="stat-value">
                {stat.prefix && <span className="stat-prefix">{stat.prefix}</span>}
                <CountUp end={stat.value} inView={isInView} />
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start * 10) / 10)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, inView])

  return <span>{typeof end === 'number' && !Number.isInteger(end) ? count.toFixed(1) : count}</span>
}

function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      num: '01',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
          <rect x="9" y="3" width="6" height="4" rx="1"/>
          <path d="M9 12h6M9 16h6"/>
        </svg>
      ),
      title: 'Take the Quiz',
      desc: '10 quick questions about your business goals. 3 minutes max.',
      time: '3 min',
    },
    {
      num: '02',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      title: 'Get Your Plan',
      desc: 'Receive a custom funnel strategy designed for YOUR business.',
      time: '24 hours',
    },
    {
      num: '03',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: 'Watch It Work',
      desc: 'We build your funnel while you focus on growing your business.',
      time: '7 days',
    },
  ]

  return (
    <section id="process" className="process-section" ref={ref}>
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">Simple Process</span>
          <h2 className="section-title">
            3 Steps to
            <span className="title-gradient"> More Revenue</span>
          </h2>
        </motion.div>

        <div className="process-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="process-card"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <div className="process-num">{step.num}</div>
              <div className="process-icon">{step.icon}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
              <div className="process-time">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                {step.time}
              </div>
              {i < steps.length - 1 && (
                <div className="process-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="process-cta"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Link to="/quiz" className="cta-primary cta-large">
            Start My Free Quiz
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <p className="cta-note">No credit card. No commitment. 100% free strategy.</p>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote: "Ascendant Strategy tripled our revenue in 90 days. The funnel they built converts consistently. Best investment we ever made.",
      author: "James Chen",
      role: "CEO, TechScale Inc",
      result: "$2.4M Generated",
    },
    {
      quote: "They didn't just build us a funnel — they built us a revenue machine. Our conversion rate went from 1.2% to 4.8% in 60 days.",
      author: "Sarah Mitchell",
      role: "Founder, CoursePro",
      result: "4x Conversions",
    },
    {
      quote: "Professional, fast, and the results speak for themselves. Our webinar attendance doubled and sales increased 340%.",
      author: "Marcus Johnson",
      role: "CEO, CoachingEmpire",
      result: "340% Sales Increase",
    },
  ]

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">Client Success</span>
          <h2 className="section-title">
            Don't Take Our Word
            <span className="title-gradient"> For It</span>
          </h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              className="testimonial-card"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ y: -8 }}
            >
              <div className="testimonial-stars">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-result">{t.result}</div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {t.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <span className="author-name">{t.author}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const plans = [
    {
      name: 'Strategy Session',
      price: 150,
      original: 497,
      features: ['Full funnel audit', 'Custom strategy blueprint', 'Lead magnet creation', 'Email sequence outline', '60-min consultation'],
      popular: false,
    },
    {
      name: 'Full Funnel',
      price: 750,
      original: 1997,
      features: ['Complete sales funnel (4-6 pages)', 'Lead magnet + landing page', '10-email follow-up sequence', 'Email automation setup', 'Sales page + checkout', 'Facebook/Instagram ads setup'],
      popular: true,
    },
  ]

  return (
    <section className="pricing-preview" ref={ref}>
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">Investment</span>
          <h2 className="section-title">
            Simple, Transparent
            <span className="title-gradient"> Pricing</span>
          </h2>
          <p className="section-desc">
            Choose the package that fits your goals. All plans include our 100% satisfaction guarantee.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
            >
              {plan.popular && <div className="popular-badge">Best Value</div>}
              <h3 className="pricing-name">{plan.name}</h3>
              <div className="pricing-price">
                <span className="price-currency">NZ$</span>
                <span className="price-amount">{plan.price}</span>
              </div>
              <div className="pricing-original">
                Was NZ${plan.original} — Save ${plan.original - plan.price}
              </div>
              <ul className="pricing-features">
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link 
                to={`/payment?plan=${plan.name.toLowerCase().replace(' ', '-')}`}
                className={plan.popular ? 'cta-primary' : 'cta-secondary'}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="pricing-footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/pricing" className="view-all">
            View all pricing options
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-bg">
        <div className="cta-glow"></div>
      </div>
      <div className="section-container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cta-title">
            Stop Leaving
            <span className="title-gradient"> Money</span>
            <br />
            on the Table
          </h2>
          <p className="cta-desc">
            Your competitors are scaling RIGHT NOW. Don't get left behind. 
            Get your custom funnel strategy in just 3 minutes.
          </p>
          <Link to="/quiz" className="cta-primary cta-large cta-glow">
            Get My Free Strategy
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-icon">▲</span>
            <span>Ascendant Strategy</span>
          </Link>
          <p className="footer-tagline">
            Building funnels that print money for ambitious brands.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Services</h4>
          <Link to="/pricing">Pricing</Link>
          <Link to="/quiz">Free Quiz</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links-group">
          <h4>Connect</h4>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>

        <div className="footer-links-group">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Ascendant Strategy. All rights reserved.</p>
      </div>
    </footer>
  )
}