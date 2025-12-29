const SportsIcon = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lightning bolt with circle - representing energy and performance */}
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15"/>
      <path
        d="M13 2L7 13H12L11 22L17 11H12L13 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
      />
    </svg>
  )
}

export default SportsIcon
