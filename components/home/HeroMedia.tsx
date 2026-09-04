'use client';

import { Pause, Play } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

type HeroMediaAsset =
  | { kind: 'image'; src: string; alt: string }
  | {
      kind: 'video';
      poster?: string;
      sources: Array<{ src: string; type: 'video/mp4' | 'video/webm' }>;
      title: string;
    };

type HeroMediaProps = {
  asset?: HeroMediaAsset;
};

const caseFrames = [
  {
    src: '/media/crm-pipeline.jpg',
    title: 'Единая логика заявок и сделок',
    meta: 'CRM-КОНТУР · TECHNOPRINT',
    position: '50% 42%',
  },
  {
    src: '/media/call-analysis.jpg',
    title: 'Звонок превращается в резюме и задачу',
    meta: 'AI-АНАЛИЗ · КОММУНИКАЦИИ',
    position: '50% 50%',
  },
  {
    src: '/media/ai-observer.jpg',
    title: 'Агент находит риски внутри процесса',
    meta: 'AI-НАБЛЮДАТЕЛЬ · 24/7',
    position: '50% 34%',
  },
];

export function HeroMedia({ asset }: HeroMediaProps) {
  const reduceMotion = useReducedMotion();
  const [activeFrame, setActiveFrame] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (asset || reduceMotion || !playing) return;
    const timer = window.setInterval(() => {
      setActiveFrame((current) => (current + 1) % caseFrames.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [asset, playing, reduceMotion]);

  const frame = caseFrames[activeFrame];

  return (
    <motion.figure
      aria-label={
        asset?.kind === 'video'
          ? asset.title
          : 'Реальные фрагменты внедрённых AI-систем РусИнфоТек'
      }
      className="relative min-h-[350px] overflow-hidden rounded-[26px] border border-white/12 bg-[#102c50] shadow-[0_44px_110px_rgba(0,7,24,.38)] sm:min-h-[420px] lg:min-h-[600px]"
      initial={reduceMotion ? false : { opacity: 0, scale: 1.035, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.15, delay: 0.18, ease: [0.22, 0.72, 0.24, 1] }}
    >
      {asset?.kind === 'image' ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="absolute inset-0 size-full object-cover"
          src={asset.src}
          alt={asset.alt}
        />
      ) : null}

      {asset?.kind === 'video' ? (
        <video
          aria-label={asset.title}
          className="absolute inset-0 size-full object-cover"
          poster={asset.poster}
          autoPlay
          muted
          loop
          playsInline
        >
          {asset.sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      ) : null}

      {!asset ? (
        <div className="absolute inset-0">
          <motion.img
            alt="Обезличенный интерфейс внедрённой AI-системы"
            animate={{ opacity: 1, scale: 1.04 }}
            className="absolute inset-0 size-full object-cover"
            initial={{ opacity: 0, scale: 1.09 }}
            key={frame.src}
            src={frame.src}
            style={{ objectPosition: frame.position }}
            transition={{
              duration: reduceMotion ? 0 : 1.1,
              ease: [0.22, 0.72, 0.24, 1],
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,15,32,.2),rgba(4,15,32,.04)_42%,rgba(4,15,32,.82))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(104,124,224,.25),transparent_32%)]" />
          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { x: ['-120%', '190%'] }}
            className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-linear-to-r from-transparent via-white/13 to-transparent blur-xl"
            transition={{
              duration: 5.6,
              repeat: Infinity,
              repeatDelay: 2.6,
              ease: 'easeInOut',
            }}
          />

          <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4 sm:inset-x-7 sm:top-7">
            <span className="rounded-full border border-white/18 bg-[#07172a]/64 px-3 py-2 font-mono text-[10px] tracking-[0.11em] text-white/76 backdrop-blur-md">
              РЕАЛЬНЫЙ КОНТУР · 0{activeFrame + 1}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/86 px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-[#10233b]">
              <span className="size-1.5 rounded-full bg-[#16a394] shadow-[0_0_10px_rgba(22,163,148,.7)]" />
              В РАБОТЕ
            </span>
          </div>

          <div className="absolute inset-x-5 bottom-5 rounded-[18px] border border-white/15 bg-[#07172a]/72 p-5 shadow-[0_18px_48px_rgba(0,8,24,.28)] backdrop-blur-xl sm:inset-x-7 sm:bottom-7 sm:p-6">
            <p className="font-mono text-[10px] tracking-[0.1em] text-[#aebeff]">
              {frame.meta}
            </p>
            <p className="mt-2 max-w-md text-[18px] font-[540] leading-tight tracking-[-0.025em] text-white sm:text-[21px]">
              {frame.title}
            </p>
            <div className="mt-5 flex items-center gap-2">
              {caseFrames.map((item, index) => (
                <button
                  aria-label={`Показать фрагмент ${index + 1}: ${item.title}`}
                  className="group h-5 flex-1 py-2"
                  key={item.src}
                  onClick={() => setActiveFrame(index)}
                  type="button"
                >
                  <span
                    className={`block h-px transition-colors ${index === activeFrame ? 'bg-white' : 'bg-white/24 group-hover:bg-white/48'}`}
                  />
                </button>
              ))}
              {!reduceMotion ? (
                <button
                  aria-label={
                    playing
                      ? 'Поставить демонстрацию на паузу'
                      : 'Продолжить демонстрацию'
                  }
                  className="ml-2 grid size-9 shrink-0 place-items-center rounded-full border border-white/16 text-white/72 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setPlaying((value) => !value)}
                  type="button"
                >
                  {playing ? (
                    <Pause className="size-3.5" />
                  ) : (
                    <Play className="size-3.5" />
                  )}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </motion.figure>
  );
}
