import type { Metadata } from 'next';
import { siteUrl } from './site';
import { type Locale, type Page } from '../src/data/landing';

function pageHref(page?: Page) {
  return page ? `/${page}` : '/';
}
export function pageSeoCopy(locale: Locale, page?: Page) {
  const seo =
    locale === 'en'
      ? {
          home: [
            'Motorcycle, car, yacht and aircraft rentals',
            'Explore station-based electric motorcycle rentals, owner-supplied rental cars, and private yacht and aircraft charters. Entrust your unused car to RBC GO for rental.',
          ],
          rides: [
            'Explore vehicle rentals',
            'Find station-based electric motorcycles, cars entrusted by their owners, yacht charters and aircraft charters, with details for renters and car owners.',
          ],
          'how-it-works': [
            'Rental guide',
            'Learn how station-based motorcycle rentals, owner-supplied car rentals and private yacht and aircraft charters work.',
          ],
          pricing: [
            'Rental pricing and details',
            'Understand the rental duration, locations, inclusions and terms to review before renting a vehicle.',
          ],
          about: [
            'About RBC GO',
            'Discover RBC GO and a wider choice of rental services for journeys by road, sea and air.',
          ],
          help: [
            'RBC GO help and FAQs',
            'Find answers about rental categories, availability, pricing, required documents and service terms.',
          ],
        }
      : {
          home: [
            'เช่ามอเตอร์ไซค์ไฟฟ้า รถยนต์ เรือยอชต์ และเครื่องบิน',
            'RBC GO มอเตอร์ไซค์ไฟฟ้าให้เช่าตามสถานี รถยนต์จากเจ้าของที่ฝากปล่อยเช่า เรือยอชต์เหมาลำ และเครื่องบินเหมาลำ พร้อมข้อมูลสำหรับเจ้าของรถ',
          ],
          rides: [
            'สำรวจยานพาหนะให้เช่า',
            'สำรวจมอเตอร์ไซค์ไฟฟ้าตามสถานี รถยนต์ที่เจ้าของฝากปล่อยเช่า เรือยอชต์เหมาลำ และเครื่องบินเหมาลำ พร้อมรายละเอียดแต่ละบริการ',
          ],
          'how-it-works': [
            'วิธีการเช่า',
            'รู้จักวิธีเช่ามอเตอร์ไซค์ไฟฟ้าตามสถานี การเช่าและฝากรถยนต์ปล่อยเช่า รวมถึงการเช่าเรือยอชต์และเครื่องบินแบบเหมาลำ',
          ],
          pricing: [
            'ข้อมูลค่าเช่าและเงื่อนไข',
            'รายละเอียดระยะเวลา สถานที่ บริการที่รวม และเงื่อนไขที่ควรตรวจสอบก่อนเช่ายานพาหนะ',
          ],
          about: [
            'เกี่ยวกับ RBC GO',
            'รู้จัก RBC GO กับทางเลือกการเช่าที่ครอบคลุมทั้งบนถนน กลางทะเล และบนท้องฟ้า',
          ],
          help: [
            'ช่วยเหลือและคำถามที่พบบ่อย - RBC GO',
            'คำถามเกี่ยวกับบริการเช่า ราคา เอกสาร ความพร้อมให้บริการ และเงื่อนไขการเช่า RBC GO',
          ],
        };
  const key = page ?? 'home';
  const [title, description] = seo[key];
  return { title, description };
}

export function pageMetadata(locale: Locale, page?: Page): Metadata {
  const { title, description } = pageSeoCopy(locale, page);
  const keywords =
    locale === 'en'
      ? [
          'RBC GO',
          'electric motorcycle',
          'station-based motorcycle rental',
          'rent out your car',
          'car rental',
          'yacht charter',
          'aircraft charter',
          'vehicle rentals',
        ]
      : [
          'RBC GO',
          'มอเตอร์ไซค์ไฟฟ้า',
          'เช่ามอเตอร์ไซค์ตามสถานี',
          'ฝากรถปล่อยเช่า',
          'เช่ารถยนต์',
          'เช่าเรือยอชต์เหมาลำ',
          'เช่าเครื่องบินเหมาลำ',
          'เช่ายานพาหนะ',
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
