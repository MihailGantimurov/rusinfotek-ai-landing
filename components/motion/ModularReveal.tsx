'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type ModularRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'horizontal' | 'vertical';
};

export function ModularReveal({
  children,
  className = '',
  delay = 0,
  direction = 'vertical',
}: ModularRevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = direction === 'horizontal' ? { x: 28, y: 0 } : { x: 0, y: 28 };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.66, delay, ease: [0.22, 0.72, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MaskedLine({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={reduceMotion ? false : { y: '104%' }}
        animate={reduceMotion ? undefined : { y: 0 }}
        transition={{ duration: 0.72, delay, ease: [0.22, 0.72, 0.24, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
