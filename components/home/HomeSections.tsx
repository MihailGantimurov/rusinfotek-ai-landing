'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  Check,
  Network,
  ServerCog,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

import { BrandButton } from '@/components/shared/BrandButton';
import { MediaFrame } from '@/components/shared/MediaFrame';
import { Reveal } from '@/components/shared/Reveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const integrations = [
  '1С',
  'Bitrix24',
  'amoCRM',
  'Telegram',
  'WhatsApp',
  'MAX',
  'Телефония',
  'Email',
  'ЭДО',
  'WMS / ERP',
  'Внутренние системы клиента',
];

const approachSteps = [
  {
    number: '01',
    title: 'Понимаем реальный процесс',
    text: 'Разбираем, как сегодня движутся заявки, решения, документы и ответственность внутри команды.',
  },
  {
    number: '02',
    title: 'Находим участок автоматизации',
    text: 'Выбираем точку, где AI даст управляемый эффект и не нарушит работающий контур.',
  },
  {
    number: '03',
    title: 'Встраиваем AI-логику',
    text: 'Создаём решение под роли, правила и данные компании — не отдельный инструмент рядом с бизнесом.',
  },
  {
    number: '04',
    title: 'Соединяем инфраструктуру',
    text: 'Интегрируем систему с корпоративными сервисами и существующими маршрутами данных.',
  },
  {
    number: '05',
    title: 'Работаем внутри контура',
    text: 'Новый цифровой слой становится частью привычной операционной среды компании.',
  },
];

const cases = [
  {
    name: 'Technoprint / Merchstore',
    eyebrow: 'AI-экосистема',
    attribution: 'Совместная разработка с Laplace Systems',
    task: 'Объединить продажи, CRM, коммуникации, 1С и сервисные процессы.',
    solution: 'Комплексная AI-экосистема в общей логике работы.',
    results: ['15+ модулей в едином цифровом контуре', 'CRM и 1С работают в общей логике'],
    palette: 'from-[#152553] via-[#55528b] to-[#b0a4ce]',
  },
  {
    name: 'МФЦ РУДН',
    eyebrow: 'AI-консультант',
    attribution: 'Цифровая маршрутизация посетителей',
    task: 'Снизить нагрузку на регистрацию и сделать обслуживание понятнее.',
    solution: 'AI-консультант, база знаний, электронная очередь и аналитика.',
    results: ['Меньше нагрузки на стойку регистрации', 'Быстрее обслуживание посетителей'],
    palette: 'from-[#123a56] via-[#397b88] to-[#a8c7c0]',
  },
  {
    name: 'СДЭК',
    eyebrow: 'WMS / CRM',
    attribution: 'Автоматическая интеграция заказов',
    task: 'Исключить ручной перенос данных при запуске заказа в сборку.',
    solution: 'Проверка, mapping, очередь ошибок и синхронизация статусов.',
    results: ['Быстрее запуск заказа в сборку', 'Меньше ручных ошибок'],
    palette: 'from-[#18343c] via-[#4b686d] to-[#b2b8ad]',
  },
];

const roles = [
  {
    value: 'ceo',
    label: 'Генеральный директор',
    task: 'Повысить управляемость процессов без остановки операционной работы.',
    result: 'Единый цифровой контур, прозрачная ответственность и основа для последовательного масштабирования.',
    directions: ['Все направления', 'Сквозная аналитика', 'Корпоративная интеграция'],
  },
  {
    value: 'commercial',
    label: 'Коммерческий директор',
    task: 'Не терять обращения и ускорить движение сделки от первого контакта до договора.',
    result: 'Автоматизированная обработка лидов, подготовка материалов и контроль клиентских коммуникаций.',
    directions: ['Продажи', 'Документооборот', 'CRM-контур'],
  },
  {
    value: 'operations',
    label: 'Операционный / логистический',
    task: 'Снизить объём ручных операций и сделать статусы процессов видимыми.',
    result: 'Связанный поток заявок, перевозок, производства, документов и исключений.',
    directions: ['Логистика', 'Производство', 'WMS / ERP'],
  },
  {
    value: 'it',
    label: 'IT / информационная безопасность',
    task: 'Внедрить AI с учётом архитектуры, данных и требований корпоративного контура.',
    result: 'Согласованная схема интеграций, контролируемое размещение и требования ИБ в проектировании.',
    directions: ['Интеграции', 'Безопасность', 'Документооборот'],
  },
];

const team = [
  ['Анна', 'Генеральный директор'],
  ['Михаил', 'Директор по развитию'],
  ['Андрей', 'Операционный директор'],
  ['Дмитрий', 'Директор по информационной безопасности'],
  ['Роман', 'Менеджер по работе с ключевыми клиентами'],
  ['Михаил О.', 'AI/ML Разработчик'],
  ['Егор', 'Технический директор'],
];

