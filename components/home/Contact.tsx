'use client';

import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, PackageCheck } from 'lucide-react';

import { Reveal } from '@/components/shared/Reveal';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
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
