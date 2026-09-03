import Link from 'next/link';

import { BrandButton } from '@/components/shared/BrandButton';
import { MediaFrame } from '@/components/shared/MediaFrame';

const colors = [
  ['Canvas', '#F7F7F5', 'bg-[#f7f7f5] text-[#10233b] border border-[#10233b]/10'],
  ['Soft bridge', '#EEF0EE', 'bg-[#eef0ee] text-[#10233b] border border-[#10233b]/10'],
  ['Deep navy', '#07172A', 'bg-[#07172a] text-white'],
  ['Action blue', '#17385F', 'bg-[#17385f] text-white'],
  ['Iris accent', '#6075C7', 'bg-[#6075c7] text-white'],
];

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] px-5 py-12 text-[#10233b] sm:px-8 sm:py-16 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1280px]">
        <header className="flex items-start justify-between gap-6">
          <div><p className="section-label">INTERNAL STYLE GUIDE</p><h1 className="mt-4 text-[clamp(2.8rem,5vw,5.5rem)] font-[550] leading-[1.02] tracking-[-0.055em]">Cinematic enterprise</h1><p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#10233b]/58">Commissioner · abstract digital depth · спокойная корпоративная выразительность</p></div>
          <Link className="mt-1 text-[14px] font-semibold underline decoration-[#10233b]/25 underline-offset-4" href="/">Главная</Link>
        </header>

        <section className="mt-16 border-t border-[#10233b]/10 pt-12">
          <h2 className="text-xl font-semibold">Палитра</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{colors.map(([name, value, className]) => <div className={`flex min-h-36 flex-col justify-between rounded-[18px] p-5 ${className}`} key={name}><span className="text-[14px] font-semibold">{name}</span><span className="text-[13px] opacity-60">{value}</span></div>)}</div>
        </section>

        <section className="mt-16 grid gap-12 border-t border-[#10233b]/10 py-14 lg:grid-cols-[1.1fr_.9fr]">
          <div><p className="section-label">COMMISSIONER / HERO / 550</p><h2 className="mt-5 text-[clamp(2.8rem,5.4vw,5.9rem)] font-[550] leading-[1.01] tracking-[-0.055em]">Автоматизируем процессы, на которых работает бизнес.</h2></div>
          <div className="space-y-9 self-end"><div><p className="section-label">SECTION TITLE / 540</p><h3 className="mt-3 text-4xl font-[540] leading-tight tracking-[-0.045em]">AI для ключевых процессов компании</h3></div><div><p className="section-label">BODY / 400</p><p className="mt-3 max-w-xl text-[17px] leading-[1.7] text-[#10233b]/62">Читаемый деловой текст без декоративной футуристичности.</p></div></div>
        </section>

        <section className="border-t border-[#10233b]/10 py-14" id="buttons">
          <h2 className="text-xl font-semibold">Button system</h2>
          <div className="mt-7 flex flex-wrap gap-3"><BrandButton href="#buttons">Primary CTA</BrandButton><div className="rounded-[16px] bg-[#07172a] p-2"><BrandButton href="#buttons" tone="quiet">Secondary CTA</BrandButton></div></div>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#10233b]/58">Умеренный радиус, отдельная directional-зона, внутренний свет и контролируемое движение на hover.</p>
        </section>

        <section className="border-t border-[#10233b]/10 py-14">
          <h2 className="text-xl font-semibold">Media containers</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2"><MediaFrame className="min-h-80 rounded-[26px]" label="image / poster / mp4-webm" /><MediaFrame className="min-h-80 rounded-[26px]" label="case media / screenshot / video" palette="from-[#17343d] via-[#526e74] to-[#b4bab1]" /></div>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#10233b]/58">Крупные поверхности используют радиус 24–28 px. Контентные элементы — 11–14 px. Placeholder сохраняет пропорции и атмосферу, но не имитирует финальное фото или интерфейс.</p>
        </section>

        <section className="grid gap-5 border-t border-[#10233b]/10 py-14 md:grid-cols-2">
          <div className="min-h-64 rounded-[26px] bg-white p-8 shadow-[0_20px_55px_rgba(16,35,59,.06)]"><p className="section-label">LIGHT SURFACE</p><h3 className="mt-14 text-3xl font-[540] tracking-[-0.04em]">Спокойное чтение</h3><p className="mt-4 text-[16px] leading-relaxed text-[#10233b]/58">Секции соединяются близкими оттенками и мягкими перекрытиями.</p></div>
          <div className="min-h-64 rounded-[26px] bg-[radial-gradient(circle_at_82%_12%,rgba(103,116,211,.4),transparent_38%),#0b2342] p-8 text-white"><p className="section-label section-label-dark">DARK SURFACE</p><h3 className="mt-14 text-3xl font-[540] tracking-[-0.04em]">Цифровая глубина</h3><p className="mt-4 text-[16px] leading-relaxed text-white/60">Тёмные акценты сосредоточены в Hero, leadership и финальном действии.</p></div>
        </section>

        <section className="border-t border-[#10233b]/10 py-12"><h2 className="text-xl font-semibold">Spacing & transitions</h2><p className="mt-4 max-w-3xl text-[15px] leading-[1.75] text-[#10233b]/58">Основной вертикальный ритм секций — 96–144 px. Переходы строятся на gradient bridges, мягких overlaps и продолжении света. Сильный motion сосредоточен в Hero и Hero → Directions; дальше используются спокойные reveal и hover.</p></section>
      </div>
    </main>
  );
}
