import { useMemo } from 'react';

const SYMBOLS = ['🌸', '🩵', '🩷', '✨'];

export default function AmbientPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        id: index,
        symbol: SYMBOLS[index % SYMBOLS.length],
        left: `${(index * 8.3) % 96}%`,
        fontSize: `${13 + (index % 3) * 4}px`,
        animationDuration: `${9 + (index % 5) * 2.5}s`,
        animationDelay: `${(index % 6) * 1.4}s`,
      })),
    []
  );

  return (
    <div className="petals-layer" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            fontSize: petal.fontSize,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
          }}
        >
          {petal.symbol}
        </span>
      ))}
    </div>
  );
}
