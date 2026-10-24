import type { Locale } from '../../data/landing';

export const rentalCategories = [
  {
    id: 'motorcycles',
    image: '/images/heroes/rides-hero.png',
    en: 'Electric motorcycles',
    th: 'มอเตอร์ไซค์ไฟฟ้า',
    enCopy: 'Move through the city at your own pace.',
    thCopy: 'คล่องตัวในเมือง ให้ทุกวันเดินทางได้ในแบบของคุณ',
    enDetail:
      'For everyday journeys and exploring the city. Choose a rental period that suits your plans and review the riding requirements before you book.',
    thDetail:
      'สำหรับการเดินทางประจำวันและสำรวจเมือง เลือกระยะเวลาเช่าให้เหมาะกับแผนของคุณ และตรวจสอบเงื่อนไขการขับขี่ก่อนจอง',
    note: [
      'ใบขับขี่และเงื่อนไขผู้ขับขี่',
      'จุดรับ–คืนและระยะเวลาเช่า',
      'อุปกรณ์และแนวทางใช้งาน',
    ],
    enNotes: [
      'Licence and rider requirements',
      'Pickup, return and rental period',
      'Equipment and riding guidance',
    ],
  },
  {
    id: 'cars',
    image: '/images/rentals/car.png',
    en: 'Cars',
    th: 'รถยนต์',
    enCopy: 'A city visit. A road trip. Your next destination.',
    thCopy: 'จากวันทำงานถึงโรดทริป เลือกการเดินทางที่ลงตัว',
    enDetail:
      'Make room for business trips, weekends away and journeys together. Vehicle type, pickup location and rental duration shape your choice.',
    thDetail:
      'ตอบโจทย์ทั้งทริปธุรกิจ วันพักผ่อน และการเดินทางร่วมกัน เลือกประเภทรถ จุดรับรถ และระยะเวลาเช่าที่เหมาะกับคุณ',
    note: [
      'ประเภทรถและจำนวนผู้โดยสาร',
      'สถานที่รับ–คืนรถ',
      'ประกัน เงินประกัน และเงื่อนไข',
    ],
    enNotes: [
      'Vehicle type and passengers',
      'Pickup and return locations',
      'Insurance, deposit and terms',
    ],
  },
  {
    id: 'yachts',
    image: '/images/rentals/yacht.png',
    en: 'Yachts',
    th: 'เรือยอชต์',
    enCopy: 'Take your time. Discover a different horizon.',
    thCopy: 'เปลี่ยนวันธรรมดา ให้เป็นช่วงเวลาดี ๆ กลางทะเล',
    enDetail:
      'Plan a private escape, a celebration or a day on the water. Your route, group size and time aboard help define the right experience.',
    thDetail:
      'สำหรับทริปส่วนตัว การเฉลิมฉลอง หรือวันพักผ่อนกลางทะเล วางเส้นทาง จำนวนผู้ร่วมเดินทาง และช่วงเวลาบนเรือให้เข้ากับโอกาสของคุณ',
    note: [
      'เส้นทางและท่าเรือต้นทาง',
      'จำนวนผู้โดยสารและระยะเวลาทริป',
      'ลูกเรือ บริการบนเรือ และสภาพอากาศ',
    ],
    enNotes: [
      'Itinerary and departure marina',
      'Passengers and charter duration',
      'Crew, onboard services and weather',
    ],
  },
  {
    id: 'aircraft',
    image: '/images/rentals/aircraft.png',
    en: 'Aircraft',
    th: 'เครื่องบิน',
    enCopy: 'Go beyond. Make the journey your own.',
    thCopy: 'อีกระดับของการเดินทาง เพื่อแผนที่เป็นของคุณ',
    enDetail:
      'Explore private charter for business and personal travel. Routes, passenger numbers and flight requirements determine the available options.',
    thDetail:
      'สำรวจการเช่าเหมาลำสำหรับการเดินทางธุรกิจและทริปส่วนตัว โดยพิจารณาเส้นทาง จำนวนผู้โดยสาร และรายละเอียดเที่ยวบินประกอบการเลือก',
    note: [
      'ต้นทาง ปลายทาง และวันเดินทาง',
      'จำนวนผู้โดยสารและสัมภาระ',
      'ข้อกำหนดเที่ยวบินและการให้บริการ',
    ],
    enNotes: [
      'Origin, destination and travel dates',
      'Passengers and baggage',
      'Flight and service requirements',
    ],
  },
] as const;

