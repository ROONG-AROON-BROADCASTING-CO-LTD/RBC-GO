'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useWebsiteLanguage } from '../../../components/layout/WebsiteLanguageProvider';
import { rentalCategories, type RentalCategoryId } from '../../../data/rentals';
import { DiscoveryFooter } from '../../../components/layout/discovery/DiscoveryFooter';
import { DiscoveryNav } from '../../../components/layout/discovery/DiscoveryNav';
import discovery from '../../../styles/discovery.module.css';
import styles from './rentalDetail.module.css';

type Category = RentalCategoryId;

const guides: Record<
  Category,
  { th: string[]; en: string[]; heading: [string, string] }
> = {
  motorcycles: {
    heading: [
      'เริ่มจากสถานีที่สะดวกกับคุณ',
      'Start from a station that suits your day',
    ],
    th: [
      'เลือกสถานีรับรถที่สะดวก',
      'ดูเงื่อนไขรับ–คืนของสถานี',
      'เตรียมใบขับขี่และตรวจสภาพรถก่อนออกเดินทาง',
    ],
    en: [
      'Choose a convenient pickup station',
      'Review station pickup and return requirements',
      'Prepare your licence and check the bike before riding',
    ],
  },
  cars: {
    heading: ['รายละเอียดสำคัญก่อนรับรถ', 'What to review before handover'],
    th: [
      'กำหนดวันและเวลารับ–คืนรถ',
      'ตรวจสอบเงื่อนไขผู้ขับขี่ ประกัน และเงินประกัน',
      'ตรวจสภาพรถร่วมกันก่อนออกเดินทาง',
      'ยืนยันจุดส่งมอบและช่องทางติดต่อ',
    ],
    en: [
      'Set your pickup and return time',
      'Review driver, insurance and deposit requirements',
      'Inspect the car together before departure',
      'Confirm handover location and contact details',
    ],
  },
  yachts: {
    heading: ['ออกแบบหนึ่งวันบนทะเลของคุณ', 'Shape your day at sea'],
    th: [
      'เลือกวันและท่าเรือออกเดินทาง',
      'แจ้งเส้นทางหรือบรรยากาศที่อยากได้',
      'ยืนยันจำนวนผู้ร่วมทริปและบริการบนเรือ',
    ],
    en: [
      'Choose your date and departure marina',
      'Share the route or atmosphere you have in mind',
      'Confirm guest count and onboard preferences',
    ],
  },
  aircraft: {
    heading: ['ส่งรายละเอียดเที่ยวบินให้ชัดเจน', 'Build a clear flight brief'],
    th: [
      'ต้นทาง ปลายทาง และวันเดินทาง',
      'จำนวนผู้โดยสารและสัมภาระ',
      'เวลาที่สะดวกและความต้องการเพิ่มเติม',
    ],
    en: [
      'Origin, destination and travel date',
      'Passenger count and baggage',
      'Preferred timing and any additional needs',
    ],
  },
};

function PricingAnswer({ category, th }: { category: Category; th: boolean }) {
  const copy = !th
    ? 'Review the service-specific rate, inclusions, deposit and any additional charges before confirming.'
    : category === 'yachts' || category === 'aircraft'
      ? 'ราคาเหมาลำขึ้นอยู่กับเส้นทาง ระยะเวลา จำนวนผู้โดยสาร และบริการที่รวม ตรวจสอบข้อเสนอและค่าใช้จ่ายทั้งหมดก่อนยืนยัน'
      : category === 'cars'
        ? 'ค่าเช่าขึ้นอยู่กับรถ ระยะเวลา และเงื่อนไขของรถแต่ละคัน ตรวจสอบเงินประกัน ประกันภัย และค่าใช้จ่ายเพิ่มเติมก่อนยืนยัน'
        : 'ตรวจสอบอัตราการใช้งานและเงื่อนไขของสถานี รวมถึงค่าบริการที่เกี่ยวข้องก่อนเริ่มเช่า';
  return <p>{copy}</p>;
}

