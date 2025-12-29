const ContactIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Phone shape */}
      <rect
        x="30"
        y="15"
        width="40"
        height="70"
        rx="6"
        stroke="currentColor"
        strokeWidth="3"
        fill="currentColor"
        fillOpacity="0.1"
      />

      {/* Screen */}
      <rect
        x="35"
        y="22"
        width="30"
        height="50"
        rx="2"
        fill="currentColor"
        fillOpacity="0.15"
      />

      {/* WhatsApp icon */}
      <circle cx="50" cy="47" r="12" fill="currentColor" fillOpacity="0.2" />

      {/* Phone receiver */}
      <path
        d="M45 44C45 44 46 43 47 43C48 43 49 44 50 45C51 46 52 47 53 47C54 47 55 46 55 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Message bubbles */}
      <circle cx="42" cy="50" r="2" fill="currentColor" />
      <circle cx="50" cy="50" r="2" fill="currentColor" />
      <circle cx="58" cy="50" r="2" fill="currentColor" />

      {/* Signal waves */}
      <path
        d="M20 35C20 35 25 40 25 50C25 60 20 65 20 65M80 35C80 35 75 40 75 50C75 60 80 65 80 65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      >
        <animate
          attributeName="opacity"
          values="0.2;0.6;0.2"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      {/* Home button */}
      <circle cx="50" cy="78" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export default ContactIcon
