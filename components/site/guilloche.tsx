const SIZE = 600;
const CENTER = SIZE / 2;
const STEPS = 720;

interface Band {
  amplitude: number;
  lobes: number;
  opacity: number;
  radius: number;
  secondary: number;
  secondaryLobes: number;
  strands: number;
  tone: "primary" | "accent";
}

const BANDS: Band[] = [
  {
    amplitude: 22,
    lobes: 36,
    opacity: 0.55,
    radius: 250,
    secondary: 8,
    secondaryLobes: 6,
    strands: 14,
    tone: "primary",
  },
  {
    amplitude: 30,
    lobes: 24,
    opacity: 0.7,
    radius: 185,
    secondary: 10,
    secondaryLobes: 4,
    strands: 16,
    tone: "primary",
  },
  {
    amplitude: 26,
    lobes: 18,
    opacity: 0.9,
    radius: 120,
    secondary: 6,
    secondaryLobes: 3,
    strands: 12,
    tone: "accent",
  },
  {
    amplitude: 20,
    lobes: 12,
    opacity: 0.8,
    radius: 62,
    secondary: 4,
    secondaryLobes: 2,
    strands: 10,
    tone: "primary",
  },
];

function strandPath(band: Band, strand: number) {
  const phase = (strand / band.strands) * Math.PI * 2;
  let d = "";
  for (let i = 0; i <= STEPS; i += 1) {
    const t = (i / STEPS) * Math.PI * 2;
    const r =
      band.radius +
      band.amplitude * Math.sin(band.lobes * t + phase) +
      band.secondary * Math.cos(band.secondaryLobes * t);
    const x = CENTER + r * Math.cos(t);
    const y = CENTER + r * Math.sin(t);
    d += `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return `${d}Z`;
}

const PATHS = BANDS.flatMap((band, bandIndex) =>
  Array.from({ length: band.strands }, (_, strand) => ({
    d: strandPath(band, strand),
    key: `${bandIndex}-${strand}`,
    opacity: band.opacity,
    tone: band.tone,
  }))
);

export function Guilloche({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
    >
      <g className="rosette-spin">
        {PATHS.map((path) => (
          <path
            d={path.d}
            key={path.key}
            opacity={path.opacity}
            stroke={path.tone === "accent" ? "var(--accent)" : "var(--primary)"}
            strokeWidth={0.6}
          />
        ))}
      </g>
      <circle
        cx={CENTER}
        cy={CENTER}
        r={288}
        stroke="var(--primary)"
        strokeOpacity={0.35}
        strokeWidth={0.6}
      />
      <circle
        cx={CENTER}
        cy={CENTER}
        r={294}
        stroke="var(--primary)"
        strokeOpacity={0.35}
        strokeWidth={0.6}
      />
    </svg>
  );
}
