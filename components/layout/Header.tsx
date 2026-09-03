'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Logo } from '@/components/layout/Logo';

const navigation = [
  { label: 'Решения', href: '/solutions/sales' },
  { label: 'Кейсы', href: '/cases' },
  { label: 'Компания', href: '/company' },
  { label: 'Безопасность', href: '/security' },
  { label: 'Блог и новости', href: '/blog' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const onHero = pathname === '/' && !scrolled;
  const darkMode = onHero && !open;

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 30);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        onHero && !open
          ? 'bg-transparent'
          : 'border-b border-oxford/8 bg-[#f7f7f5]/88 shadow-[0_12px_44px_rgba(7,23,42,.055)] backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link href="/" aria-label="РусИнфоТек — главная">
          <Logo inverse={darkMode} />
        </Link>

        <nav className="hidden items-center gap-7 xl:gap-9 lg:flex" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link
              className={`text-[14px] font-medium transition-colors ${
                darkMode ? 'text-white/72 hover:text-white' : 'text-oxford/70 hover:text-oxford'
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className={`group hidden min-h-12 items-stretch overflow-hidden rounded-[13px] border text-[14px] font-semibold transition-all sm:inline-flex ${
              darkMode
                ? 'border-white/65 bg-white text-[#0b1c32] hover:bg-white/92'
                : 'border-[#203f66] bg-[linear-gradient(135deg,#17385f,#0e294b)] text-white shadow-[0_12px_30px_rgba(24,59,103,.16)]'
            }`}
            href="/contacts"
          >
            <span className="flex items-center px-4 xl:px-5">Получить коммерческое предложение</span>
            <span className="grid min-w-11 place-items-center border-l border-current/12 bg-white/[0.06]"><ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
          </Link>
          <button
            aria-expanded={open}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            className={`grid size-11 place-items-center rounded-full transition-colors lg:hidden ${
              darkMode ? 'bg-white/12 text-white' : 'bg-oxford/6 text-oxford'
            }`}
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Мобильная навигация"
            className="overflow-hidden bg-[#fbfbfa] px-5 sm:px-8 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 0.72, 0.24, 1] }}
          >
            <div className="flex flex-col py-3">
              {navigation.map((item) => (
                <Link
                  className="py-4 text-lg font-medium text-oxford"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="mt-3 inline-flex min-h-12 items-center justify-center rounded-[13px] bg-[linear-gradient(135deg,#17385f,#0e294b)] px-5 text-center text-sm font-semibold text-white"
                href="/contacts"
                onClick={() => setOpen(false)}
              >
                Получить коммерческое предложение
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
