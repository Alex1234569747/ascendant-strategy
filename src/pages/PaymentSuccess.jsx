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
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#18181b', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: '600px', textAlign: 'center' }}>
        {loading ? (
          <div>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              border: '4px solid rgba(220, 38, 38, 0.2)', 
              borderTopColor: '#dc2626',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 2rem'
            }}></div>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Verifying your payment...</h1>
          </div>
        ) : (
          <>
            {/* Success Icon */}
            <div style={{ 
              width: '100px', 
              height: '100px', 
              background: '#dc2626',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              fontSize: '3rem',
              color: '#fff'
            }}>
              ✓
            </div>

            {/* Title */}
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              Payment <span style={{ color: '#dc2626' }}>Successful!</span>
            </h1>

            <p style={{ color: '#71717a', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Thank you for your purchase! We're processing your order now.
            </p>

            {/* Order Details */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '20px', 
              padding: '2rem',
              marginBottom: '2rem',
              border: '1px solid rgba(0,0,0,0.08)'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ color: '#71717a', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Package</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}>{planNames[planId] || 'Your Package'}</div>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(0,0,0,0.08)'
              }}>
                <div>
                  <div style={{ color: '#71717a', fontSize: '0.75rem' }}>Amount Paid</div>
                  <div style={{ color: '#dc2626', fontSize: '1.25rem', fontWeight: 700 }}>{planPrices[planId] || 'NZ$'}</div>
                </div>
                <div>
                  <div style={{ color: '#71717a', fontSize: '0.75rem' }}>Currency</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{paymentDetails?.currency?.toUpperCase() || 'NZD'}</div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div style={{ 
              background: 'rgba(220, 38, 38, 0.05)', 
              borderRadius: '16px', 
              padding: '1.5rem',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>📋 What happens next?</h3>
              <ul style={{ listStyle: 'none', color: '#52525b', fontSize: '0.95rem' }}>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#dc2626', fontWeight: 700 }}>✓</span>
                  Confirmation email sent to your inbox
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#dc2626', fontWeight: 700 }}>✓</span>
                  We'll start work on your funnel within 24 hours
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#dc2626', fontWeight: 700 }}>✓</span>
                  Strategy consultation scheduled (for Strategy & Full packages)
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#dc2626', fontWeight: 700 }}>✓</span>
                  You'll receive updates as we build your funnel
                </li>
              </ul>
            </div>

            {/* Contact */}
            <p style={{ color: '#71717a', marginBottom: '2rem' }}>
              Questions? Email us at <a href="mailto:hello@ascendantstrategy.com" style={{ color: '#dc2626' }}>hello@ascendantstrategy.com</a>
            </p>

            {/* CTA */}
            <Link 
              to="/" 
              style={{ 
                display: 'inline-block',
                padding: '1rem 2rem',
                background: '#dc2626',
                color: '#fff',
                fontWeight: 700,
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              Return to Home →
            </Link>
          </>
        )}

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}