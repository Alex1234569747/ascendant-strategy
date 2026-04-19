import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResend, setShowResend] = useState(false);
  const { login, signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await axios.post(`${API_URL}/api/auth/login`, {
          email: form.email,
          password: form.password
        });
        localStorage.setItem('token', res.data.token);
        window.location.reload();
        onClose();
        setForm({ name: '', email: '', password: '' });
      } else {
        const res = await axios.post(`${API_URL}/api/auth/signup`, {
          name: form.name,
          email: form.email,
          password: form.password
        });
        
        if (res.data.needsVerification) {
          setSuccess('Account created! Check your email to verify your account.');
          setMode('verify');
        }
        setForm({ name: '', email: '', password: '' });
      }
    } catch (err) {
      const errorData = err.response?.data;
      if (errorData?.needsVerification) {
        setShowResend(true);
        setError('Please verify your email first. Check your inbox or resend the verification link.');
      } else {
        setError(errorData?.error || 'Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setLoading(true);
    setError('');
    try {
      await axios.post(`${API_URL}/api/auth/resend-verification`, { email: form.email });
      setSuccess('Verification email sent! Check your inbox.');
      setShowResend(false);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to resend email');
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setError('');
    setSuccess('');
    setShowResend(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="auth-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="auth-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="auth-close" onClick={onClose}>×</button>
            
            <div className="auth-header">
              <h2>{mode === 'login' ? 'Welcome Back' : mode === 'signup' ? 'Create Account' : 'Check Your Email'}</h2>
              <p>{mode === 'login' ? 'Sign in to continue' : mode === 'signup' ? 'Start building for free' : 'We sent you a verification link'}</p>
            </div>

            {mode === 'verify' ? (
              <div className="verify-message">
                <div className="verify-icon">✉</div>
                <p>We sent a verification link to <strong>{form.email || 'your email'}</strong></p>
                <p className="small">Click the link in your email to activate your account. Check spam if you don't see it.</p>
                <button className="auth-resend" onClick={() => setMode('login')}>
                  Back to login
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {mode === 'signup' && (
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                )}
                
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="••••••••"
                    required
                    minLength={6}
                  />
                </div>

                {error && <div className="auth-error">{error}</div>}
                {success && <div className="auth-success">{success}</div>}
                
                {showResend && (
                  <button type="button" className="auth-resend" onClick={handleResend} disabled={loading}>
                    Resend verification email
                  </button>
                )}

                <button type="submit" className="auth-submit" disabled={loading}>
                  {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
                </button>
              </form>
            )}

            <div className="auth-footer">
              {mode === 'login' && (
                <p>Don't have an account? <button onClick={switchMode}>Sign up free</button></p>
              )}
              {mode === 'signup' && (
                <p>Already have an account? <button onClick={switchMode}>Sign in</button></p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}