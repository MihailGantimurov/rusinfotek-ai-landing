import type { Metadata } from 'next';

import { CatalogPageContent } from '@/components/catalog/CatalogPageContent';

export const metadata: Metadata = {
  title: 'Каталог AI-решений — РусИнфоТек',
  description:
    'Модульные AI-продукты РусИнфоТек для продаж, логистики, производства и документооборота.',
  alternates: { canonical: '/catalog' },
};

export default function CatalogPage() {
  return <CatalogPageContent />;
}
