import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import DetailedAnalysisIcon from './icons/DetailedAnalysisIcon'
import FastProductionIcon from './icons/FastProductionIcon'
import QualityMaterialIcon from './icons/QualityMaterialIcon'
import ExpertTeamIcon from './icons/ExpertTeamIcon'

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const features = [
    {
      IconComponent: DetailedAnalysisIcon,
      title: 'Detaylı Analiz',
      description: 'Bilimsel ölçüm yöntemleriyle ayak yapınızı hassas biçimde analiz ediyoruz.',
    },
    {
      IconComponent: FastProductionIcon,
      title: 'Hızlı Üretim',
      description: 'Analiz sonrası kısa sürede kişiye özel tabanlığınızı üretiyoruz.',
    },
    {
      IconComponent: QualityMaterialIcon,
      title: 'Kaliteli Malzeme',
      description: 'Uzun ömürlü ve konforlu kullanım için premium malzemeler.',
    },
    {
      IconComponent: ExpertTeamIcon,
      title: 'Uzman Kadro',
      description: 'Deneyimli ekibimizle güvenilir, profesyonel hizmet sunuyoruz.',
    },
  ]

  const highlights = ['Bilimsel Ölçüm', 'Kişiye Özel Üretim', 'Premium Malzeme']

  return (
    <section
      id="about"
      className="section-py relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50/40"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-primary-200/35 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-secondary-200/50 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0)_32%,rgba(15,23,42,0.04)_100%)]" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-secondary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-secondary-700 shadow-soft">
            <span className="h-2 w-2 rounded-full bg-primary-600 shadow-[0_0_0_4px_rgba(14,165,233,0.15)]"></span>
            Özel Adım Hakkında
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mt-6 mb-4 text-balance">
            Standart Değil, <span className="text-gradient-primary">Size Özel</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl text-balance">
            Her bireyin ayak yapısı benzersizdir. Çözümlerimizi bu bilinci temel alarak tasarlarız.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 mt-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl text-secondary-800 leading-relaxed">
              Özel Adım, ayak yapınızı bilimsel ölçümle analiz eder ve tamamen kişiye özel tabanlık çözümleri sunar.
            </p>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Ortopedik, medikal, sporcu ve çocuklara özel tabanlıklarımız; konforu artırır, duruşu dengeler ve günlük yaşam
              kalitenizi yükseltir.
            </p>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Düz tabanlık, topuk dikeni, ayak, diz, bel ve sırt ağrıları gibi pek çok ortopedik durumda; ölçüm verilerine
              dayalı, kişiye özel uygulamalar geliştiriyoruz.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-2 rounded-full border border-secondary-200/70 bg-white/70 px-4 py-2 text-xs font-semibold text-secondary-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600"></span>
                  {highlight}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-[2rem] p-[1px] bg-gradient-to-br from-white via-primary-100/80 to-secondary-200/70 shadow-hard">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-white">
                <img
                  src="https://proklinik.com.tr/wp-content/uploads/2024/09/kisisel-tabanlik.png"
                  alt="Kişiye Özel Tabanlık"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-secondary-900/10"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-medium backdrop-blur">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-secondary-500">Bilimsel Analiz</p>
              <p className="text-sm font-semibold text-secondary-900">Kişiye Özel Ölçüm</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative rounded-2xl border border-secondary-200/70 bg-white/75 p-6 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-medium"
            >
              <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-700 ring-1 ring-primary-500/20 shadow-sm transition duration-300 group-hover:bg-primary-500/15 group-hover:text-primary-800">
                <feature.IconComponent className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-secondary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
