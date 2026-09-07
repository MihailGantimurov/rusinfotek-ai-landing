'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import { IBM_Plex_Sans } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { HeroDataFlow } from './HeroDataFlow';
import styles from './Hero.module.css';

const display = IBM_Plex_Sans({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  weight: '400',
});
const lines = ['Цифровая', 'инфраструктура', 'для вашего бизнеса'];
const ease = [0.22, 0.72, 0.24, 1] as const;
const crossfadeSeconds = 1.05;
const nearEndWindowSeconds = 2;

type CrossfadeController = {
  syncPlayback: (disabled: boolean) => void;
};

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const crossfadeControllerRef = useRef<CrossfadeController | null>(null);
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ['start start', '300px start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -36]);
  const copyOpacity = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0.88]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.025]);
  const flowY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -16]);

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    const videos = [videoA, videoB] as const;
    let activeIndex: 0 | 1 = 0;
    let playbackDisabled = false;
    let transitioning = false;
    let destroyed = false;
    let nearEndTimer: ReturnType<typeof setTimeout> | null = null;
    let fadeTimer: ReturnType<typeof setTimeout> | null = null;

    const clearNearEndTimer = () => {
      if (nearEndTimer !== null) {
        clearTimeout(nearEndTimer);
        nearEndTimer = null;
      }
    };

    const clearFadeTimer = () => {
      if (fadeTimer !== null) {
        clearTimeout(fadeTimer);
        fadeTimer = null;
      }
    };

    const setVisible = (index: 0 | 1, visible: boolean) => {
      videos[index].dataset.visible = visible ? 'true' : 'false';
    };

    const scheduleTransition = (index: 0 | 1) => {
      if (
        destroyed ||
        playbackDisabled ||
        transitioning ||
        index !== activeIndex
      )
        return;

      const video = videos[index];
      const remaining = video.duration - video.currentTime;
      if (!Number.isFinite(remaining) || remaining > nearEndWindowSeconds)
        return;

      clearNearEndTimer();
      nearEndTimer = setTimeout(
        () => void beginCrossfade(index),
        Math.max(0, remaining - crossfadeSeconds) * 1000,
      );
    };

    const finishCrossfade = (outgoingIndex: 0 | 1, incomingIndex: 0 | 1) => {
      if (destroyed) return;

      activeIndex = incomingIndex;
      transitioning = false;
      fadeTimer = null;

      const outgoing = videos[outgoingIndex];
      outgoing.pause();
      outgoing.currentTime = 0;
      scheduleTransition(incomingIndex);
    };

    async function beginCrossfade(outgoingIndex: 0 | 1) {
      if (
        destroyed ||
        playbackDisabled ||
        transitioning ||
        outgoingIndex !== activeIndex
      )
        return;

      transitioning = true;
      clearNearEndTimer();

      const incomingIndex: 0 | 1 = outgoingIndex === 0 ? 1 : 0;
      const incoming = videos[incomingIndex];
      incoming.pause();
      incoming.currentTime = 0;

      try {
        await incoming.play();
      } catch {
        transitioning = false;
        scheduleTransition(outgoingIndex);
        return;
      }

      if (destroyed || playbackDisabled || outgoingIndex !== activeIndex) {
        incoming.pause();
        transitioning = false;
        return;
      }

      setVisible(incomingIndex, true);
      setVisible(outgoingIndex, false);
      fadeTimer = setTimeout(
        () => finishCrossfade(outgoingIndex, incomingIndex),
        crossfadeSeconds * 1000,
      );
    }

    const listeners = videos.map((video, index) => {
      const videoIndex = index as 0 | 1;
      const onTimeUpdate = () => scheduleTransition(videoIndex);
      const onPlaying = () => scheduleTransition(videoIndex);
      const onEnded = () => void beginCrossfade(videoIndex);
      const onPause = () => {
        if (videoIndex === activeIndex && !transitioning) clearNearEndTimer();
      };

      video.addEventListener('timeupdate', onTimeUpdate);
      video.addEventListener('playing', onPlaying);
      video.addEventListener('durationchange', onTimeUpdate);
      video.addEventListener('ended', onEnded);
      video.addEventListener('pause', onPause);

      return { video, onTimeUpdate, onPlaying, onEnded, onPause };
    });

    setVisible(0, true);
    setVisible(1, false);
    videoB.pause();
    videoB.currentTime = 0;

    const syncPlayback = (disabled: boolean) => {
      playbackDisabled = disabled;
      clearNearEndTimer();

      if (disabled) {
        videos.forEach((video) => video.pause());
        return;
      }

      const activeVideo = videos[activeIndex];
      void activeVideo
        .play()
        .then(() => scheduleTransition(activeIndex))
        .catch(() => {
          /* Autoplay may be blocked by device power settings. */
        });
    };

    crossfadeControllerRef.current = { syncPlayback };

    return () => {
      destroyed = true;
      clearNearEndTimer();
      clearFadeTimer();
      videos.forEach((video) => video.pause());
      listeners.forEach(
        ({ video, onTimeUpdate, onPlaying, onEnded, onPause }) => {
          video.removeEventListener('timeupdate', onTimeUpdate);
          video.removeEventListener('playing', onPlaying);
          video.removeEventListener('durationchange', onTimeUpdate);
          video.removeEventListener('ended', onEnded);
          video.removeEventListener('pause', onPause);
        },
      );
      crossfadeControllerRef.current = null;
    };
  }, []);

  useEffect(() => {
    crossfadeControllerRef.current?.syncPlayback(!!reduceMotion || paused);
  }, [reduceMotion, paused]);

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false as const : { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: reduceMotion ? 0 : delay, ease },
  });

  return (
    <section ref={rootRef} id="top" aria-labelledby="hero-title" className={styles.hero}>
      <motion.div aria-hidden="true" className={styles.media} style={{ scale: mediaScale }}>
        <video ref={videoARef} className={styles.video} data-visible="true" autoPlay muted playsInline preload="auto" tabIndex={-1}>
          <source src="/media/hero/hero-cinematic.mp4" type="video/mp4" />
        </video>
        <video ref={videoBRef} className={styles.video} data-visible="false" autoPlay muted playsInline preload="auto" tabIndex={-1}>
          <source src="/media/hero/hero-cinematic.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div aria-hidden="true" className={styles.shade} />
      <motion.div className={styles.flow} style={{ y: flowY }} {...reveal(2)}>
        <HeroDataFlow paused={!!reduceMotion || paused} />
      </motion.div>
      <motion.div className={styles.copy} style={{ y: copyY, opacity: copyOpacity }}>
        <motion.p className={styles.eyebrow} {...reveal(0.3)}>AI-АВТОМАТИЗАЦИЯ БИЗНЕС-ПРОЦЕССОВ</motion.p>
        <h1 id="hero-title" className={`${display.className} ${styles.heading}`}>
          {lines.map((line, index) => (
            <span className={styles.lineMask} key={line}>
              <motion.span className={styles.line} initial={reduceMotion ? false : { y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.75, delay: reduceMotion ? 0 : 0.55 + index * 0.12, ease }}>{line}</motion.span>
              {index < lines.length - 1 ? ' ' : null}
            </span>
          ))}
        </h1>
        <motion.p className={styles.subtitle} {...reveal(1.2)}>Создаём AI-инфраструктуру, которая объединяет ключевые процессы бизнеса в единый цифровой контур.</motion.p>
        <div className={styles.actions}>
          <motion.div {...reveal(1.6)}>
            <Link className={styles.primary} href="/contacts"><span>НАЧАТЬ РАБОТУ</span><span className={styles.arrowSegment}><ArrowUpRight size={20} aria-hidden="true" /></span></Link>
          </motion.div>
          <motion.div {...reveal(1.8)}>
            <a className={styles.secondary} href="#directions"><span>СМОТРЕТЬ РЕШЕНИЯ</span><ArrowDown size={15} aria-hidden="true" /></a>
          </motion.div>
        </div>
      </motion.div>
      <div className={styles.footer}>
        <span aria-hidden="true">RIT / CORE_01</span>
        <span aria-hidden="true" className={styles.sync}>SYNC / 04</span>
        {!reduceMotion && <button className={styles.playback} type="button" onClick={() => setPaused(!paused)} aria-label={paused ? 'Включить фоновую анимацию' : 'Приостановить фоновую анимацию'}>{paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}</button>}
      </div>
    </section>
  );
}
