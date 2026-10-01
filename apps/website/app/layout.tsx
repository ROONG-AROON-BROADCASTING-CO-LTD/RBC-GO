import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { description, indexable, siteUrl } from '../src/lib/site';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'RBC GO | เช่าจักรยานไฟฟ้าและสกู๊ตเตอร์ไฟฟ้า',
    template: '%s | RBC GO',
  },
  description,
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    siteName: 'RBC GO',
    title: 'RBC GO',
    description,
    url: siteUrl,
  },
  twitter: { card: 'summary_large_image', title: 'RBC GO', description },
  robots: { index: indexable, follow: indexable },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050706',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
