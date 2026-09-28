const SIZE = 600;
const CENTER = SIZE / 2;
const STEPS = 720;

type Band = {
  radius: number;
  amplitude: number;
  lobes: number;
  secondary: number;
  secondaryLobes: number;
  strands: number;
  tone: "primary" | "accent";
  opacity: number;
};

const BANDS: Band[] = [
  { radius: 250, amplitude: 22, lobes: 36, secondary: 8, secondaryLobes: 6, strands: 14, tone: "primary", opacity: 0.55 },
  { radius: 185, amplitude: 30, lobes: 24, secondary: 10, secondaryLobes: 4, strands: 16, tone: "primary", opacity: 0.7 },
  { radius: 120, amplitude: 26, lobes: 18, secondary: 6, secondaryLobes: 3, strands: 12, tone: "accent", opacity: 0.9 },
  { radius: 62, amplitude: 20, lobes: 12, secondary: 4, secondaryLobes: 2, strands: 10, tone: "primary", opacity: 0.8 },
];

function strandPath(band: Band, strand: number) {
  const phase = (strand / band.strands) * Math.PI * 2;
  let d = "";
  for (let i = 0; i <= STEPS; i++) {
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
    key: `${bandIndex}-${strand}`,
    d: strandPath(band, strand),
    tone: band.tone,
    opacity: band.opacity,
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
      <circle cx={CENTER} cy={CENTER} r={288} stroke="var(--primary)" strokeOpacity={0.35} strokeWidth={0.6} />
      <circle cx={CENTER} cy={CENTER} r={294} stroke="var(--primary)" strokeOpacity={0.35} strokeWidth={0.6} />
    </svg>
  );
}
