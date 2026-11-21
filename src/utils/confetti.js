import confetti from 'canvas-confetti';

const CONFETTI_COLORS = ['#CDE7FF', '#7FB8F5', '#FFD6E8', '#FF94BF', '#FFFFFF'];

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Confetti pastel yang otomatis dimatikan saat reduced motion aktif.
 */
export function fireConfetti({
  particleCount = 70,
  spread = 70,
  origin = { y: 0.65 },
  ...options
} = {}) {
  if (prefersReducedMotion()) return;

  confetti({
    particleCount,
    spread,
    origin,
    colors: CONFETTI_COLORS,
    ...options,
  });
}
