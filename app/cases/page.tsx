import type { Metadata } from 'next';

import { CasesPageContent } from '@/components/internal/CasesPageContent';

export const metadata: Metadata = {
  title: 'Кейсы AI-автоматизации — РусИнфоТек',
  description:
    'Реальные проекты РусИнфоТек: AI-экосистема, исходящая квалификация и мультиканальный AI-консультант.',
  alternates: { canonical: '/cases' },
};

export default function CasesPage() {
  return <CasesPageContent />;
}
