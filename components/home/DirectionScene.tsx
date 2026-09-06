import {
  ArrowRight,
  Check,
  CircleDot,
  FileText,
  Route,
  Sparkles,
} from 'lucide-react';

import type { DirectionVisual } from '@/content/directions';

type DirectionSceneProps = {
  variant: DirectionVisual;
};

const sceneCopy = {
  sales: ['ПРОДАЖИ / CRM', 'Клиентский путь без разрывов'],
  logistics: [
    'ЛОГИСТИКА / CONTROL TOWER',
    'Заявка движется по единому маршруту',
  ],
  production: [
    'ПРОИЗВОДСТВО / OPERATIONS',
    'Данные и отклонения видны в одном окне',
  ],
  documents: ['ДОКУМЕНТЫ / WORKFLOW', 'Документ проходит проверку до отправки'],
} as const;

function SalesScene() {
  return (
    <div className="grid h-full min-h-0 gap-3 sm:grid-cols-3">
      {[
        ['01', 'Входящие', ['Сайт', 'Телефония', 'Мессенджеры']],
        ['02', 'AI-слой', ['Квалификация', 'Резюме', 'Следующий шаг']],
        ['03', 'CRM', ['Сделка', 'Задача', 'Контроль']],
      ].map(([number, title, items], index) => (
        <div
          className="relative min-h-0 rounded-[16px] border border-white/12 bg-white/[0.065] p-4"
          key={title as string}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-white/40">
              {number as string}
            </span>
            {index < 2 ? (
              <ArrowRight className="size-3.5 text-[#bac6ff]/60" />
            ) : (
              <Check className="size-3.5 text-[#9ce8dc]" />
            )}
          </div>
          <p className="mt-4 text-[15px] font-semibold text-white xl:mt-5">
            {title as string}
          </p>
          <div className="mt-3 space-y-2">
            {(items as string[]).map((item) => (
              <div
                className="rounded-[9px] border border-white/8 bg-[#061529]/34 px-3 py-2 text-[11px] text-white/58"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function LogisticsScene() {
  return (
    <div className="flex h-full min-h-0 flex-col justify-between rounded-[18px] border border-white/11 bg-[#07192d]/28 p-4 xl:p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.1em] text-white/42">
          МАРШРУТ ЗАЯВКИ
        </span>
        <span className="inline-flex items-center gap-2 text-[11px] text-[#a8e3dd]">
          <span className="size-1.5 rounded-full bg-[#5ed6c9]" /> SLA ПОД
          КОНТРОЛЕМ
        </span>
      </div>
      <div className="relative my-4 grid gap-5 sm:grid-cols-3 sm:gap-8 xl:my-6">
        <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-linear-to-r from-white/12 via-[#91a7ff]/70 to-white/12 sm:block" />
        {[
          [CircleDot, 'Заявка', 'Сайт · почта · чат'],
          [Sparkles, 'AI-диспетчер', 'Параметры · приоритет'],
          [Route, 'CRM / WMS', 'Ответственный · статус'],
        ].map(([Icon, title, text]) => {
          const SceneIcon = Icon as typeof CircleDot;
          return (
            <div className="relative text-center" key={title as string}>
              <span className="relative z-10 mx-auto grid size-12 place-items-center rounded-full border border-white/15 bg-[#173a5b] text-[#aebeff] shadow-[0_0_30px_rgba(100,132,210,.2)]">
                <SceneIcon className="size-4" />
              </span>
              <p className="mt-2 text-[14px] font-semibold text-white xl:mt-4">
                {title as string}
              </p>
              <p className="mt-1 text-[11px] text-white/42">{text as string}</p>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['Проверка данных', 'Назначение', 'Синхронизация'].map((item) => (
          <div
            className="rounded-[10px] bg-white/[0.06] px-3 py-2 text-center text-[10px] text-white/52"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductionScene() {
  return (
    <div className="grid h-full min-h-0 gap-3 sm:grid-cols-[1.15fr_.85fr]">
      <div className="min-h-0 rounded-[18px] border border-white/11 bg-[#081725]/34 p-4 xl:p-5">
        <p className="font-mono text-[10px] tracking-[0.1em] text-white/42">
          ОПЕРАЦИОННЫЙ КОНТУР
        </p>
        <div className="mt-4 space-y-3 xl:mt-5 xl:space-y-4">
          {[
            ['Проектный расчёт', 'ГОТОВО', 'w-[88%]'],
            ['Производственный этап', 'В РАБОТЕ', 'w-[66%]'],
            ['Контроль отклонений', 'МОНИТОРИНГ', 'w-[78%]'],
          ].map(([title, status, width]) => (
            <div key={title}>
              <div className="flex items-center justify-between gap-3 text-[11px]">
                <span className="text-white/64">{title}</span>
                <span className="font-mono text-[9px] text-[#b5c0f4]">
                  {status}
                </span>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/8">
                <div
                  className={`h-full rounded-full bg-linear-to-r from-[#7187df] to-[#74c8c1] ${width}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid min-h-0 grid-rows-[repeat(2,minmax(0,1fr))] gap-3">
        <div className="min-h-0 rounded-[18px] border border-white/11 bg-white/[0.07] p-4 xl:p-5">
          <p className="font-mono text-[9px] text-white/38">СИГНАЛ</p>
          <p className="mt-2 text-[24px] font-[540] tracking-[-0.04em] text-white xl:mt-3">
            Стабильно
          </p>
          <p className="mt-1 text-[11px] text-white/42">
            Критичных отклонений нет
          </p>
        </div>
        <div className="min-h-0 rounded-[18px] border border-white/11 bg-white/[0.07] p-4 xl:p-5">
          <p className="font-mono text-[9px] text-white/38">СВЯЗЬ</p>
          <p className="mt-2 text-[24px] font-[540] tracking-[-0.04em] text-white xl:mt-3">
            ERP / 1С
          </p>
          <p className="mt-1 text-[11px] text-white/42">
            Синхронизация процесса
          </p>
        </div>
      </div>
    </div>
  );
}

function DocumentsScene() {
  return (
    <div className="grid h-full min-h-0 gap-4 sm:grid-cols-[.9fr_1.1fr]">
      <div className="relative min-h-56 sm:min-h-0">
        {['Акт', 'Договор', 'Коммерческое предложение'].map((title, index) => (
          <div
            className="absolute inset-x-0 rounded-[16px] border border-white/13 bg-[#f4f5f3] p-5 text-[#10233b] shadow-[0_22px_46px_rgba(2,12,30,.2)]"
            key={title}
            style={{
              top: index * 36,
              transform: `scale(${0.92 + index * 0.04})`,
              transformOrigin: 'top center',
              zIndex: index,
            }}
          >
            <div className="flex items-center gap-3">
              <FileText className="size-4 text-[#5c72c4]" />
              <span className="text-[12px] font-semibold">{title}</span>
            </div>
            <div className="mt-4 h-1.5 w-4/5 rounded-full bg-[#10233b]/9" />
            <div className="mt-2 h-1.5 w-3/5 rounded-full bg-[#10233b]/7" />
          </div>
        ))}
      </div>
      <div className="min-h-0 rounded-[18px] border border-white/11 bg-[#08182c]/34 p-4 xl:p-5">
        <p className="font-mono text-[10px] tracking-[0.1em] text-white/42">
          АВТОПРОВЕРКА
        </p>
        <div className="mt-4 space-y-2">
          {[
            'Реквизиты заполнены',
            'Условия согласованы',
            'Маршрут определён',
            'Версия зафиксирована',
          ].map((item) => (
            <div
              className="flex items-center gap-3 rounded-[11px] bg-white/[0.065] px-3 py-2 text-[11px] text-white/62"
              key={item}
            >
              <span className="grid size-5 place-items-center rounded-full bg-[#71c9be]/16 text-[#9ce8dc]">
                <Check className="size-3" />
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DirectionScene({ variant }: DirectionSceneProps) {
  const [eyebrow, title] = sceneCopy[variant];

  return (
    <figure className="direction-scene relative flex min-h-[410px] flex-col overflow-hidden rounded-[26px] border border-white/12 bg-[radial-gradient(circle_at_85%_8%,rgba(114,133,224,.32),transparent_34%),linear-gradient(145deg,#0a1d35,#173c61_58%,#152747)] p-4 shadow-[0_34px_84px_rgba(13,32,55,.2)] sm:min-h-[500px] sm:p-6 lg:h-[clamp(430px,48vh,500px)] lg:min-h-[430px] lg:max-h-[500px]">
      <div className="direction-scene-header flex shrink-0 items-start justify-between gap-5 border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-[9px] tracking-[0.12em] text-[#aebeff]">
            {eyebrow}
          </p>
          <figcaption className="mt-2 text-[16px] font-[540] tracking-[-0.025em] text-white sm:text-[18px]">
            {title}
          </figcaption>
        </div>
        <span className="mt-1 inline-flex items-center gap-2 text-[10px] text-white/48">
          <span className="size-1.5 rounded-full bg-[#6bd4c7] shadow-[0_0_12px_rgba(107,212,199,.8)]" />{' '}
          LIVE LOGIC
        </span>
      </div>
      <div className="direction-scene-body min-h-0 flex-1 py-5 sm:py-6">
        {variant === 'sales' ? <SalesScene /> : null}
        {variant === 'logistics' ? <LogisticsScene /> : null}
        {variant === 'production' ? <ProductionScene /> : null}
        {variant === 'documents' ? <DocumentsScene /> : null}
      </div>
    </figure>
  );
}
