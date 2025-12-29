import { motion } from 'framer-motion'
import { useState } from 'react'

const InsoleAnimation = () => {
  const [rotation, setRotation] = useState(0)

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* 3D Rotating Insole Container */}
      <motion.div
        className="relative w-64 h-80"
        animate={{
          rotateY: rotation,
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
        onUpdate={(latest) => {
          if (typeof latest.rotateY === 'number') {
            setRotation((latest.rotateY + 1) % 360)
          }
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
      >
        {/* Insole SVG - Front View */}
        <svg
          viewBox="0 0 200 300"
          className="w-full h-full drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
          }}
        >
          <defs>
            <linearGradient id="insoleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>

            <linearGradient id="archSupport" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            {/* Subtle texture pattern */}
            <pattern id="insoleTexture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)" />
            </pattern>
          </defs>

          {/* Main insole shape */}
          <path
            d="M 100 20
               Q 85 30, 75 50
               Q 65 80, 65 120
               Q 65 160, 70 200
               Q 75 240, 85 270
               Q 95 290, 100 295
               Q 105 290, 115 270
               Q 125 240, 130 200
               Q 135 160, 135 120
               Q 135 80, 125 50
               Q 115 30, 100 20 Z"
            fill="url(#insoleGradient)"
            stroke="#1e40af"
            strokeWidth="2"
          />

          {/* Texture overlay */}
          <path
            d="M 100 20
               Q 85 30, 75 50
               Q 65 80, 65 120
               Q 65 160, 70 200
               Q 75 240, 85 270
               Q 95 290, 100 295
               Q 105 290, 115 270
               Q 125 240, 130 200
               Q 135 160, 135 120
               Q 135 80, 125 50
               Q 115 30, 100 20 Z"
            fill="url(#insoleTexture)"
          />

          {/* Arch support area - inner curve */}
          <path
            d="M 75 120
               Q 80 110, 90 110
               Q 100 110, 110 110
               Q 120 110, 125 120
               Q 125 140, 120 160
               Q 115 170, 110 170
               Q 100 170, 90 170
               Q 80 170, 75 160
               Q 75 140, 75 120 Z"
            fill="url(#archSupport)"
            opacity="0.7"
          />

          {/* Heel cushion area */}
          <ellipse
            cx="100"
            cy="265"
            rx="30"
            ry="25"
            fill="rgba(239, 68, 68, 0.3)"
            stroke="rgba(220, 38, 38, 0.5)"
            strokeWidth="1.5"
          />

          {/* Metatarsal pad */}
          <ellipse
            cx="100"
            cy="140"
            rx="25"
            ry="20"
            fill="rgba(59, 130, 246, 0.3)"
            stroke="rgba(37, 99, 235, 0.5)"
            strokeWidth="1.5"
          />

          {/* Toe area details */}
          <g opacity="0.4">
            <circle cx="95" cy="40" r="8" fill="rgba(255,255,255,0.3)" />
            <circle cx="100" cy="30" r="9" fill="rgba(255,255,255,0.3)" />
            <circle cx="105" cy="40" r="8" fill="rgba(255,255,255,0.3)" />
            <circle cx="90" cy="50" r="7" fill="rgba(255,255,255,0.3)" />
            <circle cx="110" cy="50" r="7" fill="rgba(255,255,255,0.3)" />
          </g>

          {/* Highlight effect */}
          <path
            d="M 90 40
               Q 85 60, 80 100
               Q 78 140, 80 180"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Measurement lines */}
          <g opacity="0.3" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2">
            <line x1="60" y1="120" x2="140" y2="120" />
            <line x1="100" y1="20" x2="100" y2="295" />
          </g>
        </svg>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full blur-3xl bg-primary-400/20 -z-10 animate-pulse"></div>
      </motion.div>

      {/* Feature labels */}
      <motion.div
        className="absolute top-10 left-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm font-semibold text-secondary-900">Kemer Desteği</p>
        <div className="w-3 h-3 bg-green-500 rounded-full absolute -right-1 top-1/2 -translate-y-1/2"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-sm font-semibold text-secondary-900">Topuk Yastığı</p>
        <div className="w-3 h-3 bg-red-500 rounded-full absolute -left-1 top-1/2 -translate-y-1/2"></div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
      >
        <p className="text-sm font-semibold text-secondary-900">Metatars Desteği</p>
        <div className="w-3 h-3 bg-blue-500 rounded-full absolute -left-1 top-1/2 -translate-y-1/2"></div>
      </motion.div>
    </div>
  )
}

export default InsoleAnimation
