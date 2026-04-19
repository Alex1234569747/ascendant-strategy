import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-icon">◇</span>
            <span className="nav-logo-text">Ascendant <em>Strategy</em></span>
          </Link>
          <div className="nav-links">
            <Link to="/quiz" className="nav-link">Free Quiz</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <Link to="/quiz" className="nav-cta">
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-tag">
            <span>✦</span> AI-Powered Sales Architecture
          </div>

          <h1 className="hero-title">
            Transform Your Vision Into a
            <span className="hero-accent"> Revenue Engine</span>
          </h1>

          <p className="hero-subtitle">
            We architect high-converting sales funnels built for scale. 
            Every element strategically designed to turn visitors into 
            loyal, paying customers.
          </p>

          <div className="hero-actions">
            <Link to="/quiz" className="cta-main">
              Get Your Custom Strategy
              <span className="cta-arrow">→</span>
            </Link>
            <Link to="/pricing" className="cta-alt">
              View Investment
            </Link>
          </div>

          <div className="hero-metrics">
            <div className="metric">
              <span className="metric-num">240+</span>
              <span className="metric-label">Funnels Launched</span>
            </div>
            <div className="metric-sep">|</div>
            <div className="metric">
              <span className="metric-num">$18M</span>
              <span className="metric-label">Revenue Generated</span>
            </div>
            <div className="metric-sep">|</div>
            <div className="metric">
              <span className="metric-num">97%</span>
              <span className="metric-label">Client Retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee">
        <div className="marquee-track">
          <span>E-Commerce Giants</span>
          <span className="diamond">◇</span>
          <span>SaaS Scaleups</span>
          <span className="diamond">◇</span>
          <span>Coaching Empires</span>
          <span className="diamond">◇</span>
          <span>Course Creators</span>
          <span className="diamond">◇</span>
          <span>DTC Brands</span>
          <span className="diamond">◇</span>
          <span>Agency Owners</span>
          <span className="diamond">◇</span>
          <span>E-Commerce Giants</span>
          <span className="diamond">◇</span>
          <span>SaaS Scaleups</span>
          <span className="diamond">◇</span>
          <span>Coaching Empires</span>
          <span className="diamond">◇</span>
          <span>Course Creators</span>
          <span className="diamond">◇</span>
          <span>DTC Brands</span>
          <span className="diamond">◇</span>
          <span>Agency Owners</span>
          <span className="diamond">◇</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="section-wrap">
          <div className="section-head">
            <span className="section-eyebrow">What We Build</span>
            <h2 className="section-title">Precision-Engineered Funnels</h2>
            <p className="section-desc">
              No templates. No shortcuts. Every funnel is custom-crafted 
              for your audience, offer, and revenue targets.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-box">
              <div className="service-num">01</div>
              <div className="service-icon">◎</div>
              <h3>Lead Magnet Funnels</h3>
              <p>
                Capture your ideal customers with irresistible free offers. 
                Complete funnel builds — landing page, thank you page, 
                email sequence, and CRM setup.
              </p>
              <Link to="/quiz" className="service-cta">Begin Building →</Link>
            </div>

            <div className="service-box service-featured">
              <div className="service-badge">Most Popular</div>
              <div className="service-num">02</div>
              <div className="service-icon">◈</div>
              <h3>Webinar & Challenge Funnels</h3>
              <p>
                High-ticket sales machines engineered for maximum attendance 
                and conversion. From registration to final pitch — every 
                touchpoint optimized.
              </p>
              <Link to="/quiz" className="service-cta">Begin Building →</Link>
            </div>

            <div className="service-box">
              <div className="service-num">03</div>
              <div className="service-icon">◆</div>
              <h3>Checkout Upsell Flows</h3>
              <p>
                Transform one-time buyers into repeat customers. Strategic 
                post-purchase sequences that lift average order value 
                by 40-60%.
              </p>
              <Link to="/quiz" className="service-cta">Begin Building →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-inner">
          <div className="stat-block">
            <span className="stat-val">240+</span>
            <span className="stat-lbl">Funnels Launched</span>
          </div>
          <div className="stat-line"></div>
          <div className="stat-block">
            <span className="stat-val">$18M</span>
            <span className="stat-lbl">Revenue Generated</span>
          </div>
          <div className="stat-line"></div>
          <div className="stat-block">
            <span className="stat-val">3.2x</span>
            <span className="stat-lbl">Avg Conversion Lift</span>
          </div>
          <div className="stat-line"></div>
          <div className="stat-block">
            <span className="stat-val">97%</span>
            <span className="stat-lbl">Client Retention</span>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="section-wrap">
          <div className="section-head">
            <span className="section-eyebrow">The Process</span>
            <h2 className="section-title">Three Steps to Scale</h2>
          </div>

          <div className="process-flow">
            <div className="step">
              <div className="step-marker">1</div>
              <h3>Take the Quiz</h3>
              <p>10 questions, 3 minutes. Tell us about your business, audience, and goals.</p>
            </div>
            <div className="step-connector">→</div>
            <div className="step">
              <div className="step-marker">2</div>
              <h3>Receive Strategy</h3>
              <p>Get a custom funnel blueprint designed for your specific situation.</p>
            </div>
            <div className="step-connector">→</div>
            <div className="step">
              <div className="step-marker">3</div>
              <h3>Watch It Build</h3>
              <p>We handle the entire build while you focus on growing your business.</p>
            </div>
          </div>

          <div className="process-action">
            <Link to="/quiz" className="cta-main cta-large">
              Start Your Free Quiz →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-band">
        <div className="cta-band-bg"></div>
        <div className="cta-band-content">
          <h2 className="cta-band-title">
            Ready to <em>Ascend?</em>
          </h2>
          <p className="cta-band-desc">
            Your competitors aren't waiting. Take the first step toward 
            building a funnel system that compounds your growth.
          </p>
          <Link to="/quiz" className="cta-main cta-large">
            Begin Your Free Strategy Quiz →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-icon">◇</span>
            <span className="footer-name">Ascendant Strategy</span>
          </div>
          <div className="footer-nav">
            <Link to="/quiz">Free Quiz</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-legal">
            © 2024 Ascendant Strategy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}