import type { Metadata } from 'next';

import { CompanyPageContent } from '@/components/internal/CompanyPageContent';

export const metadata: Metadata = {
  title: 'Компания — РусИнфоТек',
  description:
    'Команда РусИнфоТек: бизнес-разбор, AI/ML, интеграции, информационная безопасность и эксплуатация.',
  alternates: { canonical: '/company' },
};

export default function CompanyPage() {
  return <CompanyPageContent />;
}
