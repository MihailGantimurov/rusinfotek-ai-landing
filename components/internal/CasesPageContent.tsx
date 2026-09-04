import { ArrowDownRight, Check, Layers3, Link2, Radar } from 'lucide-react';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { InternalCta, InternalHero } from '@/components/internal/InternalPage';
import { MediaFrame } from '@/components/shared/MediaFrame';
import { Reveal } from '@/components/shared/Reveal';
import { ScrollProgress } from '@/components/shared/ScrollProgress';

const caseStudies = [
  {
    number: '01',
    client: 'Technoprint / Merchstore',
    category: 'AI-ЭКОСИСТЕМА',
    attribution: 'Совместная разработка с Laplace Systems',
    title: 'Единый цифровой контур для продаж, CRM, 1С и сервисных процессов',
    task: 'Связать каналы коммуникации и внутренние системы так, чтобы запросы, задачи и статусы не терялись между командами.',
    solution:
      'Модульная AI-экосистема объединила клиентские коммуникации, CRM, 1С, сервис и отчётность общей логикой действий.',
    results: [
      '15+ модулей в едином контуре',
      'Ключевые каналы и события под контролем 24/7',
    ],
    stack: ['CRM', '1С', 'Коммуникации', 'Сервисные процессы'],
    image: '/media/technoprint-platform.jpg',
    alt: 'Обезличенный интерфейс партнёрской платформы Technoprint',
    label: 'Реальный интерфейс · данные обезличены',
  },
  {
    number: '02',
    client: 'Партнёрское агентство геомаркетинга',
    category: 'AI-ПРОЗВОН / NDA',
    attribution: 'Исходящая квалификация спроса',
    title: 'AI-оператор выявляет интерес и передаёт менеджерам тёплые контакты',
    task: 'Быстро находить компании, которым актуально продвижение на картах, без расширения команды холодных продаж.',
    solution:
      'AI проводит первичный диалог, уточняет интерес и фиксирует результат для дальнейшей работы менеджера.',
    results: [
      '30+ лидов за первые 3 дня',
      'Первая сделка — в течение недели',
      'Цена лида — менее 500 ₽',
    ],
    stack: ['Телефония', 'AI-диалог', 'Квалификация', 'Передача в продажи'],
    image: '/media/ai-calls-results.jpg',
    alt: 'Обезличенная таблица результатов исходящего AI-прозвона',
    label: 'Результаты прозвона · данные обезличены',
  },
  {
    number: '03',
    client: 'SkinCars',
    category: 'AI-КОНСУЛЬТАНТ',
    attribution: 'Мультиканальная обработка обращений',
    title: 'Первичная консультация клиента доступна во всех каналах 24/7',
    task: 'Обрабатывать обращения из Avito, мессенджеров, сайта, карт и звонков без очереди и потери контекста.',
    solution:
      'AI консультирует, квалифицирует клиента, фиксирует данные и помогает перейти к следующему действию.',
    results: [
      '90% входящих сообщений обрабатывает AI',
      'Консультация доступна круглосуточно',
    ],
    stack: ['Avito', 'Мессенджеры', 'Сайт', 'Карты', 'Телефония'],
    image: '/media/skincars-chat.jpg',
    alt: 'Обезличенный диалог клиента с AI-консультантом SkinCars',
    label: 'Фрагмент диалога · данные обезличены',
  },
];

