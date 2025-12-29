const KneePainIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Knee joint */}
      <circle cx="50" cy="50" r="18" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.5" />

      {/* Upper leg bone */}
      <path
        d="M50 20L50 32"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Lower leg bone */}
      <path
        d="M50 68L50 80"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Pain indicator lines */}
      <path
        d="M35 50L30 50M70 50L75 50M50 35L50 30M50 70L50 75"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      >
        <animate
          attributeName="opacity"
          values="0.4;0.8;0.4"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Pain waves */}
      <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3">
        <animate
          attributeName="r"
          values="18;26;18"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0.1;0.4"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Joint stress lines */}
      <path
        d="M40 45L35 40M60 45L65 40M40 55L35 60M60 55L65 60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  )
}

export default KneePainIcon
