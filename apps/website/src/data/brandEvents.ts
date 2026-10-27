import type { Locale } from './navigation';

export type BrandEvent = {
  slug: string;
  sourceUrl: string;
  images: string[];
  copy: Record<Locale, { date: string; title: string; detail: string }>;
};

function albumImages(slug: string, count: number) {
  return Array.from(
    { length: count },
    (_, index) =>
      `/images/events/${slug}/${String(index + 1).padStart(2, '0')}.jpg`,
  );
}

export const brandEvents: BrandEvent[] = [
  {
    slug: 'bitec-bnb-home-expo',
    sourceUrl:
      'https://www.kronos.co.th/album/22580/bitec-bnb-home-expo-2022-1102022-9102022-ไบเทคบางนา-hall-101-1-ตค-65-9-ตค-65-g2u-kronos',
    images: albumImages('bitec', 4),
    copy: {
      en: {
        date: '1–9 Oct 2022',
        title: 'BITEC — BnB Home Expo',
        detail: 'Hall 101, BITEC Bangna — KRONOS | G2U',
      },
      th: {
        date: '1–9 ต.ค. 2022',
        title: 'BITEC — BnB Home Expo',
        detail: 'Hall 101, ไบเทค บางนา — KRONOS | G2U',
      },
    },
  },
  {
    slug: 'thailand-cambodia-cross-border-trade-expo',
    sourceUrl:
      'https://www.kronos.co.th/album/22565/thailand-cambodia-cross-border-trade-expo-kronos-e-bike-distributed-by-royal-deer-k-the-crown-coltd-23-25-sep-2022-surin-province-งานการพัฒนาการค้าชายแดนไทย-กัมพูชา-สุรินทร์โมเดล-เฟส-2-23-25-กันยายน-2565-ณ-ตลาดอาเซียน-ด่านช่องจอม-อกาบเชิง-จสุ',
    images: albumImages('cross-border', 8),
    copy: {
      en: {
        date: '23–25 Sep 2022',
        title: 'Thailand–Cambodia Cross Border Trade Expo',
        detail: 'ASEAN Market, Chong Chom Border, Surin Province',
      },
      th: {
        date: '23–25 ก.ย. 2022',
        title: 'Thailand–Cambodia Cross Border Trade Expo',
        detail: 'ตลาดอาเซียน ด่านช่องจอม จังหวัดสุรินทร์',
      },
    },
  },
  {
    slug: 'central-udon-thani',
    sourceUrl:
      'https://www.kronos.co.th/album/22564/central-udon-thani-2392022-kronos-amp-g2u-รถไฟฟ้า-',
    images: albumImages('udon', 6),
    copy: {
      en: {
        date: '23 Sep 2022',
        title: 'Central Udon Thani',
        detail: 'KRONOS & G2U electric vehicle showcase',
      },
      th: {
        date: '23 ก.ย. 2022',
        title: 'Central Udon Thani',
        detail: 'กิจกรรมรถไฟฟ้า KRONOS & G2U',
      },
    },
  },
  {
    slug: 'central-ladprao',
    sourceUrl:
      'https://www.kronos.co.th/album/22563/central-ladprao-14092022-ที่งาน-itechworld-power-buy-ชั้น-1-เซ็นทรัลลาดพร้าว-kronos-g2u',
    images: albumImages('ladprao', 8),
    copy: {
      en: {
        date: '14 Sep 2022',
        title: 'Central Ladprao',
        detail: 'iTechworld Power Buy, level 1',
      },
      th: {
        date: '14 ก.ย. 2022',
        title: 'Central Ladprao',
        detail: 'งาน iTechworld Power Buy ชั้น 1',
      },
    },
  },
  {
    slug: 'siam-paragon-power-mall',
    sourceUrl:
      'https://www.kronos.co.th/album/22541/siam-paragon-power-mall-งานออกบูธ-ชั้น-4-ตั้งแต่วันที่15-2892022-kronos-g2u',
    images: albumImages('paragon', 75),
    copy: {
      en: {
        date: '15–28 Sep 2022',
        title: 'Siam Paragon / Power Mall',
        detail: 'Level 4 booth — KRONOS | G2U',
      },
      th: {
        date: '15–28 ก.ย. 2022',
        title: 'Siam Paragon / Power Mall',
        detail: 'งานออกบูธชั้น 4 — KRONOS | G2U',
      },
    },
  },
  {
    slug: 'power-buy-expo',
    sourceUrl:
      'https://www.kronos.co.th/album/22532/poweybuy-expo-august-2022-9-28-สค-65-อิมแพ็ค-เมืองทองธานี-hall-8-impact-arena-muangthong-thani',
    images: albumImages('power-buy', 9),
    copy: {
      en: {
        date: '9–28 Aug 2022',
        title: 'Power Buy Expo',
        detail: 'IMPACT Muang Thong Thani, Hall 8',
      },
      th: {
        date: '9–28 ส.ค. 2022',
        title: 'Power Buy Expo',
        detail: 'IMPACT เมืองทองธานี Hall 8',
      },
    },
  },
  {
    slug: 'central-world-itech-world',
    sourceUrl:
      'https://www.kronos.co.th/album/22515/central-world-bangkok-itech-world-july-2022-วันที่-25-กค-65-31-กค-65-kronos-g2u',
    images: albumImages('central-world', 16),
    copy: {
      en: {
        date: '25–31 Jul 2022',
        title: 'CentralWorld Bangkok — iTech World',
        detail: 'CentralWorld Bangkok — KRONOS | G2U',
      },
      th: {
        date: '25–31 ก.ค. 2022',
        title: 'CentralWorld Bangkok — iTech World',
        detail: 'เซ็นทรัลเวิลด์ กรุงเทพฯ — KRONOS | G2U',
      },
    },
  },
];

export function getBrandEvent(slug: string) {
  return brandEvents.find((event) => event.slug === slug);
}
