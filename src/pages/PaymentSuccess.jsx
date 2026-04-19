import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const plan = searchParams.get('plan') || 'full'
  const [verified, setVerified] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/verify/${sessionId}`)
        .then(r => r.json())
        .then(data => {
          setVerified(data.success === true)
          setChecking(false)
        })
        .catch(() => setChecking(false))
    } else {
      setChecking(false)
    }
  }, [sessionId])

  const planNames = {
    strategy: 'Funnel Strategy Session',
    full: 'Full Funnel Implementation',
    agency: 'Growth Partner Package'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#18181b' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#18181b', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.2rem', fontWeight: 700 }}>
          <span style={{ color: '#dc2626' }}>▲</span> Ascendant Strategy
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ color: '#71717a', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Home</Link>
          <Link to="/pricing" style={{ color: '#71717a', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Pricing</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
        {checking ? (
          <div style={{ background: '#fff', borderRadius: '24px', padding: '4rem', border: '1px solid rgba(0,0,0,0.08)' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              border: '4px solid rgba(220, 38, 38, 0.2)', 
              borderTopColor: '#dc2626',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 2rem'
            }}></div>
            <h1 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.5rem' }}>Verifying your payment...</h1>
            <p style={{ color: '#71717a' }}>Please wait while we confirm your transaction.</p>
          </div>
        ) : verified ? (
          <div style={{ background: '#fff', borderRadius: '24px', padding: '3rem', border: '1px solid rgba(0,0,0,0.08)' }}>
            <div style={{ 
              width: '100px', 
              height: '100px', 
              background: 'rgba(34, 197, 94, 0.1)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem'
            }}>
              <span style={{ fontSize: '3rem' }}>✅</span>
            </div>
            
            <h1 style={{ fontSize: '2rem', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.5rem', color: '#18181b' }}>
              Payment Successful!
            </h1>
            <p style={{ color: '#71717a', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Thank you for your purchase. Your transaction has been confirmed.
            </p>

            <div style={{ 
              background: 'rgba(220, 38, 38, 0.05)', 
              borderRadius: '16px', 
              padding: '1.5rem', 
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ color: '#71717a' }}>Package</span>
                <span style={{ fontWeight: 600 }}>{planNames[plan]}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ color: '#71717a' }}>Transaction ID</span>
                <span style={{ fontWeight: 600, fontFamily: 'monospace', fontSize: '0.9rem' }}>{sessionId?.slice(0, 20)}...</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#71717a' }}>Status</span>
                <span style={{ color: '#22c55e', fontWeight: 600 }}>✓ Paid</span>
              </div>
            </div>

            <div style={{ 
              background: 'rgba(220, 38, 38, 0.05)',
              border: '2px solid rgba(220, 38, 38, 0.2)',
              borderRadius: '16px',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#dc2626' }}>🎉 What's Next?</h3>
              <ul style={{ textAlign: 'left', listStyle: 'none', lineHeight: 2 }}>
                <li>📧 Check your email for confirmation & receipt</li>
                <li>📋 You'll receive a welcome email within 24 hours</li>
                <li>💬 We'll reach out to schedule your onboarding call</li>
                <li>🚀 Get ready for your funnel strategy!</li>
              </ul>
            </div>

            <Link 
              to="/" 
              style={{ 
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: '#dc2626',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '14px',
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 8px 30px rgba(220, 38, 38, 0.3)'
              }}
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <div style={{ background: '#fff', borderRadius: '24px', padding: '3rem', border: '1px solid rgba(0,0,0,0.08)' }}>
            <div style={{ 
              width: '100px', 
              height: '100px', 
              background: 'rgba(234, 179, 8, 0.1)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem'
            }}>
              <span style={{ fontSize: '3rem' }}>⏳</span>
            </div>
            
            <h1 style={{ fontSize: '2rem', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.5rem' }}>
              Payment Pending
            </h1>
            <p style={{ color: '#71717a', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Your payment is being processed. This may take a few moments.
            </p>

            <p style={{ color: '#71717a', marginBottom: '2rem' }}>
              If you completed payment but see this message, please wait a moment and refresh the page.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                onClick={() => window.location.reload()}
                style={{
                  padding: '1rem 2rem',
                  background: '#dc2626',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '14px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Refresh Page
              </button>
              <Link 
                to="/contact"
                style={{
                  padding: '1rem 2rem',
                  background: 'transparent',
                  color: '#dc2626',
                  border: '2px solid #dc2626',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  fontWeight: 700
                }}
              >
                Contact Support
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}