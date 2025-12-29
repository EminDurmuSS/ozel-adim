import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LoadingSpinner from './components/LoadingSpinner'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'))
const InsolesPage = lazy(() => import('./pages/InsolesPage'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-x-hidden">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tabanliklar" element={<InsolesPage />} />
          </Routes>
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </main>

      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  )
}

export default App
