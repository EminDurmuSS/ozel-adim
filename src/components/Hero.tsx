import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InsoleAnimation from "./InsoleAnimation";

const Hero = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const heroVideoId = "HmU3euSeBKI";
  const heroVideoSrc = `https://www.youtube.com/embed/${heroVideoId}?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=${heroVideoId}&modestbranding=1&start=15&end=20`;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;

    const animateCount = (target: number, setter: (value: number) => void) => {
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, duration / steps);
    };

    const timer = setTimeout(() => {
      animateCount(1000, setCount1);
      animateCount(100, setCount2);
      animateCount(100, setCount3);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-secondary-900 min-h-screen"
    >
      {/* Background Video - Full Cover */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src={heroVideoSrc}
          title="Özel Adım tanıtım videosu"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "56.25vw", // 16:9 aspect ratio
            minHeight: "100vh",
            minWidth: "177.78vh", // 100vh * (16/9)
            border: "none",
            pointerEvents: "none",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/80 via-secondary-900/55 to-secondary-900/80" />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-12 lg:py-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                <span className="block text-white">Özel Adım</span>
                <span className="block text-gradient-primary mt-2">
                  Ayak Analizi ve Kişiye Özel Tabanlık
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
            >
              Özel Adım'da uzman ekibimiz ayak analiziyle kişiye özel tabanlık,
              topuk dikeni tabanlığı, düz tabanlık ve plantar fasiit için
              ortopedik çözümler hazırlar. Günlük yaşam ve spor için doğru
              basışı destekleyerek konforu artırır.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/905437205313?text=Merhaba%2C%20ayak%20analizi%20randevusu%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg group"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ücretsiz Ayak Analizi
              </a>
              <Link to="/tabanliklar" className="btn btn-outline btn-lg">
                Hizmetlerimizi Keşfet
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-6 md:gap-6 md:pt-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
                  {count1}+
                </div>
                <div className="text-sm md:text-base text-white/70 mt-1">
                  Mutlu Müşteri
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
                  %{count2}
                </div>
                <div className="text-sm md:text-base text-white/70 mt-1">
                  Kalite
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
                  %{count3}
                </div>
                <div className="text-sm md:text-base text-white/70 mt-1">
                  Memnuniyet
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Rotating Insole Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[520px] xl:h-[560px] flex items-center justify-center">
              {/* 3D Dönen Tabanlık Animasyonu */}
              <InsoleAnimation />

              {/* Floating Card 1 */}
              <motion.div
                className="absolute top-10 left-10 bg-white rounded-2xl shadow-hard p-6 max-w-xs"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">
                      Bilimsel Analiz
                    </h4>
                    <p className="text-sm text-secondary-600">
                      Detaylı ayak ölçümü
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                className="absolute top-1/3 right-10 bg-white rounded-2xl shadow-hard p-6 max-w-xs"
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">
                      Kalite Garantisi
                    </h4>
                    <p className="text-sm text-secondary-600">
                      Premium malzeme
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 3 */}
              <motion.div
                className="absolute bottom-10 left-1/4 bg-white rounded-2xl shadow-hard p-6 max-w-xs"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-700 to-secondary-800 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">
                      Kişiye Özel
                    </h4>
                    <p className="text-sm text-secondary-600">
                      Tam uyum garantisi
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm font-medium">Aşağı Kaydır</span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
