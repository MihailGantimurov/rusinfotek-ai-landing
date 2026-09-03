'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

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

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 18);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-oxford/10 bg-white/90 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1520px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link href="/" aria-label="РусИнфоТек — главная">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link
              className="group relative py-2 text-[14px] font-medium text-oxford/70 transition-colors hover:text-oxford"
              href={item.href}
              key={item.href}
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-oxford transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="group hidden h-11 items-center gap-2 bg-oxford px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#07305d] sm:inline-flex"
            href="/contacts"
          >
            Получить коммерческое предложение
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button
            aria-expanded={open}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            className="grid size-11 place-items-center border border-oxford/15 text-oxford lg:hidden"
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
            className="border-t border-oxford/10 bg-white px-5 pb-7 sm:px-8 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.72, 0.24, 1] }}
          >
            <div className="flex flex-col">
              {navigation.map((item, index) => (
                <Link
                  className="flex items-center justify-between border-b border-oxford/10 py-4 text-base font-medium text-oxford"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <span className="font-mono text-[10px] text-oxford/35">0{index + 1}</span>
                </Link>
              ))}
              <Link
                className="mt-6 inline-flex min-h-12 items-center justify-center bg-oxford px-5 text-center text-sm font-medium text-white"
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
