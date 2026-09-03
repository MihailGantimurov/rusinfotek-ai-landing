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
    <footer className="relative overflow-hidden bg-[#07172a] px-5 text-white sm:px-8 lg:px-12 xl:px-16">
      <div aria-hidden="true" className="absolute -right-28 -top-40 size-[34rem] rounded-full bg-[#344e9d]/28 blur-[110px]" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-12 py-20 md:grid-cols-[1.25fr_.75fr] md:py-24 lg:py-28">
          <div>
            <Logo inverse />
            <h2 className="mt-10 max-w-3xl text-balance text-[clamp(2rem,3.8vw,4.1rem)] font-medium leading-[1.06] tracking-[-0.05em]">
              Цифровые системы для реального бизнеса.
            </h2>
          </div>
          <div className="self-end md:justify-self-end">
            <p className="max-w-sm text-base leading-relaxed text-white/62">
              Обсудим, какие процессы стоит автоматизировать в первую очередь.
            </p>
            <Link
              className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0b1c32] transition-transform hover:-translate-y-0.5"
              href="/contacts"
            >
              Обсудить задачу
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-7 border-t border-white/12 py-8 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Навигация в подвале">
            {footerLinks.map((item) => (
              <Link className="text-sm text-white/58 transition-colors hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-white/38">© 2026 РусИнфоТек</p>
        </div>
      </div>
    </footer>
  );
}
