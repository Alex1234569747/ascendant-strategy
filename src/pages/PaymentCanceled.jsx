import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PaymentCanceled() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      {/* Header */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#18181b', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.2rem', fontWeight: 700 }}>
          <span style={{ color: '#dc2626' }}>▲</span> Ascendant Strategy
        </Link>
      </nav>

      <motion.div 
        style={{ 
          background: '#fff', 
          border: '1px solid rgba(0,0,0,0.08)',
          padding: '3rem',
          textAlign: 'center',
          maxWidth: '480px',
          width: '100%',
          borderRadius: '20px'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div style={{ 
          width: '80px', 
          height: '80px', 
          borderRadius: '50%', 
          background: 'rgba(220, 38, 38, 0.1)', 
          color: '#dc2626', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '3rem', 
          margin: '0 auto 1.5rem' 
        }}>
          ×
        </div>
        <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 600 }}>Payment Canceled</h2>
        <p style={{ color: '#71717a', marginBottom: '1rem' }}>No worries — your payment wasn't processed.</p>
        <p style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>You can still access the quiz and try again when ready.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
          <Link to="/pricing" style={{ 
            display: 'block',
            padding: '1rem 2rem',
            background: '#dc2626',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            borderRadius: '10px',
            fontSize: '1rem'
          }}>
            Try Again →
          </Link>
          <Link to="/" style={{ 
            display: 'block',
            padding: '1rem 2rem',
            background: 'transparent',
            border: '1px solid rgba(0,0,0,0.15)',
            color: '#71717a',
            textDecoration: 'none',
            fontSize: '0.9rem',
            borderRadius: '10px'
          }}>
            ← Back to Home
          </Link>
        </div>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}