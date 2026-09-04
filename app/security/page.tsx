import type { Metadata } from 'next';

import { SecurityPageContent } from '@/components/internal/SecurityPageContent';

export const metadata: Metadata = {
  title: 'Безопасность AI-систем — РусИнфоТек',
  description:
    'Архитектура данных, 152-ФЗ, размещение в контуре клиента, роли и контроль AI-действий.',
  alternates: { canonical: '/security' },
};

export default function SecurityPage() {
  return <SecurityPageContent />;
}
