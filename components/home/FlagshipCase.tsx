'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { ModularReveal } from '@/components/motion/ModularReveal';
import { flagshipCase } from '@/content/cases';

const visualModules = [
  { label: 'Продажи', position: 'col-span-2' },
  { label: 'CRM', position: 'col-span-1' },
  { label: 'Коммуникации', position: 'col-span-1' },
  { label: '1С', position: 'col-span-1' },
  { label: 'Сервисные процессы', position: 'col-span-2' },
  { label: 'Отчётность', position: 'col-span-1' },
];

function CaseSystemVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="kinetic-guides relative min-h-[500px] overflow-hidden border border-oxford/15 bg-[#eef3f2] p-4 sm:min-h-[600px] sm:p-6 lg:min-h-[680px]">
      <div className="relative flex items-center justify-between border-b border-oxford/12 pb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-oxford/42">Архитектурная композиция</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-oxford/32">Media placeholder / 01</span>
      </div>

      <div className="relative mt-4 grid min-h-[400px] grid-cols-2 gap-2 sm:mt-6 sm:min-h-[490px] sm:grid-cols-3 sm:gap-3 lg:min-h-[550px]">
        {visualModules.map((module, index) => (
          <motion.div
            className={`group relative flex min-h-28 flex-col justify-between overflow-hidden border border-oxford/12 bg-white p-4 sm:p-5 ${module.position}`}
            initial={reduceMotion ? false : { opacity: 0, y: index % 2 === 0 ? 22 : -22 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.055, ease: [0.22, 0.72, 0.24, 1] }}
            key={module.label}
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-[9px] text-oxford/26">SYS / 0{index + 1}</span>
              <span className={`size-1.5 ${index === 0 ? 'bg-turquoise' : 'bg-oxford/20'}`} />
            </div>
            <p className="text-lg font-medium tracking-[-0.03em] text-oxford sm:text-xl">{module.label}</p>
            {index === 0 && <span className="absolute inset-x-0 top-0 h-px bg-turquoise" />}
          </motion.div>
        ))}
      </div>

      <div className="relative mt-6 flex items-end justify-between border-t border-oxford/12 pt-5">
        <div>
          <p className="text-6xl font-semibold leading-none tracking-[-0.07em] text-oxford sm:text-8xl">15+</p>
          <p className="mt-2 text-sm text-oxford/50">модулей в едином цифровом контуре</p>
        </div>
        <span className="hidden size-3 border-b border-r border-oxford/36 sm:block" />
      </div>
    </div>
  );
}

export function FlagshipCase() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-36 xl:px-16">
      <div className="mx-auto max-w-[1520px]">
        <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 xl:gap-28">
          <div className="flex flex-col">
            <ModularReveal>
              <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-oxford/48">
                <span>03</span>
                <span className="h-px w-12 bg-turquoise" />
                Флагманский кейс
              </div>
            </ModularReveal>

            <ModularReveal className="mt-10" delay={0.05}>
              <p className="text-sm font-medium uppercase tracking-[0.08em] text-oxford/48">{flagshipCase.client}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-oxford">
                <span className="size-1.5 bg-turquoise" />
                {flagshipCase.attribution}
              </p>
            </ModularReveal>

            <ModularReveal className="mt-12" delay={0.08}>
              <h2 className="text-balance text-[clamp(2.8rem,5.2vw,6rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-oxford">
                {flagshipCase.title}
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-oxford/62">{flagshipCase.description}</p>
            </ModularReveal>

            <ModularReveal className="mt-10" delay={0.11}>
              <ul className="border-t border-oxford/14">
                {flagshipCase.statements.map((statement, index) => (
                  <li className="grid grid-cols-[36px_1fr] gap-3 border-b border-oxford/14 py-4 text-sm leading-relaxed text-oxford/68 sm:text-base" key={statement}>
                    <span className="font-mono text-[10px] text-oxford/32">0{index + 1}</span>
                    {statement}
                  </li>
                ))}
              </ul>
            </ModularReveal>

            <ModularReveal className="mt-10" delay={0.14}>
              <Link className="group inline-flex items-center gap-3 text-base font-medium text-oxford" href={flagshipCase.href}>
                Подробнее о кейсах
                <span className="grid size-10 place-items-center border border-oxford/16 transition-colors group-hover:border-oxford group-hover:bg-oxford group-hover:text-white">
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </ModularReveal>
          </div>

          <ModularReveal direction="horizontal" delay={0.08}>
            <CaseSystemVisual />
          </ModularReveal>
        </div>

        <div className="mt-16 flex items-center gap-4 border-t border-oxford/12 pt-6 text-sm text-oxford/42">
          <ArrowRight className="size-4 text-turquoise" />
          Демонстрационная композиция будет заменена реальными материалами кейса.
        </div>
      </div>
    </section>
  );
}
