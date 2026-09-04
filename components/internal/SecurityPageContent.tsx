import {
  Check,
  Database,
  Fingerprint,
  LockKeyhole,
  Network,
  ServerCog,
  ShieldCheck,
} from 'lucide-react';

import { InternalCta, InternalHero } from '@/components/internal/InternalPage';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Reveal } from '@/components/shared/Reveal';
import { ScrollProgress } from '@/components/shared/ScrollProgress';

function SecurityArchitecture() {
  return (
    <div className="relative mt-10 overflow-hidden rounded-[22px] border border-white/12 bg-white/[0.045] p-5 sm:p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="font-mono text-[9px] tracking-[0.1em] text-[#aebeff]">
          DATA BOUNDARY / CLIENT
        </span>
        <span className="inline-flex items-center gap-2 text-[10px] text-white/44">
          <span className="size-1.5 rounded-full bg-[#71d4c8]" />
          CONTROLLED
        </span>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {[
          [Database, 'Данные'],
          [Network, 'AI-логика'],
          [ServerCog, 'Системы'],
        ].map(([Icon, label], index) => {
          const ItemIcon = Icon as typeof Database;
          return (
            <div
              className="relative rounded-[14px] border border-white/10 bg-[#07172a]/46 p-4"
              key={label as string}
            >
              <div className="flex items-center justify-between">
                <ItemIcon className="size-4 text-[#aebeff]" />
                <span className="font-mono text-[8px] text-white/22">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-6 text-[12px] font-medium text-white/68">
                {label as string}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SecurityPageContent() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f7f5] text-[#10233b]">
      <ScrollProgress />
      <Header />
      <InternalHero
        code="SECURITY / ENTERPRISE"
        eyebrow="БЕЗОПАСНОСТЬ AI-СИСТЕМ"
        title="Безопасность начинается с архитектуры"
        lead="До разработки фиксируем границы данных, роли, интеграции и размещение. Требования 152-ФЗ и внутренние правила компании становятся частью решения."
      >
        <SecurityArchitecture />
      </InternalHero>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="section-label">ТРИ ПРИНЦИПА</p>
              <h2 className="section-title mt-5">
                Контролируем не только модель, но и весь путь данных
              </h2>
            </div>
            <p className="max-w-3xl text-[clamp(1.35rem,2.45vw,2.25rem)] font-[520] leading-[1.4] tracking-[-0.035em] lg:pt-13">
              Безопасность AI-проекта определяется тем, где находятся данные,
              кто инициирует действие и какие системы принимают результат.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 lg:mt-24 lg:grid-cols-3">
            {[
              [
                ShieldCheck,
                'Работа с требованиями 152-ФЗ',
                'Определяем категории данных и применимые требования для конкретного сценария. Не переносим один шаблон безопасности между разными компаниями.',
                'COMPLIANCE / 01',
              ],
              [
                ServerCog,
                'Размещение в контуре клиента',
                'Ключевая инфраструктура и данные могут оставаться на серверах компании. Схема зависит от систем, нагрузки и политики ИБ.',
                'ON-PREMISE / 02',
              ],
              [
                Fingerprint,
                'Роли и контролируемые действия',
                'AI получает только необходимые права. Критические действия проходят через установленные проверки и ответственность сотрудников.',
                'ACCESS / 03',
              ],
            ].map(([Icon, title, text, code], index) => {
              const ItemIcon = Icon as typeof ShieldCheck;
              return (
                <Reveal delay={index * 0.05} key={title as string}>
                  <article className="flex min-h-88 h-full flex-col justify-between rounded-[23px] border border-[#10233b]/9 bg-white p-7 sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-[#5d72c4]/9 text-[#5369ba]">
                        <ItemIcon className="size-5" />
                      </span>
                      <span className="font-mono text-[9px] text-[#10233b]/28">
                        {code as string}
                      </span>
                    </div>
                    <div className="mt-16">
                      <h3 className="text-[1.7rem] font-[550] leading-tight tracking-[-0.04em]">
                        {title as string}
                      </h3>
                      <p className="mt-4 text-[15px] leading-[1.72] text-[#10233b]/56">
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
          className="absolute -left-48 top-0 size-[38rem] rounded-full bg-[#6177ca]/16 blur-[110px]"
        />
        <div className="relative mx-auto max-w-[1440px]">
          <Reveal className="max-w-4xl">
            <p className="section-label section-label-dark">
              SECURITY BY DESIGN
            </p>
            <h2 className="mt-5 text-[clamp(2.4rem,4.8vw,5.2rem)] font-[520] leading-[1] tracking-[-0.055em]">
              Контрольные точки на каждом этапе проекта
            </h2>
          </Reveal>
          <div className="mt-14 grid border-y border-white/12 lg:mt-20 lg:grid-cols-4">
            {[
              [
                '01',
                'Аудит данных',
                'Источники, категории, владельцы и допустимые сценарии использования.',
              ],
              [
                '02',
                'Модель угроз',
                'Границы контура, интеграции, роли и критические действия.',
              ],
              [
                '03',
                'Проверка',
                'Тестовые сценарии, журналирование и обработка исключений до запуска.',
              ],
              [
                '04',
                'Эксплуатация',
                'Контроль доступов, изменений и качества результата в рабочем режиме.',
              ],
            ].map(([number, title, text], index) => (
              <Reveal
                className={`py-8 lg:px-7 lg:py-9 ${index > 0 ? 'border-t border-white/12 lg:border-l lg:border-t-0' : ''}`}
                delay={index * 0.05}
                key={number}
              >
                <span className="font-mono text-[10px] text-[#aebeff]">
                  {number}
                </span>
                <h3 className="mt-10 text-[1.45rem] font-[540] tracking-[-0.035em]">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-white/50">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef0ee] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-18">
          <Reveal>
            <p className="section-label">ДО НАЧАЛА РАЗРАБОТКИ</p>
            <h2 className="section-title mt-5">
              Что фиксируем вместе с IT и ИБ
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.75] text-[#10233b]/56">
              Конкретный набор мер зависит от процесса, данных и инфраструктуры.
              Мы не заявляем универсальную сертификацию — проектируем
              проверяемый контур под условия клиента.
            </p>
          </Reveal>
          <Reveal
            className="rounded-[26px] border border-[#10233b]/9 bg-[#f7f7f5] p-7 sm:p-10"
            delay={0.05}
          >
            <ul className="divide-y divide-[#10233b]/10">
              {[
                'Какие данные действительно нужны AI-модулю',
                'Где физически размещаются компоненты и журналы',
                'Какие роли видят данные и запускают действия',
                'Какие операции требуют подтверждения сотрудника',
                'Как система ведёт историю и обрабатывает исключения',
                'Как обновления проходят тестирование и ввод в эксплуатацию',
              ].map((item) => (
                <li
                  className="flex gap-4 py-5 text-[15px] leading-relaxed text-[#10233b]/68"
                  key={item}
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#5d72c4]/9 text-[#5369ba]">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36 xl:px-16">
        <Reveal className="mx-auto grid max-w-[1440px] gap-10 rounded-[28px] border border-[#10233b]/9 bg-white p-7 sm:p-10 lg:grid-cols-[.76fr_1.24fr] lg:p-14">
          <div>
            <LockKeyhole className="size-7 text-[#5d72c4]" />
            <h2 className="mt-7 text-[clamp(2rem,3.4vw,3.7rem)] font-[530] leading-[1.07] tracking-[-0.045em]">
              Безопасность без разрыва с бизнесом
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                'Бизнес отвечает',
                'за правила процесса, владельцев данных и допустимый результат.',
              ],
              [
                'IT отвечает',
                'за инфраструктуру, интеграции и эксплуатационный контур.',
              ],
              [
                'ИБ отвечает',
                'за требования, доступы, контроль и проверку реализации.',
              ],
              [
                'РусИнфоТек отвечает',
                'за архитектуру AI-модуля и выполнение согласованных требований.',
              ],
            ].map(([title, text]) => (
              <div className="rounded-[17px] bg-[#eef0ee] p-5" key={title}>
                <p className="text-[14px] font-semibold">{title}</p>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#10233b]/54">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <InternalCta
        title="Обсудить архитектуру с технической командой"
        text="Подключим специалиста по информационной безопасности и разберём размещение, источники данных и точки контроля вашего сценария."
        button="Назначить техническую встречу"
      />
      <Footer />
    </main>
  );
}
