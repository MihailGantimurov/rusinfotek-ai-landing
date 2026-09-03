'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { DigitalDepth } from '@/components/shared/DigitalDepth';

const activityLabels = [
  { label: 'Заявки', state: 'В работе', className: 'right-[11%] top-[24%]' },
  { label: 'Документы', state: 'Синхронизировано', className: 'right-[6%] bottom-[22%]' },
  { label: 'Перевозки', state: 'Активно', className: 'right-[36%] bottom-[13%]' },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useSpring(useMotionValue(0), { stiffness: 38, damping: 22, mass: 0.9 });
  const pointerY = useSpring(useMotionValue(0), { stiffness: 38, damping: 22, mass: 0.9 });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 14);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 12);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      id="top"
      className="relative bg-[#07172a] px-3 pt-3 text-white sm:px-5 sm:pt-5 lg:min-h-[95svh] lg:px-8 lg:pt-8"
      onPointerLeave={resetPointer}
      onPointerMove={handlePointerMove}
    >
      <div className="relative isolate min-h-[760px] overflow-hidden rounded-[24px] bg-[#0c2240] sm:min-h-[780px] sm:rounded-[30px] lg:min-h-[calc(95svh-2rem)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(111,126,227,.48),transparent_27%),radial-gradient(circle_at_13%_94%,rgba(92,123,177,.3),transparent_35%),linear-gradient(124deg,#07172a_2%,#102d53_56%,#173a63_100%)]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-[#07172a]/88 via-[#07172a]/32 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[54%] bg-linear-to-t from-[#07172a]/86 via-[#07172a]/30 to-transparent" />

        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.025, opacity: 0.76 }}
          animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.7, ease: [0.22, 0.72, 0.24, 1] }}
          style={reduceMotion ? undefined : { x: pointerX, y: pointerY }}
        >
          <DigitalDepth variant="hero" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {activityLabels.map((item, index) => (
            <motion.div
              className={`absolute rounded-xl border border-white/14 bg-white/[0.08] px-4 py-3 shadow-[0_18px_52px_rgba(1,12,35,.14)] backdrop-blur-md ${item.className}`}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.62 + index * 0.12, ease: [0.22, 0.72, 0.24, 1] }}
              key={item.label}
            >
              <p className="text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-xs text-white/56">{item.state}</p>
            </motion.div>
          ))}
        </div>

        <p className="absolute right-6 top-24 text-right text-xs leading-relaxed text-white/45 sm:right-9 lg:right-12 lg:top-28">
          Будущий визуальный материал
        </p>

        <div className="absolute inset-x-0 bottom-0 px-6 pb-9 pt-32 sm:px-10 sm:pb-12 lg:px-16 lg:pb-14 xl:px-20">
          <motion.div
            className="max-w-[670px]"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 0.72, 0.24, 1] }}
          >
            <p className="text-[12px] font-semibold tracking-[0.08em] text-white/64">
              AI-АВТОМАТИЗАЦИЯ БИЗНЕС-ПРОЦЕССОВ
            </p>
            <h1 className="mt-5 max-w-[860px] text-balance text-[clamp(2.55rem,3.75vw,4.7rem)] font-medium leading-[1.02] tracking-[-0.06em]">
              Автоматизируем процессы,<br className="hidden sm:block" /> на которых работает бизнес.
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/72 sm:text-lg">
              AI-системы для продаж, логистики, производства и документооборота. Интегрируем решения в существующую инфраструктуру компании.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-white px-4 text-[14px] font-semibold text-[#0c2140] transition-transform hover:-translate-y-0.5 sm:px-6 sm:text-[15px]"
                href="/contacts"
              >
                Получить коммерческое предложение
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-white/10 px-6 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/16"
                href="#directions"
              >
                Смотреть решения
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div aria-hidden="true" className="relative z-10 mx-auto -mb-px h-20 max-w-[1380px] bg-linear-to-b from-[#07172a] to-[#f7f7f5] sm:h-28" />
    </section>
  );
}
