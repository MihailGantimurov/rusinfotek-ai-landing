import type { Metadata } from 'next';
import { Geist_Mono, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://rusinfotek-ai-automation.apocritonsapeiens.chatgpt.site',
  ),
  title: 'РусИнфоТек — AI-автоматизация бизнеса',
  description:
    'AI-системы для автоматизации операционных процессов, интегрированные с инфраструктурой компании.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  keywords: [
    'AI-автоматизация',
    'автоматизация бизнес-процессов',
    'РусИнфоТек',
    'автоматизация продаж',
    'автоматизация логистики',
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'РусИнфоТек — AI-автоматизация бизнеса',
    description:
      'AI-системы для автоматизации операционных процессов и работы целых отделов.',
    url: '/',
    siteName: 'РусИнфоТек',
    images: [
      {
        url: 'https://rusinfotek-ai-automation.apocritonsapeiens.chatgpt.site/og.png',
        width: 1200,
        height: 630,
        alt: 'РусИнфоТек — AI-автоматизация операционных процессов',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'РусИнфоТек — AI-автоматизация бизнеса',
    description:
      'AI-системы для автоматизации операционных процессов и работы целых отделов.',
    images: [
      'https://rusinfotek-ai-automation.apocritonsapeiens.chatgpt.site/og.png',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
