'use client';

import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClassName =
  'h-13 rounded-[11px] border-[#10233b]/12 bg-white px-4 text-[15px] text-[#10233b] shadow-none placeholder:text-[#10233b]/32 focus-visible:border-[#6075c7] focus-visible:ring-[#6075c7]/14';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          company: formData.get('company'),
          contact: formData.get('contact'),
          task: formData.get('task'),
        }),
      });

      if (!response.ok) throw new Error('Contact request failed');

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <form aria-busy={isSubmitting} className="mt-8" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label
          className="grid gap-2.5 text-[12px] font-semibold text-[#10233b]/58"
          htmlFor="contact-name"
        >
          Имя
          <Input
            autoComplete="name"
            className={inputClassName}
            id="contact-name"
            maxLength={100}
            name="name"
            placeholder="Как к вам обращаться"
            required
          />
        </label>
        <label
          className="grid gap-2.5 text-[12px] font-semibold text-[#10233b]/58"
          htmlFor="contact-company"
        >
          Компания
          <Input
            autoComplete="organization"
            className={inputClassName}
            id="contact-company"
            maxLength={160}
            name="company"
            placeholder="Название компании"
            required
          />
        </label>
        <label
          className="grid gap-2.5 text-[12px] font-semibold text-[#10233b]/58 sm:col-span-2"
          htmlFor="contact-channel"
        >
          Телефон или Telegram
          <Input
            autoComplete="tel"
            className={inputClassName}
            id="contact-channel"
            maxLength={200}
            name="contact"
            placeholder="Удобный способ связи"
            required
          />
        </label>
        <label
          className="grid gap-2.5 text-[12px] font-semibold text-[#10233b]/58 sm:col-span-2"
          htmlFor="contact-task"
        >
          Краткое описание задачи
          <Textarea
            className="min-h-36 resize-y rounded-[11px] border-[#10233b]/12 bg-white px-4 py-3 text-[15px] leading-relaxed text-[#10233b] shadow-none placeholder:text-[#10233b]/32 focus-visible:border-[#6075c7] focus-visible:ring-[#6075c7]/14"
            id="contact-task"
            maxLength={3000}
            name="task"
            placeholder="Какой процесс хотите автоматизировать и какого результата ожидаете"
            required
            rows={5}
          />
        </label>
      </div>

      <button
        className="group mt-8 inline-flex min-h-13 w-full items-stretch overflow-hidden rounded-[13px] border border-[#17385f] bg-[#17385f] text-[15px] font-semibold text-white transition-colors hover:bg-[#102f52] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
        disabled={isSubmitting}
        type="submit"
      >
        <span className="flex items-center px-6 py-3.5 sm:px-7">
          {isSubmitting ? 'Отправляем…' : 'Обсудить проект'}
        </span>
        <span className="grid min-w-13 place-items-center border-l border-white/14">
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </button>

      <output aria-live="polite" className="mt-4 block min-h-5">
        {status === 'success' && (
          <p className="text-[13px] leading-relaxed text-[#2e684f]">
            Спасибо. Заявка отправлена — мы свяжемся с вами.
          </p>
        )}
        {status === 'error' && (
          <p className="text-[13px] leading-relaxed text-[#a43d3d]">
            Не удалось отправить заявку. Попробуйте ещё раз.
          </p>
        )}
      </output>
    </form>
  );
}