export function RentalDetailPage({ category }: { category: Category }) {
  const { language, setLanguage } = useWebsiteLanguage();
  const th = language === 'th';
  const item = rentalCategories.find(({ id }) => id === category)!;
  const guide = guides[category][th ? 'th' : 'en'];
  const charter = category === 'yachts' || category === 'aircraft';
  const heading = guides[category].heading[th ? 0 : 1];

  return (
    <div className={discovery.theme}>
      <DiscoveryNav locale={language} onLanguageChange={setLanguage} />
      <main id="main" className={`${styles.page} ${styles[category]}`}>
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
          <section className={styles.intro}>
            <h2>
              {th
                ? 'บริการนี้เหมาะกับคุณอย่างไร'
                : 'A service around your plans'}
            </h2>
            <p>{th ? item.thDetail : item.enDetail}</p>
          </section>

          {category === 'motorcycles' && (
            <section className={styles.stationJourney}>
              <div>
                <h2>{heading}</h2>
                <p>
                  {th
                    ? 'การเดินทางในเมืองเริ่มจากจุดรับรถที่เลือกได้ และจบที่จุดคืนตามเงื่อนไขของสถานี'
                    : 'City travel begins at your chosen station and ends at an approved return point.'}
                </p>
              </div>
              <ol>
                {guide.map((step, index) => (
                  <li key={step}>
                    <span>0{index + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {category === 'cars' && (
            <section className={styles.handover}>
              <div className={styles.handoverCopy}>
                <h2>{heading}</h2>
                <p>
                  {th
                    ? 'รถยนต์แต่ละคันมีรายละเอียดจากเจ้าของต่างกัน การตรวจสอบก่อนรับรถช่วยให้ทั้งสองฝ่ายเริ่มทริปได้อย่างสบายใจ'
                    : 'Every owner-supplied car has its own details. A clear handover helps both sides begin with confidence.'}
                </p>
              </div>
              <ul>
                {guide.map((step) => (
                  <li key={step}>
                    <span>✓</span>
                    {step}
                  </li>
                ))}
              </ul>
              <Link href="/about#car-owners">
                {th
                  ? 'มีรถว่าง? ดูการฝากปล่อยเช่า'
                  : 'Have a car? Explore the owner programme'}{' '}
                →
              </Link>
            </section>
          )}

          {category === 'yachts' && (
            <section className={styles.itinerary}>
              <div className={styles.itineraryHeading}>
                <h2>{heading}</h2>
                <p>
                  {th
                    ? 'เริ่มจากแผนที่คุณอยากทำ แล้วให้ทีมช่วยต่อรายละเอียดทริปที่เหมาะกับกลุ่มของคุณ'
                    : 'Start with the day you want, then shape the details around your group.'}
                </p>
              </div>
              <ol>
                {guide.map((step, index) => (
                  <li key={step}>
                    <span>{index + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {category === 'aircraft' && (
            <section className={styles.flightBrief}>
              <div>
                <h2>{heading}</h2>
                <p>
                  {th
                    ? 'ยิ่งแจ้งข้อมูลครบ ทีมงานยิ่งช่วยจัดตัวเลือกที่ตรงกับแผนการเดินทางได้เร็วขึ้น'
                    : 'The more complete your brief, the faster the team can shape a suitable option.'}
                </p>
                <ul>
                  {guide.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.routeSketch} aria-hidden="true">
                <svg viewBox="0 0 400 160" fill="none">
                  <path
                    d="M25 130C110 10 178 168 266 74S350 58 382 28"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5 7"
                  />
                  <circle cx="25" cy="130" r="7" fill="currentColor" />
                  <circle cx="382" cy="28" r="7" fill="currentColor" />
                </svg>
              </div>
            </section>
          )}

          <section className={styles.faqBlock}>
            <div>
              <h2>{th ? 'ก่อนตัดสินใจ' : 'Before you decide'}</h2>
              <p>
                {th
                  ? 'ตรวจสอบสิ่งที่รวมในบริการและเงื่อนไขก่อนยืนยันการเช่า'
                  : 'Review inclusions and terms before confirming.'}
              </p>
            </div>
            <div>
              <details>
                <summary>
                  {th ? 'ค่าเช่าคิดอย่างไร?' : 'How is pricing calculated?'}
                </summary>
                <PricingAnswer category={category} th={th} />
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
              <Link href="/help">
                {th
                  ? 'ดูคำถามที่พบบ่อยทั้งหมด'
                  : 'Read all frequently asked questions'}{' '}
                →
              </Link>
            </div>
          </section>

          <section className={styles.nextStep}>
            <div>
              <h2>{th ? 'เตรียมข้อมูลก่อนเริ่ม' : 'Prepare these details'}</h2>
              <ul>
                {(th ? item.note : item.enNotes).map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
            <div>
              <Link className={discovery.blueButton} href="/how-it-works">
                {th ? 'ดูวิธีการเช่า' : 'Rental guide'}
              </Link>
              <Link href="/pricing">
                {th ? 'ข้อมูลค่าเช่าและเงื่อนไข' : 'Pricing and terms'} →
              </Link>
            </div>
          </section>

          <section className={styles.related}>
            <h2>{th ? 'บริการอื่นที่คุณอาจสนใจ' : 'Other ways to go'}</h2>
            <div>
              {rentalCategories
                .filter(({ id }) => id !== category)
                .map((other) => (
                  <Link key={other.id} href={`/rides/${other.id}`}>
                    <Image
                      src={other.image}
                      alt={th ? other.th : other.en}
                      fill
                      sizes="(max-width: 700px) 85vw, 30vw"
                    />
                    <span>{th ? other.th : other.en}</span>
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
