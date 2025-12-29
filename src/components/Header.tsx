import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Aktif section'ı tespit et
      const sections = ['home', 'about', 'services', 'problems', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Ana Sayfa', href: '#home', isHash: true },
    { label: 'Tabanlıklar', href: '/tabanliklar', isHash: false },
    { label: 'Hakkımızda', href: '#about', isHash: true },
    { label: 'Hizmetlerimiz', href: '#services', isHash: true },
    { label: 'Çözümlerimiz', href: '#problems', isHash: true },
    { label: 'İletişim', href: '#contact', isHash: true },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    if (isHash) {
      e.preventDefault()

      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
      setIsMobileMenuOpen(false)
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-primary-500/5 border-b border-primary-100/50'
          : 'bg-gradient-to-b from-white/90 via-white/70 to-transparent backdrop-blur-sm'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 relative group"
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500/20 rounded-xl blur-lg group-hover:bg-primary-500/30 transition-all duration-300" />
                <img
                  src="/logo.jpg"
                  alt="Özel Adım Logo"
                  className="h-12 md:h-14 w-auto object-contain rounded-xl relative z-10 ring-2 ring-white/50 shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 bg-clip-text text-transparent">
                  Özel Adım
                </span>
                <span className="text-xs md:text-sm text-secondary-600 font-semibold tracking-wide">
                  Kişiye Özel Tabanlık
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.isHash
                ? activeSection === item.href
                : location.pathname === item.href

              return item.isHash ? (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isHash)}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 relative group ${
                    isActive
                      ? 'text-primary-700 bg-primary-50/80'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full"
                    initial={{ width: 0, x: '-50%' }}
                    animate={{
                      width: isActive ? '70%' : 0,
                      x: '-50%'
                    }}
                    whileHover={{ width: '70%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={(e) => handleNavClick(e as any, item.href, item.isHash)}
                >
                  <motion.div
                    className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 relative group ${
                      isActive
                        ? 'text-primary-700 bg-primary-50/80'
                        : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    <motion.span
                      className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full"
                      initial={{ width: 0, x: '-50%' }}
                      animate={{
                        width: isActive ? '70%' : 0,
                        x: '-50%'
                      }}
                      whileHover={{ width: '70%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="tel:+905437205313"
              className="group relative px-5 py-2.5 rounded-xl font-semibold text-sm bg-white border-2 border-primary-200 text-primary-700 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100/0 via-primary-100/50 to-primary-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative z-10">Ara</span>
            </motion.a>
            <motion.a
              href="https://wa.me/905437205313"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative z-10">WhatsApp</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button - Optimized */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-primary-50 active:bg-primary-100 transition-all duration-300 relative z-50"
            aria-label="Menüyü aç/kapat"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-white' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-secondary-900/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-20 left-0 right-0 bottom-0 bg-gradient-to-br from-white via-primary-50/30 to-white z-40 lg:hidden overflow-y-auto"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="container-custom py-8 space-y-2">
              {navItems.map((item, index) => (
                item.isHash ? (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.isHash)}
                    className="block py-4 px-6 text-lg font-semibold text-secondary-900 hover:text-primary-600 hover:bg-white rounded-xl transition-all duration-300 border-b border-secondary-100 last:border-0"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      {item.label}
                    </span>
                  </motion.a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={(e) => handleNavClick(e as any, item.href, item.isHash)}
                  >
                    <motion.div
                      className="block py-4 px-6 text-lg font-semibold text-secondary-900 hover:text-primary-600 hover:bg-white rounded-xl transition-all duration-300 border-b border-secondary-100 last:border-0"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                )
              ))}
              <div className="pt-8 space-y-4">
                <a href="tel:+905437205313" className="btn btn-secondary btn-lg w-full justify-center shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +90 543 720 53 13
                </a>
                <a href="https://wa.me/905437205313" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg w-full justify-center shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp ile İletişim
                </a>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
