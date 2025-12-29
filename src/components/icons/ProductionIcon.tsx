const ProductionIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Insole being crafted */}
      <ellipse
        cx="50"
        cy="55"
        rx="28"
        ry="35"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="currentColor"
        fillOpacity="0.1"
      />

      {/* Arch support detail */}
      <path
        d="M35 55C40 48 45 45 50 45C55 45 60 48 65 55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Crafting tools - hammer */}
      <path
        d="M70 20L75 15L80 20L75 25L70 20Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line
        x1="70"
        y1="20"
        x2="62"
        y2="28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Measurement ruler */}
      <path
        d="M15 30H25M15 30V70M15 70H25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 35H20M15 40H20M15 45H20M15 50H20M15 55H20M15 60H20M15 65H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Precision dots on insole */}
      <circle cx="45" cy="45" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="50" cy="50" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="55" cy="45" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="45" cy="60" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="55" cy="60" r="1.5" fill="currentColor" opacity="0.5" />

      {/* Quality check mark */}
      <circle cx="75" cy="70" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
      <path
        d="M70 70L73 73L80 66"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ProductionIcon
