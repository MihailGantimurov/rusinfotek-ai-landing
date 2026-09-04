import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Route,
  ShieldCheck,
} from 'lucide-react';

import { InternalCta, InternalHero } from '@/components/internal/InternalPage';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { HardLink } from '@/components/shared/HardLink';
import { Reveal } from '@/components/shared/Reveal';
import { ScrollProgress } from '@/components/shared/ScrollProgress';

const articles = [
  {
    id: 'architecture',
    number: '01',
    category: 'АРХИТЕКТУРА',
    icon: Braces,
    title: 'Как встроить AI в бизнес, не создавая ещё одну отдельную систему',
    lead: 'Почему ценность появляется не в интерфейсе модели, а в связях с ролями, данными и действующими маршрутами работы.',
    body: [
      'Пилот часто начинается с удобного интерфейса, но после демонстрации сотруднику всё равно приходится переносить результат в CRM, проверять исходные данные и вручную ставить следующую задачу. В этот момент AI остаётся отдельным инструментом, а процесс почти не меняется.',
      'Рабочая архитектура начинается с маршрута: откуда приходит событие, какой контекст нужен системе, где требуется подтверждение человека и куда должен вернуться результат. Модель становится одним из элементов контура, а не его центром.',
    ],
    points: [
      'Начинать с процесса, а не с модели',
      'Фиксировать границы решений AI',
      'Возвращать результат в рабочую систему',
    ],
    read: '7 минут',
  },
  {
    id: 'logistics',
    number: '02',
    category: 'ЛОГИСТИКА',
    icon: Route,
    title:
      'AI-диспетчер: где заканчивается автоматизация и начинается управление',
    lead: 'Разбираем маршрут заявки от входящего сообщения до контроля статуса, документов и экономики перевозки.',
    body: [
      'Заявка в логистике редко живёт в одной системе. Параметры приходят по почте или в мессенджере, ставка считается по отдельным правилам, исполнители работают в TMS, а документы и экономика сходятся позже. Потери возникают именно на переходах.',
      'AI-диспетчер полезен как координационный слой: он собирает недостающие данные, запускает расчёт, фиксирует ответственного и следит за контрольными точками. Человек подключается к исключениям — спорной ставке, срыву срока или нестандартному условию.',
    ],
    points: [
      'Единая очередь обращений',
      'Контекст между этапами',
      'Эскалация только исключений',
    ],
    read: '6 минут',
  },
  {
    id: 'security',
    number: '03',
    category: 'БЕЗОПАСНОСТЬ',
    icon: ShieldCheck,
    title: 'Какие вопросы задать до подключения AI к корпоративным данным',
    lead: 'Практический список для совместной встречи бизнеса, IT и информационной безопасности.',
    body: [
      'Фраза «подключить AI к базе» скрывает несколько разных решений: какие поля нужны, где выполняется обработка, что попадает в журнал, кто увидит ответ и может ли система инициировать действие. Пока эти вопросы не разобраны, оценить риск невозможно.',
      'На старте достаточно пройти один реальный сценарий от события до результата и отметить данные, роли и системы на каждом шаге. Такая схема становится основой требований к размещению, доступам, проверкам и эксплуатации.',
    ],
    points: [
      'Категории и владельцы данных',
      'Роли и критические действия',
      'Размещение и журналирование',
    ],
    read: '5 минут',
  },
];

