import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import './Dashboard.css'

export default function Dashboard() {
  const { user, loading: authLoading } = useAuth()
  const [funnels, setFunnels] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [form, setForm] = useState({ businessType: '', goal: '', targetAudience: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/')
    }
  }, [user, authLoading, navigate])

  useEffect(() => {
    if (user) fetchFunnels()
  }, [user])

  const fetchFunnels = async () => {
    try {
      const res = await axios.get('/api/funnels')
      setFunnels(res.data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const createFunnel = async () => {
    if (!form.businessType || !form.goal) {
      setError('Please fill in business type and goal')
      return
    }
    
    setGenerating(true)
    setError('')
    try {
      // First generate the funnel
      const res = await axios.post('/api/funnels/generate', form)
      setFunnels([res.data, ...funnels])
      setShowModal(false)
      setForm({ businessType: '', goal: '', targetAudience: '' })
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to generate funnel')
    } finally {
      setGenerating(false)
    }
  }

  const deleteFunnel = async (id) => {
    if (!confirm('Delete this funnel?')) return
    await axios.delete(`/api/funnels/${id}`)
    setFunnels(funnels.filter(f => f._id !== id))
  }

  if (authLoading || !user) {
    return (
      <div className="dashboard-loading">
        <div className="loader" />
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <div className="dashboard-bg" />
      
      <div className="dashboard-content">
        {/* Header */}
        <div className="dash-header">
          <div>
            <h1>Welcome back, <span className="gradient-text">{user.name}</span></h1>
            <p>Manage your funnel strategies</p>
          </div>
          <div className="header-actions">
            <Link to="/quiz" className="btn-quiz">
              🧠 Smart Quiz
            </Link>
            <button onClick={() => setShowModal(true)} className="btn-new-funnel">
              + Quick Create
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="dash-stats">
          <div className="stat-card">
            <span className="stat-number">{funnels.length}</span>
            <span className="stat-label">Total Funnels</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{funnels.filter(f => f.status === 'published').length}</span>
            <span className="stat-label">Published</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{user.plan}</span>
            <span className="stat-label">Current Plan</span>
          </div>
        </div>

        {/* Funnels List */}
        <div className="funnels-section">
          <h2>Your Strategies</h2>
          
          {loading ? (
            <div className="loading-state">
              <div className="loader" />
              <p>Loading your funnels...</p>
            </div>
          ) : funnels.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">📊</span>
              <h3>No strategies yet</h3>
              <p>Create your first AI-powered funnel strategy</p>
              <button onClick={() => setShowModal(true)} className="btn-primary">
                Create Strategy
              </button>
            </div>
          ) : (
            <div className="funnels-list">
              {funnels.map((funnel, i) => (
                <motion.div 
                  key={funnel._id}
                  className="funnel-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="funnel-info">
                    <h4>{funnel.name}</h4>
                    <p>{funnel.description || 'Custom funnel strategy'}</p>
                    <div className="funnel-meta">
                      <span className="badge">{funnel.steps?.length || 0} steps</span>
                      <span className="date">{new Date(funnel.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="funnel-actions">
                    <Link to={`/editor/${funnel._id}`} className="btn-edit">Edit</Link>
                    <Link to={`/preview/${funnel._id}`} className="btn-preview">Preview</Link>
                    <button onClick={() => deleteFunnel(funnel._id)} className="btn-delete">×</button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !generating && setShowModal(false)}
          >
            <motion.div 
              className="modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <h2>Create New Strategy</h2>
              <p>Tell us about your business to generate a custom funnel</p>
              
              <div className="form">
                <div className="form-group">
                  <label>Business Type *</label>
                  <input
                    type="text"
                    placeholder="e.g., High-ticket coaching, SaaS"
                    value={form.businessType}
                    onChange={e => setForm({...form, businessType: e.target.value})}
                    disabled={generating}
                  />
                </div>
                <div className="form-group">
                  <label>Revenue Goal *</label>
                  <textarea
                    placeholder="e.g., Generate leads for $10K consultations"
                    value={form.goal}
                    onChange={e => setForm({...form, goal: e.target.value})}
                    disabled={generating}
                  />
                </div>
                <div className="form-group">
                  <label>Target Audience</label>
                  <input
                    type="text"
                    placeholder="e.g., C-suite executives"
                    value={form.targetAudience}
                    onChange={e => setForm({...form, targetAudience: e.target.value})}
                    disabled={generating}
                  />
                </div>
              </div>

              {error && <div className="modal-error">{error}</div>}

              <div className="modal-actions">
                <button onClick={() => setShowModal(false)} className="btn-cancel" disabled={generating}>
                  Cancel
                </button>
                <button onClick={createFunnel} className="btn-generate" disabled={generating}>
                  {generating ? 'Generating...' : 'Generate Strategy'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
