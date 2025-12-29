const HeelPainIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heel bone structure */}
      <ellipse cx="50" cy="55" rx="25" ry="20" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />

      {/* Heel spur/spike */}
      <path
        d="M35 60L28 68"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Pain radiating lines */}
      <path
        d="M28 68L22 72M28 68L24 62M28 68L32 74"
        stroke="currentColor"
        strokeWidth="2"
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
      <circle cx="28" cy="68" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4">
        <animate
          attributeName="r"
          values="6;12;6"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.5;0.1;0.5"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Foot outline */}
      <path
        d="M30 50C30 45 35 40 45 35C55 30 65 30 70 35L75 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}

export default HeelPainIcon
