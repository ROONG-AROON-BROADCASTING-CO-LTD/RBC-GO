import type { Locale } from './landing';
const copy = {
  en: {
    footer: ['Electric journeys.', 'A brighter city.'],
    explore: 'Explore',
    support: 'Support',
    legal: 'Legal',
    safety: 'Safety',
    contact: 'Contact support',
    terms: 'Terms of service',
    privacy: 'Privacy policy',
    cookies: 'Cookie policy',
    supportTitle: 'Support is getting ready.',
    supportCopy:
      'Support channels will be published before launch. For now, the ride guide and FAQs explain the planned service.',
    policyTitle: 'Service policies',
    policyCopy:
      'Terms, privacy and cookie policies will be published before the service opens. This website currently provides information about the planned service.',
    guide: 'Ride guide',
    coming: 'COMING SOON IN BANGKOK',
  },
  th: {
    footer: ['การเดินทางด้วยพลังงานไฟฟ้า', 'เพื่อเมืองที่ดีขึ้น'],
    explore: 'สำรวจ',
    support: 'ช่วยเหลือ',
    legal: 'ข้อมูลบริการ',
    safety: 'ความปลอดภัย',
    contact: 'ติดต่อทีมช่วยเหลือ',
    terms: 'ข้อกำหนดบริการ',
    privacy: 'นโยบายความเป็นส่วนตัว',
    cookies: 'นโยบายคุกกี้',
    supportTitle: 'ทีมช่วยเหลือกำลังเตรียมพร้อม',
    supportCopy:
      'ช่องทางติดต่อจะแจ้งก่อนเปิดบริการ ขณะนี้ดูแนวทางการใช้บริการได้จากคู่มือและคำถามที่พบบ่อย',
    policyTitle: 'นโยบายการบริการ',
    policyCopy:
      'ข้อกำหนดบริการ นโยบายความเป็นส่วนตัว และคุกกี้จะเผยแพร่ก่อนเปิดบริการ เว็บไซต์นี้แสดงข้อมูลเกี่ยวกับบริการที่กำลังเตรียมเปิด',
    guide: 'คู่มือการใช้งาน',
    coming: 'เตรียมพบกันเร็ว ๆ นี้ที่กรุงเทพฯ',
  },
};
export function websiteCopy(locale: Locale) {
  return copy[locale];
}
