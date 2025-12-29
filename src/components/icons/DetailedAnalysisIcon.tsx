const DetailedAnalysisIcon = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Document/clipboard */}
      <rect
        x="25"
        y="15"
        width="50"
        height="70"
        rx="4"
        stroke="currentColor"
        strokeWidth="3"
        fill="currentColor"
        fillOpacity="0.1"
      />

      {/* Clipboard clip */}
      <rect x="40" y="12" width="20" height="6" rx="2" fill="currentColor" />

      {/* Chart lines on document */}
      <path
        d="M35 30H65M35 40H60M35 50H65M35 60H55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Bar chart */}
      <rect x="38" y="50" width="6" height="20" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="48" y="45" width="6" height="25" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="58" y="40" width="6" height="30" rx="1" fill="currentColor" opacity="0.8" />

      {/* Checkmark */}
      <circle cx="70" cy="25" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
      <path
        d="M66 25L69 28L74 23"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DetailedAnalysisIcon
