export type Locale = 'en' | 'th';
export const pages = [
  'rides',
  'how-it-works',
  'pricing',
  'about',
  'help',
] as const;
export type Page = (typeof pages)[number];
export const text = {
  en: {
    nav: ['Our rides', 'How it works', 'Pricing', 'About', 'Help'],
    explore: 'Explore the rides',
    login: 'Open RBC GO',
    coming: 'COMING SOON IN BANGKOK',
    headline: ['Less traffic.', 'More living.'],
    intro: 'Your city. Your pace.',
    description: 'Electric bikes and scooters for the journeys in between.',
    find: 'Find your ride',
    how: 'See how it works',
    fleet: 'Two ways to move.',
    meet: 'Meet the fleet',
    benefits: [
      [
        'Made for the everyday',
        'A different way to experience the city you love.',
      ],
      [
        'A wallet. A simple start.',
        'Top up your RBC GO card before your next journey.',
      ],
      [
        'Pay for the distance',
        'Your journey is billed by the distance you travel.',
      ],
    ],
    bike: 'Electric bike',
    scooter: 'Electric scooter',
    bikeCopy:
      'A fresh perspective on your everyday route. Sit back, pedal, and find your own rhythm.',
    scooterCopy:
      'Make the in-between moments count. A compact way to connect your day.',
    stepsTitle: 'A few taps. A new way to go.',
    steps: [
      ['Top up', 'Add funds to your RBC GO card through the mobile web app.'],
      [
        'Scan & check',
        'Scan the vehicle QR code. Check the vehicle, balance and rate before unlocking.',
      ],
      [
        'Ride & return',
        'Follow local riding rules, return to a designated area, and review your distance and fare.',
      ],
    ],
    cta: 'Your city is waiting.',
    ctaCopy: 'Meet a new way to move through it.',
    footer: 'Small journeys. New possibilities.',
    status: 'Service is in preparation. Live rides are not available yet.',
    ridesTitle: 'Find your kind of freedom.',
    ridesIntro:
      'Two electric rides. One simple idea: make the everyday journey feel a little better.',
    detail: 'Meet your next ride',
    specifications:
      'Vehicle specifications, availability and riding areas will be confirmed before launch.',
    howTitle: 'Your next journey starts here.',
    howIntro:
      'A prepaid card, a quick scan, and a clear view of your journey. Everything starts on your phone.',
    safety: 'A good ride starts with care.',
    safetyCopy:
      'Check the vehicle before you ride, wear a helmet, follow local rules and keep pedestrian paths clear. Always park in a designated return area.',
    pricingTitle: 'Go further. Keep it simple.',
    pricingIntro:
      'Top up your card. Ride your route. Pay according to the distance you travel.',
    rate: 'A clear rate before you ride.',
    rateCopy:
      'Rates and payment methods will be published before launch. The mobile app will show the applicable rate before you confirm a ride.',
    pricingNotes: [
      [
        '01',
        'Prepaid balance',
        'Your RBC GO card holds the balance used for your journey.',
      ],
      [
        '02',
        'Distance-based fare',
        'The journey summary records your distance and the resulting fare.',
      ],
      [
        '03',
        'Before you confirm',
        'Review the rate and available balance before starting.',
      ],
    ],
    aboutTitle: 'A little change. A better city.',
    aboutIntro:
      'We believe the journeys between your destinations deserve a better experience.',
    mission: 'Built around everyday life.',
    missionCopy:
      'RBC GO is bringing together electric bikes, scooters and a mobile-first web app. Our goal is to make short journeys easier to understand, easier to start, and easier to fit into your day.',
    connection: 'Connected by design.',
    connectionCopy:
      'Vehicle connectivity will link QR access, trip distance and vehicle status. Payment and IoT integrations are still being prepared ahead of launch.',
    helpTitle: 'Good questions. Clear answers.',
    helpIntro: 'Get to know your card, your ride, and the journey ahead.',
    search: 'Search questions',
    categories: [
      'All questions',
      'Getting started',
      'Wallet & pricing',
      'Riding',
    ],
    empty: 'No matching questions. Try “card”, “rate” or “ride”.',
    faq: [
      [
        'Getting started',
        'Is RBC GO available now?',
        'RBC GO is preparing to launch. Live vehicle rentals, payments and vehicle connectivity are not available yet.',
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
        'Use your phone to scan the QR code on the vehicle, review its status, your balance and the rate, then confirm when the service is available.',
      ],
      [
        'Riding',
        'Where should I return the vehicle?',
        'Return to a designated area and follow the instructions in the mobile app. Service areas and return locations will be announced before launch.',
      ],
      [
        'Getting started',
        'How do I contact support?',
        'Support channels will be published before launch. The ride guide and FAQs currently explain the planned service.',
      ],
    ],
    helpMore: 'Still getting to know us?',
    helpMoreCopy:
      'Explore the ride guide for the planned journey from top-up to return.',
  },
  th: {
    nav: ['รถของเรา', 'วิธีใช้งาน', 'ค่าบริการ', 'เกี่ยวกับเรา', 'ช่วยเหลือ'],
    explore: 'สำรวจรถของเรา',
    login: 'เข้าสู่ระบบ RBC GO',
    coming: 'เตรียมพบกันเร็ว ๆ นี้ที่กรุงเทพฯ',
    headline: ['รถติดน้อยลง', 'ใช้ชีวิตมากขึ้น'],
    intro: 'เมืองของคุณ ในจังหวะของคุณ',
    description: 'จักรยานไฟฟ้าและสกู๊ตเตอร์ไฟฟ้า เพื่อทุกช่วงของการเดินทาง',
    find: 'ค้นหารถที่ใช่',
    how: 'ดูวิธีใช้งาน',
    fleet: 'สองทางเลือก ทุกจังหวะชีวิต',
    meet: 'รู้จักรถของเรา',
    benefits: [
      ['เพื่อการเดินทางทุกวัน', 'มองเมืองที่คุณรักในมุมใหม่'],
      ['วอลเล็ตพร้อม ก็เริ่มได้', 'เติมเงินเข้าบัตร RBC GO ก่อนออกเดินทาง'],
      ['จ่ายตามระยะทาง', 'คิดค่าบริการตามระยะทางที่คุณเดินทาง'],
    ],
    bike: 'จักรยานไฟฟ้า',
    scooter: 'สกู๊ตเตอร์ไฟฟ้า',
    bikeCopy: 'เปลี่ยนเส้นทางเดิมให้รู้สึกใหม่ นั่งสบาย ปั่นไปในจังหวะของคุณ',
    scooterCopy: 'เติมความหมายให้การเดินทางระหว่างวัน ด้วยรถขนาดกะทัดรัด',
    stepsTitle: 'ไม่กี่ขั้นตอน ก็พร้อมเดินทาง',
    steps: [
      ['เติมเงิน', 'เติมเงินเข้าบัตร RBC GO ผ่านเว็บแอปบนมือถือ'],
      [
        'สแกนและตรวจสอบ',
        'สแกน QR บนรถ ตรวจสอบสถานะรถ ยอดเงิน และอัตราค่าบริการก่อนปลดล็อก',
      ],
      [
        'เดินทางและคืนรถ',
        'ปฏิบัติตามกฎ จอดคืนในพื้นที่ที่กำหนด และตรวจสอบระยะทางกับค่าบริการ',
      ],
    ],
    cta: 'เมืองของคุณรออยู่',
    ctaCopy: 'พบกับวิธีใหม่ในการเดินทาง',
    footer: 'การเดินทางเล็ก ๆ กับความเป็นไปได้ใหม่',
    status: 'ระบบอยู่ระหว่างเตรียมเปิดบริการ ยังไม่สามารถเช่ารถจริงได้',
    ridesTitle: 'อิสระในแบบที่คุณเลือก',
    ridesIntro:
      'รถไฟฟ้าสองรูปแบบ กับแนวคิดเดียวกัน: ทำให้การเดินทางทุกวันรู้สึกดีขึ้น',
    detail: 'รู้จักรถคันต่อไปของคุณ',
    specifications:
      'รายละเอียดรถ พื้นที่บริการ และจำนวนรถจะแจ้งให้ทราบก่อนเปิดบริการ',
    howTitle: 'การเดินทางครั้งต่อไปเริ่มที่นี่',
    howIntro:
      'บัตรเติมเงิน สแกนง่าย และข้อมูลการเดินทางที่ชัดเจน ทุกอย่างเริ่มบนมือถือ',
    safety: 'การเดินทางที่ดี เริ่มจากความใส่ใจ',
    safetyCopy:
      'ตรวจสอบรถก่อนใช้ สวมหมวกกันน็อก ปฏิบัติตามกฎในพื้นที่ ไม่กีดขวางทางเดิน และคืนรถในจุดที่กำหนดเสมอ',
    pricingTitle: 'ไปได้ไกล เข้าใจได้ง่าย',
    pricingIntro: 'เติมเงินเข้าบัตร เลือกเส้นทาง แล้วจ่ายตามระยะทางที่เดินทาง',
    rate: 'รู้ค่าบริการ ก่อนออกเดินทาง',
    rateCopy:
      'อัตราค่าบริการและวิธีชำระเงินจะประกาศก่อนเปิดบริการ เว็บแอปจะแสดงอัตราที่ใช้ก่อนยืนยันเริ่มเดินทาง',
    pricingNotes: [
      [
        '01',
        'ยอดเงินแบบเติมล่วงหน้า',
        'บัตร RBC GO เก็บยอดเงินสำหรับชำระค่าการเดินทาง',
      ],
      ['02', 'คิดตามระยะทาง', 'สรุปการเดินทางจะแสดงระยะทางและค่าบริการ'],
      [
        '03',
        'ตรวจสอบก่อนยืนยัน',
        'ดูอัตราค่าบริการและยอดเงินที่มี ก่อนเริ่มใช้รถ',
      ],
    ],
    aboutTitle: 'เปลี่ยนทีละนิด เพื่อเมืองที่ดีขึ้น',
    aboutIntro:
      'เราเชื่อว่าการเดินทางระหว่างจุดหมาย ควรเป็นประสบการณ์ที่ดีขึ้น',
    mission: 'ออกแบบจากชีวิตประจำวัน',
    missionCopy:
      'RBC GO เชื่อมจักรยานไฟฟ้า สกู๊ตเตอร์ไฟฟ้า และเว็บแอปที่ออกแบบเพื่อมือถือ ให้การเดินทางระยะสั้นเข้าใจง่าย เริ่มได้สะดวก และเข้ากับชีวิตในแต่ละวัน',
    connection: 'เชื่อมต่ออย่างตั้งใจ',
    connectionCopy:
      'ระบบเชื่อมต่อรถจะรองรับการสแกน QR ระยะทาง และสถานะรถ ขณะนี้ระบบชำระเงินและ IoT ยังอยู่ระหว่างเตรียมความพร้อมก่อนเปิดบริการ',
    helpTitle: 'ทุกคำถาม มีคำตอบชัดเจน',
    helpIntro: 'รู้จักบัตร รถ และการเดินทางครั้งต่อไปของคุณ',
    search: 'ค้นหาคำถาม',
    categories: ['ทุกคำถาม', 'เริ่มใช้งาน', 'วอลเล็ตและราคา', 'การเดินทาง'],
    empty: 'ไม่พบคำถาม ลองค้นหา “บัตร” “ราคา” หรือ “รถ”',
    faq: [
      [
        'เริ่มใช้งาน',
        'RBC GO เปิดบริการแล้วหรือยัง?',
        'กำลังเตรียมเปิดบริการ ยังไม่สามารถเช่ารถ ชำระเงิน หรือเชื่อมต่อรถจริงได้ในขณะนี้',
      ],
      [
        'เริ่มใช้งาน',
        'ต้องดาวน์โหลดแอปหรือไม่?',
        'RBC GO เป็นเว็บแอปสำหรับมือถือ เปิดเว็บไซต์ผ่านสมาร์ทโฟนเพื่อดูปุ่มเข้าสู่ระบบ',
      ],
      [
        'วอลเล็ตและราคา',
        'บัตร RBC GO ใช้งานอย่างไร?',
        'บัตรเชื่อมกับวอลเล็ตแบบเติมเงินล่วงหน้า เติมยอดเงินก่อนออกเดินทาง วิธีเติมเงินที่รองรับจะแจ้งก่อนเปิดบริการ',
      ],
      [
        'วอลเล็ตและราคา',
        'ค่าบริการเท่าไร?',
        'คิดตามระยะทาง อัตราค่าบริการจะประกาศก่อนเปิดบริการ และแสดงให้ดูในเว็บแอปก่อนยืนยันใช้รถ',
      ],
      [
        'การเดินทาง',
        'เริ่มใช้รถอย่างไร?',
        'ใช้มือถือสแกน QR บนรถ ตรวจสอบสถานะรถ ยอดเงิน และราคา จากนั้นยืนยันเมื่อเปิดบริการแล้ว',
      ],
      [
        'การเดินทาง',
        'คืนรถที่ไหน?',
        'คืนรถในพื้นที่ที่กำหนดตามคำแนะนำในเว็บแอป จุดคืนรถและพื้นที่บริการจะแจ้งก่อนเปิดบริการ',
      ],
      [
        'เริ่มใช้งาน',
        'ติดต่อทีมช่วยเหลืออย่างไร?',
        'ช่องทางติดต่อจะแจ้งก่อนเปิดบริการ ขณะนี้ดูแนวทางการใช้งานได้จากคู่มือและคำถามที่พบบ่อย',
      ],
    ],
    helpMore: 'อยากรู้จักเราอีกหน่อย?',
    helpMoreCopy: 'อ่านคู่มือการเดินทาง ตั้งแต่เติมเงินจนถึงคืนรถ',
  },
};
export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'th';
}
export function isPage(value: string): value is Page {
  return (pages as readonly string[]).includes(value);
}
