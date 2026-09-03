'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { DigitalDepth } from '@/components/shared/DigitalDepth';
import { directions, type Direction } from '@/content/directions';

const compositions = {
  split: {
    frame: 'lg:grid-cols-[.38fr_.62fr]',
    copy: 'lg:order-1 lg:pr-8',
    visual: 'lg:order-2',
  },
  overlay: {
    frame: 'lg:grid-cols-1',
    copy: 'lg:absolute lg:bottom-10 lg:left-10 lg:z-10 lg:max-w-[430px] lg:rounded-3xl lg:bg-[#0e2546]/64 lg:p-8 lg:text-white lg:backdrop-blur-md',
    visual: 'lg:col-span-full',
  },
  reverse: {
    frame: 'lg:grid-cols-[.62fr_.38fr]',
    copy: 'lg:order-2 lg:pl-8',
    visual: 'lg:order-1',
  },
  editorial: {
    frame: 'lg:grid-cols-[.48fr_.52fr]',
    copy: 'lg:order-1 lg:self-end lg:pb-10 lg:pr-12',
    visual: 'lg:order-2',
  },
};

function DirectionMedia({ direction }: { direction: Direction }) {
  const palette = {
    sales: 'from-[#1c2558] via-[#474288] to-[#a08cd3]',
    logistics: 'from-[#102f57] via-[#316b94] to-[#97c6d7]',
    production: 'from-[#17283a] via-[#526984] to-[#afb7c3]',
    documents: 'from-[#261d44] via-[#754d82] to-[#c9a5ce]',
  };

  return (
    <figure className={`relative min-h-[410px] overflow-hidden rounded-[26px] bg-linear-to-br sm:min-h-[500px] lg:min-h-[610px] ${palette[direction.visual]}`}>
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_84%,rgba(255,255,255,.18),transparent_29%),linear-gradient(145deg,rgba(3,12,30,.2),transparent_55%)]" />
      <DigitalDepth variant={direction.visual} />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#07172a]/62 to-transparent" />
      <figcaption className="absolute bottom-6 left-6 right-6 text-sm leading-relaxed text-white/68 sm:bottom-8 sm:left-8 sm:right-8">
        <span className="block font-semibold text-white">Будущий визуальный материал</span>
        <span className="mt-1 block">{direction.mediaDirection}</span>
      </figcaption>
    </figure>
  );
}

