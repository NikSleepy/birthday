import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function TimelineSection({ config }) {
  return (
    <Reveal id="timeline-section">
      <SectionHeader
        tag={config.tag}
        title={config.judul}
        description={config.deskripsi}
      />

      <div className="timeline-list">
        {config.items.map((item, index) => (
          <Reveal
            key={`${item.judul}-${index}`}
            as="article"
            className="timeline-item"
            delay={(index % 3) * 70}
          >
            <span className="timeline-dot" aria-hidden="true" />
            <img
              className="timeline-photo"
              src={item.foto}
              alt={item.judul}
              loading="lazy"
              decoding="async"
            />
            <span className="timeline-date">{item.tanggal}</span>
            <h3 className="timeline-title">{item.judul}</h3>
            <p className="timeline-caption">{item.caption}</p>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
