import { useEffect, useMemo, useRef, useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { usePrefersReducedMotion } from '../hooks/useReveal';

const OPEN_DELAY = 280;

export default function LetterSection({ config }) {
  const prefersReduced = usePrefersReducedMotion();
  const chars = useMemo(() => Array.from(config.isi), [config.isi]);

  const [phase, setPhase] = useState('closed');
  const [typedCount, setTypedCount] = useState(0);
  const [done, setDone] = useState(false);

  const openTimer = useRef(null);
  const paperRef = useRef(null);

  useEffect(() => () => window.clearTimeout(openTimer.current), []);

  const handleOpen = () => {
    if (phase !== 'closed') return;
    setPhase('opening');
    openTimer.current = window.setTimeout(
      () => setPhase('open'),
      prefersReduced ? 0 : OPEN_DELAY
    );
  };

  // Efek mengetik: berhenti otomatis saat selesai atau saat dilewati.
  useEffect(() => {
    if (phase !== 'open' || done) return undefined;

    if (prefersReduced) {
      setTypedCount(chars.length);
      setDone(true);
      return undefined;
    }

    let index = 0;
    let timer;
    setTypedCount(0);

    const step = () => {
      index += 1;
      setTypedCount(index);

      if (index >= chars.length) {
        setDone(true);
        return;
      }

      timer = window.setTimeout(step, 26);
    };

    timer = window.setTimeout(step, 26);
    return () => window.clearTimeout(timer);
  }, [phase, prefersReduced, chars, done]);

  useEffect(() => {
    if (phase !== 'open') return;
    paperRef.current?.focus({ preventScroll: true });
  }, [phase]);

  const showEverything = () => {
    setTypedCount(chars.length);
    setDone(true);
  };

  return (
    <Reveal id="letter-section">
      <SectionHeader
        tag={config.tag}
        title={config.judul}
        description={config.deskripsi}
      />

      <div className="envelope-container">
        <div className="envelope-box">
          {phase !== 'open' ? (
            <div
              className={`envelope-closed${phase === 'opening' ? ' is-opening' : ''}`}
              role="button"
              tabIndex={0}
              aria-label={config.petunjukBuka}
              onClick={handleOpen}
              onKeyDown={(event) => {
                if (event.key !== 'Enter' && event.key !== ' ') return;
                event.preventDefault();
                handleOpen();
              }}
            >
              <div className="envelope-flap" aria-hidden="true">
                ✉️
              </div>
              <h3 className="envelope-title">{config.petunjukBuka}</h3>
              <p className="envelope-subtitle">{config.dari}</p>
            </div>
          ) : (
            <article
              ref={paperRef}
              className="letter-paper is-open"
              tabIndex={-1}
              aria-live="polite"
              aria-busy={!done}
            >
              <p className="letter-greeting">{config.sapaan}</p>
              <p className="letter-body">
                {chars.slice(0, typedCount).join('')}
                {!done && (
                  <span className="typing-cursor" aria-hidden="true" />
                )}
              </p>
              <p
                className={`letter-signature${done ? ' is-visible' : ''}`}
              >
                {config.penutup}
              </p>
              {!done && (
                <div className="letter-actions">
                  <button
                    className="btn-secondary"
                    type="button"
                    onClick={showEverything}
                  >
                    {config.tombolTampilkan}
                  </button>
                </div>
              )}
            </article>
          )}
        </div>
      </div>
    </Reveal>
  );
}