const articles = [
  {
    category: 'Кейс',
    title: 'Как 15+ модулей объединили продажи, CRM, 1С и сервис в единый AI-контур',
  },
  {
    category: 'Практика',
    title: 'Как автоматизировать обработку лидов, не меняя существующую CRM',
  },
  {
    category: 'Логистика',
    title: 'AI в логистике: путь заявки от входящего сообщения до контроля рентабельности',
  },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-16 bg-[#eef0ee] px-5 pb-14 pt-20 sm:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto grid max-w-[1440px] gap-5 border-y border-[#10233b]/10 py-7 md:grid-cols-[.8fr_1fr_1.35fr] md:items-center">
        <p className="text-[13px] font-semibold tracking-[0.09em] text-[#596fc0]">ОПЫТ, КОТОРЫЙ МОЖНО ПРОВЕРИТЬ</p>
        <p className="text-[17px] font-medium text-[#10233b]">12 реализованных проектов · 4 направления автоматизации</p>
        <p className="text-[15px] leading-relaxed text-[#10233b]/58 md:text-right">Интеграция с существующей корпоративной инфраструктурой</p>
      </div>
    </section>
  );
}

export function Approach() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="approach" className="relative overflow-hidden bg-[#edf0ef] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
      <div aria-hidden="true" className="absolute -right-48 top-24 size-[36rem] rounded-full bg-[#8197d4]/14 blur-[110px]" />
      <div className="relative mx-auto max-w-[1440px]">
        <Reveal className="grid gap-7 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label">КАК МЫ РАБОТАЕМ</p>
            <h2 className="section-title mt-5 max-w-3xl">Встраиваем AI внутрь бизнеса, а не рядом с ним</h2>
          </div>
          <p className="max-w-2xl text-[18px] leading-[1.7] text-[#10233b]/60 lg:justify-self-end">
            Начинаем с живого процесса и проектируем цифровой слой так, чтобы он работал в существующей инфраструктуре, ролях и правилах компании.
          </p>
        </Reveal>

        <div className="relative mt-16 lg:mt-24">
          <div aria-hidden="true" className="absolute left-5 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-linear-to-b from-[#667dd0]/70 via-[#667dd0]/25 to-transparent lg:block" />
          <div className="grid gap-4 lg:gap-0">
            {approachSteps.map((step, index) => (
              <motion.article
                className="group relative grid gap-5 border-t border-[#10233b]/10 py-8 lg:grid-cols-[7rem_.72fr_1.28fr] lg:items-start lg:py-10"
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0.3, y: 30 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.66, delay: index * 0.04, ease: [0.22, 0.72, 0.24, 1] }}
              >
                <span className="relative z-10 grid size-10 place-items-center rounded-full border border-[#6277c5]/30 bg-[#edf0ef] font-mono text-[11px] text-[#526ac1]">
                  {step.number}
                </span>
                <h3 className="text-[clamp(1.55rem,2.2vw,2.2rem)] font-[540] leading-tight tracking-[-0.035em] text-[#10233b]">{step.title}</h3>
                <p className="max-w-2xl text-[16px] leading-[1.75] text-[#10233b]/58 lg:text-[17px]">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <Reveal className="mt-14 overflow-hidden rounded-[28px] bg-[#0b203a] p-7 text-white sm:p-10 lg:mt-20 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <Network className="size-7 text-[#91a7ff]" />
              <h3 className="mt-7 max-w-lg text-[clamp(1.8rem,3vw,3.2rem)] font-[540] leading-[1.08] tracking-[-0.04em]">Интегрируемся с вашей инфраструктурой</h3>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/60">Сохраняем привычные рабочие системы и связываем их общей логикой данных и действий.</p>
            </div>
            <div className="flex flex-wrap content-start gap-2.5 lg:pt-2">
              {integrations.map((integration) => (
                <span className="rounded-[11px] border border-white/12 bg-white/[0.055] px-4 py-3 text-[14px] text-white/74" key={integration}>{integration}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CasesSection() {
  return (
    <section id="cases" className="relative bg-[#f7f7f5] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-label">КЕЙСЫ</p>
            <h2 className="section-title mt-5 max-w-3xl">Три задачи. Три работающих контура.</h2>
          </div>
          <Link className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#17385f]" href="/cases">Все кейсы <ArrowUpRight className="size-4" /></Link>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {cases.map((item, index) => (
            <Reveal delay={index * 0.06} key={item.name}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#10233b]/9 bg-white shadow-[0_24px_70px_rgba(20,35,55,.06)]">
                <MediaFrame className="aspect-[1.25/1] min-h-72 transition-transform duration-700 group-hover:scale-[1.015]" label={`${item.name} · media placeholder`} palette={item.palette} />
                <div className="flex grow flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[12px] font-semibold tracking-[0.09em] text-[#6075c7]">{item.eyebrow}</p>
                      <h3 className="mt-3 text-[1.55rem] font-[560] leading-tight tracking-[-0.035em] text-[#10233b]">{item.name}</h3>
                    </div>
                    <span className="font-mono text-[11px] text-[#10233b]/35">0{index + 1}</span>
                  </div>
                  <p className="mt-2 min-h-10 text-[13px] leading-relaxed text-[#10233b]/48">{item.attribution}</p>
                  <dl className="mt-6 space-y-4 border-t border-[#10233b]/9 pt-5">
                    <div><dt className="text-[12px] font-semibold text-[#10233b]/40">Задача</dt><dd className="mt-1 text-[14px] leading-relaxed text-[#10233b]/70">{item.task}</dd></div>
                    <div><dt className="text-[12px] font-semibold text-[#10233b]/40">Решение</dt><dd className="mt-1 text-[14px] leading-relaxed text-[#10233b]/70">{item.solution}</dd></div>
                  </dl>
                  <ul className="mt-5 space-y-2.5">
                    {item.results.map((result) => <li className="flex gap-2.5 text-[14px] leading-relaxed text-[#10233b]/72" key={result}><Check className="mt-1 size-3.5 shrink-0 text-[#6075c7]" />{result}</li>)}
                  </ul>
                  <Link className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#17385f]" href="/cases">Коротко о проекте <ArrowUpRight className="size-4" /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SecuritySection() {
  const items = [
    [ShieldCheck, 'Требования к данным', 'Учитываем до начала внедрения и фиксируем в архитектуре решения.'],
    [ServerCog, 'Контур клиента', 'Возможна работа внутри инфраструктуры компании без вынесения ключевых данных наружу.'],
    [Building2, 'Проектирование с ИБ', 'Требования информационной безопасности становятся частью проекта, а не финальной проверкой.'],
  ] as const;

  return (
    <section className="bg-[#f7f7f5] px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36 xl:px-16">
      <Reveal className="mx-auto grid max-w-[1440px] gap-12 rounded-[28px] border border-[#10233b]/9 bg-[#eef0ee] p-7 sm:p-10 lg:grid-cols-[.82fr_1.18fr] lg:p-14">
        <div>
          <p className="section-label">БЕЗОПАСНОСТЬ</p>
          <h2 className="mt-5 max-w-xl text-[clamp(2rem,3.5vw,3.8rem)] font-[540] leading-[1.08] tracking-[-0.045em] text-[#10233b]">AI с учётом корпоративных требований</h2>
          <p className="mt-6 max-w-lg text-[16px] leading-[1.75] text-[#10233b]/60">Архитектуру выбираем под инфраструктуру клиента и применимые требования 152-ФЗ.</p>
          <Link className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#17385f]" href="/security">Подробнее о подходе <ArrowUpRight className="size-4" /></Link>
        </div>
        <div className="divide-y divide-[#10233b]/10 border-y border-[#10233b]/10">
          {items.map(([Icon, title, text]) => (
            <article className="grid gap-4 py-6 sm:grid-cols-[3rem_1fr]" key={title}>
              <Icon className="size-6 text-[#6075c7]" />
              <div><h3 className="text-[17px] font-semibold text-[#10233b]">{title}</h3><p className="mt-2 text-[15px] leading-relaxed text-[#10233b]/58">{text}</p></div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function LeadershipSection() {
  return (
    <section className="bg-[#0a1d34] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="section-label section-label-dark">ДЛЯ РУКОВОДИТЕЛЕЙ</p>
          <h2 className="mt-5 max-w-4xl text-[clamp(2.25rem,4.4vw,4.8rem)] font-[540] leading-[1.03] tracking-[-0.05em]">Один проект — разные управленческие задачи</h2>
        </Reveal>
        <Tabs className="mt-12 gap-9 lg:mt-16 lg:grid lg:grid-cols-[.7fr_1.3fr]" defaultValue={roles[0].value} orientation="vertical">
          <TabsList className="grid h-auto w-full gap-0 rounded-none bg-transparent p-0" variant="line">
            {roles.map((role, index) => (
              <TabsTrigger
                className="min-h-15 justify-start rounded-none border-t border-white/12 px-0 py-4 text-left text-[15px] text-white/48 data-active:text-white group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start"
                id={`leadership-tab-${index}`}
                key={role.value}
                onKeyDown={(event) => {
                  let next: number | null = null;
                  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = index + 1;
                  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = index - 1;
                  if (event.key === 'Home') next = 0;
                  if (event.key === 'End') next = roles.length - 1;
                  if (next === null) return;
                  event.preventDefault();
                  const normalized = (next + roles.length) % roles.length;
                  const trigger = document.getElementById(`leadership-tab-${normalized}`) as HTMLButtonElement | null;
                  trigger?.focus();
                  trigger?.click();
                }}
                value={role.value}
              >
                <span className="mr-4 font-mono text-[10px] text-[#91a7ff]">0{index + 1}</span>{role.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="min-h-[390px] rounded-[26px] border border-white/12 bg-[radial-gradient(circle_at_92%_8%,rgba(101,112,209,.26),transparent_36%),rgba(255,255,255,.045)] p-7 sm:p-10 lg:p-12">
            {roles.map((role) => (
              <TabsContent className="text-white" key={role.value} value={role.value}>
                <p className="text-[13px] font-semibold tracking-[0.08em] text-[#aab9f4]">ЗАДАЧА</p>
                <h3 className="mt-4 max-w-3xl text-[clamp(1.7rem,3vw,3.25rem)] font-[520] leading-[1.12] tracking-[-0.04em]">{role.task}</h3>
                <p className="mt-8 max-w-2xl border-t border-white/12 pt-7 text-[17px] leading-[1.7] text-white/64">{role.result}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {role.directions.map((direction) => <span className="rounded-[10px] border border-white/13 px-3.5 py-2 text-[13px] text-white/62" key={direction}>{direction}</span>)}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="bg-[#eef0ee] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="grid gap-7 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div><p className="section-label">КОМАНДА</p><h2 className="section-title mt-5">Компетенции на стороне бизнеса и технологий</h2></div>
          <p className="max-w-xl text-[17px] leading-[1.75] text-[#10233b]/58 lg:justify-self-end">Проекты ведут руководители направлений, специалисты по интеграциям, AI/ML и информационной безопасности.</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">
          {team.map(([name, role], index) => (
            <Reveal delay={(index % 4) * 0.04} key={`${name}-${role}`}>
              <article>
                <div className="relative aspect-[.82/1] overflow-hidden rounded-[18px] bg-[linear-gradient(145deg,#d9dddf,#b9c2cc_52%,#8b99ad)]">
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,255,255,.55),transparent_28%),linear-gradient(to_top,rgba(9,26,46,.32),transparent_46%)]" />
                  <p className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.08em] text-white/62">PORTRAIT / {String(index + 1).padStart(2, '0')}</p>
                </div>
                <h3 className="mt-4 text-[17px] font-semibold text-[#10233b]">{name}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-[#10233b]/52">{role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InsightsSection() {
  return (
    <section className="bg-[#eef0ee] px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36 xl:px-16">
      <div className="mx-auto max-w-[1440px] border-t border-[#10233b]/11 pt-16">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div><p className="section-label">БЛОГ И НОВОСТИ</p><h2 className="section-title mt-5">Разбираем AI на языке процессов</h2></div>
          <Link className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#17385f]" href="/blog">Все материалы <ArrowUpRight className="size-4" /></Link>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal delay={index * 0.05} key={article.title}>
              <Link className="group flex min-h-72 flex-col justify-between rounded-[22px] border border-[#10233b]/9 bg-[#f7f7f5] p-6 transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(16,35,59,.07)] sm:p-7" href="/blog">
                <div className="flex items-center justify-between"><span className="text-[12px] font-semibold tracking-[0.08em] text-[#6075c7]">{article.category}</span><span className="font-mono text-[10px] text-[#10233b]/34">0{index + 1}</span></div>
                <div><h3 className="text-[clamp(1.4rem,2vw,1.9rem)] font-[540] leading-[1.2] tracking-[-0.035em] text-[#10233b]">{article.title}</h3><span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#17385f]">Читать анонс <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0a1d34] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
      <div aria-hidden="true" className="absolute -right-32 top-0 size-[34rem] rounded-full bg-[#5268bb]/24 blur-[105px]" />
      <Reveal className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
        <div><p className="section-label section-label-dark">СЛЕДУЮЩИЙ ШАГ</p><h2 className="mt-5 max-w-4xl text-[clamp(2.35rem,4.5vw,5rem)] font-[540] leading-[1.02] tracking-[-0.052em]">Обсудить задачу с РусИнфоТек</h2></div>
        <div className="lg:justify-self-end"><p className="max-w-xl text-[17px] leading-[1.7] text-white/62">Свяжитесь с менеджером. Мы уточним задачу, организуем встречу с профильным специалистом и подготовим коммерческое предложение.</p><BrandButton className="mt-8" href="/contacts" tone="light">Получить коммерческое предложение</BrandButton></div>
      </Reveal>
    </section>
  );
}
