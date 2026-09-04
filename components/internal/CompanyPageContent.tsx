import { BriefcaseBusiness, Network, ShieldCheck } from 'lucide-react';

import { InternalCta, InternalHero } from '@/components/internal/InternalPage';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Reveal } from '@/components/shared/Reveal';
import { ScrollProgress } from '@/components/shared/ScrollProgress';

const team = [
  [
    'Анна',
    'Генеральный директор',
    'Стратегия',
    'Финансовый результат · партнёрства',
  ],
  [
    'Михаил',
    'Директор по развитию',
    'Продукт',
    'Линейка решений · развитие команды',
  ],
  [
    'Андрей',
    'Операционный директор',
    'Operations',
    'Регламенты · координация · KPI',
  ],
  [
    'Дмитрий',
    'Директор по информационной безопасности',
    'Security',
    'ИБ · тестирование · стандарты',
  ],
  [
    'Роман',
    'Работа с ключевыми клиентами',
    'Business',
    'Аудит · CRM · коммуникация',
  ],
  [
    'Михаил О.',
    'AI/ML-разработчик',
    'AI / ML',
    'AI-модули · машинное обучение',
  ],
  [
    'Егор',
    'Технический директор',
    'Engineering',
    'Архитектура · интеграции · качество',
  ],
];

