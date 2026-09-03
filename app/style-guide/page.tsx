import Link from 'next/link';

const colors = [
  { name: 'Warm off-white', value: '#F7F7F5', className: 'border border-oxford/8 bg-[#f7f7f5] text-oxford' },
  { name: 'White', value: '#FFFFFF', className: 'border border-oxford/8 bg-white text-oxford' },
  { name: 'Deep navy', value: '#07172A', className: 'bg-[#07172a] text-white' },
  { name: 'Premium blue', value: '#183B67', className: 'bg-[#183b67] text-white' },
  { name: 'Cyan accent', value: '#00FFE8', className: 'bg-[#00ffe8] text-[#07172a]' },
];

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] px-5 py-12 text-foreground sm:px-8 sm:py-16 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-semibold tracking-[0.08em] text-[#5c70c0]">INTERNAL STYLE GUIDE</p>
            <h1 className="mt-4 text-balance text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[1.03] tracking-[-0.06em] text-oxford">Cinematic enterprise</h1>
          </div>
          <Link className="mt-1 text-sm font-semibold text-oxford underline decoration-oxford/25 underline-offset-4" href="/">Главная</Link>
        </div>

        <section className="mt-16">
          <h2 className="text-lg font-semibold text-oxford">Палитра</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {colors.map((color) => (
              <div className={`flex min-h-36 flex-col justify-between rounded-2xl p-5 ${color.className}`} key={color.name}>
                <span className="text-sm font-semibold">{color.name}</span>
                <span className="text-sm opacity-62">{color.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-12 border-t border-oxford/10 py-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-sm font-semibold text-[#5c70c0]">MANROPE / HERO</p>
            <h2 className="mt-5 max-w-3xl text-balance text-[clamp(2.8rem,5.4vw,5.9rem)] font-medium leading-[1.03] tracking-[-0.06em] text-oxford">Автоматизируем процессы, на которых работает бизнес.</h2>
          </div>
          <div className="space-y-9 self-end">
            <div>
              <p className="text-sm font-semibold text-[#5c70c0]">H2</p>
              <h3 className="mt-3 text-4xl font-medium leading-tight tracking-[-0.05em] text-oxford">AI для ключевых процессов компании</h3>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#5c70c0]">Body</p>
              <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-oxford/64">Нейтральный, комфортный текст для сложных решений и деловой аудитории.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-oxford/10 py-14">
          <h2 className="text-lg font-semibold text-oxford">Навигация и действия</h2>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="min-h-12 rounded-xl bg-[#183b67] px-5 text-sm font-semibold text-white" type="button">Primary CTA</button>
            <button className="min-h-12 rounded-xl bg-white px-5 text-sm font-semibold text-oxford shadow-[0_8px_20px_rgba(16,35,59,.08)]" type="button">Secondary CTA</button>
            <a className="px-3 py-3 text-sm font-semibold text-oxford/62" href="#surfaces">Текстовая ссылка</a>
          </div>
          <div className="mt-9 flex max-w-xl gap-1 overflow-x-auto rounded-full bg-white p-1.5 shadow-[0_8px_20px_rgba(16,35,59,.06)]">
            <span className="rounded-full bg-[#183b67] px-4 py-2 text-sm font-semibold text-white">Продажи</span>
            <span className="px-4 py-2 text-sm font-semibold text-oxford/58">Логистика</span>
            <span className="px-4 py-2 text-sm font-semibold text-oxford/58">Производство</span>
          </div>
        </section>

        <section id="surfaces" className="grid gap-5 border-t border-oxford/10 py-14 md:grid-cols-2">
          <div className="min-h-72 rounded-[26px] bg-white p-8 shadow-[0_20px_55px_rgba(16,35,59,.06)]">
            <p className="text-sm font-semibold text-[#5c70c0]">LIGHT SURFACE</p>
            <h3 className="mt-16 text-3xl font-medium tracking-[-0.05em] text-oxford">Воздух и мягкая глубина</h3>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-oxford/60">Светлые пространства нужны для спокойного чтения и цельной композиции.</p>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-[26px] bg-[#0b2342] p-8 text-white">
            <div aria-hidden="true" className="absolute -right-12 top-0 size-64 rounded-full bg-[#687ed7]/58 blur-[55px]" />
            <div aria-hidden="true" className="absolute bottom-8 right-10 h-40 w-32 rotate-[13deg] rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-md" />
            <div className="relative">
              <p className="text-sm font-semibold text-white/62">DEEP BLUE + GLASS</p>
              <h3 className="mt-16 text-3xl font-medium tracking-[-0.05em]">Abstract digital depth</h3>
              <p className="mt-4 max-w-md text-[17px] leading-relaxed text-white/65">Крупная media-поверхность с мягким светом и стеклянным digital-слоем.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-oxford/10 py-10">
          <p className="text-sm leading-relaxed text-oxford/56">Радиусы: 10–14 px для элементов интерфейса, 18–32 px для крупных media-поверхностей.</p>
        </section>
      </div>
    </main>
  );
}
