import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import SchemaMarkup from './components/SchemaMarkup'
import Landing from './pages/Landing'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Quiz from './pages/Quiz'
import Payment from './pages/Payment'
import PaymentSuccess from './pages/PaymentSuccess'

export default function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <SchemaMarkup />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}