export function CompanyPageContent() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f7f5] text-[#10233b]">
      <ScrollProgress />
      <Header />
      <InternalHero
        code="COMPANY / RIT"
        eyebrow="О КОМПАНИИ"
        title="Соединяем бизнес-логику и инженерную реализацию"
        lead="РусИнфоТек разрабатывает AI-системы для процессов, на которых держится ежедневная работа компании: продажи, логистика, производство и документы."
      >
        <div className="mt-9 grid grid-cols-2 gap-3">
          <div className="rounded-[16px] border border-white/12 bg-white/[0.055] p-4">
            <p className="text-[1.8rem] font-[540] tracking-[-0.045em]">12</p>
            <p className="mt-1 text-[12px] text-white/46">
              реализованных проектов
            </p>
          </div>
          <div className="rounded-[16px] border border-white/12 bg-white/[0.055] p-4">
            <p className="text-[1.8rem] font-[540] tracking-[-0.045em]">4</p>
            <p className="mt-1 text-[12px] text-white/46">
              прикладных направления
            </p>
          </div>
        </div>
      </InternalHero>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="section-label">НАША ПОЗИЦИЯ</p>
              <h2 className="section-title mt-5">
                AI должен работать внутри процесса
              </h2>
            </div>
            <div className="lg:pt-12">
              <p className="text-[clamp(1.4rem,2.6vw,2.45rem)] font-[520] leading-[1.38] tracking-[-0.037em]">
                Не отдельный чат-бот и не витрина экспериментов. Мы проектируем
                цифровой слой, который понимает роли, правила, данные и
                ответственность конкретной компании.
              </p>
              <p className="mt-7 max-w-3xl text-[17px] leading-[1.75] text-[#10233b]/56">
                Начинаем с участка, где эффект можно проверить, внедряем его без
                остановки работы и расширяем систему на уже созданной
                интеграционной основе.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-4 lg:mt-24 lg:grid-cols-3">
            {[
              [
                BriefcaseBusiness,
                'От задачи бизнеса',
                'Сначала разбираем процесс, метрику и ограничения. Технологический стек следует за задачей.',
              ],
              [
                Network,
                'В существующем контуре',
                'Связываем 1С, CRM, ЭДО, корпоративные базы и каналы коммуникации.',
              ],
              [
                ShieldCheck,
                'С учётом ИБ',
                'Архитектура данных, роли и размещение согласуются до начала промышленного запуска.',
              ],
            ].map(([Icon, title, text], index) => {
              const ItemIcon = Icon as typeof BriefcaseBusiness;
              return (
                <Reveal delay={index * 0.05} key={title as string}>
                  <article className="flex min-h-74 h-full flex-col justify-between rounded-[23px] border border-[#10233b]/9 bg-white p-7">
                    <div className="flex items-start justify-between">
                      <ItemIcon className="size-6 text-[#5d72c4]" />
                      <span className="font-mono text-[9px] text-[#10233b]/28">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="mt-14">
                      <h3 className="text-[1.65rem] font-[550] tracking-[-0.04em]">
                        {title as string}
                      </h3>
                      <p className="mt-4 text-[15px] leading-[1.72] text-[#10233b]/55">
                        {text as string}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a1d34] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div
          aria-hidden="true"
          className="absolute -right-36 top-12 size-[38rem] rounded-full bg-[#6075c7]/18 blur-[110px]"
        />
        <div className="relative mx-auto max-w-[1440px]">
          <Reveal className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-label section-label-dark">КОМАНДА</p>
              <h2 className="mt-5 text-[clamp(2.4rem,4.8vw,5.2rem)] font-[520] leading-[1] tracking-[-0.055em]">
                Одна команда от аудита до эксплуатации
              </h2>
            </div>
            <p className="max-w-2xl text-[17px] leading-[1.72] text-white/56 lg:justify-self-end">
              Руководители направлений работают вместе со специалистами по
              интеграциям, AI/ML и информационной безопасности.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {team.map(([name, role, group, focus], index) => (
              <Reveal delay={(index % 4) * 0.04} key={`${name}-${role}`}>
                <article className="group flex min-h-68 h-full flex-col justify-between overflow-hidden rounded-[20px] border border-white/11 bg-white/[0.045] p-6 transition-colors hover:bg-white/[0.075]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-full border border-[#aebeff]/20 bg-[#aebeff]/8 text-[14px] font-semibold text-[#c0cafa]">
                      {name.slice(0, 1)}
                    </span>
                    <span className="font-mono text-[9px] text-white/24">
                      {String(index + 1).padStart(2, '0')} / 07
                    </span>
                  </div>
                  <div className="mt-10">
                    <p className="text-[10px] font-semibold tracking-[0.1em] text-[#aebeff]">
                      {group.toUpperCase()}
                    </p>
                    <h3 className="mt-3 text-[1.45rem] font-[550] tracking-[-0.035em]">
                      {name}
                    </h3>
                    <p className="mt-1 min-h-11 text-[13px] leading-relaxed text-white/52">
                      {role}
                    </p>
                    <p className="mt-5 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-white/34">
                      {focus}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef0ee] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="grid gap-8 lg:grid-cols-[.76fr_1.24fr]">
            <div>
              <p className="section-label">КАК УСТРОЕН ПРОЕКТ</p>
              <h2 className="section-title mt-5">
                Ответственность не теряется между этапами
              </h2>
            </div>
            <div className="border-y border-[#10233b]/10">
              {[
                [
                  '01',
                  'Бизнес-разбор',
                  'Руководитель направления фиксирует процесс, участников и критерий результата.',
                ],
                [
                  '02',
                  'Архитектура',
                  'Техническая команда проектирует данные, интеграции и границы AI-решений.',
                ],
                [
                  '03',
                  'Контур безопасности',
                  'ИБ определяет размещение, роли, доступы и требования к данным.',
                ],
                [
                  '04',
                  'Запуск и развитие',
                  'Операционная команда внедряет модуль, измеряет эффект и планирует следующий участок.',
                ],
              ].map(([number, title, text], index) => (
                <div
                  className={`grid gap-3 py-7 sm:grid-cols-[4rem_.75fr_1.25fr] sm:items-start ${index > 0 ? 'border-t border-[#10233b]/10' : ''}`}
                  key={number}
                >
                  <span className="font-mono text-[10px] text-[#5d72c4]">
                    {number}
                  </span>
                  <h3 className="text-[1.2rem] font-[550] tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#10233b]/55">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <InternalCta
        title="Познакомиться на рабочей встрече"
        text="Подключим к разговору специалиста по вашему процессу и обсудим задачу без общей презентации — на данных и ограничениях компании."
        button="Назначить встречу"
      />
      <Footer />
    </main>
  );
}
