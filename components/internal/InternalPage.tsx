import type { ReactNode } from 'react';

import { BrandButton } from '@/components/shared/BrandButton';
import { HardLink } from '@/components/shared/HardLink';
import { Reveal } from '@/components/shared/Reveal';

type InternalHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  code: string;
  children?: ReactNode;
};

export function InternalHero({
  eyebrow,
  title,
  lead,
  code,
  children,
}: InternalHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#07172a] px-5 pb-20 pt-32 text-white sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-30 lg:pt-42 xl:px-16">
      <div
        aria-hidden="true"
        className="hero-grain pointer-events-none absolute inset-0 opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute -right-44 -top-20 size-[42rem] rounded-full bg-[#6275c8]/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.13em] text-white/42">
          <HardLink className="transition-colors hover:text-white" href="/">
            РУСИНФОТЕК
          </HardLink>
          <span>/</span>
          <span className="text-[#aebeff]">{code}</span>
        </div>
        <div className="mt-11 grid gap-10 lg:grid-cols-[1.18fr_.82fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="text-[12px] font-semibold tracking-[0.11em] text-[#aebeff]">
              {eyebrow}
            </p>
            <h1 className="mt-6 max-w-5xl text-[clamp(3rem,6.3vw,7rem)] font-[520] leading-[.94] tracking-[-0.062em] text-balance">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.07}>
            <p className="max-w-2xl text-[17px] leading-[1.75] text-white/62 sm:text-[19px]">
              {lead}
            </p>
            {children}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type InternalCtaProps = {
  eyebrow?: string;
  title: string;
  text: string;
  button?: string;
};

export function InternalCta({
  eyebrow = 'СЛЕДУЮЩИЙ ШАГ',
  title,
  text,
  button = 'Получить предложение',
}: InternalCtaProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a1d34] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 size-[32rem] rounded-full bg-[#5268bb]/24 blur-[105px]"
      />
      <Reveal className="relative mx-auto grid max-w-[1440px] gap-9 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div>
          <p className="section-label section-label-dark">{eyebrow}</p>
          <h2 className="mt-5 max-w-4xl text-[clamp(2.35rem,4.5vw,5rem)] font-[530] leading-[1.02] tracking-[-0.052em]">
            {title}
          </h2>
        </div>
        <div className="lg:justify-self-end">
          <p className="max-w-xl text-[16px] leading-[1.72] text-white/60">
            {text}
          </p>
          <BrandButton className="mt-8" href="/contacts" tone="light">
            {button}
          </BrandButton>
        </div>
      </Reveal>
    </section>
  );
}
