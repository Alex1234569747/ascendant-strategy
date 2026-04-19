import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="nav-logo-icon">▲</span>
            <span className="nav-logo-text">Ascendant <span>Strategy</span></span>
          </div>
          <div className="nav-links">
            <Link to="/quiz" className="nav-link">Free Quiz</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <Link to="/quiz" className="nav-cta">
            Start Free Quiz
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨</span> AI-Powered Sales Funnels
          </div>

          <h1 className="hero-title">
            Turn Your Visitors Into
            <span className="hero-highlight"> Paying Customers</span>
          </h1>

          <p className="hero-subtitle">
            We architect high-converting sales funnels that transform visitors 
            into loyal customers. From strategy to execution — we handle the 
            complexity while you focus on scale.
          </p>

          <div className="hero-cta">
            <Link to="/quiz" className="btn-primary">
              Get My Strategy
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>

          <div className="hero-trust">
            <span className="trust-item">✓ 240+ Funnels Launched</span>
            <span className="trust-divider">•</span>
            <span className="trust-item">✓ $18M Revenue Generated</span>
            <span className="trust-divider">•</span>
            <span className="trust-item">✓ 97% Client Retention</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card visual-card-1">
            <div className="card-icon">📈</div>
            <div className="card-label">Conversion Rate</div>
            <div className="card-value">3.2x</div>
            <div className="card-change">↑ Average Lift</div>
          </div>
          <div className="visual-card visual-card-2">
            <div className="card-icon">💰</div>
            <div className="card-label">Revenue Generated</div>
            <div className="card-value">$18M+</div>
            <div className="card-change">↑ For Clients</div>
          </div>
          <div className="visual-card visual-card-3">
            <div className="card-icon">🎯</div>
            <div className="card-label">Funnels Built</div>
            <div className="card-value">240+</div>
            <div className="card-change">↑ Across Industries</div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="proof-bar">
        <div className="proof-bar-container">
          <p className="proof-label">Trusted by ambitious brands across:</p>
          <div className="proof-logos">
            <span>E-Commerce Giants</span>
            <span>SaaS Scaleups</span>
            <span>Coaching Empires</span>
            <span>Course Creators</span>
            <span>DTC Brands</span>
            <span>Agency Owners</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
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
              <div className="service-number">01</div>
              <h3>Lead Magnet Funnels</h3>
              <p>
                Attract your ideal customers with irresistible free offers. 
                We design and build the entire funnel — landing page, thank 
                you page, email sequence, and CRM integration.
              </p>
              <Link to="/quiz" className="service-link">
                Start Building →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>
              <h3>Webinar & Challenge Funnels</h3>
              <p>
                High-ticket sales machines. From registration page to final 
                pitch, we engineer every touchpoint to maximize attendance 
                and conversion.
              </p>
              <Link to="/quiz" className="service-link">
                Start Building →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>
              <h3>Checkout Upsell Flows</h3>
              <p>
                Turn one-time buyers into repeat customers. Strategic post-purchase 
                sequences that increase average order value by 40-60%.
              </p>
              <Link to="/quiz" className="service-link">
                Start Building →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Simple Process, Powerful Results</h2>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-icon">1</div>
              <h3>Take the Quiz</h3>
              <p>Answer 10 questions about your business, audience, and goals. Takes just 3 minutes.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-icon">2</div>
              <h3>Get Your Strategy</h3>
              <p>Receive a custom funnel blueprint designed for your specific situation.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-icon">3</div>
              <h3>Watch It Build</h3>
              <p>We handle the entire build while you focus on your business.</p>
            </div>
          </div>

          <div className="process-cta">
            <Link to="/quiz" className="btn-primary">
              Start the Free Quiz →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">240+</div>
            <div className="stat-label">Funnels Launched</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">$18M</div>
            <div className="stat-label">Revenue Generated</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">3.2x</div>
            <div className="stat-label">Avg. Conversion Lift</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">97%</div>
            <div className="stat-label">Client Retention</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Ready to <span className="cta-highlight">Ascend?</span>
          </h2>
          <p className="cta-desc">
            Your competitors are already ahead. Take the first step toward 
            building a funnel system that compounds your growth.
          </p>
          <div className="cta-buttons">
            <Link to="/quiz" className="btn-primary btn-large">
              Start Your Free Quiz →
            </Link>
            <Link to="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="footer-logo-icon">▲</span>
            <span className="footer-logo-text">Ascendant Strategy</span>
          </div>
          <div className="footer-links">
            <Link to="/quiz">Free Quiz</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-copy">
            © 2024 Ascendant Strategy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
