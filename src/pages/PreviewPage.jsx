import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion'
import './PreviewPage.css'

export default function PreviewPage() {
  const { id } = useParams()
  const [funnel, setFunnel] = useState(null)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => { fetchFunnel() }, [id])

  const fetchFunnel = async () => {
    try {
      const res = await axios.get(`/api/funnels/single/${id}`)
      setFunnel(res.data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="preview-loading"><div className="loader" /></div>
  if (!funnel) return <div className="preview-error"><h2>Strategy not found</h2><Link to="/dashboard">Back to Dashboard</Link></div>

  const steps = funnel.steps || []
  const currentStep = steps[currentStepIndex]
  const totalSteps = steps.length

  const nextStep = () => { if (currentStepIndex < totalSteps - 1) setCurrentStepIndex(i => i + 1) }
  const prevStep = () => { if (currentStepIndex > 0) setCurrentStepIndex(i => i - 1) }

  const handleCTA = (link) => {
    if (link && link.startsWith('http')) {
      window.open(link, '_blank')
    }
  }

  const bgColor = currentStep?.design?.backgroundColor || '#0a0f14'
  const textColor = currentStep?.design?.textColor || '#e8eaed'

  return (
    <div className="preview-page" style={{ backgroundColor: bgColor, color: textColor }}>
      {/* Header */}
      <div className="preview-header">
        <Link to={`/editor/${id}`} className="edit-link">← Edit</Link>
        <span className="funnel-name">{funnel.name}</span>
        <span className="step-counter">{currentStepIndex + 1} / {totalSteps}</span>
      </div>

      {/* Content */}
      <main className="preview-content">
        {currentStep && (
          <motion.div 
            key={currentStepIndex}
            className="step-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="step-label">{currentStep.type.replace('-', ' ')}</span>
            <h1>{currentStep.title || 'Untitled'}</h1>
            <div className="step-body">
              {currentStep.content?.split('\n').map((p, i) => p && <p key={i}>{p}</p>)}
            </div>
            {currentStep.ctaText && (
              <button 
                className="cta-button"
                onClick={() => handleCTA(currentStep.ctaLink || funnel.checkoutUrl)}
              >
                {currentStep.ctaText}
              </button>
            )}
          </motion.div>
        )}
      </main>

      {/* Navigation */}
      <div className="preview-nav">
        <button onClick={prevStep} disabled={currentStepIndex === 0}>← Previous</button>
        <div className="step-dots">
          {steps.map((_, i) => (
            <button 
              key={i}
              className={`dot ${i === currentStepIndex ? 'active' : ''}`}
              onClick={() => setCurrentStepIndex(i)}
            />
          ))}
        </div>
        <button onClick={nextStep} disabled={currentStepIndex === totalSteps - 1}>Next →</button>
      </div>

      {/* Progress */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }} />
      </div>
    </div>
  )
}
