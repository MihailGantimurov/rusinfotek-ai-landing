'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function SignalBars({ values, delay = 0 }: { values: number[]; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="flex h-12 items-end gap-1.5">
      {values.map((value, index) => (
        <motion.span
          className="min-w-1 flex-1 bg-primary/55 shadow-[0_0_8px_rgba(0,255,232,.08)]"
          initial={reduceMotion ? false : { height: '12%', opacity: .18 }}
          whileInView={reduceMotion ? undefined : { height: `${value}%`, opacity: .8 }}
          viewport={{ once: true }}
          transition={{ duration: .62, delay: delay + index * .055, ease: [0.22, 0.72, 0.24, 1] }}
          key={`${value}-${index}`}
        />
      ))}
    </div>
  );
}
