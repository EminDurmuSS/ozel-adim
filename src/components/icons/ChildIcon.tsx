const ChildIcon = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heart with sparkle - representing care and growth */}
      <path
        d="M12 21C12 21 3.5 15 3.5 9.5C3.5 6 6 4 8.5 4C10 4 11.5 5 12 6C12.5 5 14 4 15.5 4C18 4 20.5 6 20.5 9.5C20.5 15 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* Sparkle */}
      <path d="M18 3V5M18 5V7M18 5H20M18 5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default ChildIcon
