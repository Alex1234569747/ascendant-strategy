import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#18181b' }}>
      <Helmet>
        <title>Contact Ascendant Strategy | Sales Funnel Agency NZ</title>
        <meta name="description" content="Get in touch with our NZ funnel agency. We respond within 24 hours. Questions about pricing, services, or custom projects welcome." />
        <link rel="canonical" href="https://ascendant.company/contact" />
        <meta property="og:title" content="Contact Ascendant Strategy" />
        <meta property="og:description" content="Questions about our funnel services? Get in touch and we'll respond within 24 hours." />
        <meta property="og:url" content="https://ascendant.company/contact" />
      </Helmet>

      {/* Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#18181b', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.2rem', fontWeight: 700 }}>
          <span style={{ color: '#dc2626' }}>▲</span> Ascendant Strategy
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ color: '#71717a', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Home</Link>
          <Link to="/quiz" style={{ color: '#71717a', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Free Quiz</Link>
          <Link to="/pricing" style={{ color: '#71717a', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Pricing</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '1rem', fontWeight: 700 }}>
            Get In <span style={{ color: '#dc2626' }}>Touch</span>
          </h1>
          <p style={{ color: '#71717a', fontSize: '1.1rem' }}>
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem' }}>
          {sent ? (
            <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', padding: '3rem', textAlign: 'center', gridColumn: '1 / -1' }}>
              <div style={{ width: '80px', height: '80px', background: 'rgba(220, 38, 38, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 1.5rem', color: '#dc2626' }}>
                ✓
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Message Sent!</h3>
              <p style={{ color: '#71717a', marginBottom: '2rem' }}>
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setSent(false)} 
                style={{ background: 'none', border: '2px solid #dc2626', color: '#dc2626', padding: '1rem 2rem', borderRadius: '10px', cursor: 'pointer', fontWeight: 600 }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', padding: '2.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#71717a', marginBottom: '0.5rem', fontWeight: 500 }}>Name *</label>
                  <input 
                    type="text" 
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ width: '100%', padding: '1rem 1.25rem', background: '#fafafa', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '10px', color: '#18181b', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#71717a', marginBottom: '0.5rem', fontWeight: 500 }}>Email *</label>
                  <input 
                    type="email" 
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{ width: '100%', padding: '1rem 1.25rem', background: '#fafafa', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '10px', color: '#18181b', fontSize: '1rem' }}
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#71717a', marginBottom: '0.5rem', fontWeight: 500 }}>Subject</label>
                <input 
                  type="text" 
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={{ width: '100%', padding: '1rem 1.25rem', background: '#fafafa', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '10px', color: '#18181b', fontSize: '1rem' }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#71717a', marginBottom: '0.5rem', fontWeight: 500 }}>Message *</label>
                <textarea 
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: '100%', padding: '1rem 1.25rem', background: '#fafafa', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '10px', color: '#18181b', fontSize: '1rem', resize: 'vertical' }}
                />
              </div>
              
              <button 
                type="submit"
                style={{ width: '100%', padding: '1.25rem', background: '#dc2626', border: 'none', color: '#fff', fontSize: '1rem', fontWeight: 600, borderRadius: '10px', cursor: 'pointer' }}
              >
                Send Message
              </button>
            </form>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Contact Information</h3>
              <p style={{ color: '#71717a', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(220, 38, 38, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>📧</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                    <div style={{ fontSize: '1rem', fontWeight: 500 }}>hello@ascendantstrategy.com</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(220, 38, 38, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>🌍</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</div>
                    <div style={{ fontSize: '1rem', fontWeight: 500 }}>New Zealand</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(220, 38, 38, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>⏰</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Response Time</div>
                    <div style={{ fontSize: '1rem', fontWeight: 500 }}>Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Quick Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link to="/quiz" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#fafafa', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '10px', color: '#18181b', textDecoration: 'none', fontWeight: 500 }}>
                  <span>Take Free Quiz</span>
                  <span style={{ color: '#dc2626' }}>→</span>
                </Link>
                <Link to="/pricing" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#fafafa', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '10px', color: '#18181b', textDecoration: 'none', fontWeight: 500 }}>
                  <span>View Pricing</span>
                  <span style={{ color: '#dc2626' }}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  )
}