const FlatFootIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flat foot profile */}
      <path
        d="M20 60C20 60 30 62 40 62C50 62 60 62 70 60C75 59 80 55 80 50"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ground line */}
      <line x1="15" y1="65" x2="85" y2="65" stroke="currentColor" strokeWidth="2" opacity="0.3" />

      {/* Pressure points */}
      <circle cx="30" cy="62" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="62" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="70" cy="60" r="3" fill="currentColor" opacity="0.6" />

      {/* Missing arch indicator (dotted line) */}
      <path
        d="M30 55C40 45 60 45 70 55"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 3"
        opacity="0.4"
      />

      {/* Alert symbol */}
      <circle cx="50" cy="30" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="50" y1="24" x2="50" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="36" r="1.5" fill="currentColor" />
    </svg>
  )
}

export default FlatFootIcon
