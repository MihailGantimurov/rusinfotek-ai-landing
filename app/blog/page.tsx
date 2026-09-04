import type { Metadata } from 'next';

import { BlogPageContent } from '@/components/internal/BlogPageContent';

export const metadata: Metadata = {
  title: 'Блог об AI-автоматизации — РусИнфоТек',
  description:
    'Архитектура, внедрение и безопасность AI-систем на языке бизнес-процессов.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
