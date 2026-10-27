'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  motion,
  useAnimationControls,
  useInView,
  useReducedMotion,
} from 'motion/react';
import { HeadingText, ThaiText } from '../../components/ui/HeadingText';
import { rentalEase } from '../../components/interactive/WebsiteMotion';
import styles from './appGuide.module.css';

function ReplayingPhone({
  children,
  label,
  wide,
  reduced,
}: {
  children: ReactNode;
  label: string;
  wide: boolean;
  reduced: boolean | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / 350);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const visible = useInView(ref, { amount: 0.45 });
  const controls = useAnimationControls();
  useEffect(() => {
    if (!visible) {
      controls.stop();
      return;
    }
    let cancelled = false;
    controls.set('idle');
    void controls.start('play');
    if (reduced) return;
    const timer = window.setInterval(
      async () => {
        await controls.start('fade');
        if (cancelled) return;
        controls.set('idle');
        void controls.start('play');
      },
      wide ? 11500 : 5000,
    );
    return () => {
      cancelled = true;
      window.clearInterval(timer);
      controls.stop();
    };
  }, [visible, wide, reduced, controls]);
  return (
    <div ref={ref} className={styles.phone} role="img" aria-label={label}>
      <div
        className={styles.phoneHardware}
        style={{ transform: `scale(${scale})` }}
      >
        <span className={styles.sideButtons} aria-hidden="true" />
        <span className={styles.powerButton} aria-hidden="true" />
        <div className={styles.phoneScreen}>
          <div className={styles.island} aria-hidden="true">
            <span />
          </div>
          <motion.div
            className={styles.phoneContent}
            initial="idle"
            animate={controls}
            variants={{
              idle: { opacity: reduced ? 1 : 0 },
              play: { opacity: 1, transition: { duration: reduced ? 0 : 0.4 } },
              fade: { opacity: 0, transition: { duration: 0.35 } },
            }}
          >
            {children}
          </motion.div>
          <div className={styles.homeIndicator} />
        </div>
      </div>
    </div>
  );
}

