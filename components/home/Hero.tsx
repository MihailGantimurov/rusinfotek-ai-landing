'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import { Geologica } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { HeroDataFlow } from './HeroDataFlow';
import styles from './Hero.module.css';

const display = Geologica({ subsets: ['cyrillic', 'latin'], display: 'swap', weight: 'variable' });
const lines = ['Цифровая', 'инфраструктура', 'для вашего бизнеса'];
const ease = [0.22, 0.72, 0.24, 1] as const;

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ['start start', '300px start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -36]);
  const copyOpacity = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0.88]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.025]);
  const flowY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -16]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion || paused) video.pause();
    else void video.play().catch(() => { /* Autoplay may be blocked by device power settings. */ });
  }, [reduceMotion, paused]);

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false as const : { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: reduceMotion ? 0 : delay, ease },
  });

  return (
    <section ref={rootRef} id="top" aria-labelledby="hero-title" className={styles.hero}>
      <motion.div aria-hidden="true" className={styles.media} style={{ scale: mediaScale }}>
        <video ref={videoRef} className={styles.video} autoPlay muted loop playsInline preload="metadata" tabIndex={-1}>
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
