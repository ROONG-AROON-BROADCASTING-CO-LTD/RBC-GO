export type Locale = 'en' | 'th';
export const pages = [
  'rides',
  'how-it-works',
  'pricing',
  'about',
  'help',
] as const;
export type Page = (typeof pages)[number];

type Content = {
  nav: string[];
  description: string;
  login: string;
  coming: string;
  meet: string;
  how: string;
  specifications: string;
  safety: string;
  safetyCopy: string;
  search: string;
  empty: string;
  faq: [string, string, string][];
};

export const text: Record<Locale, Content> = {
  en: {
    nav: ['Our motorcycle', 'How it works', 'Pricing', 'About', 'Help'],
    description:
      'A prepaid, mobile-first electric motorcycle service for Bangkok.',
    login: 'Open RBC GO',
    coming: 'COMING SOON IN BANGKOK',
    meet: 'Meet the motorcycle',
    how: 'See how it works',
    specifications:
      'Motorcycle specifications, availability and riding areas will be confirmed before launch.',
    safety: 'A good ride starts with care.',
    safetyCopy:
      'Check the motorcycle before you ride, wear a helmet, follow local rules and keep pedestrian paths clear. Always return in a designated area.',
    search: 'Search questions',
    empty: 'No matching questions. Try “card”, “rate” or “ride”.',
    faq: [
      [
        'Getting started',
        'Is RBC GO available now?',
        'RBC GO is preparing to launch. Live motorcycle rentals, payments and vehicle connectivity are not available yet.',
      ],
      [
        'Getting started',
        'Do I need to download an app?',
        'RBC GO is designed as a mobile-first web app. Open the website on a smartphone to see the entry button.',
      ],
      [
        'Wallet & pricing',
        'How does the RBC GO card work?',
        'The card is linked to a prepaid wallet. You will top up your balance before starting a journey. Supported top-up methods will be announced before launch.',
      ],
      [
        'Wallet & pricing',
        'How much does a ride cost?',
        'Fares will be based on distance. Rates will be published before launch and displayed before you confirm a ride.',
      ],
      [
        'Riding',
        'How will I start a ride?',
        'Use your phone to scan the QR code on the motorcycle, review its status, your balance and the rate, then confirm when the service is available.',
      ],
      [
        'Riding',
        'Where should I return the motorcycle?',
        'Return to a designated area and follow the instructions in the mobile app. Service areas and return locations will be announced before launch.',
      ],
      [
        'Getting started',
        'How do I contact support?',
        'Support channels will be published before launch. The ride guide and FAQs currently explain the planned service.',
      ],
    ],
  },
  th: {
    nav: [
      'มอเตอร์ไซค์ของเรา',
      'วิธีใช้งาน',
      'ค่าบริการ',
      'เกี่ยวกับเรา',
      'ช่วยเหลือ',
    ],
    description:
      'บริการมอเตอร์ไซค์ไฟฟ้าแบบเติมเงิน ออกแบบเพื่อมือถือสำหรับกรุงเทพฯ',
    login: 'เข้าสู่ระบบ RBC GO',
    coming: 'เตรียมพบกันเร็ว ๆ นี้ที่กรุงเทพฯ',
    meet: 'รู้จักมอเตอร์ไซค์',
    how: 'ดูวิธีใช้งาน',
    specifications:
      'รายละเอียดรถ พื้นที่บริการ และจำนวนรถจะแจ้งให้ทราบก่อนเปิดบริการ',
    safety: 'การเดินทางที่ดี เริ่มจากความใส่ใจ',
    safetyCopy:
      'ตรวจสอบมอเตอร์ไซค์ก่อนใช้ สวมหมวกกันน็อก ปฏิบัติตามกฎในพื้นที่ ไม่กีดขวางทางเดิน และคืนรถในจุดที่กำหนดเสมอ',
    search: 'ค้นหาคำถาม',
    empty: 'ไม่พบคำถามที่ตรงกัน ลองค้นหา “บัตร” “ราคา” หรือ “เดินทาง”',
    faq: [
      [
        'เริ่มต้นใช้งาน',
        'RBC GO เปิดให้บริการแล้วหรือยัง?',
        'RBC GO กำลังเตรียมเปิดบริการ ระบบเช่ามอเตอร์ไซค์ การชำระเงิน และการเชื่อมต่อรถยังไม่พร้อมให้ใช้งานจริง',
      ],
      [
        'เริ่มต้นใช้งาน',
        'ต้องดาวน์โหลดแอปหรือไม่?',
        'RBC GO เป็นเว็บแอปที่ออกแบบเพื่อมือถือ เปิดเว็บไซต์ผ่านสมาร์ตโฟนเพื่อเห็นปุ่มเข้าสู่ระบบ',
      ],
      [
        'วอลเล็ตและค่าบริการ',
        'บัตร RBC GO ทำงานอย่างไร?',
        'บัตรเชื่อมกับวอลเล็ตแบบเติมเงิน เติมยอดเงินก่อนเริ่มเดินทาง วิธีเติมเงินที่รองรับจะแจ้งก่อนเปิดบริการ',
      ],
      [
        'วอลเล็ตและค่าบริการ',
        'ค่าเดินทางเท่าไร?',
        'ค่าบริการจะคิดตามระยะทาง อัตราจะประกาศก่อนเปิดบริการและแสดงก่อนคุณยืนยันเริ่มเดินทาง',
      ],
      [
        'การเดินทาง',
        'เริ่มใช้งานอย่างไร?',
        'ใช้มือถือสแกน QR บนมอเตอร์ไซค์ ตรวจสอบสถานะรถ ยอดเงิน และอัตราค่าบริการ แล้วจึงยืนยันเมื่อระบบเปิดให้ใช้งาน',
      ],
      [
        'การเดินทาง',
        'ต้องคืนมอเตอร์ไซค์ที่ไหน?',
        'คืนในพื้นที่ที่กำหนดและทำตามคำแนะนำในเว็บแอป พื้นที่บริการและจุดคืนรถจะแจ้งก่อนเปิดบริการ',
      ],
      [
        'เริ่มต้นใช้งาน',
        'ติดต่อทีมช่วยเหลืออย่างไร?',
        'ช่องทางช่วยเหลือจะแจ้งก่อนเปิดบริการ ขณะนี้ดูแนวทางของบริการได้จากคู่มือและคำถามที่พบบ่อย',
      ],
    ],
  },
};
