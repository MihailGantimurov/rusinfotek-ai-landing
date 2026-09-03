'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Reveal } from '@/components/shared/Reveal';
import { SectionIntro } from '@/components/shared/SectionIntro';
import { processSteps } from '@/content/home';

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="border-y border-white/8 bg-[#001a38] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
        <div>
          <SectionIntro index="04 / Процесс" title="От аудита до запуска — 2 недели" text="Начинаем с одного процесса, доказываем эффект на данных и расширяем систему без повторной перестройки." />
          <Reveal className="mt-10 border-l border-primary/40 pl-5">
            <p className="text-sm leading-relaxed text-white/46">Работа идёт параллельно текущим операциям. Сотрудники продолжают пользоваться привычными системами.</p>
          </Reveal>
          <Reveal className="relative mt-10 overflow-hidden border border-primary/18 bg-primary/[.035] p-6" delay={.1}>
            <div className="absolute -right-10 -top-12 size-40 rounded-full border border-primary/10" />
            <div className="absolute -right-4 -top-7 size-24 rounded-full border border-primary/18" />
            <div className="relative flex items-end justify-between gap-5">
              <div><p className="text-6xl font-medium leading-none tracking-[-.07em] text-primary">14</p><p className="mt-2 font-mono text-[9px] uppercase tracking-[.14em] text-white/35">дней до запуска</p></div>
              <div className="pb-1 text-right"><p className="text-2xl font-medium text-white">0</p><p className="mt-1 text-[10px] text-white/34">остановок бизнеса</p></div>
            </div>
          </Reveal>
        </div>

        <div className="relative border-t border-white/10">
          <motion.span aria-hidden="true" className="absolute -left-px top-0 z-10 h-20 w-px bg-primary shadow-[0_0_14px_#00FFE8]" animate={reduceMotion ? undefined : { top: ['0%', 'calc(100% - 80px)'] }} transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
          {processSteps.map((item, index) => (
            <Reveal className="group relative grid gap-4 border-b border-white/10 px-0 py-7 transition-colors hover:bg-primary/[.025] sm:grid-cols-[64px_145px_1fr_auto] sm:items-start sm:px-5 sm:py-9" delay={index * 0.06} key={item.number}>
              <span className="font-mono text-xs text-primary">{item.number}</span>
              <div><h3 className="text-xl font-medium tracking-[-.03em] text-white">{item.title}</h3><span className="mt-2 inline-block font-mono text-[8px] uppercase tracking-[.12em] text-primary/52">{item.period}</span></div>
              <p className="max-w-lg text-sm leading-relaxed text-white/48">{item.text}</p>
              <ArrowRight className="hidden size-4 text-white/18 transition-all group-hover:translate-x-1 group-hover:text-primary sm:block" />
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary/55 transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
