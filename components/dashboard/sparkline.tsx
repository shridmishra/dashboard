interface SparklineProps {
  data: number[];
  color: string;
  width?: number;
  height?: number;
  id?: string;
}

export function Sparkline({
  data,
  color,
  width = 64,
  height = 28,
  id = "sparkline",
}: SparklineProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const padding = 2;
  const usableHeight = height - padding * 2;
  const usableWidth = width - padding * 2;

  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1)) * usableWidth;
    const y = padding + usableHeight - ((value - min) / range) * usableHeight;
    return { x, y };
  });

  const pathData = `M ${points[0].x} ${points[0].y} ` + 
    points.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ");

  const areaData = `${pathData} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  const gradientId = `gradient-${id}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="shrink-0 overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Area fill */}
      <path
        d={areaData}
        fill={`url(#${gradientId})`}
        className="transition-all duration-700 ease-in-out"
      />
      
      {/* Stroke line */}
      <path
        d={pathData}
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="transition-all duration-700 ease-in-out"
      />
      
      {/* Last point highlight */}
      <circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="2"
        fill={color}
        className="transition-all duration-700 ease-in-out"
      >
        <animate
          attributeName="r"
          values="2;2.5;2"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
