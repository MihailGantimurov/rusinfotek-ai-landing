'use client';

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

import { BrandButton } from '@/components/shared/BrandButton';
import { MediaFrame } from '@/components/shared/MediaFrame';
import { directions } from '@/content/directions';

const atmospheres = {
  sales: {
    palette: 'from-[#171f4d] via-[#5a4e90] to-[#b39dcc]',
    glow: 'bg-[#9a79dc]/32',
    note: 'sales · image / video / interface ready',
  },
  logistics: {
    palette: 'from-[#0d2d50] via-[#37748e] to-[#9bc3c8]',
    glow: 'bg-[#5eabc2]/28',
    note: 'logistics · image / video / interface ready',
  },
  production: {
    palette: 'from-[#172739] via-[#596d7f] to-[#b7bdc1]',
    glow: 'bg-[#9faebc]/28',
    note: 'production · image / video / interface ready',
  },
  documents: {
    palette: 'from-[#251c43] via-[#72527e] to-[#c6abc5]',
    glow: 'bg-[#b277b5]/28',
    note: 'documents · image / video / interface ready',
  },
};

export function Directions() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [travelDirection, setTravelDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;
    const next = Math.min(directions.length - 1, Math.floor(value * directions.length));
    setActiveIndex((current) => {
      if (current !== next) setTravelDirection(next > current ? 1 : -1);
      return next;
    });
  });

  const direction = directions[activeIndex] ?? directions[0];
  const atmosphere = atmospheres[direction.visual];

  function selectDirection(index: number, updateScroll = true) {
    const next = (index + directions.length) % directions.length;
    setTravelDirection(next > activeIndex ? 1 : -1);
    setActiveIndex(next);

    if (updateScroll && rootRef.current && window.matchMedia('(min-width: 1024px)').matches) {
      const top = rootRef.current.getBoundingClientRect().top + window.scrollY;
      const range = rootRef.current.offsetHeight - window.innerHeight;
      window.scrollTo({ top: top + range * ((next + 0.12) / directions.length), behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  }

  function handleTabKey(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number | null = null;
    if (event.key === 'ArrowRight') next = index + 1;
    if (event.key === 'ArrowLeft') next = index - 1;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = directions.length - 1;
    if (next === null) return;

    event.preventDefault();
    const normalized = (next + directions.length) % directions.length;
    selectDirection(normalized);
    requestAnimationFrame(() => document.getElementById(`direction-tab-${normalized}`)?.focus());
  }

  return (
    <section ref={rootRef} id="directions" className="relative bg-[#eef0ee] px-5 pb-24 sm:px-8 sm:pb-28 lg:h-[410vh] lg:px-12 lg:pb-0 xl:px-16">
      <div className="mx-auto max-w-[1440px] lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[.76fr_1.24fr] lg:items-end">
          <div>
            <p className="section-label">РЕШЕНИЯ</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2.3rem,4vw,4.7rem)] font-[540] leading-[1.03] tracking-[-0.05em] text-[#10233b]">AI для ключевых процессов компании</h2>
          </div>
          <p className="max-w-2xl text-[16px] leading-[1.7] text-[#10233b]/56 lg:justify-self-end lg:text-[17px]">Прокрутка последовательно раскрывает четыре направления. Выберите нужное напрямую или продолжайте движение по странице.</p>
        </div>

        <div className="mt-9 flex w-full gap-0 overflow-x-auto border-b border-[#10233b]/12" role="tablist" aria-label="Направления автоматизации">
          {directions.map((item, index) => {
            const selected = index === activeIndex;
            return (
              <button
                aria-controls="direction-panel"
                aria-selected={selected}
                className={`relative shrink-0 px-4 py-3 text-[14px] font-medium transition-colors first:pl-0 sm:px-6 ${selected ? 'text-[#10233b]' : 'text-[#10233b]/40 hover:text-[#10233b]/72'}`}
                key={item.href}
                onClick={() => selectDirection(index)}
                onKeyDown={(event) => handleTabKey(event, index)}
                role="tab"
                tabIndex={selected ? 0 : -1}
                type="button"
                id={`direction-tab-${index}`}
              >
                <span className="mr-2 font-mono text-[10px] text-[#6075c7]">{item.number}</span>{item.title}
                <span className={`absolute inset-x-0 -bottom-px h-0.5 bg-[#536bc1] transition-transform duration-500 ${selected ? 'scale-x-100' : 'scale-x-0'}`} />
              </button>
            );
          })}
        </div>

        <AnimatePresence custom={travelDirection} mode="wait">
          <motion.article
            className="relative mt-7 grid gap-8 lg:mt-9 lg:grid-cols-[.7fr_1.3fr] lg:items-center"
            custom={travelDirection}
            drag={reduceMotion ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.06}
            id="direction-panel"
            key={direction.href}
            role="tabpanel"
            initial={reduceMotion ? false : { opacity: 0, y: 20, x: travelDirection * 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12, x: travelDirection * -14 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) selectDirection(activeIndex + 1, false);
              if (info.offset.x > 60) selectDirection(activeIndex - 1, false);
            }}
            transition={{ duration: 0.52, ease: [0.22, 0.72, 0.24, 1] }}
          >
            <div className="relative z-10 py-2 lg:pr-5">
              <p className="font-mono text-[11px] tracking-[0.12em] text-[#6075c7]">{direction.number} / 04</p>
              <h3 className="mt-4 text-[clamp(2.55rem,4.2vw,5rem)] font-[540] leading-[.98] tracking-[-0.055em] text-[#10233b]">{direction.title}</h3>
              <p className="mt-5 max-w-lg text-[17px] leading-[1.7] text-[#10233b]/60">{direction.description}</p>
              <ul className="mt-7 grid max-w-xl gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {direction.modules.map((module) => (
                  <li className="flex items-start gap-2.5 text-[14px] leading-relaxed text-[#10233b]/62" key={module}><span className="mt-[.65em] size-1.5 shrink-0 rounded-full bg-[#6075c7]" />{module}</li>
                ))}
              </ul>
              <BrandButton className="mt-8" href={direction.href}>Подробнее о направлении</BrandButton>
            </div>

            <div className="relative">
              <div aria-hidden="true" className={`absolute -inset-8 rounded-full blur-[90px] ${atmosphere.glow}`} />
              <MediaFrame className="min-h-[410px] rounded-[26px] sm:min-h-[500px] lg:min-h-[52vh] lg:max-h-[570px]" label={atmosphere.note} palette={atmosphere.palette} />
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="mt-6 flex items-center gap-3 lg:hidden">
          <button aria-label="Предыдущее направление" className="grid size-11 place-items-center rounded-[12px] border border-[#10233b]/12 bg-white text-[#10233b]" onClick={() => selectDirection(activeIndex - 1, false)} type="button"><ArrowLeft className="size-4" /></button>
          <button aria-label="Следующее направление" className="grid size-11 place-items-center rounded-[12px] bg-[#17385f] text-white" onClick={() => selectDirection(activeIndex + 1, false)} type="button"><ArrowRight className="size-4" /></button>
        </div>
      </div>
    </section>
  );
}
