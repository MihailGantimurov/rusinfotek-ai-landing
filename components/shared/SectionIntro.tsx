import { Reveal } from '@/components/shared/Reveal';

type SectionIntroProps = {
  index: string;
  title: string;
  text: string;
};

export function SectionIntro({ index, title, text }: SectionIntroProps) {
  return (
    <Reveal className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.17em] text-primary">
        <span>{index}</span><span className="h-px w-12 bg-primary/50" />
      </div>
      <h2 className="text-balance text-[clamp(2.15rem,4vw,4.4rem)] font-semibold leading-[1.02] tracking-[-.055em] text-white">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/58 sm:text-lg">{text}</p>
    </Reveal>
  );
}
