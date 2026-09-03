import { Reveal } from '@/components/shared/Reveal';
import { SignalBars } from '@/components/shared/SignalBars';
import { metrics } from '@/content/home';

export function Metrics() {
  return (
    <section id="metrics" aria-label="Ключевые результаты" className="border-b border-white/8 bg-[#001a38]">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-3">
        {metrics.map((metric, index) => (
          <Reveal className={`group relative overflow-hidden px-5 py-11 transition-colors hover:bg-primary/[.025] sm:px-8 lg:px-12 lg:py-14 ${index < 2 ? 'border-b border-white/8 md:border-b-0 md:border-r' : ''}`} delay={index * 0.08} key={metric.value}>
            <span className="absolute right-5 top-5 font-mono text-[9px] tracking-[.15em] text-white/18">0{index + 1} / SIGNAL</span>
            <div className="grid h-full grid-cols-[1fr_86px] gap-7">
              <div className="self-start">
                <p className="text-[clamp(2.8rem,5vw,5rem)] font-medium leading-none tracking-[-.06em] text-primary">{metric.value}</p>
                <p className="mt-3 text-lg font-medium text-white">{metric.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/42">{metric.note}</p>
              </div>
              <div className="self-end opacity-45 transition-opacity duration-500 group-hover:opacity-100"><SignalBars values={metric.signal} delay={index * .08} /></div>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary shadow-[0_0_14px_#00FFE8] transition-transform duration-500 group-hover:scale-x-100" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
