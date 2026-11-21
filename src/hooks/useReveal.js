import { useCallback, useEffect, useRef, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    const handleChange = (event) => setPrefersReduced(event.matches);

    setPrefersReduced(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReduced;
}

/**
 * Menjalankan callback sekali saat elemen masuk viewport.
 */
export function useReveal(onVisible) {
  const [node, setNode] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = usePrefersReducedMotion();
  const onVisibleRef = useRef(onVisible);

  const ref = useCallback((element) => setNode(element), []);

  useEffect(() => {
    onVisibleRef.current = onVisible;
  }, [onVisible]);

  useEffect(() => {
    if (!node) return undefined;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      onVisibleRef.current?.();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setIsVisible(true);
          onVisibleRef.current?.();
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, prefersReduced]);

  return { ref, isVisible };
}