export function rentalCopy(locale: Locale) {
  const th = locale === 'th';
  return {
    nav: th
      ? [
          'ยานพาหนะให้เช่า',
          'วิธีการเช่า',
          'ข้อมูลค่าเช่า',
          'เกี่ยวกับเรา',
          'ช่วยเหลือ',
        ]
      : ['Vehicles', 'Rental guide', 'Rental details', 'About', 'Help'],
    headline: th
      ? ['ทุกการเดินทาง', 'เลือกได้ในแบบคุณ']
      : ['Your journey.', 'Your choice.'],
    intro: th
      ? 'มอเตอร์ไซค์ไฟฟ้า รถยนต์ เรือยอชต์ และเครื่องบิน ค้นหาการเช่าที่เหมาะกับทุกวันและทุกโอกาสของคุณ'
      : 'Electric motorcycles, cars, yachts and aircraft. Explore rentals for everyday plans and extraordinary occasions.',
    explore: th ? 'สำรวจบริการเช่า' : 'Explore rentals',
    collection: th ? 'เลือกวิธีเดินทางของคุณ' : 'Find your way to go',
    collectionCopy: th
      ? 'บนถนน กลางทะเล หรือบนท้องฟ้า เริ่มต้นจากสิ่งที่คุณอยากทำ แล้วเลือกการเดินทางที่ใช่'
      : 'By road, by sea or by air. Start with your plans and discover the way to get there.',
    guideTitle: th
      ? 'จากแผนของคุณ สู่การเดินทางครั้งต่อไป'
      : 'A simple way to extraordinary.',
    steps: th
      ? [
          [
            'เลือกสิ่งที่ใช่',
            'สำรวจประเภทยานพาหนะและรูปแบบการเช่าที่เหมาะกับทริป',
          ],
          [
            'วางรายละเอียด',
            'กำหนดวัน สถานที่ จำนวนผู้เดินทาง และบริการที่ต้องการ',
          ],
          [
            'พร้อมออกเดินทาง',
            'ตรวจสอบราคา สิ่งที่รวม และเงื่อนไขก่อนยืนยันการเช่า',
          ],
        ]
      : [
          [
            'Find your fit',
            'Explore vehicle categories and rental options for your journey.',
          ],
          [
            'Plan the details',
            'Choose your dates, locations, group size and preferred services.',
          ],
          [
            'Get ready to go',
            'Review pricing, inclusions and terms before confirming your rental.',
          ],
        ],
    finalTitle: th ? 'ครั้งต่อไป คุณอยากไปที่ไหน?' : 'Where will you go next?',
    finalCopy: th
      ? 'เลือกยานพาหนะให้เข้ากับชีวิต ไม่ว่าจะเป็นการเดินทางใกล้ ๆ หรือประสบการณ์ครั้งพิเศษ'
      : 'A short trip or a special occasion. Find the vehicle that fits your life.',
    details: th ? 'ดูรายละเอียด' : 'Explore category',
    disclaimer: th
      ? 'ภาพใช้ประกอบการนำเสนอบริการ รุ่น ราคา พื้นที่ และความพร้อมให้เช่าจะระบุในรายละเอียดบริการเมื่อเปิดให้จอง'
      : 'Images illustrate the service categories. Models, prices, locations and availability will be listed when bookings open.',
  };
}
