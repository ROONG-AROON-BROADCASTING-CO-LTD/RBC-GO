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
import { rentalEase } from './RentalMotion';
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
      <motion.div
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
            <ReplayingPhone
              wide={wide}
              reduced={reduced}
              label={`${th ? 'ภาพตัวอย่างแอป' : 'App preview'}: ${title}`}
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
                      <span>EXPLORE THE ROAD</span>
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
                    <motion.div
                      className={styles.pill}
                      variants={{ play: { scale: reduced ? 1 : [1, 0.95, 1] } }}
                      transition={timing(0, 2.2)}
                    >
                      {th ? 'ดูรายละเอียดรถ' : 'View vehicle details'}　→
                      <motion.i {...tap(0, 2.15)} />
                    </motion.div>
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
                      {th ? 'ถัดไป' : 'Continue'}　→
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
                        {th ? 'บัตรเครดิต / เดบิต' : 'Credit / debit card'}
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
                        ? 'ตรวจสอบราคาและเงื่อนไขก่อนยืนยันการจอง'
                        : 'Review the price and terms before confirming.'}
                    </p>
                    <motion.div
                      className={styles.pill}
                      variants={{ play: { scale: reduced ? 1 : [1, 0.95, 1] } }}
                      transition={timing(2, 1.4)}
                    >
                      {th ? 'ยืนยันและชำระเงิน' : 'Confirm and pay'}　→
                      <motion.i {...tap(2, 1.35)} />
                    </motion.div>
                    <motion.div
                      className={styles.confirmation}
                      variants={{
                        idle: { opacity: 0, scale: 0.9 },
                        play: { opacity: 1, scale: 1 },
                      }}
                      transition={timing(2, 2.4)}
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
          ? 'ภาพตัวอย่างขั้นตอนการเช่า · ระบบจองและชำระเงินยังไม่เปิดให้บริการ'
          : 'Illustrative rental flow · Online booking and payment are not yet available.'}
      </p>
    </section>
  );
}
