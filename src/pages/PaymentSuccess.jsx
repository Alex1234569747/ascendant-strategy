import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const API_URL = import.meta.env.PROD ? '' : 'http://localhost:5000'

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const planId = searchParams.get('plan')
  const [loading, setLoading] = useState(true)
  const [paymentDetails, setPaymentDetails] = useState(null)

  useEffect(() => {
    if (sessionId) {
      // Verify payment with backend
      fetch(`${API_URL}/api/payment/verify/${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setPaymentDetails(data)
          setLoading(false)
        })
        .catch(err => {
          console.error('Verify error:', err)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [sessionId])

  const planNames = {
    strategy: 'Funnel Strategy Session',
    full: 'Full Funnel Implementation',
    agency: 'Growth Partner Package'
  }

  const planPrices = {
    strategy: 'NZ$150',
    full: 'NZ$750',
    agency: 'NZ$1,500'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0f14', color: '#e8eaed', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: '600px', textAlign: 'center' }}>
        {loading ? (
          <div>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              border: '4px solid rgba(45, 212, 191, 0.2)', 
              borderTopColor: '#2dd4bf',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 2rem'
            }}></div>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Verifying your payment...</h1>
          </div>
        ) : (
          <>
            {/* Success Icon */}
            <div style={{ 
              width: '100px', 
              height: '100px', 
              background: 'linear-gradient(135deg, #2dd4bf, #5eead4)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              fontSize: '3rem'
            }}>
              ✓
            </div>

            {/* Title */}
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>
              Payment <span style={{ background: 'linear-gradient(135deg, #2dd4bf, #5eead4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Successful!</span>
            </h1>

            <p style={{ color: '#8b949e', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Thank you for your purchase! We're processing your order now.
            </p>

            {/* Order Details */}
            <div style={{ 
              background: '#111920', 
              borderRadius: '20px', 
              padding: '2rem',
              marginBottom: '2rem',
              border: '1px solid rgba(45, 212, 191, 0.12)'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ color: '#8b949e', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Package</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{planNames[planId] || 'Your Package'}</div>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(45, 212, 191, 0.12)'
              }}>
                <div>
                  <div style={{ color: '#8b949e', fontSize: '0.75rem' }}>Amount Paid</div>
                  <div style={{ color: '#2dd4bf', fontSize: '1.25rem', fontWeight: 700 }}>{planPrices[planId] || 'NZ$'}</div>
                </div>
                <div>
                  <div style={{ color: '#8b949e', fontSize: '0.75rem' }}>Currency</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{paymentDetails?.currency?.toUpperCase() || 'NZD'}</div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div style={{ 
              background: 'rgba(45, 212, 191, 0.08)', 
              borderRadius: '16px', 
              padding: '1.5rem',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#2dd4bf', marginBottom: '1rem', fontSize: '1.1rem' }}>📋 What happens next?</h3>
              <ul style={{ listStyle: 'none', color: '#8b949e', fontSize: '0.95rem' }}>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#2dd4bf' }}>✓</span>
                  Confirmation email sent to your inbox
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#2dd4bf' }}>✓</span>
                  We'll start work on your funnel within 24 hours
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#2dd4bf' }}>✓</span>
                  Strategy consultation scheduled (for Strategy & Full packages)
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#2dd4bf' }}>✓</span>
                  You'll receive updates as we build your funnel
                </li>
              </ul>
            </div>

            {/* Contact */}
            <p style={{ color: '#8b949e', marginBottom: '2rem' }}>
              Questions? Email us at <a href="mailto:hello@ascendantstrategy.com" style={{ color: '#2dd4bf' }}>hello@ascendantstrategy.com</a>
            </p>

            {/* CTA */}
            <Link 
              to="/" 
              style={{ 
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #2dd4bf, #5eead4)',
                color: '#0a0f14',
                fontWeight: 700,
                borderRadius: '12px',
                textDecoration: 'none'
              }}
            >
              Return to Home →
            </Link>
          </>
        )}

        {/* Spinner animation */}
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}