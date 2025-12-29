import { motion } from "framer-motion";

const Insoles = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-32 md:py-40">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-secondary-900">
                Tabanlıklar
              </h1>
              <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl">
                Ayağınız ve sağlığınız için size özel en uygun tabanlığı kolayca
                bulun.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#insole-types"
                  className="btn btn-primary btn-lg"
                >
                  Tabanlık Türleri
                </a>
                <a
                  href="https://wa.me/905437205313?text=Merhaba%2C%20tabanlık%20hakkında%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-lg"
                >
                  İletişime Geç
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.ayakbakimvesagligimerkezi.com/wp-content/uploads/2024/02/tasdelen-kisiye-ozel-tabanlik.jpg"
                  alt="Kişiye Özel Tabanlık"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Guarantee Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src="https://static.wixstatic.com/media/332211_94f55c4da20a43df99e28e9457d85581~mv2.gif"
                  alt="Kaliteli Tabanlık"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                Kalite garantili
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Kişiye özel tabanlığınızın dayanıklılığını sağlamak için
                kaliteli malzemeler ve akıllı tasarım kullanılır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Design Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                Gelişmiş tasarım
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Maksimum konfor için gelişmiş yastıklama teknolojisi ve kaplama
                rengi seçme ayrıcalığı sunulur.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src="https://static.wixstatic.com/media/332211_7446ed6b4f2742d7bb78336c65e4ab71~mv2.gif"
                  alt="Kişiye Özel Tabanlık"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life Quality Enhancement Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-display font-bold text-secondary-900"
            >
              Yaşam kalitenizi yükseltin
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <img
                src="https://static.wixstatic.com/media/332211_973dccaeb1a0425b97f9f66e26eca13e~mv2.png/v1/fill/w_900,h_138,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/beautiful.png"
                alt="Yaşam Kalitenizi Yükseltin"
                className="w-full max-w-4xl h-auto object-contain"
                loading="lazy"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-secondary-600 leading-relaxed max-w-3xl"
            >
              Kişiye özel tabanlıklar, günlük kullanımdan amatör aktivitelere,
              rekabetçi ve yüksek performans gerektiren sporlardan medikal
              rahatsızlıklara kadar özel üretilmiş ve kişiselleştirilebilir
              ürün gamı ile kişiye özel destek ve konfor sunar.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Size En Uygun Tabanlığı Bulun
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              İhtiyacınız olan özellikler ve ayak tipiniz için size en uygun
              tabanlığı kolayca bulun.
            </p>
            <a
              href="https://wa.me/905437205313?text=Merhaba%2C%20bana%20uygun%20tabanlık%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Size En Uygun Tabanlığı Bulun
            </a>
          </motion.div>
        </div>
      </section>

      {/* Process Sections */}
      <section className="py-24 bg-white">
        <div className="container-custom space-y-32">
          {/* Analysis Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://static.wixstatic.com/media/332211_94d74f9780e04a55ba995f9c98ef66ee~mv2.jpg/v1/fill/w_490,h_450,al_c,lg_1,q_90,enc_avif,quality_auto/332211_94d74f9780e04a55ba995f9c98ef66ee~mv2.jpg"
                  alt="Ayak Analizi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                01
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                Analiz
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Ücretsiz detaylı ayak analizi, tabanlıkların ayaklarınıza
                mükemmel şekilde oturmasını sağlar.
              </p>
            </motion.div>
          </div>

          {/* Manufacturing Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
                02
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                Yapılandırma
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Uzmanlarımız eşliğinde olası ayak ve basınç problemleriniz
                tespit edilir ve tabanlıklarınız üretime hazır hale gelir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://static.wixstatic.com/media/332211_fd7cf76032e3404f8f40aada27fe663f~mv2.jpg/v1/fill/w_490,h_450,al_c,q_90,enc_avif,quality_auto/332211_fd7cf76032e3404f8f40aada27fe663f~mv2.jpg"
                  alt="Yapılandırma"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* Design Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://static.wixstatic.com/media/332211_b3742057bb01464ab8d2d7a65a173d21~mv2.jpg/v1/fill/w_490,h_450,al_c,q_90,enc_avif,quality_auto/332211_b3742057bb01464ab8d2d7a65a173d21~mv2.jpg"
                  alt="Tasarım"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                03
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                Tasarım
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Uzmanlarımızın 3D modellemesi sonrasında, kişiye özel
                tabanlığınızın hazırlanması için son teknoloji CAD/CAM tekniği
                kullanılır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insole Types Section */}
      <section id="insole-types" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
              Tabanlık Çeşitlerimiz
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              İhtiyacınıza göz önünde bulundurularak üretilen geniş tabanlık
              çeşitlerimiz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sports Insole */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-soft hover:shadow-hard transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8a773003c303161849eecb37736fdece.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
                    alt="Spor Tabanlık"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                    01
                  </div>
                  <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                    Spor Tabanlık
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    Bu tabanlıklarda gözetilen faktörler günlük ya da medikal
                    tabanlığın performans gerektiren sporlardan ziyade daha
                    rahat aktivitelerin gerçekleştir için tasarlanmıştır.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Medical Insole */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-soft hover:shadow-hard transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://cdn.dsmcdn.com/mnresize/420/620/ty1516/product/media/images/prod/QC/20240831/09/9d48c569-0529-3743-9ead-69aeaac0f837/1_org_zoom.jpg"
                    alt="Medikal Tabanlık"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                    02
                  </div>
                  <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                    Medikal Tabanlık
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    Medikal tabanlıklarda kullanılan materyal, kaplama, anatomik
                    form gibi faktörler tamamen kişiye özel olmalıdır. Bu
                    tabanlıklar oluşturulurken kişinin deformite derecesi,
                    kilosu, aktivite durumu, yaşı, ayakkabı alışkanlığı göz
                    önünde bulundurulmalıdır.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Daily Insole */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-soft hover:shadow-hard transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop&q=80"
                    alt="Günlük Kullanım Tabanlık"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                    03
                  </div>
                  <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                    Günlük Kullanım Tabanlık
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    Bu tarz tabanlıklar, deformitesi olmayan ya da hafif
                    deformitesi olan, iş gereği sürekli ayakta olan kişiler için
                    çalışılır. Destekleyici özellikte ve rahatlatıcı özellikte
                    olmalıdır.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insoles;
