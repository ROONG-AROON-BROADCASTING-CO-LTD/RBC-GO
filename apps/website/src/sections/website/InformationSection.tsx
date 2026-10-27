'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { Page } from '../../data/landing';
import { rentalCopy, rentalCategories } from '../../data/rentals';
import { WebsiteReveal } from '../../components/interactive/WebsiteMotion';
import { Arrow } from '../../components/ui/Arrow';
import { HeadingText, ThaiText } from '../../components/ui/HeadingText';
import styles from '../../components/website.module.css';

export function InformationSection({ th, page }: { th: boolean; page?: Page }) {
  const c = rentalCopy(th ? 'th' : 'en');

  return (
    <>
      {' '}
      {page === 'how-it-works' && (
        <section className={styles.reading}>
          <span className={styles.sectionLabel}>FOUR WAYS TO GO</span>
          <h2>
            <HeadingText>
              {th
                ? 'บริการต่างกัน เริ่มต้นต่างกัน'
                : 'Four services. Four ways to get started.'}
            </HeadingText>
          </h2>
          <div className={styles.pricingRows}>
            {rentalCategories.map((item) => (
              <div key={item.id}>
                <h3>
                  <HeadingText>{th ? item.th : item.en}</HeadingText>
                </h3>
                <p>
                  <ThaiText>{th ? item.thDetail : item.enDetail}</ThaiText>
                </p>
              </div>
            ))}
          </div>
          <h2>
            <HeadingText>
              {th
                ? 'เตรียมให้พร้อม เพื่อทริปที่ราบรื่น'
                : 'A little preparation goes a long way.'}
            </HeadingText>
          </h2>
          <p>
            <ThaiText>
              {th
                ? 'ตรวจสอบเอกสารผู้เช่า ใบขับขี่หรือข้อกำหนดผู้โดยสาร เงื่อนไขรับ–คืน และสิ่งที่รวมในบริการ เรือยอชต์และเครื่องบินอาจมีข้อกำหนดเรื่องเส้นทาง สภาพอากาศ และผู้ให้บริการเพิ่มเติม'
                : 'Review renter documents, licence or passenger requirements, handover details and service inclusions. Yacht and aircraft charters may have additional route, weather and operator requirements.'}
            </ThaiText>
          </p>
        </section>
      )}
      {page === 'pricing' && (
        <section className={styles.reading}>
          <h2>
            <HeadingText>
              {th
                ? 'ค่าเช่าที่เหมาะกับรูปแบบการเดินทาง'
                : 'Rental details shaped around your plans.'}
            </HeadingText>
          </h2>
          <p>
            <ThaiText>
              {th
                ? 'มอเตอร์ไซค์ไฟฟ้าดูอัตราใช้งานและเงื่อนไขสถานี รถยนต์ดูค่าเช่าและเงื่อนไขของรถแต่ละคัน ส่วนเรือยอชต์และเครื่องบินดูราคาเหมาลำตามเส้นทาง ระยะเวลา และบริการที่เลือก'
                : 'For motorcycles, review usage rates and station rules. For cars, review the rate and terms for each vehicle. Yacht and aircraft charter prices depend on the itinerary, duration and selected services.'}
            </ThaiText>
          </p>
          <div className={styles.pricingRows}>
            {rentalCategories.map((item) => (
              <div key={item.id}>
                <h3>
                  <HeadingText>{th ? item.th : item.en}</HeadingText>
                </h3>
                <p>
                  <ThaiText>
                    {th ? item.note.join(' · ') : item.enNotes.join(' · ')}
                  </ThaiText>
                </p>
              </div>
            ))}
          </div>
          <p className={styles.notice}>
            <ThaiText>
              {th
                ? 'ยังไม่มีการประกาศอัตราค่าเช่าหรือเปิดรับชำระเงินบนเว็บไซต์นี้'
                : 'Rental rates have not yet been published. This website does not currently accept payments.'}
            </ThaiText>
          </p>
        </section>
      )}
      {page === 'about' && (
        <WebsiteReveal className={styles.about}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/rentals/hero-charter.png"
              alt={
                th
                  ? 'การเดินทางหลากหลายรูปแบบกับ RBC GO'
                  : 'Different ways to travel with RBC GO'
              }
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className={styles.sectionLabel}>ABOUT RBC GO</span>
            <h2>
              <HeadingText>
                {th
                  ? 'หนึ่งแบรนด์ หลายวิธีเดินทาง'
                  : 'One destination for more ways to go.'}
              </HeadingText>
            </h2>
            <p>
              <ThaiText>
                {th
                  ? 'RBC GO รวมบริการ 4 รูปแบบไว้ด้วยกัน: มอเตอร์ไซค์ไฟฟ้าให้เช่าตามสถานี รถยนต์ที่เจ้าของนำมาฝากปล่อยเช่า เรือยอชต์เหมาลำ และเครื่องบินเหมาลำ ให้แต่ละการเดินทางมีทางเลือกที่เหมาะกับคุณ'
                  : 'RBC GO brings together four services: station-based electric motorcycle rentals, cars entrusted to us by their owners, private yacht charters and private aircraft charters.'}
              </ThaiText>
            </p>
            <p>
              <ThaiText>
                {th
                  ? 'เราเริ่มต้นจากความต้องการของการเดินทาง ให้คุณสำรวจประเภทบริการ เปรียบเทียบสิ่งที่เหมาะกับแผน และเข้าใจรายละเอียดก่อนตัดสินใจเช่า'
                  : 'Start with what your journey needs. Explore the categories, consider your plans and understand the details before choosing a rental.'}
              </ThaiText>
            </p>
            <Link className={styles.textLink} href="/rides">
              <ThaiText>{c.explore}</ThaiText>
              <Arrow />
            </Link>
          </div>
        </WebsiteReveal>
      )}
      {page === 'about' && (
        <WebsiteReveal className={styles.reading} id="car-owners">
          <span className={styles.sectionLabel}>FOR CAR OWNERS</span>
          <h2>
            <HeadingText>
              {th
                ? 'มีรถว่าง ให้เราช่วยปล่อยเช่า'
                : 'Have an unused car? Let us help rent it out.'}
            </HeadingText>
          </h2>
          <p>
            <ThaiText>
              {th
                ? 'หากคุณมีรถยนต์ที่ไม่ได้ใช้งาน สามารถนำมาฝากกับ RBC GO เพื่อปล่อยเช่าให้ผู้ที่ต้องการรถสำหรับการเดินทาง เริ่มจากแจ้งข้อมูลรถและช่วงเวลาที่รถว่าง จากนั้นตรวจสอบความเหมาะสมและตกลงเงื่อนไขก่อนนำรถเข้าร่วมบริการ'
                : 'If your car is sitting unused, you can entrust it to RBC GO for rental. Start with your vehicle details and available dates, then review eligibility and agree on the terms before listing it.'}
            </ThaiText>
          </p>
          <p>
            <ThaiText>
              {th
                ? 'รายละเอียดส่วนแบ่งรายได้ ประกัน การดูแลรถ การส่งมอบ และความรับผิดชอบ จะระบุในข้อตกลงสำหรับเจ้าของรถก่อนเข้าร่วม'
                : 'Revenue sharing, insurance, vehicle care, handover and responsibilities will be set out in the owner agreement before you join.'}
            </ThaiText>
          </p>
          <Link className={styles.textLink} href="/help">
            <ThaiText>
              {th ? 'คำถามสำหรับเจ้าของรถ' : 'Questions for car owners'}
            </ThaiText>
            <Arrow />
          </Link>
        </WebsiteReveal>
      )}
    </>
  );
}
