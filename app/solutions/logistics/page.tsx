import type { Metadata } from 'next';

import { SolutionPage } from '@/components/solutions/SolutionPage';
import { solutionPages } from '@/content/solution-pages';

export const metadata: Metadata = {
  title: 'AI-автоматизация логистики — РусИнфоТек',
  description:
    'Единый маршрут заявки: расчёт, организация перевозки, мониторинг, документы и рентабельность.',
  alternates: { canonical: '/solutions/logistics' },
};

export default function LogisticsPage() {
  return <SolutionPage content={solutionPages.logistics} />;
}
