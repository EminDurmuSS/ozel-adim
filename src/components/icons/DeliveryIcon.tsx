const DeliveryIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Box/Package */}
      <path
        d="M30 40L50 30L70 40V70L50 80L30 70V40Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />

      {/* Box center line */}
      <line x1="50" y1="30" x2="50" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <line x1="30" y1="40" x2="50" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <line x1="70" y1="40" x2="50" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.4" />

      {/* Check mark on box */}
      <circle cx="50" cy="55" r="12" fill="currentColor" fillOpacity="0.15" />
      <path
        d="M44 55L48 59L56 51"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Support/Follow-up icon - headset */}
      <circle cx="75" cy="25" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
      <path
        d="M70 25C70 25 70 22 73 22C75 22 75 23 75 25V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M80 25C80 25 80 22 77 22C75 22 75 23 75 25V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M72 30H78"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Delivery motion lines */}
      <path
        d="M20 35L15 35M20 45L12 45M20 55L15 55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      >
        <animate
          attributeName="opacity"
          values="0.2;0.5;0.2"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export default DeliveryIcon