function DirectionCopy({ direction, overlay }: { direction: Direction; overlay: boolean }) {
  const textTone = overlay ? 'text-white' : 'text-oxford';
  const mutedTone = overlay ? 'text-white/70' : 'text-oxford/64';
  const linkTone = overlay ? 'bg-white text-[#102b4c]' : 'bg-[#183b67] text-white';

  return (
    <div className="relative">
      <p className={`text-sm font-semibold tracking-[0.08em] ${overlay ? 'text-white/64' : 'text-[#5c70c0]'}`}>
        {direction.number}
      </p>
      <h3 className={`mt-4 text-balance text-[clamp(2.45rem,4vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.055em] ${textTone}`}>
        {direction.title}
      </h3>
      <p className={`mt-5 max-w-md text-[17px] leading-relaxed ${mutedTone}`}>{direction.description}</p>

      <ul className={`mt-8 hidden gap-x-7 gap-y-3 text-sm leading-relaxed md:grid md:grid-cols-2 ${mutedTone}`}>
        {direction.modules.map((module) => (
          <li className="flex items-start gap-2.5" key={module}>
            <span className={`mt-[0.6em] size-1.5 shrink-0 rounded-full ${overlay ? 'bg-white/72' : 'bg-[#7185d6]'}`} />
            {module}
          </li>
        ))}
      </ul>

      <details className={`mt-7 text-sm md:hidden ${mutedTone}`}>
        <summary className="cursor-pointer font-semibold">Модули направления</summary>
        <ul className="mt-4 grid gap-3">
          {direction.modules.map((module) => (
            <li className="flex items-start gap-2.5" key={module}>
              <span className={`mt-[0.6em] size-1.5 shrink-0 rounded-full ${overlay ? 'bg-white/72' : 'bg-[#7185d6]'}`} />
              {module}
            </li>
          ))}
        </ul>
      </details>

      <Link className={`group mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl px-5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${linkTone}`} href={direction.href}>
        Подробнее
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

export function Directions() {
  const [activeValue, setActiveValue] = useState(directions[0].href);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const activeIndex = directions.findIndex((item) => item.href === activeValue);
  const activeDirection = directions[activeIndex] ?? directions[0];
  const composition = compositions[activeDirection.layout];
  const overlay = activeDirection.layout === 'overlay';

  function showDirection(index: number) {
    const normalizedIndex = (index + directions.length) % directions.length;
    setDirection(normalizedIndex > activeIndex ? 1 : -1);
    setActiveValue(directions[normalizedIndex].href);
  }

  return (
    <section id="directions" className="relative bg-[#f7f7f5] px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:min-h-[92svh] lg:px-12 lg:pb-32 lg:pt-24 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.08em] text-[#5c70c0]">РЕШЕНИЯ</p>
          <h2 className="mt-4 text-balance text-[clamp(2.3rem,4.2vw,4.9rem)] font-medium leading-[1.06] tracking-[-0.055em] text-oxford">
            AI для ключевых процессов компании
          </h2>
        </div>

        <div className="mt-9 flex w-full gap-1 overflow-x-auto pb-2" role="tablist" aria-label="Направления автоматизации">
          {directions.map((item, index) => {
            const selected = item.href === activeValue;

            return (
              <button
                aria-controls="direction-slide"
                aria-selected={selected}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-offset-2 ${
                  selected ? 'bg-[#183b67] text-white' : 'text-oxford/54 hover:bg-white hover:text-oxford'
                }`}
                key={item.href}
                onClick={() => showDirection(index)}
                role="tab"
                tabIndex={selected ? 0 : -1}
                type="button"
              >
                {item.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence custom={direction} mode="wait">
          <motion.article
            className={`relative mt-8 grid gap-8 lg:mt-10 lg:items-center ${composition.frame}`}
            id="direction-slide"
            role="tabpanel"
            custom={direction}
            drag={reduceMotion ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            initial={reduceMotion ? false : { opacity: 0, x: direction * 28, clipPath: 'inset(0 0 8% 0 round 26px)' }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0, clipPath: 'inset(0 0 0% 0 round 26px)' }}
            exit={reduceMotion ? undefined : { opacity: 0, x: direction * -20, clipPath: 'inset(8% 0 0 0 round 26px)' }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70) showDirection(activeIndex + 1);
              if (info.offset.x > 70) showDirection(activeIndex - 1);
            }}
            transition={{ duration: 0.58, ease: [0.22, 0.72, 0.24, 1] }}
            key={activeDirection.href}
          >
            <div className={composition.copy}>
              <DirectionCopy direction={activeDirection} overlay={overlay} />
            </div>
            <div className={composition.visual}>
              <DirectionMedia direction={activeDirection} />
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="mt-7 flex items-center gap-3 lg:mt-9">
          <button
            aria-label="Предыдущее направление"
            className="grid size-11 place-items-center rounded-full bg-white text-oxford shadow-[0_7px_20px_rgba(16,35,59,.07)] transition-transform hover:-translate-y-0.5"
            onClick={() => showDirection(activeIndex - 1)}
            type="button"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            aria-label="Следующее направление"
            className="grid size-11 place-items-center rounded-full bg-[#183b67] text-white shadow-[0_7px_20px_rgba(24,59,103,.16)] transition-transform hover:-translate-y-0.5"
            onClick={() => showDirection(activeIndex + 1)}
            type="button"
          >
            <ArrowRight className="size-4" />
          </button>
          <p className="ml-2 text-sm text-oxford/48">{activeDirection.number} / 04</p>
        </div>
      </div>
    </section>
  );
}
