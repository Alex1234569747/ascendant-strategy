import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0f14', color: '#e8eaed' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(45, 212, 191, 0.12)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#e8eaed', fontSize: '1.1rem' }}>
          <span style={{ color: '#2dd4bf' }}>◆</span> Ascendant Strategy
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <Link to="/quiz" style={{ color: '#8b949e', textDecoration: 'none' }}>Free Quiz</Link>
          <Link to="/pricing" style={{ color: '#8b949e', textDecoration: 'none' }}>Pricing</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}>
            Get In <span style={{ background: 'linear-gradient(135deg, #2dd4bf, #5eead4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Touch</span>
          </h1>
          <p style={{ color: '#8b949e', fontSize: '1.1rem' }}>
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem' }}>
          {sent ? (
            <div style={{ background: '#111920', border: '1px solid rgba(45, 212, 191, 0.12)', borderRadius: '20px', padding: '3rem', textAlign: 'center', gridColumn: '1 / -1' }}>
              <div style={{ width: '80px', height: '80px', background: 'rgba(34, 197, 94, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 1.5rem' }}>
                ✓
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Message Sent!</h3>
              <p style={{ color: '#8b949e', marginBottom: '2rem' }}>
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setSent(false)} 
                style={{ background: 'none', border: '1px solid rgba(45, 212, 191, 0.12)', color: '#2dd4bf', padding: '1rem 2rem', borderRadius: '10px', cursor: 'pointer' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#111920', border: '1px solid rgba(45, 212, 191, 0.12)', borderRadius: '20px', padding: '2.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#8b949e', marginBottom: '0.5rem' }}>Name *</label>
                  <input 
                    type="text" 
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ width: '100%', padding: '1rem 1.25rem', background: '#0a0f14', border: '1px solid rgba(45, 212, 191, 0.12)', borderRadius: '10px', color: '#e8eaed', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#8b949e', marginBottom: '0.5rem' }}>Email *</label>
                  <input 
                    type="email" 
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{ width: '100%', padding: '1rem 1.25rem', background: '#0a0f14', border: '1px solid rgba(45, 212, 191, 0.12)', borderRadius: '10px', color: '#e8eaed', fontSize: '1rem' }}
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#8b949e', marginBottom: '0.5rem' }}>Subject</label>
                <input 
                  type="text" 
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={{ width: '100%', padding: '1rem 1.25rem', background: '#0a0f14', border: '1px solid rgba(45, 212, 191, 0.12)', borderRadius: '10px', color: '#e8eaed', fontSize: '1rem' }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#8b949e', marginBottom: '0.5rem' }}>Message *</label>
                <textarea 
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: '100%', padding: '1rem 1.25rem', background: '#0a0f14', border: '1px solid rgba(45, 212, 191, 0.12)', borderRadius: '10px', color: '#e8eaed', fontSize: '1rem', resize: 'vertical' }}
                />
              </div>
              
              <button 
                type="submit"
                style={{ width: '100%', padding: '1.25rem', background: '#2dd4bf', border: 'none', color: '#0a0f14', fontSize: '1rem', fontWeight: 600, borderRadius: '10px', cursor: 'pointer' }}
              >
                Send Message
              </button>
            </form>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#111920', border: '1px solid rgba(45, 212, 191, 0.12)', borderRadius: '20px', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Contact Information</h3>
              <p style={{ color: '#8b949e', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(45, 212, 191, 0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📧</div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>Email</div>
                    <div style={{ fontSize: '1rem' }}>hello@ascendantstrategy.com</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(45, 212, 191, 0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🌍</div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>Location</div>
                    <div style={{ fontSize: '1rem' }}>New Zealand</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(45, 212, 191, 0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>⏰</div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>Response Time</div>
                    <div style={{ fontSize: '1rem' }}>Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#111920', border: '1px solid rgba(45, 212, 191, 0.12)', borderRadius: '20px', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Quick Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link to="/quiz" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#0a0f14', border: '1px solid rgba(45, 212, 191, 0.12)', borderRadius: '10px', color: '#e8eaed', textDecoration: 'none' }}>
                  <span>Take Free Quiz</span>
                  <span style={{ color: '#8b949e' }}>→</span>
                </Link>
                <Link to="/pricing" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#0a0f14', border: '1px solid rgba(45, 212, 191, 0.12)', borderRadius: '10px', color: '#e8eaed', textDecoration: 'none' }}>
                  <span>View Pricing</span>
                  <span style={{ color: '#8b949e' }}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
