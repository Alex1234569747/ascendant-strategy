import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-bg"></div>
      <div className="landing-grid"></div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">
          <span className="nav-logo-icon">◆</span>
          <span className="nav-logo-text">Ascendant <span>Strategy</span></span>
        </div>
        <div className="nav-links">
          <Link to="/quiz" className="nav-link">Free Quiz</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        <Link to="/quiz" className="nav-cta">
          Start Free →
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge animate-in">
          <span className="hero-badge-icon">◆</span>
          AI-Powered Sales Funnels
        </div>

        <h1 className="hero-title animate-in delay-1">
          <span className="hero-title-line">Your Growth</span>
          <span className="hero-title-line">Strategy,</span>
          <span className="hero-title-line hero-title-highlight">Reimagined.</span>
        </h1>

        <p className="hero-subtitle animate-in delay-2">
          We architect high-converting sales funnels that transform visitors 
          into loyal customers. From strategy to execution — we handle the 
          complexity while you focus on scale.
        </p>

        <div className="hero-cta animate-in delay-3">
          <Link to="/quiz" className="btn-primary">
            Get My Strategy →
          </Link>
          <Link to="/pricing" className="btn-secondary">
            View Pricing
          </Link>
        </div>

        <div className="scroll-indicator animate-in delay-4">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee-section">
        <div className="marquee-label">Trusted by ambitious brands</div>
        <div className="marquee-track">
          {['E-Commerce Giants', 'SaaS Scaleups', 'Coaching empires', 'Course Creators', 'DTC Brands', 'Agency Owners'].map((item, i) => (
            <div key={`a-${i}`} className="marquee-item">
              <span>◆</span>{item}
            </div>
          ))}
          {['E-Commerce Giants', 'SaaS Scaleups', 'Coaching empires', 'Course Creators', 'DTC Brands', 'Agency Owners'].map((item, i) => (
            <div key={`b-${i}`} className="marquee-item">
              <span>◆</span>{item}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <span className="section-tag">What We Build</span>
          <h2 className="section-title">Funnels That Actually Convert</h2>
          <p className="section-desc">
            We don't do generic templates. Every funnel is architected 
            for your specific audience, offer, and revenue goals.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">◆</div>
            <h3>Lead Magnet Funnels</h3>
            <p>
              Attract your ideal customers with irresistible free offers. 
              We design and build the entire funnel — landing page, thank 
              you page, email sequence, and CRM integration.
            </p>
            <Link to="/quiz" className="service-link">
              Get started →
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">◇</div>
            <h3>Webinar & Challenge Funnels</h3>
            <p>
              High-ticket sales machines. From registration page to final 
              pitch, we engineer every touchpoint to maximize attendance 
              and conversion.
            </p>
            <Link to="/quiz" className="service-link">
              Get started →
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">◈</div>
            <h3>Checkout Upsell Flows</h3>
            <p>
              Turn one-time buyers into repeat customers. Strategic post-purchase 
              sequences that increase average order value by 40-60%.
            </p>
            <Link to="/quiz" className="service-link">
              Get started →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">240+</div>
            <div className="stat-label">Funnels Launched</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">$18M</div>
            <div className="stat-label">Revenue Generated</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3.2x</div>
            <div className="stat-label">Avg. Conversion Lift</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">97%</div>
            <div className="stat-label">Client Retention</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bg"></div>
        <h2 className="cta-title">
          Ready to <span className="cta-highlight">Ascend?</span>
        </h2>
        <p className="cta-desc">
          Your competitors are already ahead. Take the first step toward 
          building a funnel system that compounds your growth.
        </p>
        <Link to="/quiz" className="btn-primary">
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
