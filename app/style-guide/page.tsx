import Link from 'next/link';

const colors = [
  { name: 'Black', value: '#000000', className: 'bg-black text-white' },
  { name: 'White', value: '#FFFFFF', className: 'border border-oxford/12 bg-white text-oxford' },
  { name: 'Oxford Blue', value: '#002147', className: 'bg-oxford text-white' },
  { name: 'Turquoise', value: '#00FFE8', className: 'bg-turquoise text-oxford' },
  { name: 'Dark Green', value: '#001A00', className: 'bg-[#001A00] text-white' },
];

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-center justify-between border-b border-oxford/14 pb-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-oxford/44">Internal / Visual foundation</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-oxford sm:text-6xl">Style guide</h1>
          </div>
          <Link className="text-sm font-medium text-oxford underline decoration-oxford/25 underline-offset-4" href="/">Главная</Link>
        </div>

        <section className="py-14">
          <h2 className="text-sm font-medium uppercase tracking-[0.08em] text-oxford/48">Цвета</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {colors.map((color) => (
              <div className={`flex min-h-36 flex-col justify-between p-5 ${color.className}`} key={color.name}>
                <span className="text-sm font-medium">{color.name}</span>
                <span className="font-mono text-[11px] opacity-60">{color.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-t border-oxford/14 py-14 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-oxford/44">Typography / Display</p>
            <h2 className="mt-6 text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-oxford">Сложные системы. Ясная логика.</h2>
          </div>
          <div className="space-y-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-oxford/44">Heading</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] text-oxford">Автоматизация операционных процессов</h3>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-oxford/44">Body</p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-oxford/62">Основной текст объясняет сложную технологию простым корпоративным языком и сохраняет комфортную длину строки.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-oxford/14 py-14">
          <h2 className="text-sm font-medium uppercase tracking-[0.08em] text-oxford/48">Компоненты</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="min-h-12 bg-oxford px-6 text-sm font-medium text-white" type="button">Primary button</button>
            <button className="min-h-12 border border-oxford/20 bg-white px-6 text-sm font-medium text-oxford" type="button">Secondary button</button>
            <a className="inline-flex min-h-12 items-center border-b border-oxford/25 text-sm font-medium text-oxford" href="#surfaces">Текстовая ссылка</a>
          </div>
        </section>

        <section id="surfaces" className="grid gap-4 border-t border-oxford/14 py-14 md:grid-cols-2">
          <div className="min-h-64 border border-oxford/12 bg-white p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-oxford/40">Light surface</p>
            <div className="mt-12 border-t border-oxford/14 pt-5">
              <h3 className="text-2xl font-medium tracking-[-0.035em] text-oxford">Архитектурная карточка</h3>
              <p className="mt-3 text-sm leading-relaxed text-oxford/56">Тонкая граница, прямые углы и строгая иерархия без декоративного шума.</p>
            </div>
          </div>
          <div className="min-h-64 bg-surface-dark p-7 text-white">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-turquoise/70">Dark surface</p>
            <div className="mt-12 border-t border-white/14 pt-5">
              <h3 className="text-2xl font-medium tracking-[-0.035em]">Контрастный системный блок</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/56">Oxford Blue используется для крупных смысловых переходов и важных разделов.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
