import type { Metadata } from 'next';
import { Check, MessageSquareText } from 'lucide-react';

import { ContactForm } from '@/components/internal/ContactForm';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { HardLink } from '@/components/shared/HardLink';
import { Reveal } from '@/components/shared/Reveal';
import { ScrollProgress } from '@/components/shared/ScrollProgress';

export const metadata: Metadata = {
  title: 'Контакты — РусИнфоТек',
  description:
    'Обсудите с командой РусИнфоТек задачу по автоматизации бизнес-процессов.',
  alternates: { canonical: '/contacts' },
};

export default function ContactsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f7f5] text-[#10233b]">
      <ScrollProgress />
      <Header />

      <section className="relative overflow-hidden px-5 pb-20 pt-34 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12 lg:pb-30 lg:pt-44 xl:px-16">
        <div
          aria-hidden="true"
          className="absolute -right-40 top-10 size-[38rem] rounded-full bg-[#6075c7]/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-[1440px]">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.13em] text-[#10233b]/38">
            <HardLink className="transition-colors hover:text-[#10233b]" href="/">
              РУСИНФОТЕК
            </HardLink>
            <span>/</span>
            <span className="text-[#596fc0]">КОНТАКТЫ</span>
          </div>

          <div className="mt-11 grid gap-10 lg:grid-cols-[1.18fr_.82fr] lg:items-end lg:gap-20">
            <Reveal>
              <p className="section-label">НАЧАТЬ ДИАЛОГ</p>
              <h1 className="mt-6 max-w-5xl text-balance text-[clamp(3.2rem,6.5vw,7.2rem)] font-[520] leading-[.94] tracking-[-0.064em]">
                Обсудим вашу задачу
              </h1>
            </Reveal>
            <Reveal delay={0.07}>
              <p className="max-w-2xl text-[17px] leading-[1.75] text-[#10233b]/60 sm:text-[19px]">
                Команда изучит ваш процесс, уточнит ограничения и предложит
                практичный вариант автоматизации с понятным первым этапом.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#eef0ee] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-30 xl:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16 xl:gap-24">
          <Reveal>
            <p className="section-label">СПОСОБ СВЯЗИ</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2.2rem,4vw,4.5rem)] font-[540] leading-[1.04] tracking-[-0.052em]">
              Начнём с короткого описания
            </h2>
            <p className="mt-6 max-w-lg text-[16px] leading-[1.75] text-[#10233b]/58">
              Оставьте контекст задачи в форме. Этого достаточно, чтобы команда
              подготовилась к первому разговору предметно.
            </p>

            <div className="mt-10 rounded-[22px] border border-[#10233b]/9 bg-[#f7f7f5] p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#6075c7]/18 bg-[#6075c7]/8 text-[#5369ba]">
                  <MessageSquareText className="size-5" />
                </span>
                <div>
                  <p className="text-[16px] font-semibold">Заявка на проект</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#10233b]/52">
                    Основной способ первичного обращения на этой странице.
                  </p>
                </div>
              </div>
              <ul className="mt-7 space-y-3 border-t border-[#10233b]/9 pt-6">
                {[
                  'Изучим задачу и текущий процесс',
                  'Определим подходящий первый этап',
                  'Предложим следующий шаг по проекту',
                ].map((item) => (
                  <li
                    className="flex gap-3 text-[14px] leading-relaxed text-[#10233b]/66"
                    key={item}
                  >
                    <Check className="mt-1 size-3.5 shrink-0 text-[#6075c7]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[26px] border border-[#10233b]/9 bg-white p-6 shadow-[0_24px_70px_rgba(20,35,55,.06)] sm:p-9 lg:p-11">
              <div className="flex flex-col gap-3 border-b border-[#10233b]/9 pb-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.09em] text-[#6075c7]">
                    ЗАЯВКА
                  </p>
                  <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.8rem)] font-[550] tracking-[-0.045em]">
                    Расскажите о проекте
                  </h2>
                </div>
                <span className="font-mono text-[10px] tracking-[0.1em] text-[#10233b]/30">
                  01 / BRIEF
                </span>
              </div>

              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
