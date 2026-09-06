'use client';

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Layers3,
  Sparkles,
} from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { InternalCta, InternalHero } from '@/components/internal/InternalPage';
import { HardLink } from '@/components/shared/HardLink';
import { Reveal } from '@/components/shared/Reveal';
import { ScrollProgress } from '@/components/shared/ScrollProgress';
import { catalogDirections, modularityDescription } from '@/content/catalog';

export function CatalogPageContent() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f7f5] text-[#10233b]">
      <ScrollProgress />
      <Header />
      <InternalHero
        code="CATALOG / 14 PRODUCTS"
        eyebrow="МОДУЛЬНАЯ AI-АВТОМАТИЗАЦИЯ"
        title="Каталог решений РусИнфоТек"
        lead={modularityDescription}
      >
        <a
          className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-white"
          href="#contents"
        >
          Открыть оглавление <ArrowDownRight className="size-4" />
        </a>
      </InternalHero>

      <section
        className="scroll-mt-24 bg-[#eef0ee] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-30 xl:px-16"
        id="contents"
      >
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="section-label">ОГЛАВЛЕНИЕ</p>
              <h2 className="section-title mt-5 max-w-3xl">
                Четыре направления. Один принцип сборки.
              </h2>
            </div>
            <p className="max-w-2xl text-[17px] leading-[1.75] text-[#10233b]/58 lg:justify-self-end">
              Начните с самостоятельного продукта для одного процесса или
              объедините несколько модулей в комплекс для автоматизации отдела.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-3 lg:grid-cols-2">
            {catalogDirections.map((direction, directionIndex) => (
              <Reveal delay={directionIndex * 0.04} key={direction.id}>
                <a
                  className="group flex h-full flex-col justify-between rounded-[22px] border border-[#10233b]/10 bg-[#f7f7f5] p-6 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_65px_rgba(16,35,59,.07)] sm:p-8"
                  href={`#${direction.id}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.12em] text-[#5d73c4]">
                        {direction.number} / DIRECTION
                      </p>
                      <h3 className="mt-4 text-[clamp(1.8rem,3vw,3.1rem)] font-[540] tracking-[-0.045em]">
                        {direction.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[14px] leading-[1.65] text-[#10233b]/54">
                        {direction.description}
                      </p>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-[#4f67bd] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <ol className="mt-7 space-y-2 border-t border-[#10233b]/9 pt-5">
                    {direction.modules.map((module) => (
                      <li
                        className="flex gap-3 text-[13px] leading-relaxed text-[#10233b]/66"
                        key={module.id}
                      >
                        <span className="font-mono text-[9px] text-[#5d73c4]">
                          {module.number}
                        </span>
                        {module.type} {Number(module.number)}. {module.title}
                      </li>
                    ))}
                  </ol>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div className="mx-auto max-w-[1440px] space-y-28 lg:space-y-40">
          {catalogDirections.map((direction) => (
            <article
              className="scroll-mt-28"
              id={direction.id}
              key={direction.id}
            >
              <Reveal className="grid gap-8 border-t border-[#10233b]/12 pt-8 lg:grid-cols-[.67fr_1.33fr] lg:gap-16">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <p className="font-mono text-[11px] tracking-[0.13em] text-[#5d73c4]">
                    {direction.number} / 04
                  </p>
                  <h2 className="mt-5 text-[clamp(2.7rem,5vw,5.6rem)] font-[530] leading-[.98] tracking-[-0.058em]">
                    {direction.title}
                  </h2>
                  <p className="mt-5 max-w-lg text-[17px] leading-[1.72] text-[#10233b]/58">
                    {direction.description}
                  </p>
                  {direction.delivery ? (
                    <p className="mt-6 inline-flex max-w-md items-start gap-2 rounded-[12px] border border-[#5c73c5]/18 bg-[#6379ca]/7 px-4 py-3 text-[13px] font-medium leading-relaxed text-[#354e9e]">
                      <Sparkles className="mt-0.5 size-4 shrink-0" />
                      {direction.delivery}
                    </p>
                  ) : null}
                  <p className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.08em] text-[#5d73c4]">
                    <Layers3 className="size-4" />
                    {direction.modules.length}{' '}
                    {direction.modules.length === 1
                      ? 'ПРОДУКТ'
                      : direction.modules.length < 5
                        ? 'ПРОДУКТА'
                        : 'МОДУЛЕЙ'}
                  </p>
                </div>

                <Accordion
                  className="border-t border-[#10233b]/12"
                  defaultValue={[direction.modules[0].id]}
                  hiddenUntilFound
                >
                  {direction.modules.map((module) => (
                    <AccordionItem
                      className="scroll-mt-28 border-b border-[#10233b]/12"
                      id={module.id}
                      key={module.id}
                      value={module.id}
                    >
                      <AccordionTrigger className="group rounded-none py-7 hover:no-underline sm:py-9">
                        <span className="grid flex-1 gap-3 pr-5 text-left sm:grid-cols-[5rem_1fr] sm:items-start">
                          <span className="font-mono text-[10px] tracking-[0.12em] text-[#6075c7]">
                            {module.type.toUpperCase()} / {module.number}
                          </span>
                          <span className="text-[clamp(1.4rem,2.5vw,2.45rem)] font-[530] leading-[1.12] tracking-[-0.04em] text-[#10233b]">
                            {module.title}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-9 sm:pb-11 sm:pl-20">
                        <p className="max-w-3xl text-[16px] leading-[1.75] text-[#10233b]/64 sm:text-[17px]">
                          {module.summary}
                        </p>
                        <div className="mt-8 grid gap-7 lg:grid-cols-2">
                          <div className="rounded-[18px] border border-[#10233b]/9 bg-[#eef0ee] p-5 sm:p-6">
                            <p className="text-[10px] font-semibold tracking-[0.1em] text-[#5b71c4]">
                              ЭФФЕКТ ВНЕДРЕНИЯ
                            </p>
                            <ul className="mt-5 space-y-3.5">
                              {module.effect.map((item) => (
                                <li
                                  className="flex gap-3 text-[14px] leading-[1.58] text-[#10233b]/68"
                                  key={item}
                                >
                                  <Check className="mt-1 size-3.5 shrink-0 text-[#546dc5]" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="rounded-[18px] bg-[#0d2948] p-5 text-white sm:p-6">
                            <p className="text-[10px] font-semibold tracking-[0.1em] text-[#aebeff]">
                              ЧТО ДЕЛАЕТ СИСТЕМА
                            </p>
                            <ol className="mt-5 space-y-3.5">
                              {module.capabilities.map((item, index) => (
                                <li
                                  className="flex gap-3 text-[14px] leading-[1.58] text-white/66"
                                  key={item}
                                >
                                  <span className="mt-0.5 font-mono text-[9px] text-[#94a9fa]">
                                    {String(index + 1).padStart(2, '0')}
                                  </span>
                                  {item}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                        <HardLink
                          className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#17385f]"
                          href="/contacts"
                        >
                          Обсудить внедрение <ArrowUpRight className="size-4" />
                        </HardLink>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eef0ee] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <Reveal className="mx-auto grid max-w-[1440px] gap-8 rounded-[28px] border border-[#10233b]/10 bg-[#f7f7f5] p-7 sm:p-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:p-14">
          <div>
            <p className="section-label">ПРИНЦИП LAND-AND-EXPAND</p>
            <h2 className="mt-5 text-[clamp(2.1rem,4vw,4.2rem)] font-[530] leading-[1.04] tracking-[-0.05em]">
              Один модуль сегодня. Единый контур завтра.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Аудит процесса', 'Запуск модуля', 'Расширение контура'].map(
              (step, index) => (
                <div
                  className="rounded-[16px] border border-[#10233b]/9 bg-white p-5"
                  key={step}
                >
                  <CircleDot className="size-4 text-[#5b72c5]" />
                  <p className="mt-8 font-mono text-[9px] text-[#10233b]/34">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-[14px] font-semibold">{step}</p>
                </div>
              ),
            )}
          </div>
        </Reveal>
      </section>

      <InternalCta
        button="Начать с аудита"
        text="Определим процесс с максимальным эффектом, составим карту интеграций и предложим состав первого модуля."
        title="Собрать комплекс под вашу операционную задачу"
      />
      <Footer />
    </main>
  );
}
