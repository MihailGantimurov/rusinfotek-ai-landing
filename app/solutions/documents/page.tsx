import type { Metadata } from 'next';

import { SolutionPage } from '@/components/solutions/SolutionPage';
import { solutionPages } from '@/content/solution-pages';

export const metadata: Metadata = {
  title: 'AI-документооборот — РусИнфоТек',
  description:
    'Генерация, проверка и согласование документов в связке с CRM, 1С, ERP и ЭДО.',
  alternates: { canonical: '/solutions/documents' },
};

export default function DocumentsPage() {
  return <SolutionPage content={solutionPages.documents} />;
}
