import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';

export default function PaymentCanceled() {
  return (
    <>
      <NavBar title="Payment Canceled" />
      <div className="canceled-page">
        <div className="bg-gradient" />
        <motion.div 
          className="canceled-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="canceled-icon">×</div>
          <h2>Payment Canceled</h2>
          <p>No worries — your payment wasn't processed.</p>
          <p className="note">You can still access your dashboard and try again when ready.</p>
          
          <div className="canceled-actions">
            <Link to="/pricing" className="btn-primary">
              Try Again →
            </Link>
            <Link to="/dashboard" className="btn-secondary">
              ← Go to Dashboard
            </Link>
          </div>
        </motion.div>
      </div>

      <style>{`
        .canceled-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 2rem 2rem;
          position: relative;
        }
        .canceled-card {
          background: rgba(15,15,20,0.95);
          border: 1px solid rgba(212,175,55,0.15);
          padding: 3rem;
          text-align: center;
          max-width: 480px;
          width: 100%;
        }
        .canceled-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(220,53,69,0.2);
          color: #dc3545;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          margin: 0 auto 1.5rem;
        }
        .canceled-card h2 { 
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #f5f5f0;
        }
        .canceled-card p { 
          color: #8a8a7a;
          margin-bottom: 1rem;
        }
        .canceled-card .note {
          font-size: 0.9rem;
          color: #666;
        }
        .canceled-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
        .btn-primary {
          display: block;
          padding: 1rem 2rem;
          background: #d4af37;
          color: #050508;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 0.05em;
          transition: all 0.3s;
          border-radius: 4px;
        }
        .btn-primary:hover {
          background: #e5c04a;
        }
        .btn-secondary {
          display: block;
          padding: 1rem 2rem;
          background: transparent;
          border: 1px solid rgba(212,175,55,0.3);
          color: #8a8a7a;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s;
          border-radius: 4px;
        }
        .btn-secondary:hover {
          border-color: #d4af37;
          color: #d4af37;
        }
      `}</style>
    </>
  );
}
