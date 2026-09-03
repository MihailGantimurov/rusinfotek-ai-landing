import { LockKeyhole } from 'lucide-react';

import { Reveal } from '@/components/shared/Reveal';
import { SectionIntro } from '@/components/shared/SectionIntro';
import { SignalBars } from '@/components/shared/SignalBars';
import { caseStudies } from '@/content/home';

export function Cases() {
  return (
    <section id="cases" className="border-y border-white/8 bg-[#001a38] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro index="02 / Кейсы" title="Не обещания. Результаты." text="Показываем эффект на реальных процессах. Названия части заказчиков закрыты NDA — цифры и механика внедрений сохранены." />
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-white/35"><LockKeyhole className="size-3.5 text-primary" />Данные NDA защищены</div>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal className="group relative flex min-h-[480px] flex-col overflow-hidden bg-[#001a38] p-6 transition-colors hover:bg-[#03254a] sm:p-9" delay={index * 0.08} key={item.metric}>
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[.13em] text-primary/72">{item.eyebrow}</p>
                <span className="font-mono text-[9px] text-white/18">CASE / 0{index + 1}</span>
              </div>
              <div className="relative mt-14">
                <span className="pointer-events-none absolute -left-3 -top-12 text-[9rem] font-semibold leading-none tracking-[-.08em] text-white/[.018]">0{index + 1}</span>
                <p className="relative text-[clamp(3.8rem,7vw,6.6rem)] font-medium leading-none tracking-[-.075em] text-primary [text-shadow:0_0_32px_rgba(0,255,232,.1)]">{item.metric}</p>
                <h3 className="mt-4 max-w-sm text-2xl font-medium leading-tight tracking-[-.035em] text-white">{item.title}</h3>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/48">{item.detail}</p>
              <div className="mt-7 border border-white/8 bg-[#00162f]/52 px-4 pb-3 pt-4">
                <div className="mb-3 flex items-center justify-between font-mono text-[8px] uppercase tracking-[.13em] text-white/25"><span>Effect signal</span><span className="text-primary/62">measured</span></div>
                <SignalBars values={item.signal} delay={index * .08} />
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-5 text-xs text-white/32">
                <span>Срок внедрения</span><span className="text-white/68">{item.duration}</span>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary shadow-[0_0_18px_#00FFE8] transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
