import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion'
import './FunnelEditor.css'

const STEP_TYPES = [
  { id: 'landing', label: 'Landing' },
  { id: 'lead-capture', label: 'Lead Capture' },
  { id: 'sales', label: 'Sales' },
  { id: 'thank-you', label: 'Thank You' }
]

export default function FunnelEditor() {
  const { id } = useParams()
  const [funnel, setFunnel] = useState(null)
  const [selectedStep, setSelectedStep] = useState(null)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('content')
  const [showAddMenu, setShowAddMenu] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => { fetchFunnel() }, [id])

  const fetchFunnel = async () => {
    try {
      const res = await axios.get(`/api/funnels/single/${id}`)
      setFunnel(res.data)
      if (res.data.steps?.length > 0) setSelectedStep(res.data.steps[0])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const saveFunnel = async () => {
    setSaving(true)
    try {
      await axios.put(`/api/funnels/${id}`, funnel)
    } catch (error) {
      console.error('Save error:', error)
    }
    setSaving(false)
  }

  const updateFunnel = (field, value) => setFunnel({ ...funnel, [field]: value })

  const updateStep = (field, value) => {
    const updatedSteps = funnel.steps.map(s => s.order === selectedStep.order ? { ...s, [field]: value } : s)
    setFunnel({ ...funnel, steps: updatedSteps })
    setSelectedStep({ ...selectedStep, [field]: value })
  }

  const addStep = (type) => {
    const newStep = { 
      order: (funnel.steps?.length || 0) + 1, 
      type, 
      title: '', 
      content: '', 
      imageUrl: '', 
      ctaText: 'Learn More', 
      ctaLink: funnel.checkoutUrl || '#', 
      design: { backgroundColor: '#0a0f14', textColor: '#e8eaed', fontFamily: 'Outfit' } 
    }
    setFunnel({ ...funnel, steps: [...(funnel.steps || []), newStep] })
    setSelectedStep(newStep)
    setShowAddMenu(false)
  }

  const deleteStep = (order) => {
    const updated = funnel.steps.filter(s => s.order !== order).map((s, i) => ({ ...s, order: i + 1 }))
    setFunnel({ ...funnel, steps: updated })
    if (selectedStep.order === order) setSelectedStep(updated[0] || null)
  }

  if (loading) return <div className="editor-loading"><div className="loader" /></div>
  if (!funnel) return <div className="editor-error"><h2>Strategy not found</h2><Link to="/dashboard">Back to Dashboard</Link></div>

  return (
    <div className="funnel-editor">
      {/* Sidebar */}
      <aside className="editor-sidebar">
        <div className="sidebar-header">
          <Link to="/dashboard" className="back-link">← Back</Link>
          <h3>{funnel.name}</h3>
        </div>
        
        <div className="steps-section">
          <h4>Phases</h4>
          <div className="steps-list">
            {funnel.steps?.map(step => (
              <div 
                key={step.order} 
                className={`step-item ${selectedStep?.order === step.order ? 'active' : ''}`}
                onClick={() => setSelectedStep(step)}
              >
                <span className="step-num">{step.order}</span>
                <span className="step-type">{STEP_TYPES.find(t => t.id === step.type)?.label}</span>
                <button className="delete-step" onClick={(e) => { e.stopPropagation(); deleteStep(step.order); }}>×</button>
              </div>
            ))}
          </div>
          
          <div className="add-step">
            <button onClick={() => setShowAddMenu(!showAddMenu)}>+ Add Phase</button>
            {showAddMenu && (
              <div className="add-menu">
                {STEP_TYPES.map(type => (
                  <button key={type.id} onClick={() => addStep(type.id)}>{type.label}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Editor */}
      <main className="editor-main">
        {selectedStep ? (
          <div className="step-editor">
            <div className="editor-header">
              <span className="step-badge">{STEP_TYPES.find(t => t.id === selectedStep.type)?.label}</span>
              <span className="step-order">Phase {selectedStep.order}</span>
            </div>

            <div className="editor-tabs">
              <button className={activeTab === 'content' ? 'active' : ''} onClick={() => setActiveTab('content')}>Content</button>
              <button className={activeTab === 'design' ? 'active' : ''} onClick={() => setActiveTab('design')}>Design</button>
            </div>

            {activeTab === 'content' && (
              <div className="tab-panel">
                <div className="form-group">
                  <label>Headline</label>
                  <input type="text" value={selectedStep.title || ''} onChange={e => updateStep('title', e.target.value)} placeholder="Enter headline..." />
                </div>
                <div className="form-group">
                  <label>Content</label>
                  <textarea value={selectedStep.content || ''} onChange={e => updateStep('content', e.target.value)} placeholder="Write content..." rows={6} />
                </div>
                <div className="form-group">
                  <label>CTA Button Text</label>
                  <input type="text" value={selectedStep.ctaText || ''} onChange={e => updateStep('ctaText', e.target.value)} placeholder="Get Started" />
                </div>
                <div className="form-group">
                  <label>CTA Link</label>
                  <input type="text" value={selectedStep.ctaLink || ''} onChange={e => updateStep('ctaLink', e.target.value)} placeholder="https://..." />
                </div>
              </div>
            )}

            {activeTab === 'design' && (
              <div className="tab-panel">
                <div className="form-row">
                  <div className="form-group">
                    <label>Background</label>
                    <div className="color-input">
                      <input type="color" value={selectedStep.design?.backgroundColor || '#0a0f14'} onChange={e => updateStep('design', { ...selectedStep.design, backgroundColor: e.target.value })} />
                      <input type="text" value={selectedStep.design?.backgroundColor || '#0a0f14'} onChange={e => updateStep('design', { ...selectedStep.design, backgroundColor: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Text Color</label>
                    <div className="color-input">
                      <input type="color" value={selectedStep.design?.textColor || '#e8eaed'} onChange={e => updateStep('design', { ...selectedStep.design, textColor: e.target.value })} />
                      <input type="text" value={selectedStep.design?.textColor || '#e8eaed'} onChange={e => updateStep('design', { ...selectedStep.design, textColor: e.target.value })} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="editor-actions">
              <Link to={`/preview/${id}`} className="btn-preview">Preview</Link>
              <button onClick={saveFunnel} className="btn-save" disabled={saving}>
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        ) : (
          <div className="no-step">
            <p>Select a phase to edit</p>
            <button onClick={() => setShowAddMenu(true)} className="btn-add">+ Add First Phase</button>
          </div>
        )}
      </main>
    </div>
  )
}
