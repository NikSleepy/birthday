import { useCallback, useEffect, useState } from 'react';
import Reveal from './Reveal';
import { usePrefersReducedMotion } from '../hooks/useReveal';

export default function AgeSection({ config, targetAge }) {
  const prefersReduced = usePrefersReducedMotion();
  const [started, setStarted] = useState(false);
  const [age, setAge] = useState(0);

  const handleVisible = useCallback(() => setStarted(true), []);

  useEffect(() => {
    if (!started) return undefined;

    if (prefersReduced) {
      setAge(targetAge);
      return undefined;
    }

    let frame;
    let startTime;

    const step = (now) => {
      if (startTime === undefined) startTime = now;
      const progress = Math.min((now - startTime) / 1200, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAge(Math.round(eased * targetAge));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, prefersReduced, targetAge]);

  return (
    <Reveal id="age-section" onVisible={handleVisible}>
      <div className="age-card">
        <p className="age-lead">{config.lead}</p>
        <div className="age-number-wrap">
          <span className="age-number">{age}</span>
          <span className="age-unit">{config.unit}</span>
        </div>
        <p className="age-note">{config.catatan}</p>
      </div>
    </Reveal>
  );
}
