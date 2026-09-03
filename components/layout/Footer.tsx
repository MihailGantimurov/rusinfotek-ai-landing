import { Logo } from '@/components/layout/Logo';

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#00162f] px-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top"><Logo /></a>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/34">
          <a className="transition-colors hover:text-primary" href="#products">Продукты</a>
          <a className="transition-colors hover:text-primary" href="#cases">Кейсы</a>
          <a className="transition-colors hover:text-primary" href="#process">Процесс</a>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[.12em] text-white/24">© 2026 РусИнфоТек · AI systems online</p>
      </div>
    </footer>
  );
}
