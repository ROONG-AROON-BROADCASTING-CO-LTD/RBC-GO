'use client';

import { useState } from 'react';
import type { Page } from '../../../data/navigation';

import { ThaiText } from '../../../components/ui/HeadingText';
import styles from '../../../styles/website.module.css';

export function HelpSection({ th, page }: { th: boolean; page?: Page }) {
  const faq = th
    ? [
        [
          'RBC GO มีบริการเช่าอะไรบ้าง?',
          'มี 4 รูปแบบ: มอเตอร์ไซค์ไฟฟ้าให้เช่าตามสถานี รถยนต์ที่เจ้าของนำมาฝากให้ RBC GO ปล่อยเช่า เรือยอชต์เหมาลำ และเครื่องบินเหมาลำ รายละเอียดพื้นที่และความพร้อมจะประกาศเมื่อเปิดบริการ',
        ],
        [
          'มอเตอร์ไซค์ไฟฟ้ารับและคืนที่ไหน?',
          'รับรถผ่านจุดสถานีที่ให้บริการ โดยตรวจสอบรถว่างและเงื่อนไขสถานีคืนรถก่อนใช้งาน รายชื่อสถานี พื้นที่ให้บริการ และกติกาการคืนรถจะประกาศก่อนเปิดบริการ',
        ],
        [
          'มีรถว่าง นำมาฝากปล่อยเช่าได้ไหม?',
          'เจ้าของรถยนต์ที่ไม่ได้ใช้งานสามารถนำรถมาฝากให้ RBC GO ปล่อยเช่าได้ โดยแจ้งข้อมูลรถและช่วงเวลาที่ว่าง เพื่อพิจารณาความเหมาะสมและตกลงเรื่องส่วนแบ่งรายได้ ประกัน การดูแลรถ และความรับผิดชอบก่อนเข้าร่วม',
        ],
        [
          'เรือยอชต์และเครื่องบินเช่าแบบไหน?',
          'เป็นการเช่าแบบเหมาลำสำหรับกลุ่มของคุณ ระบุวันเดินทาง เส้นทาง จำนวนผู้โดยสาร และบริการที่ต้องการ เพื่อดูตัวเลือกและรายละเอียดราคา โดยขึ้นอยู่กับความพร้อมและการยืนยันจากผู้ให้บริการ',
        ],
        [
          'ตอนนี้จองและชำระเงินได้หรือยัง?',
          'ขณะนี้เว็บไซต์อยู่ในช่วงนำเสนอบริการ ยังไม่เปิดรับการจองหรือชำระเงินออนไลน์',
        ],
        [
          'ค่าเช่าของแต่ละประเภทคิดอย่างไร?',
          'ขึ้นอยู่กับยานพาหนะ ระยะเวลา สถานที่ เส้นทาง และบริการที่เลือก โปรดตรวจสอบราคาและเงื่อนไขที่ระบุสำหรับแต่ละรายการเมื่อเปิดให้จอง',
        ],
        [
          'ต้องเตรียมข้อมูลอะไรบ้าง?',
          'ประเภทที่ต้องการเช่า วันและเวลา สถานที่รับ–คืนหรือเส้นทาง จำนวนผู้เดินทาง และบริการเพิ่มเติมที่ต้องการ',
        ],
        [
          'การยกเลิก ประกัน และเงินประกันเป็นอย่างไร?',
          'เงื่อนไขแตกต่างกันตามประเภทและผู้ให้บริการ ต้องตรวจสอบรายละเอียดการยกเลิก ประกัน และเงินประกันของรายการนั้นก่อนยืนยัน',
        ],
      ]
    : [
        [
          'What can I rent with RBC GO?',
          'Our four services are station-based electric motorcycle rentals, cars entrusted to RBC GO by their owners, private yacht charters and private aircraft charters. Locations and availability will be announced when services open.',
        ],
        [
          'Where do I pick up and return an electric motorcycle?',
          'Use a service station and check bike availability and return-station rules before riding. Station locations, service areas and return requirements will be announced before launch.',
        ],
        [
          'Can I entrust my unused car to RBC GO for rental?',
          'Yes. Owners can share vehicle details and available dates for review. Revenue sharing, insurance, vehicle care and responsibilities must be agreed before the car joins the service.',
        ],
        [
          'How do yacht and aircraft rentals work?',
          'Both are private whole-vessel or whole-aircraft charters for your group. Share your dates, itinerary, passenger numbers and preferred services to review options and pricing, subject to availability and operator confirmation.',
        ],
        [
          'Can I book and pay now?',
          'This website currently presents our rental services. Online reservations and payments are not yet open.',
        ],
        [
          'How are rentals priced?',
          'Pricing depends on the vehicle, duration, locations, route and selected services. Review the item-specific price and terms when bookings open.',
        ],
        [
          'What details should I prepare?',
          'Your preferred category, dates and times, pickup and return locations or itinerary, passenger numbers and any additional services.',
        ],
        [
          'What about cancellation, insurance and deposits?',
          'These vary by category and provider. Review the terms for your chosen rental before confirming.',
        ],
      ];
  const [query, setQuery] = useState('');

  return (
    <>
      {' '}
      {page === 'help' && (
        <section className={styles.reading}>
          <label className={styles.search}>
            <ThaiText>{th ? 'ค้นหาคำถาม' : 'Search questions'}</ThaiText>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                th
                  ? 'เช่น ค่าเช่า เอกสาร การจอง'
                  : 'Try pricing, documents or booking'
              }
            />
          </label>
          <div className={styles.faq}>
            {faq
              .filter(([q, a]) =>
                `${q} ${a}`.toLowerCase().includes(query.toLowerCase()),
              )
              .map(([q, a]) => (
                <details key={q}>
                  <summary>
                    <ThaiText>{q}</ThaiText>
                  </summary>
                  <p>
                    <ThaiText>{a}</ThaiText>
                  </p>
                </details>
              ))}
          </div>
          {!faq.some(([q, a]) =>
            `${q} ${a}`.toLowerCase().includes(query.toLowerCase()),
          ) && (
            <p role="status">
              <ThaiText>
                {th
                  ? 'ไม่พบคำถามที่ตรงกัน ลองใช้คำค้นอื่น'
                  : 'No matching questions. Try another search.'}
              </ThaiText>
            </p>
          )}
        </section>
      )}
    </>
  );
}
