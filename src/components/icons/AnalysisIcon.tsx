const AnalysisIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Foot outline being scanned */}
      <path
        d="M35 70C35 70 32 66 32 58C32 50 35 46 38 42C41 38 44 35 47 32C50 35 53 38 56 42C59 46 62 50 62 58C62 66 59 70 59 70"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.08"
      />

      {/* Scanning grid */}
      <path
        d="M30 40H65M30 48H65M30 56H65M30 64H65"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="2 2"
      />

      {/* Magnifying glass */}
      <circle cx="70" cy="30" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <line x1="77" y1="37" x2="85" y2="45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

      {/* Plus sign in magnifying glass */}
      <path
        d="M70 25V35M65 30H75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Measurement points */}
      <circle cx="38" cy="60" r="2" fill="currentColor">
        <animate
          attributeName="r"
          values="2;3;2"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="47" cy="55" r="2" fill="currentColor">
        <animate
          attributeName="r"
          values="2;3;2"
          dur="1.5s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="56" cy="60" r="2" fill="currentColor">
        <animate
          attributeName="r"
          values="2;3;2"
          dur="1.5s"
          begin="0.6s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Data indicator */}
      <path
        d="M15 20L20 15L25 22L30 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  )
}

export default AnalysisIcon
