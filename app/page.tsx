'use client';

import { FormEvent, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
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
  Sparkles,
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
  },
  {
    number: '02',
    icon: Route,
    title: 'Логистика',
    description: 'От заявки и расчёта ставки до мониторинга перевозки и сквозной рентабельности.',
    modules: ['AI-диспетчер', 'Расчёт маршрутов', 'Мониторинг 24/7'],
    price: 'от 300 000 ₽',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Производство',
    description: 'Проектные расчёты, контроль качества и компьютерное зрение под контур предприятия.',
    modules: ['СМК', 'Контроль качества', 'Расчёты в 20× быстрее'],
    price: 'по запросу',
  },
  {
    number: '04',
    icon: FileStack,
    title: 'Документооборот',
    description: 'Генерация, проверка, согласование и архивирование документов без ручного переноса данных.',
    modules: ['Генерация по шаблонам', 'Проверка рисков', 'Интеграция с ЭДО'],
    price: 'от 300 000 ₽',
  },
];

const caseStudies = [
  {
    eyebrow: 'Логистика · AI-диспетчер',
    metric: '3×',
    title: 'быстрее обрабатываются заявки',
    detail: 'Ручное распределение исключено, потери заявок снижены до 0%.',
    duration: '2 недели',
  },
  {
    eyebrow: 'Продажи · AI-прозвон',
    metric: '30+',
    title: 'лидов за первые 3 дня',
    detail: 'Первая сделка через неделю. Цена квалифицированного лида — менее 500 ₽.',
    duration: '3 недели',
  },
  {
    eyebrow: 'Контроль качества · Продажи',
    metric: '+15–20%',
    title: 'к конверсии в сделку',
    detail: 'ИИ анализирует 100% звонков и переписок и даёт персональные рекомендации.',
    duration: '2 недели',
  },
];

const security = [
  {
    icon: ShieldCheck,
    title: 'Работа строго по 152-ФЗ',
    text: 'Контур и регламенты информационной безопасности проектируются вместе с решением.',
  },
  {
    icon: ServerCog,
    title: 'На серверах клиента',
    text: 'Данные и ключевая инфраструктура остаются внутри периметра вашей компании.',
  },
  {
    icon: GitBranch,
    title: 'Интеграция с 1С и Bitrix',
    text: 'Не отдельный чат-бот, а единая система, встроенная в привычный рабочий контур.',
  },
];

