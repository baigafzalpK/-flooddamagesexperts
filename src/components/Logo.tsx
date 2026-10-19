/**
 * BayouDry wordmark — SVG text logo with a water-droplet mark.
 * Light variant for dark backgrounds via `light` prop.
 */
export function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  const word = light ? "#ffffff" : "#0f2b3d";
  const sub = light ? "#e05a1f" : "#076e89";
  return (
    <svg
      viewBox="0 0 280 56"
      className={className}
      role="img"
      aria-label="Flood Damages Experts"
    >
      <path
        d="M14 6 C 14 6, 6 16, 6 22 a8 8 0 0 0 16 0 C 22 16, 14 6, 14 6 Z"
        fill="#0a93b8"
      />
      <text
        x="30"
        y="28"
        fontFamily="'Space Grotesk', 'Inter', sans-serif"
        fontWeight="700"
        fontSize="24"
        fill={word}
      >
        FloodDamages
      </text>
      <path
        d="M32 35 C 80 32, 130 32, 180 35 S 220 38, 235 34"
        stroke="#e05a1f"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="32"
        y="48"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="11"
        letterSpacing="4"
        fill={sub}
      >
        EXPERTS
      </text>
    </svg>
  );
}
