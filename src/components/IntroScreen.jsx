import { useEffect, useRef } from 'react';
import { EnvelopeArt, GiftIcon, StarIcon } from './icons';

export default function IntroScreen({ hidden, config, onOpen }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (hidden) return;
    buttonRef.current?.focus({ preventScroll: true });
  }, [hidden]);

  return (
    <div
      className={`intro-screen${hidden ? ' is-hidden' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="intro-title"
      aria-hidden={hidden || undefined}
      inert={hidden ? true : undefined}
    >
      <div className="intro-card">
        <div className="intro-badge">
          <StarIcon />
          <span>{config.badge}</span>
        </div>

        <div className="intro-envelope-art">
          <EnvelopeArt />
        </div>

        <h1 id="intro-title" className="intro-title">
          {config.judul}
        </h1>
        <p className="intro-subtitle">{config.subjudul}</p>

        <button
          ref={buttonRef}
          className="btn-primary"
          type="button"
          onClick={onOpen}
        >
          <span>{config.tombol}</span>
          <GiftIcon />
        </button>
      </div>
    </div>
  );
}
