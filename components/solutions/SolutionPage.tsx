import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Layers3,
} from 'lucide-react';

import { DirectionScene } from '@/components/home/DirectionScene';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { BrandButton } from '@/components/shared/BrandButton';
import { HardLink } from '@/components/shared/HardLink';
import { MediaFrame } from '@/components/shared/MediaFrame';
import { Reveal } from '@/components/shared/Reveal';
import { ScrollProgress } from '@/components/shared/ScrollProgress';
import type { SolutionPageContent } from '@/content/solution-pages';
import { solutionOrder } from '@/content/solution-pages';

type SolutionPageProps = {
  content: SolutionPageContent;
};

export function SolutionPage({ content }: SolutionPageProps) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f7f5] text-[#10233b]">
      <ScrollProgress />
      <Header />

      <section className="relative isolate overflow-hidden bg-[#07172a] px-5 pb-18 pt-32 text-white sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-42 xl:px-16">
        <div
          aria-hidden="true"
          className="hero-grain pointer-events-none absolute inset-0 opacity-25"
        />
        <div
          aria-hidden="true"
          className="absolute -right-52 -top-28 size-[44rem] rounded-full bg-[#687ad0]/22 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[42%] h-px w-[42rem] bg-linear-to-r from-transparent via-[#78d8cd]/35 to-transparent"
        />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.13em] text-white/42">
            <HardLink className="transition-colors hover:text-white" href="/">
              РУСИНФОТЕК
            </HardLink>
            <span>/</span>
            <span className="text-[#aebeff]">
              {content.number} · {content.title.toUpperCase()}
            </span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-16">
            <Reveal>
              <p className="text-[12px] font-semibold tracking-[0.11em] text-[#aebeff]">
                {content.eyebrow}
              </p>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.75rem,5.8vw,6.2rem)] font-[520] leading-[.96] tracking-[-0.06em] text-balance">
                {content.headline}
              </h1>
              <p className="mt-7 max-w-2xl text-[17px] leading-[1.72] text-white/62 sm:text-[19px]">
                {content.intro}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <BrandButton href="/contacts" tone="light">
                  Обсудить задачу
                </BrandButton>
                <BrandButton direction="down" href="#architecture" tone="quiet">
                  Посмотреть архитектуру
                </BrandButton>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <DirectionScene variant={content.visual} />
            </Reveal>
          </div>

          <nav
            aria-label="Направления"
            className="mt-16 grid border-y border-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
          >
            {solutionOrder.map((item) => {
              const active = item.slug === content.slug;
              return (
                <HardLink
                  aria-current={active ? 'page' : undefined}
                  className={`group flex min-h-18 items-center justify-between gap-3 border-white/10 px-4 py-4 transition-colors sm:[&:nth-child(even)]:border-l lg:border-l lg:first:border-l-0 ${active ? 'bg-white/[0.08] text-white' : 'text-white/44 hover:bg-white/[0.045] hover:text-white'}`}
                  href={`/solutions/${item.slug}`}
                  key={item.slug}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`font-mono text-[9px] ${active ? 'text-[#aebeff]' : 'text-white/28'}`}
                    >
                      {item.number}
                    </span>
                    <span className="text-[14px] font-medium">
                      {item.title}
                    </span>
                  </span>
                  {active ? (
                    <CircleDot className="size-3.5 text-[#75d6ca]" />
                  ) : (
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </HardLink>
              );
            })}
          </nav>
        </div>
      </section>

      <section
        id="architecture"
        className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="grid gap-8 lg:grid-cols-[.76fr_1.24fr] lg:gap-20">
            <div>
              <p className="section-label">ЧТО МЕНЯЕТСЯ</p>
              <h2 className="section-title mt-5">
                Цифровой слой поверх действующего процесса
              </h2>
            </div>
            <div className="lg:pt-14">
              <p className="max-w-3xl text-[clamp(1.35rem,2.4vw,2.2rem)] font-[520] leading-[1.38] tracking-[-0.035em] text-[#10233b]">
                {content.thesis}
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {content.outcomes.map((item) => (
                  <div
                    className="rounded-[18px] border border-[#10233b]/9 bg-white p-5"
                    key={item.label}
                  >
                    <p className="text-[2rem] font-[560] tracking-[-0.05em] text-[#4f66bb]">
                      {item.value}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#10233b]/54">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {content.modules.map((module, index) => (
              <Reveal delay={(index % 3) * 0.045} key={module.title}>
                <article className="group flex min-h-64 h-full flex-col justify-between rounded-[22px] border border-[#10233b]/9 bg-white p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,35,59,.07)] sm:p-7">
                  <div className="flex items-start justify-between gap-6">
                    <span className="grid size-11 place-items-center rounded-full bg-[#5d72c4]/9 text-[#5268b8]">
                      <Layers3 className="size-4" />
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.09em] text-[#10233b]/28">
                      {module.code}
                    </span>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-[1.55rem] font-[550] leading-tight tracking-[-0.035em]">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.68] text-[#10233b]/55">
                      {module.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a1d34] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div
          aria-hidden="true"
          className="absolute -left-40 top-12 size-[34rem] rounded-full bg-[#596fc0]/14 blur-[100px]"
        />
        <div className="relative mx-auto max-w-[1440px]">
          <Reveal className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-label section-label-dark">
                ЛОГИКА ПРОЦЕССА
              </p>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,4.4vw,4.8rem)] font-[520] leading-[1.02] tracking-[-0.052em]">
                Один маршрут вместо набора ручных действий
              </h2>
            </div>
            <p className="max-w-2xl text-[17px] leading-[1.72] text-white/58 lg:justify-self-end">
              Каждый этап получает данные предыдущего, знает правила и оставляет
              прозрачную историю результата.
            </p>
          </Reveal>

          <div className="mt-14 grid border-y border-white/12 lg:mt-20 lg:grid-cols-4">
            {content.flow.map((step, index) => (
              <Reveal
                className={`py-7 lg:px-7 lg:py-9 ${index > 0 ? 'border-t border-white/12 lg:border-l lg:border-t-0' : ''}`}
                delay={index * 0.05}
                key={step.title}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#aebeff]">
                    0{index + 1}
                  </span>
                  <ArrowDownRight className="size-4 text-white/24" />
                </div>
                <h3 className="mt-10 text-[1.45rem] font-[540] tracking-[-0.035em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.68] text-white/50">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef0ee] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[1.08fr_.92fr]">
          <Reveal>
            {content.proof.image ? (
              <MediaFrame
                asset={{
                  kind: 'image',
                  src: content.proof.image,
                  alt: content.proof.imageAlt ?? '',
                }}
                className="aspect-[1.25/1] min-h-[420px] rounded-[26px]"
                label="Реальный интерфейс · данные обезличены"
              />
            ) : (
              <div className="relative flex min-h-[420px] overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_70%_20%,rgba(120,140,225,.34),transparent_34%),linear-gradient(145deg,#091a30,#173a5b)] p-7 text-white sm:p-10">
                <div
                  aria-hidden="true"
                  className="hero-grain absolute inset-0 opacity-20"
                />
                <div className="relative mt-auto w-full">
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[#aebeff]">
                    RIT / VALIDATION LOOP
                  </p>
                  <div className="mt-8 space-y-3">
                    {[
                      'Рабочий контур',
                      'Проверка сценариев',
                      'Контролируемый запуск',
                    ].map((item, index) => (
                      <div
                        className="flex items-center gap-4 rounded-[13px] border border-white/11 bg-white/[0.055] px-4 py-4 backdrop-blur-sm"
                        key={item}
                      >
                        <span className="grid size-7 place-items-center rounded-full bg-[#74d1c6]/12 text-[#91e1d8]">
                          <Check className="size-3.5" />
                        </span>
                        <span className="text-[14px] text-white/72">
                          {item}
                        </span>
                        <span className="ml-auto font-mono text-[9px] text-white/26">
                          0{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Reveal>

          <Reveal
            className="flex flex-col justify-between rounded-[26px] border border-[#10233b]/9 bg-[#f7f7f5] p-7 sm:p-10 lg:p-12"
            delay={0.05}
          >
            <div>
              <p className="section-label">{content.proof.label}</p>
              <h2 className="mt-5 text-[clamp(2.1rem,3.8vw,4.2rem)] font-[530] leading-[1.04] tracking-[-0.05em]">
                {content.proof.title}
              </h2>
              <p className="mt-6 max-w-xl text-[16px] leading-[1.75] text-[#10233b]/58">
                {content.proof.text}
              </p>
            </div>
            <ul className="mt-12 space-y-3 border-t border-[#10233b]/10 pt-7">
              {content.proof.facts.map((fact) => (
                <li
                  className="flex gap-3 text-[14px] leading-relaxed text-[#10233b]/68"
                  key={fact}
                >
                  <Check className="mt-1 size-4 shrink-0 text-[#5d72c4]" />
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16">
        <Reveal className="mx-auto grid max-w-[1440px] gap-10 rounded-[28px] border border-[#10233b]/9 bg-white p-7 sm:p-10 lg:grid-cols-[.78fr_1.22fr] lg:p-14">
          <div>
            <p className="section-label">ИНТЕГРАЦИИ</p>
            <h2 className="mt-5 text-[clamp(2rem,3.4vw,3.7rem)] font-[530] leading-[1.07] tracking-[-0.045em]">
              Сохраняем рабочую инфраструктуру
            </h2>
            <p className="mt-5 max-w-lg text-[16px] leading-[1.72] text-[#10233b]/56">
              Состав интеграций уточняется на аудите: подключаем только те
              системы и данные, которые нужны выбранному процессу.
            </p>
          </div>
          <div className="flex content-start flex-wrap gap-2.5 lg:pt-3">
            {content.integrations.map((integration) => (
              <span
                className="rounded-[12px] border border-[#10233b]/10 bg-[#eef0ee] px-4 py-3 text-[14px] text-[#10233b]/68"
                key={integration}
              >
                {integration}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-[#0a1d34] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        <div
          aria-hidden="true"
          className="absolute -right-24 top-0 size-[32rem] rounded-full bg-[#5268bb]/24 blur-[105px]"
        />
        <Reveal className="relative mx-auto grid max-w-[1440px] gap-9 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="section-label section-label-dark">СЛЕДУЮЩИЙ ШАГ</p>
            <h2 className="mt-5 max-w-4xl text-[clamp(2.35rem,4.5vw,5rem)] font-[530] leading-[1.02] tracking-[-0.052em]">
              Разобрать задачи направления «{content.title}» на рабочей встрече
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-xl text-[16px] leading-[1.7] text-white/60">
              Определим первый модуль, точки интеграции и критерий результата.
              После встречи подготовим архитектуру и коммерческое предложение.
            </p>
            <BrandButton className="mt-8" href="/contacts" tone="light">
              Получить предложение
            </BrandButton>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
