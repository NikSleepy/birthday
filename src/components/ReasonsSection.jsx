import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function ReasonsSection({ config }) {
  const [flipped, setFlipped] = useState(() => new Set());

  const toggleCard = (index) => {
    setFlipped((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <Reveal id="reasons-section">
      <SectionHeader
        tag={config.tag}
        title={config.judul}
        description={config.deskripsi}
      />

      <div className="reasons-grid">
        {config.items.map((reason, index) => {
          const isFlipped = flipped.has(index);

          return (
            <button
              key={`${index}-${reason}`}
              className={`reason-card${isFlipped ? ' is-flipped' : ''}`}
              type="button"
              aria-pressed={isFlipped}
              aria-label={`Alasan nomor ${index + 1}: ${
                isFlipped ? reason : 'ketuk untuk membuka'
              }`}
              onClick={() => toggleCard(index)}
            >
              <span className="reason-inner">
                <span className="reason-face reason-front" aria-hidden="true">
                  <span className="reason-num">#{index + 1}</span>
                  <span className="reason-tap-hint">Ketuk untuk buka 💌</span>
                </span>
                <span className="reason-face reason-back" aria-hidden="true">
                  <span className="reason-text">{reason}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </Reveal>
  );
}
