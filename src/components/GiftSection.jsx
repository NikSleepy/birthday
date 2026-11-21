import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { fireConfetti } from '../utils/confetti';

export default function GiftSection({ config }) {
  const [opened, setOpened] = useState(false);

  const openGift = () => {
    if (opened) return;
    setOpened(true);
    fireConfetti({ particleCount: 75, spread: 70 });
  };

  return (
    <Reveal id="gift-section">
      <SectionHeader
        tag={config.tag}
        title={config.judul}
        description={config.deskripsi}
      />

      <div className="gift-stage">
        <button
          className={`gift-box${opened ? ' is-opened' : ''}`}
          type="button"
          aria-label={opened ? 'Kotak hadiah sudah terbuka' : 'Buka kotak hadiah'}
          aria-expanded={opened}
          aria-controls="vouchers-list"
          onClick={openGift}
        >
          <span className="gift-lid">
            <span className="gift-bow" aria-hidden="true">
              🎀
            </span>
          </span>
          <span className="gift-body">
            <span className="gift-ribbon-v" aria-hidden="true" />
          </span>
        </button>

        <p className="gift-hint" aria-live="polite">
          {opened ? config.petunjukTerbuka : config.petunjuk}
        </p>

        <div
          id="vouchers-list"
          className={`vouchers-list${opened ? ' is-shown' : ''}`}
        >
          {config.items.map((item) => (
            <div className="voucher-card" key={item.judul}>
              <div className="voucher-icon" aria-hidden="true">
                {item.ikon}
              </div>
              <div>
                <p className="voucher-title">{item.judul}</p>
                <p className="voucher-desc">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
