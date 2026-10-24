'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import type { Page } from '../../data/landing';

import { Arrow } from '../../components/ui/Arrow';
import { HeadingText, ThaiText } from '../../components/ui/HeadingText';
import styles from '../../components/website.module.css';

export function HelpSection({ th, page }: { th: boolean; page?: Page }) {
  const faq = th
    ? [
        [
          'RBC GO มีบริการเช่าอะไรบ้าง?',
          'เว็บไซต์นำเสนอการเช่ามอเตอร์ไซค์ไฟฟ้า รถยนต์ เรือยอชต์ และเครื่องบิน โดยรายละเอียดและความพร้อมของแต่ละบริการจะประกาศเมื่อเปิดให้จอง',
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
          'Explore electric motorcycles, cars, yachts and aircraft. Details and availability for each service will be published when bookings open.',
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
