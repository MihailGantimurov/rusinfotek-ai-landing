'use client';

import { FormEvent, MouseEvent, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Database,
  FileStack,
  Factory,
  GitBranch,
  Layers3,
  LockKeyhole,
  Menu,
  PackageCheck,
  Route,
  ServerCog,
  ShieldCheck,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

const products = [
  {
    number: '01',
    icon: TrendingUp,
    title: 'Продажи',
    description: 'Приём и квалификация лидов, КП, договоры, контроль сделок и повторные продажи.',
    modules: ['AI-конвейер заявок', 'КП и договоры', 'Лидогенерация'],
    price: 'от 300 000 ₽',
    metric: '+15–20%',
    metricLabel: 'к конверсии',
    signal: [28, 36, 31, 48, 54, 72, 68, 92],
  },
  {
    number: '02',
    icon: Route,
    title: 'Логистика',
    description: 'От заявки и расчёта ставки до мониторинга перевозки и сквозной рентабельности.',
    modules: ['AI-диспетчер', 'Расчёт маршрутов', 'Мониторинг 24/7'],
    price: 'от 300 000 ₽',
    metric: '3×',
    metricLabel: 'быстрее заявки',
    signal: [20, 25, 42, 38, 62, 74, 70, 96],
  },
  {
    number: '03',
    icon: Factory,
    title: 'Производство',
    description: 'Проектные расчёты, контроль качества и компьютерное зрение под контур предприятия.',
    modules: ['СМК', 'Контроль качества', 'Расчёты в 20× быстрее'],
    price: 'по запросу',
    metric: '20×',
    metricLabel: 'быстрее расчёты',
    signal: [18, 34, 28, 50, 46, 66, 80, 94],
  },
  {
    number: '04',
    icon: FileStack,
    title: 'Документооборот',
    description: 'Генерация, проверка, согласование и архивирование документов без ручного переноса данных.',
    modules: ['Генерация по шаблонам', 'Проверка рисков', 'Интеграция с ЭДО'],
    price: 'от 300 000 ₽',
    metric: '24/7',
    metricLabel: 'поток документов',
    signal: [34, 30, 48, 56, 51, 72, 86, 92],
  },
];

const caseStudies = [
  {
    eyebrow: 'Логистика · AI-диспетчер',
    metric: '3×',
    title: 'быстрее обрабатываются заявки',
    detail: 'Ручное распределение исключено, потери заявок снижены до 0%.',
    duration: '2 недели',
    signal: [24, 29, 31, 46, 57, 71, 82, 96],
  },
  {
    eyebrow: 'Продажи · AI-прозвон',
    metric: '30+',
    title: 'лидов за первые 3 дня',
    detail: 'Первая сделка через неделю. Цена квалифицированного лида — менее 500 ₽.',
    duration: '3 недели',
    signal: [18, 26, 22, 40, 52, 64, 78, 91],
  },
  {
    eyebrow: 'Контроль качества · Продажи',
    metric: '+15–20%',
    title: 'к конверсии в сделку',
    detail: 'ИИ анализирует 100% звонков и переписок и даёт персональные рекомендации.',
    duration: '2 недели',
    signal: [38, 42, 47, 45, 61, 72, 77, 88],
  },
];

const security = [
  {
    icon: ShieldCheck,
    title: 'Работа строго по 152-ФЗ',
    text: 'Контур и регламенты информационной безопасности проектируются вместе с решением.',
    code: 'COMPLIANCE / 152-FZ',
  },
  {
    icon: ServerCog,
    title: 'На серверах клиента',
    text: 'Данные и ключевая инфраструктура остаются внутри периметра вашей компании.',
    code: 'ON-PREMISE / PRIVATE',
  },
  {
    icon: GitBranch,
    title: 'Интеграция с 1С и Bitrix',
    text: 'Не отдельный чат-бот, а единая система, встроенная в привычный рабочий контур.',
    code: '1C / BITRIX / API',
  },
];

const process = [
  { number: '01', period: 'День 1', title: 'Аудит', text: 'Находим процесс с максимальным эффектом и фиксируем метрику результата.' },
  { number: '02', period: 'Дни 2–4', title: 'Архитектура', text: 'Проектируем модуль, интеграции, роли и безопасный контур данных.' },
  { number: '03', period: 'Дни 5–14', title: 'Запуск', text: 'Внедряем параллельно текущей работе. Команда не останавливается.' },
  { number: '04', period: 'После запуска', title: 'Расширение', text: 'Добавляем модули на уже созданную основу — быстрее и выгоднее.' },
];

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.68, delay, ease: [0.22, 0.72, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.32,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-primary shadow-[0_0_12px_rgba(0,255,232,.9)]"
      style={{ scaleX }}
    />
  );
}

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative text-xl font-black tracking-[-0.08em] text-primary">TR<span className="absolute -right-1 -top-0.5 size-1 bg-primary shadow-[0_0_8px_#00FFE8]" /></span>
      <span className="text-[15px] font-medium tracking-[-0.02em] text-white">РусИнфоТек</span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Продукты', '#products'],
    ['Кейсы', '#cases'],
    ['Процесс', '#process'],
  ];

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

