import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Logo } from '@/components/layout/Logo';

const footerLinks = [
  { label: 'Решения', href: '/solutions/sales' },
  { label: 'Кейсы', href: '/cases' },
  { label: 'Компания', href: '/company' },
  { label: 'Безопасность', href: '/security' },
  { label: 'Блог и новости', href: '/blog' },
  { label: 'Контакты', href: '/contacts' },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark-deep px-5 text-white sm:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1520px]">
        <div className="grid gap-12 border-b border-white/12 py-16 md:grid-cols-[1.3fr_.7fr] lg:py-20">
          <div>
            <Logo inverse />
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-white/62">
              AI-системы для автоматизации операционных процессов и работы целых отделов.
            </p>
          </div>
          <div className="md:justify-self-end">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-turquoise/70">Следующий шаг</p>
            <Link
              className="group mt-5 inline-flex items-center gap-3 border-b border-white/28 pb-2 text-lg font-medium transition-colors hover:border-turquoise hover:text-turquoise"
              href="/contacts"
            >
              Обсудить задачу
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-7 py-8 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Навигация в подвале">
            {footerLinks.map((item) => (
              <Link className="text-sm text-white/46 transition-colors hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-white/34">© 2026 РусИнфоТек</p>
        </div>
      </div>
    </footer>
  );
}
