import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function GallerySection({ config }) {
  const [zoomed, setZoomed] = useState(() => new Set());

  const toggleZoom = (index) => {
    setZoomed((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <Reveal id="gallery-section">
      <SectionHeader
        tag={config.tag}
        title={config.judul}
        description={config.deskripsi}
      />

      <div className="polaroid-grid">
        {config.items.map((item, index) => {
          const isZoomed = zoomed.has(index);

          return (
            <button
              key={`${item.caption}-${index}`}
              className={`polaroid-card${isZoomed ? ' is-zoomed' : ''}`}
              type="button"
              aria-pressed={isZoomed}
              aria-label={`${item.caption}. Ketuk untuk ${
                isZoomed ? 'memperkecil' : 'memperbesar'
              } foto.`}
              onClick={() => toggleZoom(index)}
            >
              <img
                className="polaroid-img"
                src={item.foto}
                alt={item.caption}
                loading="lazy"
                decoding="async"
              />
              <span className="polaroid-caption">{item.caption}</span>
            </button>
          );
        })}
      </div>
    </Reveal>
  );
}
