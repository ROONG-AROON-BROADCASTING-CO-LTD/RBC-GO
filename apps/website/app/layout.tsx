import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { cookies } from 'next/headers';
import localFont from 'next/font/local';
import Script from 'next/script';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { WebsiteThemeProvider } from './WebsiteThemeProvider';
import { indexable, siteUrl } from './site';
import { languageCookieName, normalizeLanguage } from '../src/data/language';

const languageCookieMigration = `
  (() => {
    try {
      const key = '${languageCookieName}';
      if (document.cookie.split('; ').some((entry) => entry.startsWith(key + '='))) return;

      const language = window.localStorage.getItem(key);
      if (language !== 'en' && language !== 'th') return;

      document.cookie = key + '=' + language + '; Path=/; Max-Age=31536000; SameSite=Lax';
      window.location.reload();
    } catch {}
  })();
`;

const inter = localFont({
  src: './fonts/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-inter',
  display: 'swap',
  // Inter is used for selected Latin labels, but Kanit is the primary
  // above-the-fold font on Thai pages. Avoid preloading an asset that is
  // commonly unused during the initial render.
  preload: false,
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

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const language = normalizeLanguage(
    cookieStore.get(languageCookieName)?.value,
  );

  return (
    <html lang={language} className={`${inter.variable} ${kanit.variable}`}>
      <body>
        <Script id="language-cookie-migration" strategy="beforeInteractive">
          {languageCookieMigration}
        </Script>
        <AppRouterCacheProvider>
          <WebsiteThemeProvider initialLanguage={language}>
            {children}
          </WebsiteThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
