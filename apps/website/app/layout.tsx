import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { WebsiteThemeProvider } from './WebsiteThemeProvider';
import { indexable, siteUrl } from './site';

const inter = localFont({
  src: './fonts/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-inter',
  display: 'swap',
});
const kanit = localFont({
  src: [
    { path: './fonts/Kanit-Regular.ttf', weight: '400' },
    { path: './fonts/Kanit-SemiBold.ttf', weight: '600' },
    { path: './fonts/Kanit-Bold.ttf', weight: '700' },
  ],
  variable: '--font-kanit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'RBC GO - มอเตอร์ไซค์ไฟฟ้าเพื่อการเดินทางในเมือง',
    template: 'RBC GO - %s',
  },
  robots: { index: indexable, follow: indexable },
  icons: {
    icon: '/favicon.ico?v=2',
    shortcut: '/favicon.ico?v=2',
    apple: '/images/brand/rbc-go-logo.jpeg?v=2',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050706',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th" className={`${inter.variable} ${kanit.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <WebsiteThemeProvider>{children}</WebsiteThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
