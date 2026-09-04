import type { Metadata } from 'next';

import { SolutionPage } from '@/components/solutions/SolutionPage';
import { solutionPages } from '@/content/solution-pages';

export const metadata: Metadata = {
  title: 'AI для производства — РусИнфоТек',
  description:
    'Автоматизация проектных расчётов, мониторинга процессов и контроля производственных отклонений.',
  alternates: { canonical: '/solutions/production' },
};

export default function ProductionPage() {
  return <SolutionPage content={solutionPages.production} />;
}
