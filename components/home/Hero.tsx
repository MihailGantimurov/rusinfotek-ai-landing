'use client';

import {
  motion,
  useReducedMotion,
} from 'framer-motion';

import { HeroSystemMap } from '@/components/home/HeroSystemMap';
import { BrandButton } from '@/components/shared/BrandButton';

const directions = ['Продажи', 'Логистика', 'Производство', 'Документооборот'];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="hero-shell relative isolate overflow-hidden bg-[#07172a] px-4 pb-28 pt-24 text-white sm:px-7 sm:pb-36 sm:pt-28 lg:min-h-[100svh] lg:px-10 lg:pb-40 lg:pt-32 xl:px-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(91,112,199,.2),transparent_32%),linear-gradient(135deg,#061426_0%,#0b2341_52%,#07182c_100%)]"
      />
      <div
        aria-hidden="true"
        className="hero-grain absolute inset-0 opacity-30"
      />

      <div className="relative mx-auto grid max-w-[1440px] min-w-0 items-center gap-12 lg:grid-cols-[1.14fr_.86fr] lg:gap-10 xl:grid-cols-[1.08fr_.92fr] xl:gap-16">
        <motion.div
          className="relative z-10 min-w-0 pt-3 lg:pt-0"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 0.72, 0.24, 1] }}
        >
          <p
            className="text-[12px] font-semibold tracking-[0.11em] text-[#aebeff]"
          >
            AI-АВТОМАТИЗАЦИЯ БИЗНЕС-ПРОЦЕССОВ
          </p>

          <motion.h1
            className="mt-5 max-w-full text-balance text-[clamp(2.25rem,9.4vw,3.5rem)] font-[560] leading-[.98] tracking-[-0.052em] sm:text-[clamp(2.65rem,6vw,4.4rem)] lg:max-w-[800px] lg:text-[clamp(3.25rem,5vw,5.25rem)] lg:tracking-[-0.058em]"
          >
            Реализуем комплексный подход к автоматизации бизнеса
          </motion.h1>

          <p
            className="mt-6 max-w-[620px] text-[17px] leading-[1.7] text-white/68 sm:text-[18px]"
          >
            Умножаем эффективность, сокращаем издержки
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <BrandButton
              className="w-full sm:w-auto"
              href="/contacts"
              tone="light"
            >
              Получить коммерческое предложение
            </BrandButton>
            <BrandButton
              className="w-full sm:w-auto"
              href="/catalog"
              tone="quiet"
            >
              Каталог
            </BrandButton>
          </div>

          <nav
            aria-label="Направления автоматизации"
            className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/12 pt-5"
          >
            {directions.map((direction, index) => (
              <a
                className="group inline-flex items-center gap-2 text-[13px] text-white/54 transition-colors hover:text-white"
                href={`/catalog#${['sales', 'logistics', 'production', 'documents'][index]}`}
                key={direction}
              >
                <span className="font-mono text-[10px] text-[#91a6ff]">
                  0{index + 1}
                </span>
                {direction}
              </a>
            ))}
          </nav>
        </motion.div>

        <motion.div
          className="relative min-w-0 lg:-mr-10 xl:-mr-16"
          initial={reduceMotion ? false : { opacity: 0, x: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.84, delay: 0.12, ease: [0.22, 0.72, 0.24, 1] }}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 bg-[radial-gradient(circle,rgba(78,103,204,.18),transparent_68%)]"
          />
          <HeroSystemMap />
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-b from-transparent via-[#0c2440]/58 to-[#eef0ee]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-1 left-1/2 h-20 w-[112%] -translate-x-1/2 rounded-t-[50%] bg-[#eef0ee] blur-[1px]"
      />
    </section>
  );
}
