'use client';

import { SecurityVisual } from '@/components/home/SecurityVisual';
import { Reveal } from '@/components/shared/Reveal';
import { SectionIntro } from '@/components/shared/SectionIntro';
import { securityItems } from '@/content/home';

export function Security() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro index="03 / Надёжность" title="Enterprise-уровень — без компромиссов" text="Интегрируем автоматизацию в ваш контур. Архитектуру, права доступа и требования к данным проектируем до запуска." />
        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
          {securityItems.map(({ icon: Icon, title, text, code }, index) => (
            <Reveal className="group bg-[#002147] transition-colors hover:bg-[#03254a]" delay={index * 0.08} key={title}>
              <SecurityVisual Icon={Icon} index={index} />
              <div className="p-7 sm:p-9 lg:p-10">
                <div className="flex items-center justify-between"><Icon className="size-6 text-primary" strokeWidth={1.35} /><span className="font-mono text-[8px] uppercase tracking-[.13em] text-white/22">{code}</span></div>
                <h3 className="mt-8 text-xl font-medium tracking-[-.03em] text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/48">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