export function BlogPageContent() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f7f5] text-[#10233b]">
      <ScrollProgress />
      <Header />
      <InternalHero
        code="INSIGHTS / PROCESS FIRST"
        eyebrow="БЛОГ И НОВОСТИ"
        title="AI на языке процессов"
        lead="Коротко и предметно разбираем архитектуру, внедрение и безопасность AI-систем для руководителей бизнеса, IT и операционных команд."
      >
        <a
          className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-white"
          href="#materials"
        >
          Перейти к материалам <ArrowDownRight className="size-4" />
        </a>
      </InternalHero>

      <section className="bg-[#eef0ee] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-34 xl:px-16">
        <Reveal className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[28px] bg-[#0c213b] text-white lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative isolate min-h-[470px] overflow-hidden p-7 sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="hero-grain absolute inset-0 opacity-20"
            />
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-30 size-[32rem] rounded-full bg-[#6d7fd0]/28 blur-[90px]"
            />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold tracking-[0.1em] text-[#aebeff]">
                  ГЛАВНЫЙ РАЗБОР
                </p>
                <span className="font-mono text-[9px] text-white/28">
                  FEATURED / 01
                </span>
              </div>
              <div className="mt-20">
                <h2 className="max-w-3xl text-[clamp(2.2rem,4vw,4.5rem)] font-[520] leading-[1.04] tracking-[-0.052em]">
                  15+ модулей — это не набор функций. Это архитектура.
                </h2>
                <p className="mt-6 max-w-2xl text-[16px] leading-[1.72] text-white/56">
                  На примере Technoprint / Merchstore показываем, как CRM, 1С,
                  коммуникации и сервисные процессы начинают работать как единый
                  цифровой контур.
                </p>
                <HardLink
                  className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold"
                  href="/cases#case-01"
                >
                  Открыть кейс <ArrowUpRight className="size-4" />
                </HardLink>
              </div>
            </div>
          </div>
          <div className="grid content-between gap-10 border-t border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <BookOpen className="size-8 text-[#aebeff]" />
            <div className="space-y-5">
              {[
                ['01', 'Один источник контекста'],
                ['02', 'Модули работают по общим правилам'],
                ['03', 'Каждый следующий запуск быстрее'],
              ].map(([number, text]) => (
                <div
                  className="flex items-center gap-4 border-t border-white/10 pt-5"
                  key={number}
                >
                  <span className="font-mono text-[9px] text-[#aebeff]">
                    {number}
                  </span>
                  <p className="text-[14px] text-white/64">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="materials"
        className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">МАТЕРИАЛЫ</p>
              <h2 className="section-title mt-5">
                Практика внедрения без шума вокруг AI
              </h2>
            </div>
            <p className="max-w-lg text-[16px] leading-[1.72] text-[#10233b]/54">
              Каждый материал отвечает на конкретный вопрос, который возникает
              до или во время проекта.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-3">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <Reveal delay={index * 0.05} key={article.id}>
                  <a
                    className="group flex min-h-[430px] h-full flex-col justify-between rounded-[23px] border border-[#10233b]/9 bg-white p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,35,59,.07)]"
                    href={`#${article.id}`}
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <span className="grid size-11 place-items-center rounded-full bg-[#5d72c4]/9 text-[#5369ba]">
                          <Icon className="size-4" />
                        </span>
                        <span className="font-mono text-[9px] text-[#10233b]/28">
                          {article.number} / 03
                        </span>
                      </div>
                      <p className="mt-12 text-[10px] font-semibold tracking-[0.1em] text-[#5d72c4]">
                        {article.category}
                      </p>
                      <h3 className="mt-4 text-[1.65rem] font-[550] leading-[1.18] tracking-[-0.04em]">
                        {article.title}
                      </h3>
                      <p className="mt-4 text-[14px] leading-[1.7] text-[#10233b]/54">
                        {article.lead}
                      </p>
                    </div>
                    <span className="mt-10 inline-flex items-center justify-between border-t border-[#10233b]/9 pt-5 text-[12px] font-semibold text-[#17385f]">
                      {article.read}
                      <ArrowDownRight className="size-4 transition-transform group-hover:translate-y-0.5" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef0ee] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div className="mx-auto max-w-[1440px] space-y-6">
          {articles.map((article) => {
            const Icon = article.icon;
            return (
              <Reveal key={article.id}>
                <article
                  className="scroll-mt-28 rounded-[26px] border border-[#10233b]/9 bg-[#f7f7f5] p-7 sm:p-10 lg:grid lg:grid-cols-[.72fr_1.28fr] lg:gap-16 lg:p-14"
                  id={article.id}
                >
                  <div>
                    <div className="flex items-center gap-3 text-[#5d72c4]">
                      <Icon className="size-5" />
                      <span className="font-mono text-[9px] tracking-[0.1em]">
                        {article.category} / {article.read}
                      </span>
                    </div>
                    <h2 className="mt-6 text-[clamp(2rem,3.5vw,3.9rem)] font-[530] leading-[1.06] tracking-[-0.05em]">
                      {article.title}
                    </h2>
                  </div>
                  <div className="mt-10 lg:mt-2">
                    <p className="text-[18px] leading-[1.72] text-[#10233b]/65">
                      {article.lead}
                    </p>
                    <div className="mt-7 space-y-5 text-[15px] leading-[1.76] text-[#10233b]/58">
                      {article.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <ul className="mt-8 divide-y divide-[#10233b]/10 border-y border-[#10233b]/10">
                      {article.points.map((point, index) => (
                        <li
                          className="grid grid-cols-[3rem_1fr] py-5 text-[15px] font-medium"
                          key={point}
                        >
                          <span className="font-mono text-[9px] text-[#5d72c4]">
                            0{index + 1}
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <InternalCta
        eyebrow="ПРЕДЛОЖИТЬ ТЕМУ"
        title="Есть вопрос об AI-внедрении?"
        text="Разберём его на рабочей встрече. Если тема актуальна для рынка, превратим выводы в следующий материал без раскрытия данных компании."
        button="Обсудить вопрос"
      />
      <Footer />
    </main>
  );
}
