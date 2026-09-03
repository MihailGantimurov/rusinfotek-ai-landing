export type Direction = {
  number: string;
  title: string;
  href: string;
  modules: string[];
  layout: string;
};

export const directions: Direction[] = [
  {
    number: '01',
    title: 'Продажи',
    href: '/solutions/sales',
    modules: [
      'Приём и обработка лидов',
      'Формирование КП и договоров',
      'Координация сделок',
      'Работа с клиентской базой',
      'Лидогенерация',
    ],
    layout: 'lg:col-span-7',
  },
  {
    number: '02',
    title: 'Логистика',
    href: '/solutions/logistics',
    modules: [
      'Приём и обработка заявок',
      'Расчёт стоимости и КП',
      'Организация перевозок',
      'Мониторинг перевозок',
      'Документооборот',
      'Аналитика и управление рентабельностью',
    ],
    layout: 'lg:col-span-5',
  },
  {
    number: '03',
    title: 'Производство',
    href: '/solutions/production',
    modules: [
      'Автоматизация проектных расчётов',
      'Мониторинг производственных процессов',
    ],
    layout: 'lg:col-span-5',
  },
  {
    number: '04',
    title: 'Документооборот',
    href: '/solutions/documents',
    modules: ['Генерация и проверка документов'],
    layout: 'lg:col-span-7',
  },
];
