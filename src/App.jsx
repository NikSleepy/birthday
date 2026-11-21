import { useCallback, useEffect, useRef, useState } from 'react';
import { birthdayConfig } from './data/birthdayConfig';
import { fireConfetti } from './utils/confetti';
import AmbientPetals from './components/AmbientPetals';
import IntroScreen from './components/IntroScreen';
import MusicToggle from './components/MusicToggle';
import Hero from './components/Hero';
import AgeSection from './components/AgeSection';
import LetterSection from './components/LetterSection';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import ReasonsSection from './components/ReasonsSection';
import CakeSection from './components/CakeSection';
import GiftSection from './components/GiftSection';
import ClosingSection from './components/ClosingSection';

export default function App() {
  const config = birthdayConfig;

  const [introOpened, setIntroOpened] = useState(false);
  const [playKey, setPlayKey] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const audioRef = useRef(null);
  const confettiTimer = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('scroll-locked', !introOpened);
    return () => document.body.classList.remove('scroll-locked');
  }, [introOpened]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = config.musik.volume;
    }
  }, [config.musik.volume]);

  useEffect(
    () => () => {
      window.clearTimeout(confettiTimer.current);
    },
    []
  );

  // Fokus pindah ke judul hero setelah intro tertutup.
  useEffect(() => {
    if (!introOpened) return undefined;

    const timer = window.setTimeout(() => {
      document.getElementById('hero-title')?.focus({ preventScroll: true });
    }, 350);

    return () => window.clearTimeout(timer);
  }, [introOpened]);

  useEffect(() => {
    document.title = `Selamat Ulang Tahun, ${config.namaPacar}! 🎂💌`;
  }, [config.namaPacar]);

  const playMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const promise = audio.play();
    if (promise !== undefined) {
      promise.catch(() => setIsMusicPlaying(false));
    }
  }, []);

  const handleOpenSurprise = () => {
    setIntroOpened(true);
    setPlayKey((key) => key + 1);
    playMusic();

    window.clearTimeout(confettiTimer.current);
    confettiTimer.current = window.setTimeout(
      () => fireConfetti({ particleCount: 90, spread: 80 }),
      250
    );
  };

  const handleToggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) playMusic();
    else audio.pause();
  };

  const handleReplay = () => {
    // CSS `scroll-behavior: smooth` juga memengaruhi behavior "auto",
    // jadi matikan sementara agar lompat ke atas terjadi seketika.
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    root.scrollTop = 0;
    document.body.scrollTop = 0;
    root.style.scrollBehavior = previousBehavior;
    setIntroOpened(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={config.musik.src}
        loop
        preload="metadata"
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      />

      <div inert={!introOpened ? true : undefined}>
        <MusicToggle playing={isMusicPlaying} onToggle={handleToggleMusic} />
      </div>
      <AmbientPetals />

      <IntroScreen
        hidden={introOpened}
        config={config.intro}
        onOpen={handleOpenSurprise}
      />

      <main className="page-wrapper" inert={!introOpened ? true : undefined}>
        <Hero config={config.hero} playKey={playKey} />
        <AgeSection config={config.umurSection} targetAge={config.umur} />
        <LetterSection config={config.surat} />
        <TimelineSection config={config.timelineSection} />
        <GallerySection config={config.galeriSection} />
        <ReasonsSection config={config.alasanSection} />
        <CakeSection config={config.kueSection} />
        <GiftSection config={config.hadiahSection} />
        <ClosingSection config={config.penutup} onReplay={handleReplay} />
      </main>
    </>
  );
}
