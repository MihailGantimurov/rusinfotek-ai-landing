import type { Metadata } from 'next';

import { SolutionPage } from '@/components/solutions/SolutionPage';
import { solutionPages } from '@/content/solution-pages';

export const metadata: Metadata = {
  title: 'AI-автоматизация продаж — РусИнфоТек',
  description:
    'Обработка лидов, квалификация, КП, договоры и контроль сделок внутри CRM-контура компании.',
  alternates: { canonical: '/solutions/sales' },
};

export default function SalesPage() {
  return <SolutionPage content={solutionPages.sales} />;
}
