'use client';

import { motion, useReducedMotion } from 'framer-motion';

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

export function HeroMedia({ asset }: HeroMediaProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      aria-label={asset?.kind === 'video' ? asset.title : undefined}
      className="relative min-h-[350px] overflow-hidden rounded-[26px] border border-white/12 bg-[#102c50] shadow-[0_44px_110px_rgba(0,7,24,.38)] sm:min-h-[420px] lg:min-h-[600px]"
      initial={reduceMotion ? false : { opacity: 0, scale: 1.035, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.15, delay: 0.18, ease: [0.22, 0.72, 0.24, 1] }}
    >
      {asset?.kind === 'image' ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="absolute inset-0 size-full object-cover" src={asset.src} alt={asset.alt} />
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
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(118,132,231,.52),transparent_27%),radial-gradient(circle_at_18%_84%,rgba(54,131,158,.38),transparent_32%),linear-gradient(145deg,#0a1d35_4%,#153e67_46%,#38517f_72%,#101c34_100%)]" />
          <motion.div
            className="absolute -right-[18%] top-[12%] h-[72%] w-[62%] rounded-[44%_56%_54%_46%] bg-[linear-gradient(155deg,rgba(255,255,255,.2),rgba(255,255,255,.025))] blur-[1px]"
            animate={reduceMotion ? undefined : { x: [0, -12, 0], y: [0, 10, 0], opacity: [0.62, 0.78, 0.62] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-x-[9%] bottom-[12%] h-[29%] rounded-[22px] border border-white/14 bg-[linear-gradient(130deg,rgba(255,255,255,.14),rgba(255,255,255,.035))] shadow-[inset_0_1px_rgba(255,255,255,.14),0_28px_80px_rgba(1,12,35,.24)] backdrop-blur-[18px]" />
          <motion.div
            className="absolute -left-[8%] top-[42%] h-px w-[92%] bg-linear-to-r from-transparent via-white/45 to-transparent"
            animate={reduceMotion ? undefined : { x: ['-20%', '34%', '-20%'], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.08),transparent_34%,transparent_66%,rgba(255,255,255,.04))]" />
        </div>
      ) : null}

      <figcaption className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 border-t border-white/14 pt-4 text-[12px] text-white/52 sm:bottom-7 sm:left-7 sm:right-7">
        <span>Среда для будущего видеосюжета</span>
        <span className="hidden tracking-[0.08em] sm:block">IMAGE · POSTER · MP4/WEBM</span>
      </figcaption>
    </motion.figure>
  );
}
