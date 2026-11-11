// Watercolor-style florals, pure SVG (koi image file nahi chahiye).
const Flower = ({ x, y, r, fill, n = 6, rot = 0, op = 0.85 }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot})`} filter="url(#soft)">
    {Array.from({ length: n }).map((_, i) => (
      <ellipse key={i} cx="0" cy={-r * 0.6} rx={r * 0.44} ry={r * 0.64} fill={fill} opacity={op} transform={`rotate(${(360 / n) * i})`} />
    ))}
    <circle r={r * 0.22} fill="#F6D27A" opacity="0.95" />
  </g>
);

const Leaf = ({ x, y, rx, ry, rot, fill = "#A9BC9F" }) => (
  <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={fill} opacity="0.75" transform={`rotate(${rot} ${x} ${y})`} filter="url(#soft)" />
);

const Defs = () => (
  <defs>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="0.7" />
    </filter>
  </defs>
);

export function FloralCluster({ className = "" }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <Defs />
      <Leaf x={92} y={30} rx={7} ry={20} rot={60} />
      <Leaf x={28} y={92} rx={7} ry={20} rot={-20} fill="#8C8B50" />
      <Leaf x={70} y={70} rx={6} ry={18} rot={30} fill="#778454" />
      <Flower x={42} y={40} r={30} fill="#E69AB4" rot={10} />
      <Flower x={96} y={22} r={20} fill="#C6A0CB" n={5} rot={30} />
      <Flower x={20} y={92} r={20} fill="#D8AED5" n={5} />
      <Flower x={72} y={74} r={16} fill="#D57E9E" n={5} rot={20} />
      <Flower x={118} y={64} r={10} fill="#F0B7C9" n={5} />
      <circle cx="58" cy="108" r="5" fill="#D5BA76" opacity="0.9" />
      <circle cx="126" cy="38" r="4" fill="#E69AB4" opacity="0.9" />
    </svg>
  );
}

export function GoldSprig({ className = "" }) {
  const stem = { stroke: "#A77AA6", strokeWidth: 1.2, fill: "none", strokeLinecap: "round" };
  const leaves = [[40, 30, 20], [60, 55, 35], [80, 82, 50], [100, 110, 65], [118, 138, 75]];
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <path d="M10 8 C50 30 100 80 140 150" {...stem} />
      <path d="M0 50 C30 60 70 100 90 150" {...stem} opacity="0.7" />
      {leaves.map(([x, y, r], i) => (
        <g key={i}>
          <ellipse cx={x - 8} cy={y + 4} rx="3.5" ry="11" transform={`rotate(${-50} ${x - 8} ${y + 4})`} fill="#C29BC1" opacity="0.4" stroke="#A77AA6" strokeWidth="0.8" />
          <ellipse cx={x + 8} cy={y - 4} rx="3.5" ry="11" transform={`rotate(${40} ${x + 8} ${y - 4})`} fill="#C29BC1" opacity="0.4" stroke="#A77AA6" strokeWidth="0.8" />
        </g>
      ))}
    </svg>
  );
}
