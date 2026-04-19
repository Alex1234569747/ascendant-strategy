import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      {/* Floating Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-icon">▲</span>
            <span className="nav-logo-text">Ascendant <em>Strategy</em></span>
          </Link>
          <div className="nav-links">
            <Link to="/quiz" className="nav-link">Free Quiz</Link>
            <Link to="/pricing" className="nav-link pricing-link">Pricing</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <Link to="/quiz" className="nav-cta pulse">
            Start Free Quiz →
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="hero-content">
          <div className="hero-tag slide-in">
            <span className="tag-icon">⚡</span>
            <span>The #1 Funnel Agency for Ambitious Brands</span>
          </div>

          <h1 className="hero-title fade-up">
            We Build Funnels That
            <span className="hero-accent typewriter">Print Money</span>
          </h1>

          <p className="hero-subtitle fade-up delay-1">
            Stop losing customers to bad UX. We architect high-converting 
            sales machines that turn clicks into cash — guaranteed.
          </p>

          <div className="hero-actions fade-up delay-2">
            <Link to="/quiz" className="cta-main bounce">
              <span>Get My Funnel Strategy</span>
              <span className="cta-arrow">→</span>
            </Link>
            <Link to="/pricing" className="cta-alt shake">
              <span>See Pricing</span>
            </Link>
          </div>

          <div className="hero-trust fade-up delay-3">
            <div className="trust-item float">
              <span className="trust-icon">✓</span>
              <span>240+ Funnels Built</span>
            </div>
            <div className="trust-item float delay-1">
              <span className="trust-icon">✓</span>
              <span>$18M+ Generated</span>
            </div>
            <div className="trust-item float delay-2">
              <span className="trust-icon">✓</span>
              <span>3.2x Avg. Conversion</span>
            </div>
          </div>
        </div>

        <div className="hero-visual fade-in delay-2">
          <div className="funnel-demo">
            <div className="funnel-stage stage-1">
              <span>10,000</span>
              <span className="stage-label">Visitors</span>
            </div>
            <div className="funnel-arrow bounce-soft">↓</div>
            <div className="funnel-stage stage-2">
              <span>2,000</span>
              <span className="stage-label">Leads</span>
            </div>
            <div className="funnel-arrow bounce-soft">↓</div>
            <div className="funnel-stage stage-3">
              <span>400</span>
              <span className="stage-label">Buyers</span>
            </div>
            <div className="funnel-arrow bounce-soft">↓</div>
            <div className="funnel-stage stage-4">
              <span>$80K</span>
              <span className="stage-label">Revenue</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee">
        <div className="marquee-track">
          {['E-Commerce Giants', 'SaaS Scaleups', 'Coaching Empires', 'Course Creators', 'DTC Brands', 'Agency Owners', 'E-Commerce Giants', 'SaaS Scaleups', 'Coaching Empires', 'Course Creators', 'DTC Brands', 'Agency Owners'].map((item, i) => (
            <span key={i} className={i % 2 === 0 ? '' : 'glow'}>
              {item}
              <span className="dot">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* Social Proof Logos */}
      <section className="logos">
        <div className="logos-container">
          <p className="logos-label">Trusted by industry leaders</p>
          <div className="logos-grid">
            <div className="logo-item float-soft">Shopify Brands</div>
            <div className="logo-item float-soft delay-1">Tech Startups</div>
            <div className="logo-item float-soft delay-2">Fitness Coaches</div>
            <div className="logo-item float-soft delay-3">Online Course Creators</div>
            <div className="logo-item float-soft delay-4">E-commerce Brands</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="section-wrap">
          <div className="section-head">
            <span className="section-eyebrow scale-in">What We Build</span>
            <h2 className="section-title slide-up">
              Engines That Make You
              <span className="title-accent"> Rich</span>
            </h2>
            <p className="section-desc fade-up">
              Forget templates. We build custom funnels that actually convert — 
              because your business deserves more than generic cookie-cutter solutions.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-box hover-lift">
              <div className="service-corner"></div>
              <div className="service-num">01</div>
              <div className="service-icon-wrap">
                <span className="service-icon">🎯</span>
              </div>
              <h3>Lead Magnet Funnels</h3>
              <p>
                Turn cold traffic into warm leads on autopilot. We build the entire 
                machine — landing page, thank you page, email sequences, and CRM.
              </p>
              <div className="service-features">
                <span>✓ Landing Page</span>
                <span>✓ Email Sequences</span>
                <span>✓ CRM Setup</span>
              </div>
              <Link to="/quiz" className="service-cta">
                <span>Build My Funnel →</span>
              </Link>
            </div>

            <div className="service-box service-featured hover-lift">
              <div className="service-corner"></div>
              <div className="hot-badge">HOT</div>
              <div className="service-num">02</div>
              <div className="service-icon-wrap">
                <span className="service-icon">🚀</span>
              </div>
              <h3>Webinar Funnels</h3>
              <p>
                High-ticket sales machines. We engineer every touchpoint from registration 
                to final pitch to maximize attendance and conversions.
              </p>
              <div className="service-features">
                <span>✓ Registration Page</span>
                <span>✓ Webinar Room</span>
                <span>✓ Sales Flow</span>
              </div>
              <Link to="/quiz" className="service-cta">
                <span>Build My Funnel →</span>
              </Link>
            </div>

            <div className="service-box hover-lift">
              <div className="service-corner"></div>
              <div className="service-num">03</div>
              <div className="service-icon-wrap">
                <span className="service-icon">💰</span>
              </div>
              <h3>Upsell Flows</h3>
              <p>
                Stop leaving money on the table. Strategic post-purchase sequences that 
                increase average order value by 40-60%.
              </p>
              <div className="service-features">
                <span>✓ Order Bumps</span>
                <span>✓ One-Click Upsells</span>
                <span>✓ Thank You Pages</span>
              </div>
              <Link to="/quiz" className="service-cta">
                <span>Build My Funnel →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-bg"></div>
        <div className="stats-inner">
          <div className="stat-block zoom-in">
            <span className="stat-val counter" data-target="240">0</span>
            <span className="stat-plus">+</span>
            <span className="stat-lbl">Funnels Launched</span>
          </div>
          <div className="stat-block zoom-in delay-1">
            <span className="stat-val">$</span>
            <span className="stat-val counter" data-target="18">0</span>
            <span className="stat-plus">M+</span>
            <span className="stat-lbl">Revenue Generated</span>
          </div>
          <div className="stat-block zoom-in delay-2">
            <span className="stat-val counter" data-target="3.2">0</span>
            <span className="stat-lbl">Avg Conversion Lift</span>
          </div>
          <div className="stat-block zoom-in delay-3">
            <span className="stat-val counter" data-target="97">0</span>
            <span className="stat-plus">%</span>
            <span className="stat-lbl">Client Retention</span>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <div className="testimonial-container">
          <div className="quote-mark">"</div>
          <p className="testimonial-text scale-in">
            Ascendant Strategy tripled our revenue in 90 days. The funnel they built 
            converts consistently. Best investment we ever made.
          </p>
          <div className="testimonial-author">
            <div className="author-avatar">JD</div>
            <div className="author-info">
              <span className="author-name">James Doe</span>
              <span className="author-title">CEO, TechScale Inc</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="section-wrap">
          <div className="section-head">
            <span className="section-eyebrow scale-in">Simple Process</span>
            <h2 className="section-title slide-up">
              3 Steps to
              <span className="title-accent"> More Revenue</span>
            </h2>
          </div>

          <div className="process-flow">
            <div className="step hover-lift">
              <div className="step-number">01</div>
              <div className="step-icon">📋</div>
              <h3>Take the Quiz</h3>
              <p>10 quick questions about your business goals. 3 minutes max.</p>
              <div className="step-time">3 min</div>
            </div>
            <div className="step-connector pulse">→</div>
            <div className="step hover-lift">
              <div className="step-number">02</div>
              <div className="step-icon">📊</div>
              <h3>Get Your Plan</h3>
              <p>Receive a custom funnel strategy designed for YOUR business.</p>
              <div className="step-time">24 hours</div>
            </div>
            <div className="step-connector pulse">→</div>
            <div className="step hover-lift">
              <div className="step-number">03</div>
              <div className="step-icon">🎉</div>
              <h3>Watch It Work</h3>
              <p>We build your funnel while you focus on growing your business.</p>
              <div className="step-time">7 days</div>
            </div>
          </div>

          <div className="process-action">
            <Link to="/quiz" className="cta-main cta-huge pulse-glow">
              <span>Start My Free Quiz Now →</span>
            </Link>
            <p className="action-note">No credit card. No commitment. 100% free strategy.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-band">
        <div className="cta-band-bg"></div>
        <div className="cta-band-glow"></div>
        <div className="cta-band-content">
          <h2 className="cta-band-title scale-in">
            Stop Leaving
            <span className="cta-accent"> Money</span>
            <br />
            on the Table
          </h2>
          <p className="cta-band-desc fade-up">
            Your competitors are scaling RIGHT NOW. Don't get left behind. 
            Get your custom funnel strategy in just 3 minutes.
          </p>
          <div className="cta-actions fade-up delay-1">
            <Link to="/quiz" className="cta-main cta-huge pulse-glow">
              <span>Get My Free Strategy →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-icon">▲</span>
            <span className="footer-name">Ascendant Strategy</span>
          </div>
          <div className="footer-links">
            <Link to="/quiz">Free Quiz</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link float-soft">𝕏</a>
            <a href="#" className="social-link float-soft delay-1">in</a>
            <a href="#" className="social-link float-soft delay-2">IG</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2024 Ascendant Strategy. All rights reserved.
        </div>
      </footer>
    </div>
  )
}