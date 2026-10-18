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
      viewBox="0 0 230 56"
      className={className}
      role="img"
      aria-label="BayouDry Restoration"
    >
      <path
        d="M14 4 C 14 4, 6 14, 6 20 a8 8 0 0 0 16 0 C 22 14, 14 4, 14 4 Z"
        fill="#0a93b8"
      />
      <text
        x="30"
        y="30"
        fontFamily="'Space Grotesk', 'Inter', sans-serif"
        fontWeight="700"
        fontSize="29"
        fill={word}
      >
        BayouDry
      </text>
      <path
        d="M34 38 C 80 32, 130 32, 168 38 S 200 44, 214 36"
        stroke="#e05a1f"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="32"
        y="52"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="10"
        letterSpacing="4"
        fill={sub}
      >
        RESTORATION
      </text>
    </svg>
  );
}
