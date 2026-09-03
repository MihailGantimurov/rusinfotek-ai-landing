'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { MaskedLine } from '@/components/motion/ModularReveal';

const modules = [
  { label: 'Заявки', state: 'Активно', area: 'col-span-2 row-span-1', axis: 'x' },
  { label: 'Продажи', state: 'В работе', area: 'col-span-1 row-span-2', axis: 'y' },
  { label: 'Логистика', state: 'Синхронизировано', area: 'col-span-1 row-span-1', axis: 'x' },
  { label: 'Документы', state: 'Активно', area: 'col-span-1 row-span-1', axis: 'y' },
  { label: 'Контроль', state: 'Обзор', area: 'col-span-2 row-span-1', axis: 'x' },
];

function OperationalCanvas() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-label="Демонстрационное модульное рабочее поле"
      className="kinetic-guides relative min-h-[430px] overflow-hidden border border-oxford/15 bg-white p-3 shadow-[0_28px_80px_rgba(0,33,71,.09)] sm:min-h-[520px] sm:p-5 lg:min-h-[590px]"
      initial={reduceMotion ? false : { opacity: 0, x: 28 }}
      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      transition={{ duration: 0.72, delay: 0.18, ease: [0.22, 0.72, 0.24, 1] }}
    >
      <div className="absolute left-0 top-0 h-px w-1/4 bg-turquoise" />
      <div className="absolute right-3 top-3 size-2 border-r border-t border-oxford/40 sm:right-5 sm:top-5" />
      <div className="absolute bottom-3 left-3 size-2 border-b border-l border-oxford/40 sm:bottom-5 sm:left-5" />

      <div className="relative flex items-start justify-between border-b border-oxford/12 pb-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-oxford/42">Operational canvas / 01</p>
          <p className="mt-2 text-sm font-medium text-oxford">Единый операционный контур</p>
        </div>
        <span className="flex items-center gap-2 text-xs text-oxford/52">
          <span className="size-1.5 bg-turquoise ring-4 ring-turquoise/10" />
          Система активна
        </span>
      </div>

      <div className="relative mt-3 grid min-h-[340px] grid-cols-2 grid-rows-4 gap-2 sm:mt-5 sm:min-h-[420px] sm:grid-cols-3 sm:grid-rows-3 sm:gap-3 lg:min-h-[480px]">
        {modules.map((module, index) => {
          const offset = module.axis === 'x' ? { x: index % 2 === 0 ? -22 : 22, y: 0 } : { x: 0, y: 22 };

          return (
            <motion.div
              className={`group relative flex min-h-24 flex-col justify-between overflow-hidden border border-oxford/12 bg-[#f8faf9]/94 p-4 transition-colors hover:border-oxford/35 hover:bg-white sm:p-5 ${module.area}`}
              initial={reduceMotion ? false : { opacity: 0, ...offset }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.56, delay: 0.3 + index * 0.075, ease: [0.22, 0.72, 0.24, 1] }}
              key={module.label}
            >
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-turquoise transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[10px] text-oxford/30">M-0{index + 1}</span>
                <span className="size-1.5 bg-oxford/18 transition-colors group-hover:bg-turquoise" />
              </div>
              <div>
                <p className="text-xl font-medium tracking-[-0.035em] text-oxford sm:text-2xl">{module.label}</p>
                <p className="mt-2 text-xs text-oxford/48">{module.state}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/4 overflow-hidden">
        <span className="kinetic-scan absolute inset-y-0 w-px bg-turquoise/45" />
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-background px-5 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-36 lg:pt-44 xl:px-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-oxford/8" />
      <div className="pointer-events-none absolute -right-48 top-0 size-[40rem] rounded-full bg-[#dff7f3]/50 blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1520px] gap-16 lg:grid-cols-[1.12fr_.88fr] lg:items-center xl:gap-24">
        <div className="max-w-[900px]">
          <motion.div
            className="mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-oxford/56"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.46 }}
          >
            <span className="h-px w-12 bg-turquoise" />
            AI-автоматизация бизнес-процессов
          </motion.div>

          <h1 className="text-balance text-[clamp(2.65rem,11.7vw,7.4rem)] font-semibold leading-[0.91] tracking-[-0.066em] text-oxford sm:text-[clamp(3.35rem,6.3vw,7.4rem)]">
            <MaskedLine delay={0.02}>Автоматизируем</MaskedLine>
            <MaskedLine delay={0.09}>операционные процессы —</MaskedLine>
            <MaskedLine delay={0.16}>
              <span className="text-oxford/42">от отдельных операций</span>
            </MaskedLine>
            <MaskedLine delay={0.23}>до работы целых отделов.</MaskedLine>
          </h1>

          <motion.p
            className="mt-8 max-w-3xl text-lg leading-relaxed text-oxford/64 sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Интегрируем AI-решения с 1С, CRM, телефонией, мессенджерами и внутренними системами компании. Сокращаем ручную работу, ошибки и операционные издержки.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
          >
            <Link
              className="group inline-flex min-h-13 items-center justify-center gap-2 bg-oxford px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#07305d]"
              href="/contacts"
            >
              Получить коммерческое предложение
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <a
              className="group inline-flex min-h-13 items-center justify-center gap-2 border border-oxford/18 bg-white/60 px-6 text-[15px] font-medium text-oxford transition-colors hover:border-oxford/42 hover:bg-white"
              href="#directions"
            >
              Смотреть решения
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <OperationalCanvas />
      </div>
    </section>
  );
}
