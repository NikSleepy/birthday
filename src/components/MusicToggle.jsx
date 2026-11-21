import { MusicIcon } from './icons';

export default function MusicToggle({ playing, onToggle }) {
  return (
    <button
      className={`music-toggle${playing ? ' is-playing' : ''}`}
      type="button"
      aria-label={playing ? 'Jeda musik ulang tahun' : 'Putar musik ulang tahun'}
      aria-pressed={playing}
      title="Putar / Jeda Musik"
      onClick={onToggle}
    >
      <MusicIcon />
      <span className="music-status-dot" aria-hidden="true" />
    </button>
  );
}
