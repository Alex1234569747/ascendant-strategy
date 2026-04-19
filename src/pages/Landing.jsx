import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './Landing.css'

export default function Landing() {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="landing">
      <div className="bg-glow" />
      <div className="bg-grid" />

      {/* Navigation */}
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-icon">◆</span>
          <span className="nav-logo-text">Ascendant <span>Strategy</span></span>
        </Link>
        <div className="nav-links">
          <Link to="/quiz" className="nav-link">Free Quiz</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        <Link to="/quiz" className="nav-cta">Start Free →</Link>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">
          <span className="hero-badge-icon">◆</span>
          AI-Powered Sales Funnels
        </div>
        
        <h1 className="hero-title">
          <span className="hero-title-line">Your Growth</span>
          <span className="hero-title-line">Strategy,</span>
          <span className="hero-title-line highlight">Reimagined.</span>
        </h1>
        
        <p className="hero-subtitle">
          We architect high-converting sales funnels that transform visitors into loyal customers. 
          From strategy to execution — we handle the complexity while you focus on scale.
        </p>
        
        <div className="hero-cta">
          <Link to="/quiz" className="btn-primary">
            Get My Strategy →
          </Link>
          <Link to="/pricing" className="btn-secondary">
            View Pricing
          </Link>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Marquee */}
      <section className="marquee-section">
        <div className="marquee-label">Trusted by ambitious brands</div>
        <div className="marquee-track">
          {['E-Commerce Giants', 'SaaS Scaleups', 'Coaching empires', 'Course Creators', 'DTC Brands', 'Agency Owners'].map((item, i) => (
            <div key={i} className="marquee-item"><span>◆</span> {item}</div>
          ))}
          {['E-Commerce Giants', 'SaaS Scaleups', 'Coaching empires', 'Course Creators', 'DTC Brands', 'Agency Owners'].map((item, i) => (
            <div key={`dup-${i}`} className="marquee-item"><span>◆</span> {item}</div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="section-header reveal">
          <span className="section-tag">What We Build</span>
          <h2 className="section-title">Funnels That Actually Convert</h2>
          <p className="section-desc">
            We don't do generic templates. Every funnel is architected for your specific audience, 
            offer, and revenue goals.
          </p>
        </div>

        <div className="services-grid">
          {[
            {
              icon: '◆',
              title: 'Lead Magnet Funnels',
              desc: 'Attract your ideal customers with irresistible free offers. We design and build the entire funnel — landing page, thank you page, email sequence, and CRM integration.'
            },
            {
              icon: '◇',
              title: 'Webinar & Challenge Funnels',
              desc: 'High-ticket sales machines. From registration page to final pitch, we engineer every touchpoint to maximize attendance and conversion.'
            },
            {
              icon: '◈',
              title: 'Checkout Upsell Flows',
              desc: 'Turn one-time buyers into repeat customers. Strategic post-purchase sequences that increase average order value by 40-60%.'
            }
          ].map((service, i) => (
            <div key={i} className={`service-card reveal reveal-delay-${i + 1}`}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to="/quiz" className="service-link">
                Get started →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          {[
            { number: '240+', label: 'Funnels Launched' },
            { number: '$18M', label: 'Revenue Generated' },
            { number: '3.2x', label: 'Avg. Conversion Lift' },
            { number: '97%', label: 'Client Retention' }
          ].map((stat, i) => (
            <div key={i} className={`stat-item reveal reveal-delay-${i + 1}`}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg" />
        <h2 className="cta-title reveal">Ready to <span className="gradient-text">Ascend?</span></h2>
        <p className="cta-desc reveal reveal-delay-1">
          Your competitors are already ahead. Take the first step toward building a funnel system that 
          compounds your growth.
        </p>
        <Link to="/quiz" className="btn-primary reveal reveal-delay-2">
          Start Your Free Quiz →
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="footer-logo-icon">◆</span>
            Ascendant Strategy
          </div>
          <div className="footer-copy">
            © 2024 Ascendant Strategy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
