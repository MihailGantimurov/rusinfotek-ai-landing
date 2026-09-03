import Link from 'next/link';

import { Logo } from '@/components/layout/Logo';

const columns = [
  {
    title: 'Решения',
    links: [
      ['Продажи', '/solutions/sales'],
      ['Логистика', '/solutions/logistics'],
      ['Производство', '/solutions/production'],
      ['Документооборот', '/solutions/documents'],
    ],
  },
  {
    title: 'Компания',
    links: [
      ['Кейсы', '/cases'],
      ['О компании', '/company'],
      ['Безопасность', '/security'],
      ['Блог и новости', '/blog'],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061426] px-5 text-white sm:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 py-14 md:grid-cols-[1.25fr_.75fr_.75fr] lg:py-18">
          <div>
            <Logo inverse />
            <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-white/50">AI-системы для автоматизации процессов, на которых работает бизнес.</p>
          </div>
          {columns.map((column) => (
            <nav aria-label={column.title} key={column.title}>
              <p className="text-[12px] font-semibold tracking-[0.09em] text-white/36">{column.title.toUpperCase()}</p>
              <div className="mt-4 flex flex-col gap-3">
                {column.links.map(([label, href]) => <Link className="text-[14px] text-white/62 transition-colors hover:text-white" href={href} key={href}>{label}</Link>)}
              </div>
            </nav>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-[13px] text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 РусИнфоТек</p>
          <Link className="transition-colors hover:text-white/68" href="/contacts">Контакты</Link>
        </div>
      </div>
    </footer>
  );
}
