import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { APP_NAME, APP_DESCRIPTION, SITE_URL } from '@/lib/config';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} — Split expenses in 2 taps`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    'expense splitting', 'split bills', 'roommates', 'UPI', 'India',
    'friends', 'expense tracker', 'group expenses', 'flatmates',
  ],
  authors: [{ name: APP_NAME, url: SITE_URL }],
  creator: APP_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: `${APP_NAME} — Split expenses in 2 taps`,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    type: 'website',
    url: SITE_URL,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} — Split expenses in 2 taps`,
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
