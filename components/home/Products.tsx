'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { SectionIntro } from '@/components/shared/SectionIntro';
import { SignalBars } from '@/components/shared/SignalBars';
import { products } from '@/content/home';

function ProductTelemetry({ metric, metricLabel, signal, number }: { metric: string; metricLabel: string; signal: number[]; number: string }) {
  return (
    <div aria-hidden="true" className="relative overflow-hidden border border-white/9 bg-[#001a38]/74 p-4 transition-colors group-hover:border-primary/25">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,232,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,232,.025)_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="relative flex items-center justify-between font-mono text-[8px] uppercase tracking-[.13em] text-white/28">
        <span>Module / {number}</span>
        <span className="flex items-center gap-1.5 text-primary/72"><span className="size-1 animate-pulse bg-primary" />live</span>
      </div>
      <div className="relative mt-8">
        <p className="text-3xl font-medium tracking-[-.055em] text-primary">{metric}</p>
        <p className="mt-1 text-[10px] text-white/42">{metricLabel}</p>
      </div>
      <div className="relative mt-7">
        <SignalBars values={signal} />
      </div>
      <div className="relative mt-3 flex items-center justify-between font-mono text-[7px] uppercase tracking-[.12em] text-white/22">
        <span>input</span><span>AI flow</span><span>result</span>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 bg-primary/[.035] blur-[120px]" />
      <div className="relative mx-auto max-w-[1440px]">
        <SectionIntro index="01 / Продукты" title="Модульная архитектура (Land-and-Expand)" text="Внедряйте то, что нужно сейчас. Каждый модуль даёт измеримый результат и становится основой для следующего." />

        <div className="mt-14 grid border-l border-t border-white/10 lg:grid-cols-2">
          {products.map(({ number, icon: Icon, title, description, modules, price, metric, metricLabel, signal }, index) => (
            <motion.article
              className="group relative overflow-hidden border-b border-r border-white/10 bg-white/[.018] p-6 transition-colors hover:border-primary/40 hover:bg-primary/[.032] sm:p-8 lg:p-9 xl:p-10"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.06 }}
              key={title}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary shadow-[0_0_16px_#00FFE8] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="grid gap-8 sm:grid-cols-[1fr_180px] sm:items-stretch">
                <div className="flex min-w-0 flex-col">
                  <div className="flex items-start justify-between sm:justify-start">
                    <div className="grid size-11 place-items-center border border-primary/25 text-primary transition-colors group-hover:bg-primary/[.07]"><Icon className="size-5" strokeWidth={1.4} /></div>
                    <span className="font-mono text-[11px] text-white/28 sm:hidden">{number}</span>
                  </div>
                  <h3 className="mt-10 text-3xl font-medium tracking-[-.045em] text-white sm:text-4xl">{title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/52 sm:text-[15px]">{description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {modules.map((module) => <span className="border border-white/10 px-2.5 py-1.5 text-[10px] text-white/46 transition-colors group-hover:border-primary/18" key={module}>{module}</span>)}
                  </div>
                </div>
                <ProductTelemetry metric={metric} metricLabel={metricLabel} number={number} signal={signal} />
              </div>
              <div className="mt-9 flex items-center justify-between border-t border-white/8 pt-5">
                <span className="font-mono text-xs uppercase tracking-[.09em] text-primary">{price}</span>
                <a className="flex items-center gap-2 text-sm text-white/56 transition-colors group-hover:text-primary" href="#contact">Обсудить модуль <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
