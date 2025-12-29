const FastProductionIcon = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clock circle */}
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="currentColor"
        strokeWidth="3"
        fill="currentColor"
        fillOpacity="0.1"
      />

      {/* Clock hands */}
      <line x1="50" y1="50" x2="50" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Clock marks */}
      <circle cx="50" cy="23" r="2" fill="currentColor" />
      <circle cx="50" cy="77" r="2" fill="currentColor" />
      <circle cx="23" cy="50" r="2" fill="currentColor" />
      <circle cx="77" cy="50" r="2" fill="currentColor" />

      {/* Speed indicators - curved arrows */}
      <path
        d="M75 30C75 30 80 25 85 25M85 25L82 22M85 25L82 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.8;0.3"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M70 20C70 20 75 15 80 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      >
        <animate
          attributeName="opacity"
          values="0.2;0.6;0.2"
          dur="1.5s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </path>

      {/* Center dot */}
      <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
  )
}

export default FastProductionIcon
