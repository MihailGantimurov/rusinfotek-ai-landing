'use client';

import {
  Boxes,
  FileCheck2,
  Factory,
  Network,
  Route,
  TrendingUp,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const nodes = [
  {
    icon: TrendingUp,
    label: 'Продажи',
    meta: 'Лиды · CRM',
    position: 'left-[6%] top-[16%]',
    delay: 0,
  },
  {
    icon: Route,
    label: 'Логистика',
    meta: 'Заявки · Маршруты',
    position: 'right-[6%] top-[16%]',
    delay: 0.7,
  },
  {
    icon: Factory,
    label: 'Производство',
    meta: 'Расчёты · Контроль',
    position:
      'bottom-[7.75rem] left-[6%] sm:bottom-[8.25rem] lg:bottom-[8.5rem]',
    delay: 1.4,
  },
  {
    icon: FileCheck2,
    label: 'Документы',
    meta: 'Создание · Проверка',
    position:
      'bottom-[7.75rem] right-[6%] sm:bottom-[8.25rem] lg:bottom-[8.5rem]',
    delay: 2.1,
  },
];

export function HeroSystemMap() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-label="Схема единого AI-контура РусИнфоТек"
      className="relative min-h-[480px] overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,rgba(17,47,82,.88),rgba(5,19,36,.94))] shadow-[0_44px_110px_rgba(0,7,24,.38)] sm:min-h-[560px] lg:min-h-[620px]"
      initial={reduceMotion ? false : { opacity: 0, scale: 1.025, y: 22 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.05, delay: 0.18, ease: [0.22, 0.72, 0.24, 1] }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_94%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[47%] size-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8ea3f4]/12 bg-[#5871cc]/8 blur-[1px]"
      />
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.2, 0.62, 0.2], scale: [0.86, 1.08, 0.86] }
        }
        className="absolute left-1/2 top-[47%] size-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#536fd8]/18 blur-3xl"
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-7 sm:top-7">
        <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.14em] text-white/48 sm:text-[10px]">
          <Network className="size-3.5 text-[#9eb1ff]" />
          RIT / OPERATING SYSTEM
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-[9px] font-semibold tracking-[0.09em] text-white/68 backdrop-blur-md">
          <motion.span
            aria-hidden="true"
            animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
            className="size-1.5 rounded-full bg-[#00e8d1] shadow-[0_0_12px_rgba(0,232,209,.85)]"
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          КОНТУР АКТИВЕН
        </span>
      </div>

      {nodes.map((node) => {
        const Icon = node.icon;
        return (
          <motion.div
            className={`absolute z-10 w-[40%] rounded-[16px] border border-white/12 bg-[#0d2948]/78 p-3.5 backdrop-blur-xl sm:w-[37%] sm:p-4 ${node.position}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.44 + node.delay * 0.1 }}
            key={node.label}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-[10px] border border-[#8fa7ff]/18 bg-[#7c91e5]/10 text-[#aebeff]">
                <Icon className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold text-white sm:text-[14px]">
                  {node.label}
                </p>
                <p className="mt-0.5 truncate text-[9px] text-white/38 sm:text-[10px]">
                  {node.meta}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}

      <motion.div
        className="absolute left-1/2 top-[47%] z-20 flex size-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#9db0ff]/24 bg-[radial-gradient(circle_at_34%_28%,rgba(114,142,232,.34),rgba(9,32,58,.96)_66%)] text-center shadow-[0_0_80px_rgba(86,111,208,.28)] sm:size-40"
        animate={reduceMotion ? undefined : { rotate: [0, 1.4, 0, -1.4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="grid size-10 place-items-center rounded-full border border-white/13 bg-white/[0.07] text-[#aebeff] sm:size-12">
          <Boxes className="size-5 sm:size-6" />
        </span>
        <strong className="mt-3 text-[13px] font-semibold tracking-[0.02em] text-white sm:text-[15px]">
          ЕДИНЫЙ AI-КОНТУР
        </strong>
      </motion.div>

      <div className="absolute inset-x-5 bottom-5 z-30 flex min-h-[72px] items-center justify-between rounded-[15px] border border-white/10 bg-[#07182b]/88 px-4 py-3 backdrop-blur-xl sm:inset-x-7 sm:px-5">
        <div>
          <p className="font-mono text-[8px] tracking-[0.13em] text-[#9fb2ff] sm:text-[9px]">
            СИСТЕМНЫЙ ЭФФЕКТ
          </p>
          <p className="mt-1 text-[11px] font-medium text-white/74 sm:text-[13px]">
            Данные превращаются в действия без разрывов
          </p>
        </div>
        <div className="hidden items-end gap-1 sm:flex" aria-hidden="true">
          {[12, 18, 25, 20, 32, 39, 48].map((height, index) => (
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : { height: [height, height * 0.72, height] }
              }
              className="w-1 rounded-full bg-linear-to-t from-[#4a62bc] to-[#32d8c9]"
              key={height}
              style={{ height }}
              transition={{
                duration: 2.1,
                delay: index * 0.12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
