'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { HeadingText, ThaiText } from '../../components/ui/HeadingText';
import { rentalEase } from './RentalMotion';
import styles from './appGuide.module.css';

export function RentalAppGuide({ th }: { th: boolean }) {
  const reduced = useReducedMotion();
  const steps = th
    ? [
        [
          'เลือกยานพาหนะ',
          'ค้นหาการเดินทางที่ใช่ เลือกประเภทและดูรายละเอียดบริการ',
        ],
        ['เลือกวันเช่า', 'กำหนดวันรับ–คืน พร้อมสถานที่และจำนวนผู้เดินทาง'],
        [
          'จองและชำระเงิน',
          'ตรวจสอบรายละเอียด เลือกวิธีชำระเงิน และรับข้อมูลการจอง',
        ],
      ]
    : [
        [
          'Choose your vehicle',
          'Explore categories and find the right vehicle for your plans.',
        ],
        [
          'Choose your dates',
          'Set pickup and return dates, location and passenger details.',
        ],
        [
          'Book and pay',
          'Review your journey, choose a payment method and receive your booking details.',
        ],
      ];
  return (
    <section className={styles.guide} aria-labelledby="app-guide-title">
      <div className={styles.heading}>
        <span>YOUR JOURNEY, IN YOUR HANDS</span>
        <h2 id="app-guide-title">
          <HeadingText>
            {th
              ? 'เช่าง่าย ๆ ผ่านมือถือของคุณ'
              : 'Your next journey. Just a few taps.'}
          </HeadingText>
        </h2>
        <p>
          <ThaiText>
            {th
              ? 'เลือก วางแผน และพร้อมออกเดินทาง ในไม่กี่ขั้นตอน'
              : 'Find your fit, plan the details and get ready to go.'}
          </ThaiText>
        </p>
      </div>
      <ol className={styles.steps}>
        {steps.map(([title, copy], index) => (
          <motion.li
            key={title}
            initial={reduced ? false : { opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: rentalEase,
            }}
          >
            <div
              className={styles.phone}
              role="img"
              aria-label={`${th ? 'ภาพตัวอย่างแอป' : 'App preview'}: ${title}`}
            >
              <div className={styles.status}>
                <span>9:41</span>
                <i />
              </div>
              <div className={styles.appBrand}>
                RBC <b>GO</b>
                <span>●</span>
              </div>
              <div className={styles.progress}>
                {[0, 1, 2].map((n) => (
                  <i key={n} className={n <= index ? styles.active : ''} />
                ))}
              </div>
              <div className={styles.screen}>
                <small>0{index + 1} / 03</small>
                <h3>{title}</h3>
                {index === 0 ? (
                  <>
                    <div className={styles.search}>
                      ⌕　
                      {th ? 'คุณอยากเดินทางแบบไหน?' : 'Where will you go next?'}
                    </div>
                    <div className={styles.tabs}>
                      <b>{th ? 'รถยนต์' : 'Cars'}</b>
                      <span>{th ? 'มอเตอร์ไซค์' : 'Motorcycles'}</span>
                      <span>{th ? 'เรือยอชต์' : 'Yachts'}</span>
                    </div>
                    <div className={styles.vehicle}>
                      <Image
                        src="/images/rentals/car.png"
                        alt=""
                        width={480}
                        height={300}
                      />
                      <span>EXPLORE THE ROAD</span>
                    </div>
                    <div className={styles.row}>
                      <strong>
                        {th
                          ? 'รถยนต์สำหรับทริปของคุณ'
                          : 'A car for your next trip'}
                      </strong>
                      <b>↗</b>
                    </div>
                    <p>
                      {th
                        ? 'อิสระทุกเส้นทาง ในแบบที่คุณเลือก'
                        : 'Make every road your own.'}
                    </p>
                    <div className={styles.pill}>
                      {th ? 'ดูรายละเอียดรถ' : 'View vehicle details'}　→
                    </div>
                  </>
                ) : index === 1 ? (
                  <>
                    <div className={styles.field}>
                      <small>{th ? 'สถานที่รับรถ' : 'Pickup location'}</small>
                      <strong>⌖　{th ? 'กรุงเทพมหานคร' : 'Bangkok'}</strong>
                    </div>
                    <div className={styles.calendar}>
                      <div className={styles.row}>
                        <strong>
                          {th ? 'พฤศจิกายน 2026' : 'November 2026'}
                        </strong>
                        <span>‹　›</span>
                      </div>
                      <div className={styles.days}>
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                          <small key={i}>{d}</small>
                        ))}
                        {Array.from({ length: 28 }, (_, n) => (
                          <span
                            key={n}
                            className={
                              n >= 12 && n <= 15 ? styles.selected : ''
                            }
                          >
                            {n + 1}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.datePair}>
                      <div>
                        <small>{th ? 'รับรถ' : 'Pickup'}</small>
                        <strong>13 NOV</strong>
                        <span>10:00</span>
                      </div>
                      <div>
                        <small>{th ? 'คืนรถ' : 'Return'}</small>
                        <strong>16 NOV</strong>
                        <span>10:00</span>
                      </div>
                    </div>
                    <div className={styles.pill}>
                      {th ? 'ถัดไป' : 'Continue'}　→
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.summary}>
                      <Image
                        src="/images/rentals/car.png"
                        alt=""
                        width={120}
                        height={90}
                      />
                      <div>
                        <strong>{th ? 'ทริปของคุณ' : 'Your journey'}</strong>
                        <small>13–16 NOV · Bangkok</small>
                      </div>
                    </div>
                    <div className={styles.receipt}>
                      <div className={styles.row}>
                        <span>{th ? 'ระยะเวลาเช่า' : 'Rental period'}</span>
                        <strong>{th ? '3 วัน' : '3 days'}</strong>
                      </div>
                      <div className={styles.row}>
                        <span>{th ? 'รายละเอียดค่าเช่า' : 'Rental price'}</span>
                        <span>
                          {th ? 'ตามรายการที่เลือก' : 'Per selected vehicle'}
                        </span>
                      </div>
                    </div>
                    <small>{th ? 'วิธีชำระเงิน' : 'Payment method'}</small>
                    <div className={styles.payment}>
                      <span>◉</span>
                      <strong>
                        {th ? 'บัตรเครดิต / เดบิต' : 'Credit / debit card'}
                      </strong>
                      <span>▰</span>
                    </div>
                    <div className={styles.payment}>
                      <span>○</span>
                      <strong>QR Payment</strong>
                      <span>▦</span>
                    </div>
                    <p className={styles.terms}>
                      {th
                        ? 'ตรวจสอบราคาและเงื่อนไขก่อนยืนยันการจอง'
                        : 'Review the price and terms before confirming.'}
                    </p>
                    <div className={styles.pill}>
                      {th ? 'ยืนยันและชำระเงิน' : 'Confirm and pay'}　→
                    </div>
                    <motion.div
                      className={styles.confirmation}
                      initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.55, duration: 0.5 }}
                    >
                      <b>✓</b>
                      <span>
                        {th
                          ? 'พร้อมสำหรับการเดินทาง'
                          : 'Ready for your journey'}
                      </span>
                    </motion.div>
                  </>
                )}
              </div>
              <div className={styles.homeIndicator} />
            </div>
            <div className={styles.caption}>
              <span>0{index + 1}</span>
              <h3>
                <HeadingText>{title}</HeadingText>
              </h3>
              <p>
                <ThaiText>{copy}</ThaiText>
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
      <p className={styles.note}>
        {th
          ? 'ภาพตัวอย่างขั้นตอนการเช่า · ระบบจองและชำระเงินยังไม่เปิดให้บริการ'
          : 'Illustrative rental flow · Online booking and payment are not yet available.'}
      </p>
    </section>
  );
}
