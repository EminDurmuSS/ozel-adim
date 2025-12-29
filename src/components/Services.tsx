import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import OrthopedicIcon from './icons/OrthopedicIcon'
import MedicalIcon from './icons/MedicalIcon'
import SportsIcon from './icons/SportsIcon'
import ChildIcon from './icons/ChildIcon'

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  const services = [
    {
      title: 'Kişiye Özel Ortopedik Tabanlık',
      description: 'Düz tabanlık (pes planus), basış bozuklukları ve duruş problemleri için hazırlanan ortopedik tabanlıklarımız; ayağın doğal anatomisini destekleyerek yük dağılımını dengeler.',
      benefits: ['Ayak kemerini destekler', 'Yük dağılımını dengeler', 'Duruş problemlerini düzeltir', 'Ağrıları azaltır'],
      IconComponent: OrthopedicIcon,
      color: 'from-blue-500 to-blue-600',
      featured: false,
    },
    {
      title: 'Medikal Tabanlık Çözümleri',
      description: 'Topuk dikeni tabanlığı, plantar fasiit ve kronik ayak ağrıları gibi rahatsızlıklarda kullanılan medikal tabanlıklar; ağrıyı tetikleyen basınç noktalarını azaltmak amacıyla kişiye özel olarak üretilir.',
      benefits: ['Topuk dikeni tedavisinde destek', 'Plantar fasiit rahatlama', 'Basınç noktalarını azaltır', 'Medikal onaylı malzemeler'],
      IconComponent: MedicalIcon,
      color: 'from-red-500 to-red-600',
      featured: true,
    },
    {
      title: 'Sporcu Tabanlıkları',
      description: 'Sporcular için özel olarak tasarlanan tabanlıklarımız; performansı desteklemek, dengeyi artırmak ve sakatlanma riskini azaltmak amacıyla hazırlanır.',
      benefits: ['Performans artırıcı destek', 'Enerji geri dönüşü', 'Sakatlanma riskini azaltır', 'Spor branşına özel tasarım'],
      IconComponent: SportsIcon,
      color: 'from-orange-500 to-orange-600',
      featured: false,
    },
    {
      title: 'Çocuklar İçin Tabanlık',
      description: 'Çocukluk döneminde fark edilen basış bozuklukları için; ayak gelişimini desteklemek, doğru basış alışkanlığı kazandırmak ve sağlıklı duruşu teşvik etmek için tasarlanır.',
      benefits: ['Sağlıklı gelişimi destekler', 'Doğru basış alışkanlığı', 'Yaşa uygun tasarım', 'Konforlu kullanım'],
      IconComponent: ChildIcon,
      color: 'from-green-500 to-green-600',
      featured: false,
    },
  ]

  return (
    <section id="services" className="section-py bg-gradient-to-br from-secondary-50 to-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
            Her İhtiyaca <span className="text-gradient-primary">Özel Çözüm</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Ayak analizi ve basış değerlendirmesi sonrası, ihtiyaçlarınıza uygun olarak üretilen tabanlıklarımız
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-500 ${service.featured ? 'ring-1 ring-primary-200/50 bg-gradient-to-br from-white to-primary-50/30' : ''}`}
            >
              {service.featured && (
                <div className="absolute -top-2.5 right-6 px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-[10px] font-bold tracking-wide rounded-full shadow-sm uppercase">
                  Popüler
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-sm text-white transition-all duration-300 group-hover:shadow-md group-hover:scale-105 flex-shrink-0`}>
                  <service.IconComponent className="w-7 h-7" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-display font-bold text-secondary-900 mb-2 tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-secondary-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-5 pl-0.5">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-secondary-700 leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/905437205313?text=${encodeURIComponent(`${service.title} hakkında bilgi almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary-600 font-semibold hover:text-primary-700 group/link transition-colors"
              >
                <span>Detaylı Bilgi Al</span>
                <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
