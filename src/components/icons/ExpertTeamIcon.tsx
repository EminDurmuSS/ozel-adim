const ExpertTeamIcon = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Three people silhouettes */}

      {/* Person 1 (left) */}
      <circle cx="30" cy="35" r="8" fill="currentColor" fillOpacity="0.3" />
      <path
        d="M20 55C20 48 24 45 30 45C36 45 40 48 40 55V60H20V55Z"
        fill="currentColor"
        fillOpacity="0.3"
      />

      {/* Person 2 (center - larger, in front) */}
      <circle cx="50" cy="30" r="10" fill="currentColor" fillOpacity="0.5" />
      <path
        d="M38 55C38 47 43 43 50 43C57 43 62 47 62 55V65H38V55Z"
        fill="currentColor"
        fillOpacity="0.5"
      />

      {/* Person 3 (right) */}
      <circle cx="70" cy="35" r="8" fill="currentColor" fillOpacity="0.3" />
      <path
        d="M60 55C60 48 64 45 70 45C76 45 80 48 80 55V60H60V55Z"
        fill="currentColor"
        fillOpacity="0.3"
      />

      {/* Excellence badge on center person */}
      <circle cx="50" cy="75" r="12" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M50 70L52 75L57 76L53.5 79L54 84L50 81.5L46 84L46.5 79L43 76L48 75L50 70Z"
        fill="currentColor"
      />

      {/* Medical cross or expertise symbol */}
      <path
        d="M50 18L51 22L55 23L51 24L50 28L49 24L45 23L49 22L50 18Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  )
}

export default ExpertTeamIcon