export function CasesPageContent() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f7f5] text-[#10233b]">
      <ScrollProgress />
      <Header />
      <InternalHero
        code="CASES / 12 PROJECTS"
        eyebrow="ПРОЕКТЫ В РАБОЧЕМ КОНТУРЕ"
        title="Результат виден в процессе, а не в презентации"
        lead="Показываем задачи, которые уже решены в продажах и операциях. Интерфейсы обезличены, а формулировки результатов основаны на материалах проектов."
      >
        <a
          className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-white"
          href="#case-01"
        >
          Смотреть проекты <ArrowDownRight className="size-4" />
        </a>
      </InternalHero>

      <section className="bg-[#eef0ee] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto grid max-w-[1440px] border-y border-[#10233b]/10 md:grid-cols-3">
          {[
            ['15+', 'модулей в единой AI-экосистеме'],
            ['30+', 'лидов за первые 3 дня'],
            ['90%', 'входящих сообщений обрабатывает AI'],
          ].map(([value, label], index) => (
            <div
              className={`py-8 md:px-8 ${index > 0 ? 'border-t border-[#10233b]/10 md:border-l md:border-t-0' : ''}`}
              key={value}
            >
              <p className="text-[clamp(2.2rem,3.5vw,3.8rem)] font-[550] tracking-[-0.055em] text-[#4f66bb]">
                {value}
              </p>
              <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-[#10233b]/58">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="max-w-4xl">
            <p className="section-label">КАТАЛОГ КЕЙСОВ</p>
            <h2 className="section-title mt-5">
              От отдельного AI-агента до экосистемы из 15+ модулей
            </h2>
          </Reveal>

          <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-30">
            {caseStudies.map((item, index) => (
              <article
                className="scroll-mt-28"
                id={`case-${item.number}`}
                key={item.client}
              >
                <Reveal
                  className={`grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12 ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  <MediaFrame
                    asset={{ kind: 'image', src: item.image, alt: item.alt }}
                    className="aspect-[1.22/1] min-h-[410px] rounded-[26px]"
                    label={item.label}
                  />
                  <div className="flex flex-col justify-between py-1 lg:py-6">
                    <div>
                      <div className="flex items-center justify-between gap-5">
                        <p className="section-label">{item.category}</p>
                        <span className="font-mono text-[10px] text-[#10233b]/30">
                          {item.number} / 03
                        </span>
                      </div>
                      <h3 className="mt-5 text-[clamp(2rem,3.4vw,3.9rem)] font-[530] leading-[1.06] tracking-[-0.05em]">
                        {item.title}
                      </h3>
                      <p className="mt-5 text-[14px] text-[#10233b]/42">
                        {item.client} · {item.attribution}
                      </p>
                      <dl className="mt-8 grid gap-6 border-y border-[#10233b]/10 py-7 sm:grid-cols-2">
                        <div>
                          <dt className="text-[11px] font-semibold tracking-[0.08em] text-[#5c72c4]">
                            ЗАДАЧА
                          </dt>
                          <dd className="mt-3 text-[14px] leading-[1.68] text-[#10233b]/60">
                            {item.task}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[11px] font-semibold tracking-[0.08em] text-[#5c72c4]">
                            РЕШЕНИЕ
                          </dt>
                          <dd className="mt-3 text-[14px] leading-[1.68] text-[#10233b]/60">
                            {item.solution}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="mt-8">
                      <ul className="space-y-3">
                        {item.results.map((result) => (
                          <li
                            className="flex gap-3 text-[15px] font-medium leading-relaxed"
                            key={result}
                          >
                            <Check className="mt-1 size-4 shrink-0 text-[#5d72c4]" />
                            {result}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {item.stack.map((tag) => (
                          <span
                            className="rounded-[10px] bg-[#e9ebe8] px-3 py-2 text-[12px] text-[#10233b]/56"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1d34] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="grid gap-7 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="section-label section-label-dark">ОБЩАЯ ЛОГИКА</p>
              <h2 className="mt-5 text-[clamp(2.3rem,4.4vw,4.8rem)] font-[520] leading-[1.02] tracking-[-0.052em]">
                Что объединяет проекты
              </h2>
            </div>
            <p className="max-w-2xl text-[17px] leading-[1.7] text-white/58 lg:justify-self-end">
              Каждый запуск начинается с одного измеримого процесса и
              расширяется после подтверждения результата.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] bg-white/10 lg:mt-18 lg:grid-cols-3">
            {[
              [
                Radar,
                'Рабочая метрика',
                'До разработки фиксируем, какой показатель должен измениться после запуска.',
              ],
              [
                Link2,
                'Интеграция',
                'AI получает нужный контекст из текущих систем и возвращает результат туда же.',
              ],
              [
                Layers3,
                'Модульное развитие',
                'Следующий сценарий использует уже созданный контур данных, ролей и интеграций.',
              ],
            ].map(([Icon, title, text]) => {
              const ItemIcon = Icon as typeof Radar;
              return (
                <article
                  className="bg-[#0d223c] p-7 sm:p-9"
                  key={title as string}
                >
                  <ItemIcon className="size-6 text-[#aebeff]" />
                  <h3 className="mt-10 text-[1.55rem] font-[540] tracking-[-0.035em]">
                    {title as string}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-white/52">
                    {text as string}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <InternalCta
        title="Найти первый процесс для автоматизации"
        text="На встрече разберём текущий маршрут работы, точки потерь и данные. Затем предложим первый модуль с понятным критерием результата."
        button="Обсудить задачу"
      />
      <Footer />
    </main>
  );
}
