'use client';

import Image from 'next/image';
import Link from 'next/link';
import { rentalCategories } from '../../data/rentals';
import { useWebsiteLanguage } from '../../components/layout/WebsiteLanguageProvider';
import { DiscoveryNav } from './DiscoveryNav';
import { DiscoveryFooter } from './DiscoveryFooter';
import discovery from './rentalDiscoveryPage.module.css';
import styles from './rentalDetail.module.css';

type Category = (typeof rentalCategories)[number]['id'];

const steps: Record<Category, { th: string[]; en: string[] }> = {
  motorcycles: {
    th: [
      'เลือกสถานีรับรถที่สะดวก',
      'ตรวจสอบรถและเงื่อนไขจุดคืน',
      'เตรียมใบขับขี่และตรวจสภาพรถก่อนเดินทาง',
    ],
    en: [
      'Choose a convenient pickup station',
      'Review bikes and return station requirements',
      'Prepare your licence and check the bike before riding',
    ],
  },
  cars: {
    th: [
      'เลือกรถและกำหนดวันรับ–คืน',
      'ตรวจสอบประกัน เงินประกัน และข้อกำหนดผู้ขับขี่',
      'ยืนยันรายละเอียดการรับรถและตรวจสภาพร่วมกัน',
    ],
    en: [
      'Choose a car and rental dates',
      'Review insurance, deposit and driver requirements',
      'Confirm handover details and inspect the car together',
    ],
  },
  yachts: {
    th: [
      'กำหนดวัน ท่าเรือ และเส้นทางที่สนใจ',
      'แจ้งจำนวนผู้ร่วมทริปและบริการที่ต้องการ',
      'ตรวจสอบข้อเสนอ ลูกเรือ และเงื่อนไขสภาพอากาศ',
    ],
    en: [
      'Plan dates, departure marina and itinerary',
      'Share guest numbers and onboard preferences',
      'Review the proposal, crew and weather conditions',
    ],
  },
  aircraft: {
    th: [
      'แจ้งต้นทาง ปลายทาง และวันเดินทาง',
      'ระบุจำนวนผู้โดยสารและสัมภาระ',
      'ตรวจสอบลำที่เหมาะสมและรอผู้ให้บริการยืนยัน',
    ],
    en: [
      'Share origin, destination and travel dates',
      'Specify passengers and baggage',
      'Review suitable aircraft and operator confirmation',
    ],
  },
};

export function RentalDetailPage({ category }: { category: Category }) {
  const { language, setLanguage } = useWebsiteLanguage();
  const th = language === 'th';
  const item = rentalCategories.find(({ id }) => id === category)!;
  const charter = category === 'yachts' || category === 'aircraft';
  return (
    <div className={discovery.theme}>
      <DiscoveryNav locale={language} onLanguageChange={setLanguage} />
      <main id="main" className={styles.page}>
        <section className={styles.hero}>
          <Image
            src={item.image}
            alt={th ? item.th : item.en}
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroCopy}>
            <Link href="/rides">
              {th ? 'ยานพาหนะให้เช่า' : 'Rental services'} /
            </Link>
            <h1>{th ? item.th : item.en}</h1>
            <p>{th ? item.thCopy : item.enCopy}</p>
          </div>
        </section>
        <div className={styles.content}>
          <div className={styles.layout}>
            <div>
              <section>
                <h2>
                  {th
                    ? 'บริการนี้เหมาะกับคุณอย่างไร'
                    : 'A service around your plans'}
                </h2>
                <p>{th ? item.thDetail : item.enDetail}</p>
              </section>
              <section>
                <h2>{th ? 'เริ่มต้นอย่างไร' : 'How to get started'}</h2>
                <ol className={styles.steps}>
                  {steps[category][th ? 'th' : 'en'].map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </section>
              <section>
                <h2>{th ? 'คำถามก่อนตัดสินใจ' : 'Before you decide'}</h2>
                <details>
                  <summary>
                    {th ? 'ค่าเช่าคิดอย่างไร?' : 'How is pricing calculated?'}
                  </summary>
                  <p>
                    {th
                      ? charter
                        ? 'ราคาเหมาลำขึ้นอยู่กับเส้นทาง ระยะเวลา จำนวนผู้โดยสาร และบริการที่รวม ตรวจสอบข้อเสนอและค่าใช้จ่ายทั้งหมดก่อนยืนยัน'
                        : category === 'cars'
                          ? 'ค่าเช่าขึ้นอยู่กับรถ ระยะเวลา และเงื่อนไขของรถแต่ละคัน ตรวจสอบเงินประกัน ประกันภัย และค่าใช้จ่ายเพิ่มเติมก่อนยืนยัน'
                          : 'ตรวจสอบอัตราการใช้งานและเงื่อนไขของสถานี รวมถึงค่าบริการที่เกี่ยวข้องก่อนเริ่มเช่า'
                      : 'Review the service-specific rate, inclusions, deposit and any additional charges before confirming.'}
                  </p>
                </details>
                <details>
                  <summary>
                    {th
                      ? 'ต้องตรวจสอบอะไรเพิ่มเติม?'
                      : 'What else should I review?'}
                  </summary>
                  <p>
                    {th
                      ? charter
                        ? 'ตรวจสอบเงื่อนไขยกเลิก การเปลี่ยนแผนตามสภาพอากาศ และการยืนยันจากผู้ให้บริการก่อนเดินทาง'
                        : 'ตรวจสอบเอกสารผู้ขับขี่ ความคุ้มครองประกัน สภาพรถ และเงื่อนไขรับ–คืนกับผู้ให้บริการ'
                      : 'Review eligibility, cancellation terms, insurance and operator confirmation before travel.'}
                  </p>
                </details>
                <Link href="/help" className={styles.link}>
                  {th
                    ? 'ดูคำถามที่พบบ่อยทั้งหมด'
                    : 'Read all frequently asked questions'}{' '}
                  →
                </Link>
              </section>
            </div>
            <aside className={styles.aside}>
              <h2>{th ? 'เตรียมข้อมูลก่อนเริ่ม' : 'Prepare these details'}</h2>
              <ul>
                {(th ? item.note : item.enNotes).map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <Link className={discovery.blueButton} href="/how-it-works">
                {th ? 'ดูวิธีการเช่า' : 'Rental guide'}
              </Link>
              <Link className={styles.link} href="/pricing">
                {th ? 'ข้อมูลค่าเช่าและเงื่อนไข' : 'Pricing and terms'}
              </Link>
              {category === 'cars' && (
                <Link className={styles.link} href="/about#car-owners">
                  {th
                    ? 'มีรถว่าง? ดูการฝากปล่อยเช่า'
                    : 'Have a car? Explore the owner programme'}
                </Link>
              )}
            </aside>
          </div>
          <section>
            <h2>{th ? 'สำรวจบริการอื่น' : 'Explore other services'}</h2>
            <div className={styles.related}>
              {rentalCategories
                .filter(({ id }) => id !== category)
                .map((other) => (
                  <Link key={other.id} href={`/rides/${other.id}`}>
                    <div className={styles.thumbnail}>
                      <Image
                        src={other.image}
                        alt={th ? other.th : other.en}
                        fill
                        sizes="(max-width: 700px) 85vw, 30vw"
                      />
                    </div>
                    <h3>{th ? other.th : other.en}</h3>
                    <p>{th ? other.thCopy : other.enCopy}</p>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
      <DiscoveryFooter th={th} />
    </div>
  );
}
