'use client';

import type { MouseEvent } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  CheckCircle2,
  Database,
  FileStack,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export function ProcessDashboard() {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(
    useTransform(pointerY, [0, 100], [4.5, -4.5]),
    { stiffness: 180, damping: 26 },
  );
  const rotateY = useSpring(
    useTransform(pointerX, [0, 100], [-5.5, 5.5]),
    { stiffness: 180, damping: 26 },
  );
  const glowLeft = useTransform(pointerX, (value) => `${value}%`);
  const glowTop = useTransform(pointerY, (value) => `${value}%`);

  const handlePointer = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 100);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  const resetPointer = () => {
    pointerX.set(50);
    pointerY.set(50);
  };

  const stages = [
    { label: 'Заявка', icon: Zap },
    { label: 'Анализ', icon: Database },
    { label: 'КП', icon: FileStack },
    { label: 'Договор', icon: CheckCircle2 },
    { label: 'Оплата', icon: PackageCheck },
  ];

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[660px] [perspective:1100px] lg:mx-0 lg:justify-self-end"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.34, ease: [0.22, 0.72, 0.24, 1] }}
      onMouseMove={handlePointer}
      onMouseLeave={resetPointer}
    >
      <div className="absolute -inset-10 bg-primary/[.05] blur-[70px]" />
      <motion.div
        className="relative overflow-hidden border border-primary/22 bg-[#001a38]/88 p-3 backdrop-blur-2xl sm:p-5"
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[.08] blur-[58px]"
          style={{ left: glowLeft, top: glowTop }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,232,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,232,.035)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="mb-4 flex items-center justify-between border-b border-white/8 pb-4">
          <div className="flex items-center gap-2">
            <motion.span className="size-2 bg-primary shadow-[0_0_14px_#00FFE8]" animate={{ opacity: [1, .35, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
            <span className="font-mono text-[10px] uppercase tracking-[.15em] text-white/50">Autonomous process map</span>
          </div>
          <span className="font-mono text-[10px] text-primary">AGENT ONLINE · 24/7</span>
        </div>

        <div className="relative grid gap-3 sm:grid-cols-3">
          {[
            { icon: Zap, label: 'События', value: '218', note: '+32 сегодня' },
            { icon: Layers3, label: 'Автодействия', value: '06', note: 'выполняются' },
            { icon: Database, label: 'Синхронизация', value: '100%', note: 'без потерь' },
          ].map(({ icon: Icon, label, value, note }, index) => (
            <motion.div
              className="relative border border-white/9 bg-[#042548]/75 p-4 transition-colors hover:border-primary/45"
              key={label}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{ transform: 'translateZ(22px)' }}
            >
              <motion.div animate={{ rotate: index === 1 ? [0, 180, 360] : 0 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
                <Icon className="mb-7 size-4 text-primary" strokeWidth={1.5} />
              </motion.div>
              <p className="font-mono text-[10px] uppercase tracking-[.12em] text-white/40">{label}</p>
              <p className="mt-1 text-3xl font-medium tracking-[-.04em] text-white">{value}</p>
              <p className="mt-1 text-xs text-primary/70">{note}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-3 border border-white/9 bg-[#00162f]/92 p-4 sm:p-5" style={{ transform: 'translateZ(14px)' }}>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <span className="text-xs text-white/68">Сквозной процесс сделки</span>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[.12em] text-white/28">ИИ проходит маршрут сам</p>
            </div>
            <span className="font-mono text-[10px] text-primary/58">RIT FLOW · 02:18</span>
          </div>

          <div className="relative mt-7 grid grid-cols-5 gap-2">
            <div className="absolute left-[6%] right-[6%] top-[18px] h-px bg-white/14" />
            <motion.div
              aria-hidden="true"
              className="absolute top-[12px] z-20 grid size-3 place-items-center bg-primary shadow-[0_0_22px_#00FFE8]"
              animate={reduceMotion ? { left: '87%' } : { left: ['5%', '25%', '46%', '67%', '87%'], rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', times: [0, .24, .5, .76, 1] }}
            />
            {stages.map(({ label, icon: Icon }, index) => (
              <motion.div className="relative z-10 text-center" key={label} whileHover={{ y: -4 }}>
                <motion.div
                  className="mx-auto grid size-9 place-items-center border border-primary/30 bg-[#00162f] text-white/38"
                  animate={reduceMotion ? undefined : { opacity: [.58, 1, .58], scale: [1, 1.06, 1] }}
                  transition={{ duration: 3.4, delay: index * 1.45, repeat: Infinity, repeatDelay: 3.5 }}
                >
                  <Icon className="size-3.5" strokeWidth={1.4} />
                </motion.div>
                <p className="mt-3 text-[9px] text-white/45 sm:text-[10px]">{label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-white/8 pt-4">
            <div className="flex items-center gap-2 text-[10px] text-white/34"><ShieldCheck className="size-3.5 text-primary" />Все действия журналируются</div>
            <span className="font-mono text-[10px] text-primary">SLA · 99.9%</span>
          </div>
        </div>
      </motion.div>
      <motion.div className="absolute -bottom-5 -left-3 border border-primary/30 bg-[#00162f]/94 px-4 py-3 backdrop-blur-lg sm:-left-8" animate={reduceMotion ? undefined : { y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <p className="font-mono text-[9px] uppercase tracking-[.12em] text-white/35">Среднее время ответа</p>
        <p className="mt-1 text-xl font-medium text-primary">&lt; 12 сек</p>
      </motion.div>
      <p className="mt-8 text-center font-mono text-[9px] uppercase tracking-[.15em] text-white/22">Наведи курсор — система реагирует</p>
    </motion.div>
  );
}
