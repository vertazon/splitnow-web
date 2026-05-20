import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { APP_NAME, APP_DESCRIPTION } from '@/lib/config';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${APP_NAME} — Split expenses in 2 taps`,
  description: APP_DESCRIPTION,
  keywords: ['expense splitting', 'split bills', 'roommates', 'UPI', 'India', 'friends'],
  openGraph: {
    title: `${APP_NAME} — Split expenses in 2 taps`,
    description: APP_DESCRIPTION,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
