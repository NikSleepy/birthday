import Reveal from './Reveal';

export default function ClosingSection({ config, onReplay }) {
  return (
    <Reveal id="closing-section">
      <div className="closing-card">
        <div className="beating-heart" aria-hidden="true">
          💗
        </div>
        <p className="closing-text">{config.teks}</p>
        <p className="closing-from">{config.dari}</p>
        <button className="btn-secondary" type="button" onClick={onReplay}>
          <span>{config.tombol}</span>
          <span aria-hidden="true">🔄</span>
        </button>
      </div>
    </Reveal>
  );
}