export function RentalAppGuide({ th }: { th: boolean }) {
  const reduced = useReducedMotion();
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 761px)');
    const update = () => setWide(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  const timing = (step: number, delay: number) => ({
    delay: reduced ? 0 : (wide ? step * 3.2 : 0) + delay,
    duration: reduced ? 0 : 0.45,
    ease: rentalEase,
  });
  const tap = (step: number, delay: number) => ({
    initial: { opacity: 0, scale: 0.5 },
    variants: {
      play: { opacity: reduced ? 0 : [0, 1, 0], scale: [0.5, 1, 1.8] },
    },
    transition: timing(step, delay),
    className: styles.tap,
    'aria-hidden': true as const,
  });
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
              ? 'ตัวอย่างการเช่ารถยนต์ผ่านมือถือ'
              : 'A preview of renting a car on your phone.'}
          </HeadingText>
        </h2>
        <p>
          <ThaiText>
            {th
              ? 'ดูขั้นตอนเลือกรถ เลือกวัน และยืนยันการจอง ส่วนมอเตอร์ไซค์ใช้จุดสถานี และเรือกับเครื่องบินเป็นบริการเหมาลำตามรายละเอียดทริป'
              : 'Preview car selection, dates and booking confirmation. Motorcycles use service stations; yacht and aircraft charters are arranged around your itinerary.'}
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
            <ReplayingPhone
              wide={wide}
              reduced={reduced}
              label={`${th ? 'ภาพตัวอย่างแอป' : 'App preview'}: ${title}`}
            >
              <div className={styles.status}>
                <span>9:41</span>
                <span>▂▄▆ ▰</span>
              </div>
              <div className={styles.appBrand}>
                RBC <b>GO</b>
                <span className={styles.avatar}>P</span>
              </div>
              <div className={styles.progress}>
                {[0, 1, 2].map((n) => (
                  <i key={n} className={n <= index ? styles.active : ''} />
                ))}
              </div>
              <div className={styles.screen}>
                <div className={styles.screenNav}>
                  <span>‹</span>
                  <small>{th ? 'การจองของคุณ' : 'Your reservation'}</small>
                  <small>0{index + 1} / 03</small>
                </div>
                <h3>{title}</h3>
                {index === 0 ? (
                  <>
                    <div className={styles.search}>
                      ⌕　
                      {th
                        ? 'กรุงเทพฯ · รับรถที่สาขา'
                        : 'Bangkok · Branch pickup'}
                    </div>
                    <div className={styles.tabs}>
                      <motion.b
                        variants={{
                          idle: {
                            backgroundColor: '#30392b',
                            color: '#b8c0b1',
                          },
                          play: {
                            backgroundColor: '#89d82a',
                            color: '#102006',
                          },
                        }}
                        transition={timing(0, 0.4)}
                      >
                        {th ? 'รถยนต์' : 'Cars'}
                        <motion.i {...tap(0, 0.3)} />
                      </motion.b>
                      <span>{th ? 'มอเตอร์ไซค์' : 'Motorcycles'}</span>
                      <span>{th ? 'เรือยอชต์' : 'Yachts'}</span>
                    </div>
                    <motion.div
                      className={styles.vehicle}
                      variants={{
                        idle: { opacity: 0.4, scale: 0.97 },
                        play: { opacity: 1, scale: 1 },
                      }}
                      transition={timing(0, 0.7)}
                    >
                      <Image
                        src="/images/rentals/car.png"
                        alt=""
                        width={480}
                        height={300}
                      />
                      <span>{th ? 'พร้อมให้เช่า' : 'Available'}</span>
                      <motion.i {...tap(0, 1.35)} />
                      <motion.b
                        className={styles.chosen}
                        variants={{
                          idle: { opacity: 0, scale: 0.6 },
                          play: { opacity: 1, scale: 1 },
                        }}
                        transition={timing(0, 1.6)}
                      >
                        ✓
                      </motion.b>
                    </motion.div>
                    <div className={styles.row}>
                      <strong>
                        {th ? 'Premium Electric SUV' : 'Premium Electric SUV'}
                      </strong>
                      <b className={styles.rating}>★ 4.9</b>
                    </div>
                    <p>
                      {th
                        ? '5 ที่นั่ง  ·  อัตโนมัติ  ·  พลังงานไฟฟ้า'
                        : '5 seats  ·  Automatic  ·  Electric'}
                    </p>
                    <div className={styles.priceLine}>
                      <strong>
                        ฿1,800 <small>/ {th ? 'วัน' : 'day'}</small>
                      </strong>
                      <span>✓ {th ? 'รวมประกันพื้นฐาน' : 'Basic cover'}</span>
                    </div>
                    <div className={styles.secondaryCar}>
                      <Image
                        src="/images/heroes/rides-hero.png"
                        alt=""
                        width={100}
                        height={70}
                      />
                      <div>
                        <strong>Electric Motorcycle</strong>
                        <small>
                          {th ? 'คล่องตัวสำหรับทุกวัน' : 'Made for city days'}
                        </small>
                      </div>
                      <strong>
                        ฿350<small>/{th ? 'วัน' : 'day'}</small>
                      </strong>
                    </div>
                    <motion.div
                      className={styles.pill}
                      variants={{ play: { scale: reduced ? 1 : [1, 0.95, 1] } }}
                      transition={timing(0, 2.2)}
                    >
                      {th ? 'เลือกรถคันนี้' : 'Select this vehicle'}　→
                      <motion.i {...tap(0, 2.15)} />
                    </motion.div>
                  </>
                ) : index === 1 ? (
                  <>
                    <div className={styles.field}>
                      <small>{th ? 'สถานที่รับรถ' : 'Pickup location'}</small>
                      <strong>
                        ⌖　{th ? 'สาขาสุขุมวิท กรุงเทพฯ' : 'Sukhumvit, Bangkok'}
                      </strong>
                      <small>
                        {th
                          ? 'รับและคืนรถที่สาขาเดียวกัน'
                          : 'Return to the same location'}
                      </small>
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
                        {Array.from({ length: 6 }, (_, n) => (
                          <span key={`blank-${n}`} />
                        ))}
                        {Array.from({ length: 30 }, (_, n) => (
                          <motion.span
                            key={n}
                            variants={
                              n >= 12 && n <= 15
                                ? {
                                    idle: {
                                      backgroundColor: '#1d231b',
                                      color: '#edf2e9',
                                    },
                                    play: {
                                      backgroundColor: '#89d82a',
                                      color: '#102006',
                                    },
                                  }
                                : undefined
                            }
                            transition={timing(
                              1,
                              n === 12 ? 0.5 : n === 15 ? 1.3 : 1.5,
                            )}
                          >
                            {n + 1}
                            {(n === 12 || n === 15) && (
                              <motion.i {...tap(1, n === 12 ? 0.4 : 1.2)} />
                            )}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.duration}>
                      ◷　
                      {th
                        ? 'ระยะเวลาเช่า 3 วัน · รับ–คืนเวลา 10:00'
                        : '3-day rental · Pickup & return at 10:00'}
                    </div>
                    <div className={styles.datePair}>
                      <div>
                        <small>{th ? 'รับรถ' : 'Pickup'}</small>
                        <motion.strong
                          variants={{
                            idle: { opacity: 0 },
                            play: { opacity: 1 },
                          }}
                          transition={timing(1, 0.7)}
                        >
                          13 NOV
                        </motion.strong>
                        <span>10:00</span>
                      </div>
                      <div>
                        <small>{th ? 'คืนรถ' : 'Return'}</small>
                        <motion.strong
                          variants={{
                            idle: { opacity: 0 },
                            play: { opacity: 1 },
                          }}
                          transition={timing(1, 1.5)}
                        >
                          16 NOV
                        </motion.strong>
                        <span>10:00</span>
                      </div>
                    </div>
                    <motion.div
                      className={styles.pill}
                      variants={{ play: { scale: reduced ? 1 : [1, 0.95, 1] } }}
                      transition={timing(1, 2.2)}
                    >
                      {th ? 'ตรวจสอบการจอง' : 'Review booking'}　→
                      <motion.i {...tap(1, 2.15)} />
                    </motion.div>
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
                        <strong>Premium Electric SUV</strong>
                        <small>13–16 NOV · Bangkok</small>
                        <small>
                          {th ? 'สาขาสุขุมวิท · 10:00' : 'Sukhumvit · 10:00'}
                        </small>
                      </div>
                    </div>
                    <div className={styles.receipt}>
                      <div className={styles.row}>
                        <span>
                          {th
                            ? 'ค่าเช่า ฿1,800 × 3 วัน'
                            : 'Rental ฿1,800 × 3 days'}
                        </span>
                        <strong>฿5,400</strong>
                      </div>
                      <div className={styles.row}>
                        <span>{th ? 'ค่าบริการ' : 'Service fee'}</span>
                        <strong>฿300</strong>
                      </div>
                      <div className={`${styles.row} ${styles.total}`}>
                        <strong>{th ? 'ยอดรวม' : 'Total'}</strong>
                        <strong>฿5,700</strong>
                      </div>
                    </div>
                    <small>{th ? 'วิธีชำระเงิน' : 'Payment method'}</small>
                    <motion.div
                      className={styles.payment}
                      variants={{
                        idle: { borderColor: '#384131' },
                        play: {
                          borderColor: '#89d82a',
                          backgroundColor: '#89d82a12',
                        },
                      }}
                      transition={timing(2, 0.7)}
                    >
                      <span>◉</span>
                      <strong>
                        <span>
                          {th ? 'บัตรเครดิต / เดบิต' : 'Credit / debit card'}
                          <small>VISA ···· 4242</small>
                        </span>
                      </strong>
                      <span>▰</span>
                      <motion.i {...tap(2, 0.55)} />
                    </motion.div>
                    <div className={styles.payment}>
                      <span>○</span>
                      <strong>QR Payment</strong>
                      <span>▦</span>
                    </div>
                    <p className={styles.terms}>
                      {th
                        ? '✓ ยอมรับเงื่อนไขการเช่าและนโยบายการยกเลิก'
                        : '✓ Accept rental terms and cancellation policy'}
                    </p>
                    <motion.div
                      className={styles.pill}
                      variants={{ play: { scale: reduced ? 1 : [1, 0.95, 1] } }}
                      transition={timing(2, 1.4)}
                    >
                      {th ? 'ชำระเงิน' : 'Pay'} ฿5,700　→
                      <motion.i {...tap(2, 1.35)} />
                    </motion.div>
                    <motion.div
                      className={styles.confirmation}
                      variants={{
                        idle: { opacity: 0, y: 18, scale: 0.98 },
                        play: { opacity: 1, y: 0, scale: 1 },
                      }}
                      transition={timing(2, 2.4)}
                    >
                      <b>✓</b>
                      <h4>{th ? 'จองสำเร็จแล้ว!' : 'You’re all booked!'}</h4>
                      <p>
                        {th
                          ? 'การเดินทางครั้งต่อไปพร้อมแล้ว'
                          : 'Your next journey is ready.'}
                      </p>
                      <div className={styles.ticket}>
                        <small>BOOKING ID</small>
                        <strong>RBC-026184</strong>
                        <hr />
                        <strong>Premium Electric SUV</strong>
                        <span>13–16 NOV 2026 · 10:00</span>
                        <span>
                          {th ? 'สาขาสุขุมวิท กรุงเทพฯ' : 'Sukhumvit, Bangkok'}
                        </span>
                        <hr />
                        <div className={styles.row}>
                          <span>{th ? 'ชำระแล้ว' : 'Paid'}</span>
                          <strong>฿5,700</strong>
                        </div>
                      </div>
                      <span className={styles.bookingLink}>
                        {th ? 'ดูรายละเอียดการจอง' : 'View booking details'}　→
                      </span>
                    </motion.div>
                  </>
                )}
              </div>
            </ReplayingPhone>
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
          ? 'ตัวอย่างหน้าจอและราคาสมมติสำหรับสาธิตขั้นตอน · ระบบจองและชำระเงินยังไม่เปิดให้บริการ'
          : 'Illustrative screens and sample prices · Online booking and payment are not yet available.'}
      </p>
    </section>
  );
}
