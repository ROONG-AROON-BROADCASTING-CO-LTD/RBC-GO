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
                ? 'แต่ละประเภทมีรูปแบบการเช่าแตกต่างกัน เราจึงให้ความสำคัญกับรายละเอียดราคาและเงื่อนไขของแต่ละรายการ แทนการใช้ราคาเดียวกับทุกบริการ'
                : 'Each category has its own rental structure. Review the price and terms for the individual service you choose.'}
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
              src="/images/rentals/hero.png"
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
                  ? 'RBC GO นำเสนอทางเลือกการเช่ายานพาหนะที่หลากหลาย ตั้งแต่การใช้ชีวิตในเมือง การเดินทางบนถนน ทริปพักผ่อนทางทะเล ไปจนถึงการเดินทางทางอากาศ'
                  : 'RBC GO brings together vehicle rental categories for city life, road trips, time at sea and travel by air.'}
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
    </>
  );
}
