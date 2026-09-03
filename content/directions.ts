export type DirectionVisual = 'sales' | 'logistics' | 'production' | 'documents';

export type Direction = {
  number: string;
  title: string;
  href: string;
  description: string;
  modules: string[];
  visual: DirectionVisual;
  layout: 'split' | 'overlay' | 'reverse' | 'editorial';
  mediaDirection: string;
};

export const directions: Direction[] = [
  {
    number: '01',
    title: 'Продажи',
    href: '/solutions/sales',
    description: 'Согласованная работа с лидами, сделками и клиентскими коммуникациями.',
    modules: [
      'Приём и обработка лидов',
      'Формирование КП и договоров',
      'Координация сделок',
      'Работа с клиентской базой',
      'Лидогенерация',
    ],
    visual: 'sales',
    layout: 'split',
    mediaDirection: 'Коммерческая команда и клиентская коммуникация',
  },
  {
    number: '02',
    title: 'Логистика',
    href: '/solutions/logistics',
    description: 'Единая среда для заявок, перевозок, документов и управления операционным контуром.',
    modules: [
      'Приём и обработка заявок',
      'Расчёт стоимости и КП',
      'Организация перевозок',
      'Мониторинг перевозок',
      'Документооборот',
      'Аналитика и управление рентабельностью',
    ],
    visual: 'logistics',
    layout: 'overlay',
    mediaDirection: 'Диспетчерская среда, транспорт и маршруты',
  },
  {
    number: '03',
    title: 'Производство',
    href: '/solutions/production',
    description: 'Цифровая поддержка расчётов и контроля процессов на производственной площадке.',
    modules: [
      'Автоматизация проектных расчётов',
      'Мониторинг производственных процессов',
    ],
    visual: 'production',
    layout: 'reverse',
    mediaDirection: 'Современное производство и digital inspection',
  },
  {
    number: '04',
    title: 'Документооборот',
    href: '/solutions/documents',
    description: 'Документы создаются и проверяются внутри общей логики корпоративных процессов.',
    modules: ['Генерация и проверка документов'],
    visual: 'documents',
    layout: 'editorial',
    mediaDirection: 'Рабочее пространство и корпоративный digital workflow',
  },
];
