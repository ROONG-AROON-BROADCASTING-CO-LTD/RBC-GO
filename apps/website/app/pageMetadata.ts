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
            'Motorcycle, car, yacht and aircraft rentals',
            'Explore rental services by road, sea and air with RBC GO. Electric motorcycles, cars, yachts and aircraft for your travel plans.',
          ],
          rides: [
            'Explore vehicle rentals',
            'Discover electric motorcycle, car, yacht and aircraft rental categories and the details to consider for each journey.',
          ],
          'how-it-works': [
            'Rental guide',
            'Choose your vehicle category, prepare your travel details and review rental requirements.',
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
            'RBC GO รวมทางเลือกการเช่าสำหรับการเดินทางบนถนน กลางทะเล และบนท้องฟ้า เลือกบริการให้เหมาะกับทุกโอกาส',
          ],
          rides: [
            'สำรวจยานพาหนะให้เช่า',
            'เลือกบริการเช่ามอเตอร์ไซค์ไฟฟ้า รถยนต์ เรือยอชต์ และเครื่องบิน พร้อมรายละเอียดสำหรับวางแผนการเดินทาง',
          ],
          'how-it-works': [
            'วิธีการเช่า',
            'เลือกประเภทยานพาหนะ เตรียมรายละเอียดทริป และตรวจสอบเงื่อนไขก่อนเช่า',
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
  const keywords =
    locale === 'en'
      ? [
          'RBC GO',
          'electric motorcycle',
          'car rental',
          'yacht charter',
          'aircraft charter',
          'vehicle rentals',
        ]
      : [
          'RBC GO',
          'มอเตอร์ไซค์ไฟฟ้า',
          'เช่ารถยนต์',
          'เช่าเรือยอชต์',
          'เช่าเครื่องบิน',
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
