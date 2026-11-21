import { useReveal } from '../hooks/useReveal';

/**
 * Membungkus konten dengan animasi fade + slide up saat masuk viewport.
 * `as` bisa diganti jadi article/div sesuai kebutuhan.
 */
export default function Reveal({
  as: Tag = 'section',
  className = '',
  delay = 0,
  onVisible,
  children,
  ...rest
}) {
  const { ref, isVisible } = useReveal(onVisible);
  const classes = ['reveal', isVisible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
