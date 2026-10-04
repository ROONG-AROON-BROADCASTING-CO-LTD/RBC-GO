import type { Metadata } from 'next';
import { siteUrl } from './site';
import { type Locale, type Page, text, pages } from '../src/data/landing';

function pageHref(page?: Page) {
  return page ? `/${page}` : '/';
}
export function pageMetadata(locale: Locale, page?: Page): Metadata {
  const t = text[locale];
  const title = page
    ? t.nav[pages.indexOf(page)]
    : locale === 'en'
      ? 'Electric rides for your city'
      : 'รถไฟฟ้าเพื่อการเดินทางในเมือง';
  return {
    metadataBase: siteUrl,
    title: { absolute: `RBC GO | ${title}` },
    description: t.description,
    alternates: {
      canonical: pageHref(page),
    },
    openGraph: {
      type: 'website',
      siteName: 'RBC GO',
      images: ['/opengraph-image'],
      title: `RBC GO | ${title}`,
      description: t.description,
      url: pageHref(page),
      locale: locale === 'en' ? 'en_US' : 'th_TH',
      alternateLocale: locale === 'en' ? 'th_TH' : 'en_US',
    },
  };
}
