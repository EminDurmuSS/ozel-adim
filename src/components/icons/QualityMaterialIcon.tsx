const QualityMaterialIcon = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Star/sparkle main */}
      <path
        d="M50 15L55 40L80 45L60 60L65 85L50 72L35 85L40 60L20 45L45 40L50 15Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.15"
      />

      {/* Center highlight */}
      <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.3" />

      {/* Small sparkles */}
      <path
        d="M25 25L27 30L32 32L27 34L25 39L23 34L18 32L23 30L25 25Z"
        fill="currentColor"
        opacity="0.6"
      >
        <animate
          attributeName="opacity"
          values="0.4;0.9;0.4"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M75 20L77 25L82 27L77 29L75 34L73 29L68 27L73 25L75 20Z"
        fill="currentColor"
        opacity="0.5"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.8;0.3"
          dur="2s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M20 70L22 75L27 77L22 79L20 84L18 79L13 77L18 75L20 70Z"
        fill="currentColor"
        opacity="0.5"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.8;0.3"
          dur="2s"
          begin="1s"
          repeatCount="indefinite"
        />
      </path>

      {/* Quality badge circle */}
      <circle cx="75" cy="75" r="12" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M71 75L74 78L80 72"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default QualityMaterialIcon
