'use client';

import Image from 'next/image';
import { FormEvent, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { rentalCategories } from '../../data/rentals';
import {
  WebsiteReveal,
  rentalEase,
} from '../../components/interactive/WebsiteMotion';
import { HeadingText, ThaiText } from '../../components/ui/HeadingText';
import { Arrow } from '../../components/ui/Arrow';
import styles from './rentalPlanner.module.css';

type PlannerChoice = 'city' | 'road' | 'sea' | 'air';

const plannerChoices: Array<{
  id: PlannerChoice;
  categoryId: (typeof rentalCategories)[number]['id'];
  th: string;
  en: string;
}> = [
  {
    id: 'city',
    categoryId: 'motorcycles',
    th: 'เดินทางในเมือง',
    en: 'Around the city',
  },
  { id: 'road', categoryId: 'cars', th: 'ทริปบนถนน', en: 'A road trip' },
  { id: 'sea', categoryId: 'yachts', th: 'ออกทะเล', en: 'A day at sea' },
  { id: 'air', categoryId: 'aircraft', th: 'เดินทางทางอากาศ', en: 'By air' },
];

export function RentalPlanner({ th }: { th: boolean }) {
  const reduced = useReducedMotion();
  const [choice, setChoice] = useState<PlannerChoice>('city');
  const [charterType, setCharterType] = useState<'yacht' | 'aircraft'>('yacht');
  const [submitted, setSubmitted] = useState(false);

  const recommended = useMemo(() => {
    const current = plannerChoices.find((item) => item.id === choice)!;
    return rentalCategories.find((item) => item.id === current.categoryId)!;
  }, [choice]);

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <WebsiteReveal className={styles.planner} id="trip-planner">
        <div className={styles.plannerIntro}>
          <span>{th ? 'วางแผนทริปของคุณ' : 'PLAN YOUR TRIP'}</span>
          <h2>
            <HeadingText>
              {th
                ? 'เริ่มจากสิ่งที่คุณอยากทำ'
                : 'Start with what you want to do.'}
            </HeadingText>
          </h2>
          <p>
            <ThaiText>
              {th
                ? 'เลือกบรรยากาศของทริป แล้วดูบริการที่เหมาะกับแผนของคุณ'
                : 'Choose the kind of journey you have in mind and see the service that fits.'}
            </ThaiText>
          </p>
        </div>

        <div className={styles.plannerContent}>
          <div
            className={styles.choiceList}
            role="radiogroup"
            aria-label={th ? 'เลือกรูปแบบทริป' : 'Choose a journey type'}
          >
            {plannerChoices.map((item, index) => {
              const active = item.id === choice;
              return (
                <motion.button
                  type="button"
                  role="radio"
                  aria-checked={active}
                  key={item.id}
                  className={active ? styles.choiceActive : styles.choice}
                  onClick={() => setChoice(item.id)}
                  whileHover={reduced ? undefined : { x: 5 }}
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.2, ease: rentalEase }}
                >
                  <span>0{index + 1}</span>
                  <ThaiText>{th ? item.th : item.en}</ThaiText>
                </motion.button>
              );
            })}
          </div>

          <motion.article
            className={styles.recommendation}
            key={recommended.id}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: rentalEase }}
          >
            <div className={styles.recommendationImage}>
              <Image
                src={recommended.image}
                alt={th ? recommended.th : recommended.en}
                fill
                loading="eager"
                sizes="(max-width: 760px) 100vw, 38vw"
              />
            </div>
            <div className={styles.recommendationCopy}>
              <span>{th ? 'บริการที่เราแนะนำ' : 'OUR RECOMMENDATION'}</span>
              <h3>
                <HeadingText>
                  {th ? recommended.th : recommended.en}
                </HeadingText>
              </h3>
              <p>
                <ThaiText>
                  {th ? recommended.thCopy : recommended.enCopy}
                </ThaiText>
              </p>
              <a href={`/rides#${recommended.id}`}>
                <ThaiText>
                  {th ? 'ดูรายละเอียดบริการ' : 'View service details'}
                </ThaiText>
                <Arrow />
              </a>
            </div>
          </motion.article>
        </div>
      </WebsiteReveal>

      <WebsiteReveal className={styles.charter} id="charter-enquiry">
        <div className={styles.charterImage}>
          <Image
            src="/images/rentals/yacht.png"
            alt={
              th
                ? 'เรือยอชต์สำหรับบริการเช่าเหมาลำ'
                : 'Yacht for private charter'
            }
            fill
            loading="eager"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div>
            <span>{th ? 'PRIVATE CHARTER' : 'PRIVATE CHARTER'}</span>
            <h2>
              <HeadingText>
                {th
                  ? 'ส่งรายละเอียดทริป เพื่อขอราคาเหมาลำ'
                  : 'Tell us about your charter.'}
              </HeadingText>
            </h2>
            <p>
              <ThaiText>
                {th
                  ? 'สำหรับเรือยอชต์และเครื่องบิน ทีมงานจะช่วยจัดข้อเสนอให้เหมาะกับเส้นทาง วันเดินทาง และกลุ่มของคุณ'
                  : 'For yacht and aircraft charters, our team will shape an offer around your route, dates and group.'}
              </ThaiText>
            </p>
          </div>
        </div>

        <form className={styles.charterForm} onSubmit={submitRequest}>
          <div
            className={styles.charterTabs}
            aria-label={th ? 'เลือกบริการเช่าเหมาลำ' : 'Choose charter service'}
          >
            <button
              type="button"
              className={charterType === 'yacht' ? styles.tabActive : undefined}
              onClick={() => setCharterType('yacht')}
            >
              {th ? 'เรือยอชต์' : 'Yacht'}
            </button>
            <button
              type="button"
              className={
                charterType === 'aircraft' ? styles.tabActive : undefined
              }
              onClick={() => setCharterType('aircraft')}
            >
              {th ? 'เครื่องบิน' : 'Aircraft'}
            </button>
          </div>
          <h3>
            {th
              ? `สอบถามเช่า${charterType === 'yacht' ? 'เรือยอชต์' : 'เครื่องบิน'}เหมาลำ`
              : `Request a private ${charterType} charter`}
          </h3>
          <div className={styles.fieldGrid}>
            <label>
              <span>{th ? 'ปลายทางหรือเส้นทาง' : 'Destination or route'}</span>
              <input
                required
                name="destination"
                placeholder={th ? 'เช่น ภูเก็ต · สมุย' : 'e.g. Phuket · Samui'}
              />
            </label>
            <label>
              <span>{th ? 'วันเดินทาง' : 'Travel date'}</span>
              <input required name="date" type="date" />
            </label>
            <label>
              <span>{th ? 'จำนวนผู้เดินทาง' : 'Guests'}</span>
              <select name="guests" defaultValue="">
                <option value="" disabled>
                  {th ? 'เลือกจำนวนคน' : 'Select guests'}
                </option>
                <option value="1-4">1–4</option>
                <option value="5-8">5–8</option>
                <option value="9+">9+</option>
              </select>
            </label>
            <label>
              <span>
                {th ? 'เวลาที่ต้องการออกเดินทาง' : 'Preferred departure'}
              </span>
              <input name="time" type="time" />
            </label>
          </div>
          <label className={styles.fullField}>
            <span>
              {th ? 'รายละเอียดเพิ่มเติม' : 'Anything else we should know?'}
            </span>
            <textarea
              name="notes"
              rows={3}
              placeholder={
                th
                  ? 'ระบุจำนวนวัน จุดรับส่ง หรือบริการที่ต้องการ'
                  : 'Share duration, pickup point or special requests'
              }
            />
          </label>
          <button className={styles.submit} type="submit">
            <ThaiText>
              {submitted
                ? th
                  ? 'ได้รับคำขอแล้ว'
                  : 'Request received'
                : th
                  ? 'ส่งคำขอ'
                  : 'Send enquiry'}
            </ThaiText>
            <Arrow />
          </button>
          <p className={styles.formNote}>
            <ThaiText>
              {submitted
                ? th
                  ? 'ขอบคุณครับ นี่เป็นตัวอย่างฟอร์มบนเว็บไซต์ เรายังไม่ได้ส่งข้อมูลไปยังระบบ'
                  : 'Thank you. This is a website preview; no details have been sent.'
                : th
                  ? 'ตัวอย่างฟอร์มสำหรับเตรียมเปิดรับคำขอ ยังไม่มีการส่งข้อมูลหรือชำระเงิน'
                  : 'A preview form only. It does not send data or take payment yet.'}
            </ThaiText>
          </p>
        </form>
      </WebsiteReveal>
    </>
  );
}
