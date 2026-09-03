'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import { Logo } from '@/components/layout/Logo';

const links = [
  ['Продукты', '#products'],
  ['Кейсы', '#cases'],
  ['Процесс', '#process'],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#002147]/82 backdrop-blur-2xl">
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" aria-label="РусИнфоТек — главная"><Logo /></a>

        <nav className="hidden items-center gap-1 text-sm text-white/62 md:flex" aria-label="Основная навигация">
          {links.map(([label, href]) => (
            <a className="group relative px-4 py-2 transition-colors hover:text-primary" href={href} key={href}>{label}<span className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" /></a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="group hidden h-10 items-center gap-2 border border-primary/65 px-4 text-sm font-medium text-white transition-all hover:bg-primary hover:text-[#00101f] sm:inline-flex" href="#contact">
            Аудит процессов
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            aria-expanded={open}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            className="grid size-10 place-items-center border border-white/12 text-white md:hidden"
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
            className="border-t border-white/8 bg-[#001a38] px-5 py-5 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col">
              {links.map(([label, href]) => (
                <a className="border-b border-white/8 py-4 text-base text-white/72" href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
              ))}
              <a className="mt-5 inline-flex h-12 items-center justify-center bg-primary font-semibold text-[#00101f]" href="#contact" onClick={() => setOpen(false)}>Начать с аудита</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
