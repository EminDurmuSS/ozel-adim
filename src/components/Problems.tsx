import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Problems = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  const problems = [
    {
      title: '\u0130\u00E7e Basma',
      description:
        '\u0130\u00E7e basma b\u00FCt\u00FCn v\u00FCcut kinetik zincirini etkileyerek post\u00FCr bozuklu\u011Funa ve a\u011Fr\u0131ya sebep olabilir',
      image: 'https://footbalance.com.tr/wp-content/uploads/2023/06/basis-bozukluklari-4.jpeg',
      alt: '\u0130\u00E7e basma g\u00F6rseli',
    },
    {
      title: 'D\u0131\u015Fa Basma',
      description:
        'D\u0131\u015Fa basma b\u00FCt\u00FCn v\u00FCcut kinetik zincirini etkileyerek post\u00FCr bozuklu\u011Funa ve a\u011Fr\u0131ya sebep olabilir',
      image: 'https://footbalance.com.tr/wp-content/uploads/2023/06/basis-bozukluklari-5.jpeg',
      alt: 'D\u0131\u015Fa basma g\u00F6rseli',
    },
    {
      title: 'Diz Kal\u00E7a Omurga',
      description:
        'Bel a\u011Fr\u0131s\u0131, diz a\u011Fr\u0131s\u0131 kal\u00E7a a\u011Fr\u0131s\u0131 hatta boyun a\u011Fr\u0131lar\u0131n\u0131z\u0131n sebebinin bile bas\u0131\u015F bozuklu\u011Fundan kaynakl\u0131 olabilece\u011Fini biliyor muydunuz?',
      image: 'https://footbalance.com.tr/wp-content/uploads/2023/06/basis-bozukluklari-3.jpg',
      alt: 'Diz, kal\u00E7a ve omurga g\u00F6rseli',
    },
    {
      title: 'D\u00FCz Taban \u00C7ukur Taban',
      description:
        'Ayak ark y\u00FCksekli\u011Fi ya da d\u00FC\u015F\u00FCkl\u00FC\u011F\u00FCnde ayak taban a\u011Fr\u0131lar\u0131 ka\u00E7\u0131n\u0131lmazd\u0131r.',
      image: 'https://footbalance.com.tr/wp-content/uploads/2023/06/basis-bozukluklari-2.jpeg',
      alt: 'D\u00FCz taban ve \u00E7ukur taban g\u00F6rseli',
    },
    {
      title: 'Topuk Dikeni',
      description:
        'En s\u0131k g\u00F6r\u00FClen ayak bas\u0131\u015F problemleri i\u00E7in bizlerle ileti\u015Fime ge\u00E7in',
      image: 'https://footbalance.com.tr/wp-content/uploads/2023/06/basis-bozukluklari-1.jpeg',
      alt: 'Topuk dikeni g\u00F6rseli',
    },
    {
      title: '\u00C7ocuklarda Tabanl\u0131k',
      description:
        '\u00C7ocuklarda ortopedik tabanl\u0131k sayesinde ilerleyen y\u0131llarda bas\u0131\u015F problemlerinin olu\u015Fmas\u0131n\u0131 veya artmas\u0131n\u0131 \u00F6nlemek m\u00FCmk\u00FCnd\u00FCr.',
      image: 'https://footbalance.com.tr/wp-content/uploads/2023/06/ana-sayfa-banner-cocuklarda-tabanlik.jpg',
      alt: '\u00C7ocuklarda tabanl\u0131k g\u00F6rseli',
    },
  ]

  const appointmentLink =
    'https://wa.me/905437205313?text=Merhaba%2C%20ayak%20analizi%20randevusu%20almak%20istiyorum.'

  return (
    <section id="problems" className="section-py bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900">
            {'Yayg\u0131n Bas\u0131\u015F Problemleri Nelerdir?'}
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group perspective-1000 cursor-pointer"
            >
              <div className="relative h-[300px]">
                <div className="absolute inset-0 transition-transform duration-500 transform-style-3d group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 backface-hidden">
                    <div className="h-full rounded-2xl bg-secondary-950 border border-white/10 shadow-[0_20px_50px_-30px_rgba(2,6,23,0.9)] overflow-hidden flex flex-col">
                      <div className="relative flex-1 w-full overflow-hidden">
                        <img
                          src={problem.image}
                          alt={problem.alt}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-950/80" />
                      </div>
                      <div className="relative z-10 p-4 bg-gradient-to-t from-secondary-950 to-transparent">
                        <h3 className="text-sm md:text-base font-semibold text-primary-200 text-center tracking-wide">
                          {problem.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
                    <div className="h-full rounded-2xl bg-secondary-950 border border-white/10 p-4 text-white shadow-[0_20px_50px_-30px_rgba(2,6,23,0.9)] flex flex-col justify-between text-center">
                      <div className="space-y-3">
                        <h3 className="text-sm md:text-base font-semibold text-primary-200 tracking-wide">
                          {problem.title}
                        </h3>
                        <p className="text-xs md:text-sm leading-relaxed text-secondary-200">
                          {problem.description}
                        </p>
                      </div>
                      <a
                        href={appointmentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 shadow hover:bg-white/10"
                      >
                        Hemen Randevu Al
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problems
