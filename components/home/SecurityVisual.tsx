'use client';

import type { ComponentType } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type SecurityVisualProps = {
  index: number;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

export function SecurityVisual({ index, Icon }: SecurityVisualProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="relative h-40 overflow-hidden border-b border-white/8 bg-[#001a38]/55">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,232,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,232,.025)_1px,transparent_1px)] bg-[size:24px_24px]" />
      {index === 0 && (
        <div className="absolute inset-0 grid place-items-center">
          <motion.div className="absolute size-24 border border-primary/18" animate={reduceMotion ? undefined : { rotate: [0, 90] }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} />
          <div className="absolute size-16 border border-primary/32" />
          <div className="relative grid size-11 place-items-center bg-primary/[.06] text-primary"><Icon className="size-5" strokeWidth={1.35} /></div>
          <span className="absolute bottom-3 right-4 font-mono text-[8px] uppercase tracking-[.14em] text-primary/55">verified</span>
        </div>
      )}
      {index === 1 && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="absolute left-[14%] top-[25%] size-2 border border-primary/45 bg-[#001a38]" />
          <span className="absolute bottom-[24%] right-[14%] size-2 border border-primary/45 bg-[#001a38]" />
          <span className="absolute left-[14%] top-[calc(25%+4px)] h-px w-[38%] origin-left rotate-[19deg] bg-primary/20" />
          <span className="absolute bottom-[calc(24%+4px)] right-[14%] h-px w-[38%] origin-right rotate-[19deg] bg-primary/20" />
          <motion.div className="relative grid size-14 place-items-center border border-primary/35 bg-[#002147] text-primary" animate={reduceMotion ? undefined : { boxShadow: ['0 0 0 rgba(0,255,232,0)', '0 0 26px rgba(0,255,232,.16)', '0 0 0 rgba(0,255,232,0)'] }} transition={{ duration: 3, repeat: Infinity }}><Icon className="size-6" strokeWidth={1.35} /></motion.div>
          <span className="absolute bottom-3 right-4 font-mono text-[8px] uppercase tracking-[.14em] text-primary/55">private contour</span>
        </div>
      )}
      {index === 2 && (
        <div className="absolute inset-0 flex items-center justify-center gap-2 px-5">
          {['1C', 'AI', 'CRM'].map((label, itemIndex) => (
            <div className="relative flex items-center" key={label}>
              <motion.span className={`grid size-12 place-items-center border font-mono text-[9px] ${itemIndex === 1 ? 'border-primary/50 bg-primary/[.08] text-primary' : 'border-white/14 bg-[#002147] text-white/46'}`} animate={reduceMotion || itemIndex !== 1 ? undefined : { scale: [1, 1.06, 1] }} transition={{ duration: 2.4, repeat: Infinity }}>{label}</motion.span>
              {itemIndex < 2 && <span className="mx-2 h-px w-5 bg-primary/28" />}
            </div>
          ))}
          <span className="absolute bottom-3 right-4 font-mono text-[8px] uppercase tracking-[.14em] text-primary/55">synced</span>
        </div>
      )}
    </div>
  );
}
