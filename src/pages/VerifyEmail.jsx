import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      const id = searchParams.get('id');

      if (!token || !id) {
        setStatus('error');
        setMessage('Invalid verification link');
        return;
      }

      try {
        const res = await axios.get(`/api/auth/verify?token=${token}&id=${id}`);
        setStatus('success');
        setMessage(res.data.message);
      } catch (err) {
        setStatus('error');
        setMessage(err.response?.data?.error || 'Verification failed');
      }
    };

    verifyEmail();
  }, [searchParams]);

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="verify-page">
      <div className="bg-gradient" />
      <motion.div 
        className="verify-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {status === 'verifying' && (
          <>
            <div className="spinner" />
            <h2>Verifying...</h2>
            <p>Please wait while we verify your email</p>
          </>
        )}
        
        {status === 'success' && (
          <>
            <div className="verify-icon success">✓</div>
            <h2>Email Verified!</h2>
            <p>{message}</p>
            <button className="verify-btn" onClick={handleLogin}>
              Continue to Login
            </button>
          </>
        )}
        
        {status === 'error' && (
          <>
            <div className="verify-icon error">✗</div>
            <h2>Verification Failed</h2>
            <p>{message}</p>
            <button className="verify-btn" onClick={() => navigate('/')}>
              Go Back
            </button>
          </>
        )}
      </motion.div>

      <style>{`
        .verify-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }
        .verify-card {
          background: rgba(15,15,20,0.9);
          border: 1px solid rgba(212,175,55,0.15);
          padding: 3rem;
          text-align: center;
          max-width: 420px;
          width: 100%;
        }
        .spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(212,175,55,0.2);
          border-top-color: #d4af37;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1.5rem;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .verify-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1.5rem;
        }
        .verify-icon.success { background: rgba(40,167,69,0.2); color: #28a745; }
        .verify-icon.error { background: rgba(220,53,69,0.2); color: #dc3545; }
        h2 { font-family: 'Playfair Display', serif; font-size: 1.8rem; margin-bottom: 0.75rem; }
        p { color: #8a8a7a; margin-bottom: 2rem; }
        .verify-btn {
          background: #d4af37;
          color: #050508;
          border: none;
          padding: 0.8rem 2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .verify-btn:hover { background: #f5e6c8; }
      `}</style>
    </div>
  );
}