function SectionIntro({ index, title, text }: { index: string; title: string; text: string }) {
  return (
    <Reveal className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.17em] text-primary">
        <span>{index}</span><span className="h-px w-12 bg-primary/50" />
      </div>
      <h2 className="text-balance text-[clamp(2.15rem,4vw,4.4rem)] font-semibold leading-[1.02] tracking-[-.055em] text-white">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/58 sm:text-lg">{text}</p>
    </Reveal>
  );
}

function ProcessDashboard() {
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

function Hero() {
  const reduceMotion = useReducedMotion();
  const tickerItems = ['AI-диспетчер', 'Квалификация лидов', 'КП и договоры', '1С / CRM / ЭДО', 'Контроль оплаты', 'Аналитика 24/7'];
  const lineVariants = {
    hidden: { y: '115%', opacity: 0, filter: 'blur(12px)' },
    show: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: .78, ease: [0.2, 0.74, 0.22, 1] as const },
    },
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center border-b border-white/8 pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,232,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,232,.045)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="pointer-events-none absolute left-[58%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-primary/8 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-12 lg:pb-28">
        <motion.div className="max-w-4xl" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11 } } }}>
          <motion.div className="mb-7 inline-flex items-stretch border border-primary/20 bg-primary/[.035] font-mono text-[10px] uppercase tracking-[0.14em]" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
            <span className="flex items-center gap-2.5 border-r border-primary/20 px-3 py-2 text-primary">
              <span className="size-1.5 animate-pulse bg-primary shadow-[0_0_12px_#00FFE8]" />
              RIT / AI Process System
            </span>
            <span className="flex items-center px-3 py-2 text-white/42">online</span>
          </motion.div>

          <motion.h1
            aria-label="Автоматизация полного цикла: от приёма заявки до получения оплаты без участия человека"
            className="max-w-5xl text-[clamp(3.2rem,5.25vw,5.8rem)] font-semibold leading-[.86] tracking-[-0.07em] text-white"
            variants={{ hidden: {}, show: { transition: { staggerChildren: .095 } } }}
          >
            <span className="block overflow-hidden pb-[.12em]"><motion.span className="block" variants={lineVariants}>От заявки</motion.span></span>
            <span className="block overflow-hidden pb-[.12em]"><motion.span className="block" variants={lineVariants}><span className="text-white/28">до</span> <span className="text-primary [text-shadow:0_0_38px_rgba(0,255,232,.14)]">оплаты.</span></motion.span></span>
            <span className="mt-3 block overflow-hidden pb-[.1em] text-[clamp(1.65rem,2.5vw,2.8rem)] font-medium leading-none tracking-[-0.045em] text-white/58">
              <motion.span className="flex items-center gap-3" variants={lineVariants}>
                Без ручной рутины
                <motion.span aria-hidden="true" className="mt-1 inline-block size-[.32em] bg-primary shadow-[0_0_16px_#00FFE8]" animate={reduceMotion ? undefined : { opacity: [1, .18, 1] }} transition={{ duration: 1.15, repeat: Infinity }} />
              </motion.span>
            </span>
          </motion.h1>

          <motion.div className="mt-7 grid grid-cols-[auto_1fr_auto] items-center gap-3 font-mono text-[9px] uppercase tracking-[.13em]" variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
            <span className="text-white/44">01 · Заявка</span>
            <span className="relative h-px overflow-visible bg-white/14">
              <motion.span
                aria-hidden="true"
                className="absolute -top-[3px] size-[7px] bg-primary shadow-[0_0_16px_#00FFE8]"
                animate={reduceMotion ? { left: '96%' } : { left: ['0%', '96%'] }}
                transition={{ duration: 3.6, repeat: Infinity, repeatDelay: .6, ease: 'easeInOut' }}
              />
            </span>
            <span className="text-primary">05 · Оплата</span>
          </motion.div>

          <motion.p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/64 sm:text-xl" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}>
            Модульные AI-агенты ведут весь процесс сами. Внедрение за 2 недели — без остановки работы вашей компании.
          </motion.p>

          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}>
            <a className="group inline-flex h-13 items-center justify-center gap-2 bg-primary px-6 text-[15px] font-semibold text-[#00101f] transition-all hover:shadow-[0_0_34px_rgba(0,255,232,.3)]" href="#contact">
              Начать с аудита
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a className="inline-flex h-13 items-center justify-center border border-white/18 px-6 text-[15px] font-medium text-white transition-colors hover:border-primary/50 hover:text-primary" href="#cases">Смотреть кейсы</a>
          </motion.div>

          <motion.div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/48" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
            {['Сервера клиента', '152-ФЗ', 'Интеграция с 1С'].map((item) => (
              <span className="flex items-center gap-2" key={item}><Check className="size-3.5 text-primary" />{item}</span>
            ))}
          </motion.div>
        </motion.div>

        <ProcessDashboard />
      </div>
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/8 bg-[#001a38]/76 py-3 backdrop-blur-xl">
        <motion.div
          aria-hidden="true"
          className="flex w-max items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 1].map((loop) => tickerItems.map((item) => (
            <div className="flex items-center" key={`${loop}-${item}`}>
              <span className="px-6 font-mono text-[10px] uppercase tracking-[.14em] text-white/38 sm:px-8">{item}</span>
              <span className="size-1 bg-primary shadow-[0_0_8px_#00FFE8]" />
            </div>
          )))}
        </motion.div>
      </div>
    </section>
  );
}

