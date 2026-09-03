'use client';

/* oxlint-disable typescript/no-deprecated -- Preserve the existing Framer Motion timing API during the architecture-only refactor. */

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

import { ProcessDashboard } from '@/components/home/ProcessDashboard';
import { heroTickerItems } from '@/content/home';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const lineVariants = {
    hidden: { y: '115%', opacity: 0, filter: 'blur(12px)' },
    show: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: .78, ease: [0.2, 0.74, 0.22, 1] as const },
    },
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center border-b border-white/8 pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,232,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,232,.045)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="pointer-events-none absolute left-[58%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-primary/8 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-12 lg:pb-28">
        <motion.div className="max-w-4xl" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11 } } }}>
          <motion.div className="mb-7 inline-flex items-stretch border border-primary/20 bg-primary/[.035] font-mono text-[10px] uppercase tracking-[0.14em]" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
            <span className="flex items-center gap-2.5 border-r border-primary/20 px-3 py-2 text-primary">
              <span className="size-1.5 animate-pulse bg-primary shadow-[0_0_12px_#00FFE8]" />
              RIT / AI Process System
            </span>
            <span className="flex items-center px-3 py-2 text-white/42">online</span>
          </motion.div>

          <motion.h1
            aria-label="Автоматизация полного цикла: от приёма заявки до получения оплаты без участия человека"
            className="max-w-5xl text-[clamp(3.2rem,5.25vw,5.8rem)] font-semibold leading-[.86] tracking-[-0.07em] text-white"
            variants={{ hidden: {}, show: { transition: { staggerChildren: .095 } } }}
          >
            <span className="block overflow-hidden pb-[.12em]"><motion.span className="block" variants={lineVariants}>От заявки</motion.span></span>
            <span className="block overflow-hidden pb-[.12em]"><motion.span className="block" variants={lineVariants}><span className="text-white/28">до</span> <span className="text-primary [text-shadow:0_0_38px_rgba(0,255,232,.14)]">оплаты.</span></motion.span></span>
            <span className="mt-3 block overflow-hidden pb-[.1em] text-[clamp(1.65rem,2.5vw,2.8rem)] font-medium leading-none tracking-[-0.045em] text-white/58">
              <motion.span className="flex items-center gap-3" variants={lineVariants}>
                Без ручной рутины
                <motion.span aria-hidden="true" className="mt-1 inline-block size-[.32em] bg-primary shadow-[0_0_16px_#00FFE8]" animate={reduceMotion ? undefined : { opacity: [1, .18, 1] }} transition={{ duration: 1.15, repeat: Infinity }} />
              </motion.span>
            </span>
          </motion.h1>

          <motion.div className="mt-7 grid grid-cols-[auto_1fr_auto] items-center gap-3 font-mono text-[9px] uppercase tracking-[.13em]" variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
            <span className="text-white/44">01 · Заявка</span>
            <span className="relative h-px overflow-visible bg-white/14">
              <motion.span
                aria-hidden="true"
                className="absolute -top-[3px] size-[7px] bg-primary shadow-[0_0_16px_#00FFE8]"
                animate={reduceMotion ? { left: '96%' } : { left: ['0%', '96%'] }}
                transition={{ duration: 3.6, repeat: Infinity, repeatDelay: .6, ease: 'easeInOut' }}
              />
            </span>
            <span className="text-primary">05 · Оплата</span>
          </motion.div>

          <motion.p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/64 sm:text-xl" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}>
            Модульные AI-агенты ведут весь процесс сами. Внедрение за 2 недели — без остановки работы вашей компании.
          </motion.p>

          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}>
            <a className="group inline-flex h-13 items-center justify-center gap-2 bg-primary px-6 text-[15px] font-semibold text-[#00101f] transition-all hover:shadow-[0_0_34px_rgba(0,255,232,.3)]" href="#contact">
              Начать с аудита
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a className="inline-flex h-13 items-center justify-center border border-white/18 px-6 text-[15px] font-medium text-white transition-colors hover:border-primary/50 hover:text-primary" href="#cases">Смотреть кейсы</a>
          </motion.div>

          <motion.div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/48" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
            {['Сервера клиента', '152-ФЗ', 'Интеграция с 1С'].map((item) => (
              <span className="flex items-center gap-2" key={item}><Check className="size-3.5 text-primary" />{item}</span>
            ))}
          </motion.div>
        </motion.div>

        <ProcessDashboard />
      </div>
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/8 bg-[#001a38]/76 py-3 backdrop-blur-xl">
        <motion.div
          aria-hidden="true"
          className="flex w-max items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 1].map((loop) => heroTickerItems.map((item) => (
            <div className="flex items-center" key={`${loop}-${item}`}>
              <span className="px-6 font-mono text-[10px] uppercase tracking-[.14em] text-white/38 sm:px-8">{item}</span>
              <span className="size-1 bg-primary shadow-[0_0_8px_#00FFE8]" />
            </div>
          )))}
        </motion.div>
      </div>
    </section>
  );
}
