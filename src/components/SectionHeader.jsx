export default function SectionHeader({ tag, title, description }) {
  return (
    <div className="section-header">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-desc">{description}</p>
    </div>
  );
}