function SignalBars({ values, delay = 0 }: { values: number[]; delay?: number }) {
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

function ProductTelemetry({ metric, metricLabel, signal, number }: { metric: string; metricLabel: string; signal: number[]; number: string }) {
  return (
    <div aria-hidden="true" className="relative overflow-hidden border border-white/9 bg-[#001a38]/74 p-4 transition-colors group-hover:border-primary/25">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,232,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,232,.025)_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="relative flex items-center justify-between font-mono text-[8px] uppercase tracking-[.13em] text-white/28">
        <span>Module / {number}</span>
        <span className="flex items-center gap-1.5 text-primary/72"><span className="size-1 animate-pulse bg-primary" />live</span>
      </div>
      <div className="relative mt-8">
        <p className="text-3xl font-medium tracking-[-.055em] text-primary">{metric}</p>
        <p className="mt-1 text-[10px] text-white/42">{metricLabel}</p>
      </div>
      <div className="relative mt-7">
        <SignalBars values={signal} />
      </div>
      <div className="relative mt-3 flex items-center justify-between font-mono text-[7px] uppercase tracking-[.12em] text-white/22">
        <span>input</span><span>AI flow</span><span>result</span>
      </div>
    </div>
  );
}

function SecurityVisual({ index, Icon }: { index: number; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }) {
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

function Metrics() {
  const metrics = [
    { value: '12', label: 'подтверждённых кейсов', note: 'в продажах, логистике и операциях', signal: [28, 34, 42, 46, 58, 67, 81, 94] },
    { value: '3×', label: 'быстрее обработка заявок', note: 'по результатам внедрения AI-диспетчера', signal: [22, 27, 36, 44, 62, 73, 84, 96] },
    { value: '<500 ₽', label: 'цена квалифицированного лида', note: 'в кейсе исходящего AI-прозвона', signal: [87, 74, 69, 58, 50, 43, 35, 28] },
  ];

  return (
    <section id="metrics" aria-label="Ключевые результаты" className="border-b border-white/8 bg-[#001a38]">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-3">
        {metrics.map((metric, index) => (
          <Reveal className={`group relative overflow-hidden px-5 py-11 transition-colors hover:bg-primary/[.025] sm:px-8 lg:px-12 lg:py-14 ${index < 2 ? 'border-b border-white/8 md:border-b-0 md:border-r' : ''}`} delay={index * 0.08} key={metric.value}>
            <span className="absolute right-5 top-5 font-mono text-[9px] tracking-[.15em] text-white/18">0{index + 1} / SIGNAL</span>
            <div className="grid h-full grid-cols-[1fr_86px] gap-7">
              <div className="self-start">
                <p className="text-[clamp(2.8rem,5vw,5rem)] font-medium leading-none tracking-[-.06em] text-primary">{metric.value}</p>
                <p className="mt-3 text-lg font-medium text-white">{metric.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/42">{metric.note}</p>
              </div>
              <div className="self-end opacity-45 transition-opacity duration-500 group-hover:opacity-100"><SignalBars values={metric.signal} delay={index * .08} /></div>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary shadow-[0_0_14px_#00FFE8] transition-transform duration-500 group-hover:scale-x-100" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 bg-primary/[.035] blur-[120px]" />
      <div className="relative mx-auto max-w-[1440px]">
        <SectionIntro index="01 / Продукты" title="Модульная архитектура (Land-and-Expand)" text="Внедряйте то, что нужно сейчас. Каждый модуль даёт измеримый результат и становится основой для следующего." />

        <div className="mt-14 grid border-l border-t border-white/10 lg:grid-cols-2">
          {products.map(({ number, icon: Icon, title, description, modules, price, metric, metricLabel, signal }, index) => (
            <motion.article
              className="group relative overflow-hidden border-b border-r border-white/10 bg-white/[.018] p-6 transition-colors hover:border-primary/40 hover:bg-primary/[.032] sm:p-8 lg:p-9 xl:p-10"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.06 }}
              key={title}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary shadow-[0_0_16px_#00FFE8] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="grid gap-8 sm:grid-cols-[1fr_180px] sm:items-stretch">
                <div className="flex min-w-0 flex-col">
                  <div className="flex items-start justify-between sm:justify-start">
                    <div className="grid size-11 place-items-center border border-primary/25 text-primary transition-colors group-hover:bg-primary/[.07]"><Icon className="size-5" strokeWidth={1.4} /></div>
                    <span className="font-mono text-[11px] text-white/28 sm:hidden">{number}</span>
                  </div>
                  <h3 className="mt-10 text-3xl font-medium tracking-[-.045em] text-white sm:text-4xl">{title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/52 sm:text-[15px]">{description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {modules.map((module) => <span className="border border-white/10 px-2.5 py-1.5 text-[10px] text-white/46 transition-colors group-hover:border-primary/18" key={module}>{module}</span>)}
                  </div>
                </div>
                <ProductTelemetry metric={metric} metricLabel={metricLabel} number={number} signal={signal} />
              </div>
              <div className="mt-9 flex items-center justify-between border-t border-white/8 pt-5">
                <span className="font-mono text-xs uppercase tracking-[.09em] text-primary">{price}</span>
                <a className="flex items-center gap-2 text-sm text-white/56 transition-colors group-hover:text-primary" href="#contact">Обсудить модуль <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section id="cases" className="border-y border-white/8 bg-[#001a38] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro index="02 / Кейсы" title="Не обещания. Результаты." text="Показываем эффект на реальных процессах. Названия части заказчиков закрыты NDA — цифры и механика внедрений сохранены." />
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-white/35"><LockKeyhole className="size-3.5 text-primary" />Данные NDA защищены</div>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal className="group relative flex min-h-[480px] flex-col overflow-hidden bg-[#001a38] p-6 transition-colors hover:bg-[#03254a] sm:p-9" delay={index * 0.08} key={item.metric}>
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[.13em] text-primary/72">{item.eyebrow}</p>
                <span className="font-mono text-[9px] text-white/18">CASE / 0{index + 1}</span>
              </div>
              <div className="relative mt-14">
                <span className="pointer-events-none absolute -left-3 -top-12 text-[9rem] font-semibold leading-none tracking-[-.08em] text-white/[.018]">0{index + 1}</span>
                <p className="relative text-[clamp(3.8rem,7vw,6.6rem)] font-medium leading-none tracking-[-.075em] text-primary [text-shadow:0_0_32px_rgba(0,255,232,.1)]">{item.metric}</p>
                <h3 className="mt-4 max-w-sm text-2xl font-medium leading-tight tracking-[-.035em] text-white">{item.title}</h3>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/48">{item.detail}</p>
              <div className="mt-7 border border-white/8 bg-[#00162f]/52 px-4 pb-3 pt-4">
                <div className="mb-3 flex items-center justify-between font-mono text-[8px] uppercase tracking-[.13em] text-white/25"><span>Effect signal</span><span className="text-primary/62">measured</span></div>
                <SignalBars values={item.signal} delay={index * .08} />
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-5 text-xs text-white/32">
                <span>Срок внедрения</span><span className="text-white/68">{item.duration}</span>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary shadow-[0_0_18px_#00FFE8] transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecurityAndProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <SectionIntro index="03 / Надёжность" title="Enterprise-уровень — без компромиссов" text="Интегрируем автоматизацию в ваш контур. Архитектуру, права доступа и требования к данным проектируем до запуска." />
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
            {security.map(({ icon: Icon, title, text, code }, index) => (
              <Reveal className="group bg-[#002147] transition-colors hover:bg-[#03254a]" delay={index * 0.08} key={title}>
                <SecurityVisual Icon={Icon} index={index} />
                <div className="p-7 sm:p-9 lg:p-10">
                  <div className="flex items-center justify-between"><Icon className="size-6 text-primary" strokeWidth={1.35} /><span className="font-mono text-[8px] uppercase tracking-[.13em] text-white/22">{code}</span></div>
                  <h3 className="mt-8 text-xl font-medium tracking-[-.03em] text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/48">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-white/8 bg-[#001a38] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <SectionIntro index="04 / Процесс" title="От аудита до запуска — 2 недели" text="Начинаем с одного процесса, доказываем эффект на данных и расширяем систему без повторной перестройки." />
            <Reveal className="mt-10 border-l border-primary/40 pl-5">
              <p className="text-sm leading-relaxed text-white/46">Работа идёт параллельно текущим операциям. Сотрудники продолжают пользоваться привычными системами.</p>
            </Reveal>
            <Reveal className="relative mt-10 overflow-hidden border border-primary/18 bg-primary/[.035] p-6" delay={.1}>
              <div className="absolute -right-10 -top-12 size-40 rounded-full border border-primary/10" />
              <div className="absolute -right-4 -top-7 size-24 rounded-full border border-primary/18" />
              <div className="relative flex items-end justify-between gap-5">
                <div><p className="text-6xl font-medium leading-none tracking-[-.07em] text-primary">14</p><p className="mt-2 font-mono text-[9px] uppercase tracking-[.14em] text-white/35">дней до запуска</p></div>
                <div className="pb-1 text-right"><p className="text-2xl font-medium text-white">0</p><p className="mt-1 text-[10px] text-white/34">остановок бизнеса</p></div>
              </div>
            </Reveal>
          </div>

          <div className="relative border-t border-white/10">
            <motion.span aria-hidden="true" className="absolute -left-px top-0 z-10 h-20 w-px bg-primary shadow-[0_0_14px_#00FFE8]" animate={reduceMotion ? undefined : { top: ['0%', 'calc(100% - 80px)'] }} transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
            {process.map((item, index) => (
              <Reveal className="group relative grid gap-4 border-b border-white/10 px-0 py-7 transition-colors hover:bg-primary/[.025] sm:grid-cols-[64px_145px_1fr_auto] sm:items-start sm:px-5 sm:py-9" delay={index * 0.06} key={item.number}>
                <span className="font-mono text-xs text-primary">{item.number}</span>
                <div><h3 className="text-xl font-medium tracking-[-.03em] text-white">{item.title}</h3><span className="mt-2 inline-block font-mono text-[8px] uppercase tracking-[.12em] text-primary/52">{item.period}</span></div>
                <p className="max-w-lg text-sm leading-relaxed text-white/48">{item.text}</p>
                <ArrowRight className="hidden size-4 text-white/18 transition-all group-hover:translate-x-1 group-hover:text-primary sm:block" />
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary/55 transition-transform duration-500 group-hover:scale-x-100" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[45rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[.055] blur-[145px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(0,255,232,.07),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.95fr_1.05fr] lg:items-end lg:gap-20">
        <div>
          <Reveal>
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.17em] text-primary"><span>05 / Начать</span><span className="h-px w-12 bg-primary/50" /></div>
            <h2 className="max-w-3xl text-balance text-[clamp(2.8rem,5.5vw,6.2rem)] font-semibold leading-[.94] tracking-[-.065em] text-white">Готовы передать рутину ИИ?</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/52 sm:text-lg">Покажем, какой процесс стоит автоматизировать первым и какой эффект можно измерить уже после запуска.</p>
          </Reveal>
          <Reveal className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/42" delay={0.08}>
            {['Аудит процессов', 'Карта интеграций', 'Оценка эффекта'].map((item) => <span className="flex items-center gap-2" key={item}><CheckCircle2 className="size-3.5 text-primary" />{item}</span>)}
          </Reveal>
        </div>

        <Reveal className="relative overflow-hidden border border-primary/18 bg-[#001a38]/72 p-6 backdrop-blur-xl sm:p-9 lg:p-11" delay={0.12}>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,232,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,232,.018)_1px,transparent_1px)] bg-[size:26px_26px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary/70 shadow-[0_0_18px_rgba(0,255,232,.45)]" />
          {!sent ? (
            <form className="relative" onSubmit={handleSubmit}>
              <div className="mb-8 flex items-center justify-between border-b border-white/8 pb-5">
                <div>
                  <p className="text-lg font-medium text-white">Запросить аудит</p>
                  <p className="mt-1 text-xs text-white/38">Ответим в течение рабочего дня</p>
                </div>
                <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.13em] text-primary"><span className="size-1 animate-pulse bg-primary shadow-[0_0_8px_#00FFE8]" />secure form</div>
              </div>
              <FieldGroup className="gap-6">
                <Field>
                  <FieldLabel className="font-mono text-[10px] uppercase tracking-[.13em] text-white/42" htmlFor="name">Ваше имя</FieldLabel>
                  <Input className="h-13 rounded-none border-0 border-b border-white/14 bg-transparent px-0 text-base text-white placeholder:text-white/24 focus-visible:border-primary focus-visible:ring-0" id="name" name="name" placeholder="Как к вам обращаться" required />
                </Field>
                <Field>
                  <FieldLabel className="font-mono text-[10px] uppercase tracking-[.13em] text-white/42" htmlFor="contact-field">Телефон или Telegram</FieldLabel>
                  <Input className="h-13 rounded-none border-0 border-b border-white/14 bg-transparent px-0 text-base text-white placeholder:text-white/24 focus-visible:border-primary focus-visible:ring-0" id="contact-field" name="contact" placeholder="+7 999 000-00-00 или @username" required />
                </Field>
              </FieldGroup>
              <Button className="mt-8 h-13 w-full rounded-none bg-primary text-[15px] font-semibold text-[#00101f] hover:bg-primary hover:shadow-[0_0_32px_rgba(0,255,232,.25)]" type="submit">
                Получить карту автоматизации <ArrowUpRight className="ml-1 size-4" />
              </Button>
              <div className="mt-4 flex items-start justify-between gap-4 text-[10px] leading-relaxed text-white/28"><p>Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p><span className="shrink-0 font-mono text-primary/48">SSL / 152-ФЗ</span></div>
            </form>
          ) : (
            <motion.div className="relative flex min-h-[380px] flex-col items-center justify-center text-center" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="grid size-14 place-items-center border border-primary/35 bg-primary/5"><PackageCheck className="size-6 text-primary" /></div>
              <h3 className="mt-7 text-2xl font-medium tracking-[-.035em] text-white">Заявка принята</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/46">Свяжемся с вами в течение рабочего дня и подготовим вопросы для первичного аудита.</p>
              <button className="mt-7 text-sm text-primary underline decoration-primary/30 underline-offset-4" onClick={() => setSent(false)} type="button">Отправить другой контакт</button>
            </motion.div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#00162f] px-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top"><Logo /></a>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/34">
          <a className="transition-colors hover:text-primary" href="#products">Продукты</a>
          <a className="transition-colors hover:text-primary" href="#cases">Кейсы</a>
          <a className="transition-colors hover:text-primary" href="#process">Процесс</a>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[.12em] text-white/24">© 2026 РусИнфоТек · AI systems online</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] opacity-[.035] mix-blend-screen [background-image:radial-gradient(circle_at_center,white_.55px,transparent_.75px)] [background-size:5px_5px]" />
      <ScrollProgress />
      <Header />
      <Hero />
      <Metrics />
      <Products />
      <Cases />
      <SecurityAndProcess />
      <Contact />
      <Footer />
    </main>
  );
}
