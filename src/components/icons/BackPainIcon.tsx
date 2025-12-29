const BackPainIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Spine curve */}
      <path
        d="M50 15C50 15 45 30 50 45C55 60 45 75 50 85"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Vertebrae */}
      <circle cx="50" cy="25" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="48" cy="35" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="52" cy="45" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="48" cy="55" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="50" cy="65" r="4" fill="currentColor" fillOpacity="0.3" />

      {/* Pain area highlight */}
      <ellipse cx="50" cy="50" rx="15" ry="25" fill="currentColor" fillOpacity="0.08" />

      {/* Pain radiating lines */}
      <path
        d="M35 50L28 50M72 50L65 50M50 30L50 23M50 77L50 70"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.7;0.3"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Pain waves */}
      <ellipse cx="50" cy="50" rx="20" ry="30" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3">
        <animate
          attributeName="rx"
          values="15;22;15"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="25;32;25"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0.1;0.4"
          dur="2s"
          repeatCount="indefinite"
        />
      </ellipse>
    </svg>
  )
}

export default BackPainIcon
