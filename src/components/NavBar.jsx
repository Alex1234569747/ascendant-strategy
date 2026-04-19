import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './NavBar.css'

export default function NavBar() {
  return (
    <motion.nav className="main-nav" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">Ascendant <span className="gradient-text">Strategy</span></span>
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/quiz" className="nav-link">Free Quiz</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <Link to="/quiz" className="nav-cta">Get Started</Link>
      </div>
    </motion.nav>
  )
}
