import { Fragment, useEffect, useMemo, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/useReveal';

const BALLOON_COLORS = [
  '#A9D6FF',
  '#FFB8D6',
  '#CDE7FF',
  '#FF94BF',
  '#7FB8F5',
  '#FFD6E8',
];

export default function Hero({ config, playKey }) {
  const prefersReduced = usePrefersReducedMotion();
  const [shownCount, setShownCount] = useState(0);

  // Kata dibungkus agar judul tidak terpotong di tengah kata saat baris baru.
  const { words, totalChars } = useMemo(() => {
    let charIndex = 0;
    const nextWords = config.judul.split(' ').map((word) => {
      const chars = Array.from(word).map((char) => ({
        char,
        index: charIndex++,
      }));
      charIndex += 1; // spasi setelah kata
      return chars;
    });

    return { words: nextWords, totalChars: charIndex - 1 };
  }, [config.judul]);

  const balloons = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => {
        const color = BALLOON_COLORS[index % BALLOON_COLORS.length];
        return {
          id: index,
          left: `${8 + index * 11.5}%`,
          background: `radial-gradient(circle at 30% 30%, #FFFFFF, ${color})`,
          animationDuration: `${8 + (index % 4) * 2.2}s`,
          animationDelay: `${(index % 5) * 1.1}s`,
        };
      }),
    []
  );

  useEffect(() => {
    if (playKey === 0) return undefined;

    if (prefersReduced) {
      setShownCount(totalChars);
      return undefined;
    }

    setShownCount(0);
    const timers = Array.from({ length: totalChars }, (_, index) =>
      window.setTimeout(() => setShownCount(index + 1), index * 38)
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [playKey, prefersReduced, totalChars]);

  return (
    <section id="hero" className="hero-section">
      <div className="balloons-stage" aria-hidden="true">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="balloon"
            style={{
              left: balloon.left,
              background: balloon.background,
              animationDuration: balloon.animationDuration,
              animationDelay: balloon.animationDelay,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-pill">{config.pill}</div>
        <h2
          id="hero-title"
          className="hero-title"
          tabIndex={-1}
          aria-label={config.judul}
        >
          {words.map((chars, wordIndex) => (
            <Fragment key={`word-${wordIndex}`}>
              <span className="hero-word" aria-hidden="true">
                {chars.map(({ char, index }) => (
                  <span
                    key={`${char}-${index}`}
                    className={`hero-char${index < shownCount ? ' is-shown' : ''}`}
                  >
                    {char}
                  </span>
                ))}
              </span>
              {wordIndex < words.length - 1 && ' '}
            </Fragment>
          ))}
        </h2>
        <p className="hero-subtitle">{config.subjudul}</p>
        <div className="hero-date-chip">{config.tanggal}</div>
      </div>

      <a href="#age-section" className="scroll-indicator">
        <span>{config.scrollHint}</span>
        <span className="scroll-arrow" aria-hidden="true">
          ↓
        </span>
      </a>
    </section>
  );
}
