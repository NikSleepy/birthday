import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { fireConfetti } from '../utils/confetti';

export default function CakeSection({ config }) {
  const [candleOut, setCandleOut] = useState(false);
  const [blowCount, setBlowCount] = useState(0);

  const toggleCandle = () => {
    if (candleOut) {
      setCandleOut(false);
      return;
    }

    setCandleOut(true);
    setBlowCount((count) => count + 1);
    fireConfetti({ particleCount: 85, spread: 75, origin: { y: 0.7 } });
  };

  return (
    <Reveal id="cake-section">
      <SectionHeader
        tag={config.tag}
        title={config.judul}
        description={config.deskripsi}
      />

      <div className="cake-card">
        <button
          className="cake-stage"
          type="button"
          aria-label={candleOut ? 'Nyalakan lilin lagi' : 'Tiup lilin'}
          onClick={toggleCandle}
        >
          <span className="candle">
            <span className="wick" />
            <span
              className={`flame${candleOut ? ' is-out' : ''}`}
              aria-hidden="true"
            />
            {candleOut && (
              <span
                key={blowCount}
                className="smoke is-rising"
                aria-hidden="true"
              />
            )}
          </span>
          <span className="cake-top-tier" />
          <span className="cake-bottom-tier" />
          <span className="cake-plate" />
        </button>

        <button
          className="btn-primary"
          type="button"
          aria-pressed={candleOut}
          onClick={toggleCandle}
        >
          <span>{candleOut ? config.tombolNyalakan : config.tombolTiup}</span>
          <span aria-hidden="true">{candleOut ? '🕯️' : '🌬️'}</span>
        </button>

        <p
          className={`cake-wish-msg${candleOut ? ' is-shown' : ''}`}
          aria-live="polite"
        >
          {config.pesan}
        </p>
      </div>
    </Reveal>
  );
}
