import type { Metadata } from 'next';
import { siteUrl } from './site';
import { type Locale, type Page } from '../src/data/landing';

function pageHref(page?: Page) {
  return page ? `/${page}` : '/';
}
export function pageMetadata(locale: Locale, page?: Page): Metadata {
  const seo =
    locale === 'en'
      ? {
          home: [
            'Electric motorcycle for Bangkok',
            'RBC GO is a prepaid, mobile-first electric motorcycle service designed for simple city journeys in Bangkok.',
          ],
          rides: [
            'RBC GO electric motorcycle',
            'Explore the RBC GO electric motorcycle, its city-ready design and the details built for everyday riding.',
          ],
          'how-it-works': [
            'How RBC GO works',
            'Learn how to top up, scan a motorcycle and complete an easy electric journey with RBC GO.',
          ],
          pricing: [
            'RBC GO pricing',
            'Understand how distance-based pricing, prepaid balance and trip summaries work with RBC GO.',
          ],
          about: [
            'About RBC GO',
            'Discover the idea behind RBC GO and our vision for cleaner, simpler urban travel in Bangkok.',
          ],
          help: [
            'RBC GO help and FAQs',
            'Find clear answers about RBC GO availability, cards, pricing, riding and service support.',
          ],
        }
      : {
          home: [
            'มอเตอร์ไซค์ไฟฟ้าสำหรับกรุงเทพฯ',
            'RBC GO บริการมอเตอร์ไซค์ไฟฟ้าแบบเติมเงิน ออกแบบเพื่อการเดินทางในเมืองที่ง่ายขึ้นสำหรับกรุงเทพฯ',
          ],
          rides: [
            'มอเตอร์ไซค์ไฟฟ้า RBC GO',
            'รู้จักมอเตอร์ไซค์ไฟฟ้า RBC GO ดีไซน์เพื่อการเดินทางในเมืองและรายละเอียดที่คิดมาเพื่อการใช้งานทุกวัน',
          ],
          'how-it-works': [
            'วิธีใช้งาน RBC GO',
            'เรียนรู้วิธีเติมเงิน สแกนมอเตอร์ไซค์ และเริ่มต้นการเดินทางด้วย RBC GO อย่างง่ายดาย',
          ],
          pricing: [
            'ค่าบริการ RBC GO',
            'ทำความเข้าใจค่าบริการตามระยะทาง ยอดเงินแบบเติมล่วงหน้า และสรุปการเดินทางของ RBC GO',
          ],
          about: [
            'เกี่ยวกับ RBC GO',
            'รู้จักแนวคิดและวิสัยทัศน์ของ RBC GO เพื่อการเดินทางในเมืองที่สะอาดและง่ายขึ้นในกรุงเทพฯ',
          ],
          help: [
            'ช่วยเหลือและคำถามที่พบบ่อย - RBC GO',
            'ค้นหาคำตอบเกี่ยวกับบริการ บัตร ค่าบริการ การใช้งาน และการเดินทางด้วย RBC GO',
          ],
        };
  const key = page ?? 'home';
  const [title, description] = seo[key];
  const keywords =
    locale === 'en'
      ? [
          'RBC GO',
          'electric motorcycle',
          'electric mobility',
          'Bangkok transport',
          'QR ride',
          'prepaid motorcycle service',
        ]
      : [
          'RBC GO',
          'มอเตอร์ไซค์ไฟฟ้า',
          'การเดินทางในเมือง',
          'กรุงเทพฯ',
          'สแกน QR',
          'บริการมอเตอร์ไซค์แบบเติมเงิน',
        ];
  const pageUrl = pageHref(page);
  const fullTitle = `RBC GO - ${title}`;
  return {
    metadataBase: siteUrl,
    title: { absolute: fullTitle },
    description,
    keywords,
    applicationName: 'RBC GO',
    authors: [{ name: 'RBC GO' }],
    creator: 'RBC GO',
    publisher: 'RBC GO',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      siteName: 'RBC GO',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      title: fullTitle,
      description,
      url: pageUrl,
      locale: locale === 'en' ? 'en_US' : 'th_TH',
      alternateLocale: locale === 'en' ? 'th_TH' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/opengraph-image'],
    },
  };
}
