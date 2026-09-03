'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { ModularReveal } from '@/components/motion/ModularReveal';
import { directions } from '@/content/directions';

export function Directions() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="directions" className="relative overflow-hidden bg-surface-dark px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36 xl:px-16">
      <div className="kinetic-guides-dark pointer-events-none absolute inset-0 opacity-50" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[7px] origin-left bg-turquoise"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={reduceMotion ? undefined : { scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 0.72, 0.24, 1] }}
      />

      <div className="relative mx-auto max-w-[1520px]">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <ModularReveal>
            <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-turquoise/72">
              <span>02</span>
              <span className="h-px w-12 bg-turquoise/60" />
              Решения
            </div>
          </ModularReveal>
          <ModularReveal delay={0.06}>
            <h2 className="max-w-5xl text-balance text-[clamp(2.8rem,5.7vw,6.7rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
              Автоматизация ключевых операционных контуров
            </h2>
          </ModularReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-white/12 lg:grid-cols-12">
          {directions.map((direction, index) => (
            <motion.div
              className={direction.layout}
              initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.58, delay: index * 0.06, ease: [0.22, 0.72, 0.24, 1] }}
              key={direction.href}
            >
              <Link
                className="group relative flex h-full min-h-[340px] flex-col overflow-hidden bg-surface-dark p-6 transition-colors duration-500 hover:bg-[#052b55] sm:p-8 lg:min-h-[390px] lg:p-10"
                href={direction.href}
              >
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-turquoise transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] text-turquoise/65">{direction.number}</span>
                  <ArrowUpRight className="size-5 text-white/24 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-turquoise" />
                </div>

                <div className="mt-14 lg:mt-20">
                  <h3 className="text-[clamp(2rem,3.4vw,4rem)] font-medium tracking-[-0.05em]">{direction.title}</h3>
                </div>

                <ul className="mt-auto grid gap-x-7 gap-y-2 pt-10 text-sm leading-relaxed text-white/48 sm:grid-cols-2">
                  {direction.modules.map((module) => (
                    <li className="flex items-start gap-2 transition-colors group-hover:text-white/72" key={module}>
                      <span className="mt-[0.65em] size-1 shrink-0 bg-turquoise/70" />
                      {module}
                    </li>
                  ))}
                </ul>

                <span className="absolute bottom-0 right-0 h-16 w-px translate-y-full bg-turquoise transition-transform duration-500 group-hover:translate-y-0" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
