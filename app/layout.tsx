import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
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
    'Модульная AI-автоматизация полного цикла: от заявки до оплаты. Внедрение за 2 недели без остановки бизнеса.',
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
      'От заявки до оплаты — без ручной рутины. Модульная AI-автоматизация бизнеса.',
    url: '/',
    siteName: 'РусИнфоТек',
    images: [
      {
        url: 'https://rusinfotek-ai-automation.apocritonsapeiens.chatgpt.site/og.png',
        width: 1200,
        height: 630,
        alt: 'РусИнфоТек — от заявки до оплаты без ручной рутины',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'РусИнфоТек — AI-автоматизация бизнеса',
    description:
      'От заявки до оплаты — без ручной рутины. Модульная AI-автоматизация бизнеса.',
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
    <html lang="ru" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
