import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Takvim İkonu - ADIM 1 (Solid/Dolu)
const CalendarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 60" fill="currentColor" className={className}>
    <path d="M18 6 L18 8 L8 8 C6 8 6 10 6 12 L6 52 C6 54 8 54 8 54 L52 54 C54 54 54 52 54 52 L54 12 C54 10 52 10 52 10 L42 10 L42 6 L38 6 L38 10 L22 10 L22 6 Z M8 20 L52 20 L52 52 L8 52 Z M18 28 C16.9 28 16 28.9 16 30 C16 31.1 16.9 32 18 32 C19.1 32 20 31.1 20 30 C20 28.9 19.1 28 18 28 Z M30 28 C28.9 28 28 28.9 28 30 C28 31.1 28.9 32 30 32 C31.1 32 32 31.1 32 30 C32 28.9 31.1 28 30 28 Z M42 28 C40.9 28 40 28.9 40 30 C40 31.1 40.9 32 42 32 C43.1 32 44 31.1 44 30 C44 28.9 43.1 28 42 28 Z M18 36 C16.9 36 16 36.9 16 38 C16 39.1 16.9 40 18 40 C19.1 40 20 39.1 20 38 C20 36.9 19.1 36 18 36 Z M30 36 C28.9 36 28 36.9 28 38 C28 39.1 28.9 40 30 40 C31.1 40 32 39.1 32 38 C32 36.9 31.1 36 30 36 Z M42 36 C40.9 36 40 36.9 40 38 C40 39.1 40.9 40 42 40 C43.1 40 44 39.1 44 38 C44 36.9 43.1 36 42 36 Z M18 44 C16.9 44 16 44.9 16 46 C16 47.1 16.9 48 18 48 C19.1 48 20 47.1 20 46 C20 44.9 19.1 44 18 44 Z M30 44 C28.9 44 28 44.9 28 46 C28 47.1 28.9 48 30 48 C31.1 48 32 47.1 32 46 C32 44.9 31.1 44 30 44 Z" fill="currentColor"/>
  </svg>
)

// Ayak İzleri İkonu - ADIM 2 (Solid/Dolu)
const FootprintsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 65 65" fill="currentColor" className={className}>
    <g>
      <ellipse cx="20" cy="15" rx="7" ry="11" fill="currentColor"/>
      <circle cx="14" cy="29" r="3.5" fill="currentColor"/>
      <circle cx="20" cy="31" r="3.5" fill="currentColor"/>
      <circle cx="25" cy="30" r="3" fill="currentColor"/>
      <circle cx="28" cy="27" r="2.5" fill="currentColor"/>
      <ellipse cx="45" cy="38" rx="7" ry="11" fill="currentColor"/>
      <circle cx="39" cy="52" r="3.5" fill="currentColor"/>
      <circle cx="45" cy="54" r="3.5" fill="currentColor"/>
      <circle cx="50" cy="53" r="3" fill="currentColor"/>
      <circle cx="53" cy="50" r="2.5" fill="currentColor"/>
    </g>
  </svg>
)

// Açık Kutu İkonu - ADIM 3 (Solid/Dolu)
const BoxIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 85 85" fill="currentColor" className={className}>
    <g>
      <path d="M42.5 12 L10 28 L10 35 L15 37 L15 70 C15 72 17 72 17 72 L68 72 C70 72 70 70 70 70 L70 37 L75 35 L75 28 Z M42.5 20 L60 29 L42.5 38 L25 29 Z M42.5 42 L42.5 68 L20 68 L20 40 L42.5 52 Z M63 40 L63 68 L47.5 68 L47.5 52 Z" fill="currentColor"/>
      <rect x="18" y="13" width="8" height="6" rx="1" fill="currentColor"/>
      <rect x="59" y="13" width="8" height="6" rx="1" fill="currentColor"/>
    </g>
  </svg>
)

const Process = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const steps = [
    {
      number: 'ADIM 1',
      title: '3 dakika içinde kişiye özel analiz randevunuzu alın',
      description: 'Özel tabanlığınız için birkaç dakika içinde online randevunuzu alın',
      IconComponent: CalendarIcon,
    },
    {
      number: 'ADIM 2',
      title: 'Çeşitli analizler sonrası tabanlıklarınız hazırlanır',
      description: 'Özel tabanlığınız için birkaç dakika içinde online randevunuzu alın',
      IconComponent: FootprintsIcon,
    },
    {
      number: 'ADIM 3',
      title: 'Size özel tabanlıklarınızı günler içinde kullanmaya başlayın',
      description: 'Özel tabanlığınız için birkaç dakika içinde online randevunuzu alın',
      IconComponent: BoxIcon,
    },
  ]

  return (
    <section className="section-py bg-gray-50" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-2">
            Özel Tabanlık Sahibi Olun
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-6 relative z-10 flex items-center justify-center">
                    <step.IconComponent className="w-full h-full text-secondary-900" />
                  </div>
                  <p className="text-sm font-semibold text-primary-600 mb-3">
                    {step.number}
                  </p>
                  <h3 className="text-base font-display font-bold text-secondary-900 mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="https://wa.me/905437205313"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Ücretsiz Randevu Oluşturun</span>
            <svg className="w-5 h-5" viewBox="0 0 272.501 173.28" fill="currentColor">
              <path d="M185.916 173.172l86.585-86.586L185.916 0h-57.104l65.853 65.854H0v41.912h194.207l-65.504 65.514 57.213-.108z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
