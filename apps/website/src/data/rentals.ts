import type { Locale } from './landing';

export const rentalCategories = [
  {
    id: 'motorcycles',
    image: '/images/heroes/rides-hero.png',
    en: 'Electric motorcycles',
    th: 'มอเตอร์ไซค์ไฟฟ้า',
    enCopy: 'Find a station. Pick up a bike. Get moving.',
    thCopy: 'เลือกสถานีใกล้คุณ รับรถแล้วเดินทางต่อ',
    enDetail:
      'Station-based electric motorcycle rentals for everyday city travel. Find a service station, check bike availability and review the pickup and return station requirements before riding.',
    thDetail:
      'เช่ามอเตอร์ไซค์ไฟฟ้าผ่านจุดสถานีสำหรับการเดินทางในเมือง เลือกสถานีที่สะดวก ตรวจสอบรถที่พร้อมใช้งาน และดูเงื่อนไขสถานีรับ–คืนก่อนเริ่มเดินทาง',
    note: [
      'ใบขับขี่และเงื่อนไขผู้ขับขี่',
      'สถานีที่ให้บริการ รถว่าง และเงื่อนไขรับ–คืน',
      'อุปกรณ์และแนวทางใช้งาน',
    ],
    enNotes: [
      'Licence and rider requirements',
      'Service stations, bike availability and return rules',
      'Equipment and riding guidance',
    ],
  },
  {
    id: 'cars',
    image: '/images/rentals/car.png',
    en: 'Cars',
    th: 'รถยนต์',
    enCopy: 'Rent a car. Or put your unused car to work.',
    thCopy: 'เช่ารถสำหรับทริป หรือฝากรถที่ไม่ได้ใช้ให้เราปล่อยเช่า',
    enDetail:
      'RBC GO connects renters with cars entrusted to us by their owners. Renters choose a car for their trip; owners with an unused car can entrust it to RBC GO for rental, subject to vehicle review and an agreed set of terms.',
    thDetail:
      'RBC GO เชื่อมผู้เช่ากับรถที่เจ้าของนำมาฝากปล่อยเช่า ผู้เช่าเลือกรถให้เหมาะกับทริป ส่วนเจ้าของที่มีรถว่างไม่ได้ใช้งาน สามารถนำรถมาฝากให้ RBC GO ปล่อยเช่าได้ โดยตรวจสอบรถและตกลงเงื่อนไขร่วมกันก่อน',
    note: [
      'ผู้เช่า: เลือกรถ วันเช่า และจุดรับ–คืน',
      'เจ้าของรถ: ฝากรถที่ไม่ได้ใช้งานกับ RBC GO',
      'ประกัน เงินประกัน และเงื่อนไข',
    ],
    enNotes: [
      'Renters: choose a car, dates and handover location',
      'Owners: entrust your unused car to RBC GO',
      'Insurance, deposit and terms',
    ],
  },
  {
    id: 'yachts',
    image: '/images/rentals/yacht.png',
    en: 'Yachts',
    th: 'เรือยอชต์',
    enCopy: 'A private yacht charter for your whole group.',
    thCopy: 'เช่าเรือยอชต์เหมาลำ จัดทริปส่วนตัวสำหรับกลุ่มของคุณ',
    enDetail:
      'Charter an entire yacht for your group, whether for a private escape, celebration or day at sea. Plan your route, departure marina, guest numbers and time aboard, then review the crew and services included in your charter.',
    thDetail:
      'เช่าเรือยอชต์แบบเหมาลำสำหรับกลุ่มของคุณ เหมาะกับทริปพักผ่อน งานฉลอง และโอกาสพิเศษ เลือกเส้นทาง ท่าเรือ จำนวนผู้ร่วมทริป และระยะเวลา พร้อมตรวจสอบลูกเรือและบริการที่รวมในแต่ละแพ็กเกจ',
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
    image: '/images/rentals/aircraft-charter.png',
    en: 'Aircraft',
    th: 'เครื่องบิน',
    enCopy: 'Private aircraft charter around your travel plans.',
    thCopy: 'เช่าเครื่องบินเหมาลำ วางเที่ยวบินสำหรับกลุ่มของคุณ',
    enDetail:
      'Charter an entire aircraft for business or private group travel. Share your origin, destination, dates, passenger numbers and baggage needs to find a suitable charter, subject to aircraft availability and operator confirmation.',
    thDetail:
      'เช่าเครื่องบินแบบเหมาลำสำหรับทริปธุรกิจหรือการเดินทางส่วนตัวของกลุ่มคุณ ระบุต้นทาง ปลายทาง วันเดินทาง จำนวนผู้โดยสาร และสัมภาระ เพื่อเลือกลำที่เหมาะสม โดยขึ้นอยู่กับความพร้อมและการยืนยันจากผู้ให้บริการ',
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
      ? 'มอเตอร์ไซค์ไฟฟ้าตามสถานี รถยนต์จากเจ้าของที่ฝากปล่อยเช่า พร้อมเรือยอชต์และเครื่องบินแบบเหมาลำ เลือกบริการให้เข้ากับแผนของคุณ'
      : 'Station-based electric motorcycles, owner-supplied car rentals, and private yacht and aircraft charters. Choose the service that fits your plans.',
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
            'เลือกมอเตอร์ไซค์ตามสถานี รถยนต์ หรือเรือและเครื่องบินเหมาลำ',
          ],
          [
            'วางรายละเอียด',
            'ดูสถานีรับ–คืน หรือกำหนดวัน เส้นทาง และจำนวนผู้ร่วมทริป',
          ],
          [
            'พร้อมออกเดินทาง',
            'ตรวจสอบราคา สิ่งที่รวม และเงื่อนไขก่อนยืนยันการเช่า',
          ],
        ]
      : [
          [
            'Find your fit',
            'Choose station-based bikes, a rental car, or a yacht or aircraft charter.',
          ],
          [
            'Plan the details',
            'Check service stations or plan your dates, itinerary and group size.',
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
  };
}
