'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { HeroMedia } from '@/components/home/HeroMedia';
import { BrandButton } from '@/components/shared/BrandButton';

const directions = ['Продажи', 'Логистика', 'Производство', 'Документооборот'];

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ['start start', 'end start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 72]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 132]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0.93]);

  return (
    <section
      ref={rootRef}
      id="top"
      className="hero-shell relative isolate overflow-hidden bg-[#07172a] px-4 pb-28 pt-24 text-white sm:px-7 sm:pb-36 sm:pt-28 lg:min-h-[100svh] lg:px-10 lg:pb-44 lg:pt-32 xl:px-16"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_76%_19%,rgba(94,91,188,.23),transparent_30%),radial-gradient(circle_at_20%_72%,rgba(20,112,134,.18),transparent_31%),linear-gradient(135deg,#061426_0%,#0b2341_48%,#07182c_100%)]" />
      <div aria-hidden="true" className="hero-grain absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-[1440px] min-w-0 items-center gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-12 xl:gap-20">
        <motion.div className="relative z-10 min-w-0 pt-3 lg:pt-0" style={{ y: copyY }}>
          <motion.p
            className="text-[12px] font-semibold tracking-[0.11em] text-[#aebeff]"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.08 }}
          >
            AI-АВТОМАТИЗАЦИЯ БИЗНЕС-ПРОЦЕССОВ
          </motion.p>

          <motion.h1
            className="mt-5 max-w-full text-balance text-[clamp(2.25rem,9.4vw,3.5rem)] font-[560] leading-[.98] tracking-[-0.052em] sm:text-[clamp(2.65rem,6vw,4.4rem)] lg:max-w-[780px] lg:text-[clamp(2.65rem,5.1vw,5.5rem)] lg:tracking-[-0.058em]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.16, ease: [0.22, 0.72, 0.24, 1] }}
          >
            Автоматизируем процессы, на которых работает бизнес.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[620px] text-[17px] leading-[1.7] text-white/68 sm:text-[18px]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.28 }}
          >
            AI-системы для продаж, логистики, производства и документооборота. Интегрируем решения в существующую инфраструктуру компании.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.38 }}
          >
            <BrandButton className="w-full sm:w-auto" href="/contacts" tone="light">Получить коммерческое предложение</BrandButton>
            <BrandButton className="w-full sm:w-auto" href="#directions" direction="down" tone="quiet">Смотреть решения</BrandButton>
          </motion.div>

          <motion.nav
            aria-label="Направления автоматизации"
            className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/12 pt-5"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.48 }}
          >
            {directions.map((direction, index) => (
              <a className="group inline-flex items-center gap-2 text-[13px] text-white/54 transition-colors hover:text-white" href="#directions" key={direction}>
                <span className="font-mono text-[10px] text-[#91a6ff]">0{index + 1}</span>
                {direction}
              </a>
            ))}
          </motion.nav>
        </motion.div>

        <motion.div className="relative min-w-0 lg:-mr-12 xl:-mr-20" style={{ y: mediaY, scale: mediaScale }}>
          <div aria-hidden="true" className="absolute -inset-8 bg-[radial-gradient(circle,rgba(78,103,204,.26),transparent_68%)] blur-3xl" />
          <HeroMedia />
        </motion.div>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-b from-transparent via-[#0c2440]/58 to-[#eef0ee]" />
      <div aria-hidden="true" className="absolute -bottom-1 left-1/2 h-20 w-[112%] -translate-x-1/2 rounded-t-[50%] bg-[#eef0ee] blur-[1px]" />
    </section>
  );
}