const process = [
  { number: '01', title: 'Аудит', text: 'Находим процесс с максимальным эффектом и фиксируем метрику результата.' },
  { number: '02', title: 'Архитектура', text: 'Проектируем модуль, интеграции, роли и безопасный контур данных.' },
  { number: '03', title: 'Запуск', text: 'Внедряем параллельно текущей работе. Команда не останавливается.' },
  { number: '04', title: 'Расширение', text: 'Добавляем модули на уже созданную основу — быстрее и выгоднее.' },
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

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="text-xl font-black tracking-[-0.08em] text-primary">TR</span>
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

        <nav className="hidden items-center gap-8 text-sm text-white/62 md:flex" aria-label="Основная навигация">
          {links.map(([label, href]) => (
            <a className="transition-colors hover:text-primary" href={href} key={href}>{label}</a>
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
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[610px] lg:mx-0 lg:justify-self-end"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.34, ease: [0.22, 0.72, 0.24, 1] }}
    >
      <div className="absolute -inset-8 bg-primary/[.035] blur-3xl" />
      <div className="relative border border-primary/18 bg-[#001a38]/78 p-3 backdrop-blur-xl sm:p-5">
        <div className="mb-4 flex items-center justify-between border-b border-white/8 pb-4">
          <div className="flex items-center gap-2">
            <span className="size-2 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[.15em] text-white/50">Process orchestration</span>
          </div>
          <span className="font-mono text-[10px] text-primary">LIVE · 24/7</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { icon: Zap, label: 'Входящие', value: '218', note: '+32 сегодня' },
            { icon: Layers3, label: 'В обработке', value: '06', note: 'AI-агент' },
            { icon: Database, label: 'В CRM', value: '100%', note: 'без потерь' },
          ].map(({ icon: Icon, label, value, note }) => (
            <motion.div className="border border-white/8 bg-white/[.025] p-4" key={label} whileHover={{ borderColor: 'rgba(0,255,232,.35)', y: -3 }}>
              <Icon className="mb-7 size-4 text-primary" strokeWidth={1.5} />
              <p className="font-mono text-[10px] uppercase tracking-[.12em] text-white/40">{label}</p>
              <p className="mt-1 text-3xl font-medium tracking-[-.04em] text-white">{value}</p>
              <p className="mt-1 text-xs text-primary/70">{note}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-3 border border-white/8 bg-[#00162f] p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs text-white/60">Сквозной процесс сделки</span>
            <span className="font-mono text-[10px] text-white/30">ID · RIT-0248</span>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {['Заявка', 'Анализ', 'КП', 'Договор', 'Оплата'].map((step, index) => (
              <div key={step}>
                <motion.div
                  className={`h-1 ${index < 4 ? 'bg-primary shadow-[0_0_9px_rgba(0,255,232,.5)]' : 'bg-white/12'}`}
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.85 + index * 0.12, duration: 0.42 }}
                />
                <p className={`mt-2 text-[9px] sm:text-[10px] ${index < 4 ? 'text-white/55' : 'text-white/26'}`}>{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-end gap-1.5" aria-label="График скорости обработки">
            {[42, 58, 48, 74, 62, 88, 72, 96, 84, 100].map((height, index) => (
              <motion.span
                className="flex-1 bg-primary/25 transition-colors hover:bg-primary/60"
                initial={{ height: 0 }}
                animate={{ height: height * 0.55 }}
                transition={{ delay: 0.72 + index * 0.05, duration: 0.55 }}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-5 border border-primary/25 bg-[#00162f] px-4 py-3 backdrop-blur-lg sm:-left-8">
        <p className="font-mono text-[9px] uppercase tracking-[.12em] text-white/35">Среднее время ответа</p>
        <p className="mt-1 text-xl font-medium text-primary">&lt; 12 сек</p>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center border-b border-white/8 pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,232,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,232,.045)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="pointer-events-none absolute left-[58%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-primary/8 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-12 lg:pb-28">
        <motion.div className="max-w-4xl" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11 } } }}>
          <motion.div className="mb-7 inline-flex items-center gap-2.5 border border-primary/20 bg-primary/[.045] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-primary" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
            <span className="size-1.5 animate-pulse bg-primary shadow-[0_0_12px_#00FFE8]" />
            Модульная AI-автоматизация
          </motion.div>

          <motion.h1 className="max-w-5xl text-balance text-[clamp(2.55rem,4.85vw,5rem)] font-semibold leading-[.98] tracking-[-0.06em] text-white" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}>
            Автоматизация полного цикла: <span className="text-primary">от приёма заявки до получения оплаты</span> без участия человека
          </motion.h1>

          <motion.p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/64 sm:text-xl" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}>
            Единственное на рынке модульное AI-решение. Внедрение за 2 недели без остановки работы вашей компании.
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
    </section>
  );
}

function Metrics() {
  const metrics = [
    { value: '12', label: 'подтверждённых кейсов', note: 'в продажах, логистике и операциях' },
    { value: '3×', label: 'быстрее обработка заявок', note: 'по результатам внедрения AI-диспетчера' },
    { value: '<500 ₽', label: 'цена квалифицированного лида', note: 'в кейсе исходящего AI-прозвона' },
  ];

  return (
    <section aria-label="Ключевые результаты" className="border-b border-white/8 bg-[#001a38]">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-3">
        {metrics.map((metric, index) => (
          <Reveal className={`px-5 py-11 sm:px-8 lg:px-12 lg:py-14 ${index < 2 ? 'border-b border-white/8 md:border-b-0 md:border-r' : ''}`} delay={index * 0.08} key={metric.value}>
            <p className="text-[clamp(2.8rem,5vw,5rem)] font-medium leading-none tracking-[-.06em] text-primary">{metric.value}</p>
            <p className="mt-3 text-lg font-medium text-white">{metric.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/42">{metric.note}</p>
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
          {products.map(({ number, icon: Icon, title, description, modules, price }, index) => (
            <motion.article
              className="group relative min-h-[390px] overflow-hidden border-b border-r border-white/10 bg-white/[.018] p-6 transition-colors sm:p-9 lg:p-11"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ backgroundColor: 'rgba(0,255,232,.032)', borderColor: 'rgba(0,255,232,.38)' }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.06 }}
              key={title}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary shadow-[0_0_16px_#00FFE8] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <div className="grid size-11 place-items-center border border-primary/25 text-primary"><Icon className="size-5" strokeWidth={1.4} /></div>
                <span className="font-mono text-[11px] text-white/28">{number}</span>
              </div>
              <h3 className="mt-14 text-3xl font-medium tracking-[-.045em] text-white sm:text-4xl">{title}</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/52">{description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {modules.map((module) => <span className="border border-white/10 px-2.5 py-1.5 text-[11px] text-white/46" key={module}>{module}</span>)}
              </div>
              <div className="mt-9 flex items-center justify-between border-t border-white/8 pt-5">
                <span className="font-mono text-xs uppercase tracking-[.09em] text-primary">{price}</span>
                <a className="flex items-center gap-2 text-sm text-white/56 transition-colors group-hover:text-primary" href="#contact">Обсудить модуль <ArrowRight className="size-4" /></a>
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
            <Reveal className="group flex min-h-[410px] flex-col bg-[#001a38] p-6 transition-colors hover:bg-[#03254a] sm:p-9" delay={index * 0.08} key={item.metric}>
              <p className="font-mono text-[10px] uppercase tracking-[.13em] text-primary/72">{item.eyebrow}</p>
              <div className="mt-16">
                <p className="text-[clamp(3.8rem,7vw,6.6rem)] font-medium leading-none tracking-[-.075em] text-primary">{item.metric}</p>
                <h3 className="mt-4 max-w-sm text-2xl font-medium leading-tight tracking-[-.035em] text-white">{item.title}</h3>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/48">{item.detail}</p>
              <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-5 text-xs text-white/32">
                <span>Срок внедрения</span><span className="text-white/68">{item.duration}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecurityAndProcess() {
  return (
    <>
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <SectionIntro index="03 / Надёжность" title="Enterprise-уровень — без компромиссов" text="Интегрируем автоматизацию в ваш контур. Архитектуру, права доступа и требования к данным проектируем до запуска." />
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
            {security.map(({ icon: Icon, title, text }, index) => (
              <Reveal className="bg-[#002147] p-7 sm:p-9 lg:p-10" delay={index * 0.08} key={title}>
                <Icon className="size-7 text-primary" strokeWidth={1.35} />
                <h3 className="mt-10 text-xl font-medium tracking-[-.03em] text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/48">{text}</p>
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
          </div>

          <div className="border-t border-white/10">
            {process.map((item, index) => (
              <Reveal className="group grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[56px_150px_1fr] sm:items-start sm:py-9" delay={index * 0.06} key={item.number}>
                <span className="font-mono text-xs text-primary">{item.number}</span>
                <h3 className="text-xl font-medium tracking-[-.03em] text-white">{item.title}</h3>
                <p className="max-w-lg text-sm leading-relaxed text-white/48">{item.text}</p>
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

        <Reveal className="border border-primary/18 bg-[#001a38]/72 p-6 backdrop-blur-xl sm:p-9 lg:p-11" delay={0.12}>
          {!sent ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-8 flex items-center justify-between border-b border-white/8 pb-5">
                <div>
                  <p className="text-lg font-medium text-white">Запросить аудит</p>
                  <p className="mt-1 text-xs text-white/38">Ответим в течение рабочего дня</p>
                </div>
                <Sparkles className="size-5 text-primary" strokeWidth={1.5} />
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
                Отправить заявку <ArrowUpRight className="ml-1 size-4" />
              </Button>
              <p className="mt-4 text-[11px] leading-relaxed text-white/28">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
            </form>
          ) : (
            <motion.div className="flex min-h-[380px] flex-col items-center justify-center text-center" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }}>
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
        <p className="font-mono text-[10px] uppercase tracking-[.12em] text-white/24">© 2026 РусИнфоТек</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
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
