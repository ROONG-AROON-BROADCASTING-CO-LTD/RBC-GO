'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react';
import { RentalReveal, rentalEase } from './RentalMotion';
import type { Page } from '../../data/landing';
import { useWebsiteLanguage } from '../../components/layout/WebsiteLanguageProvider';
import { rentalCategories, rentalCopy } from './rentalContent';
import styles from './rental.module.css';
import { siteUrl } from '../../../app/site';
import { pageSeoCopy } from '../../../app/pageMetadata';
import { Icon } from '../../components/ui/Icon';

const routes = ['/rides', '/how-it-works', '/pricing', '/about', '/help'];
const MotionLink = motion.create(Link);

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12h15m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RentalWebsite({ page }: { page?: Page }) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 30 });
  const { language, toggleLanguage } = useWebsiteLanguage();
  const th = language === 'th';
  const c = rentalCopy(language);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RBC GO',
    url: siteUrl.toString(),
    description: pageSeoCopy(language, page).description,
    inLanguage: language,
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [category, setCategory] = useState('all');
  const title =
    page === 'rides'
      ? c.collection
      : page === 'how-it-works'
        ? th
          ? 'เช่าอย่างไร ให้ตรงกับแผนของคุณ'
          : 'Your rental, step by step.'
        : page === 'pricing'
          ? th
            ? 'รู้รายละเอียด ก่อนเริ่มเดินทาง'
            : 'Know the details. Enjoy the journey.'
          : page === 'about'
            ? th
              ? 'มากกว่าจุดหมาย คือวิธีที่คุณเลือกไป'
              : 'More ways to move. More ways to live.'
            : th
              ? 'ทุกคำถาม ก่อนออกเดินทาง'
              : 'A little clarity before you go.';
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.site}>
        <motion.div
          className={styles.scrollProgress}
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
        <header
          className={`${styles.header}${page === undefined ? ` ${styles.homeHeader}` : ''}${isScrolled ? ` ${styles.scrolled}` : ''}${menuOpen ? ` ${styles.menuOpen}` : ''}`}
        >
          <div className={styles.topbar}>
            <span>
              {th
                ? 'การเดินทางที่คุณเลือกได้ · ทุกแผนของคุณ · ทุกโอกาส'
                : 'Choose your way to go · Every plan · Every occasion'}
            </span>
            <div
              className={styles.topbarContact}
              aria-label={th ? 'ช่องทางติดต่อ' : 'Contact channels'}
            >
              {[
                [
                  'Instagram',
                  'https://www.instagram.com/rbc_go_go',
                  'instagram.svg',
                ],
                ['YouTube', 'https://youtube.com/@RBCGO', 'youtube.svg'],
                ['TikTok', 'https://tiktok.com/@rbc_go', 'tiktok.svg'],
              ].map(([label, href, icon]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Image src={`/icons/${icon}`} alt="" width={16} height={16} />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.navbar}>
            <Link href="/" className={styles.brand} aria-label="RBC GO home">
              <Image
                src="/images/brand/rbc-go-logo.jpeg"
                alt=""
                width={46}
                height={46}
                priority
              />
              <span>RBC GO</span>
            </Link>
            <nav
              className={`${styles.navigation} ${menuOpen ? styles.open : ''}`}
              aria-label={th ? 'เมนูหลัก' : 'Main navigation'}
            >
              <Link
                href="/"
                aria-current={page === undefined ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {th ? 'หน้าแรก' : 'Home'}
              </Link>
              {c.nav.map((label, i) => (
                <Link
                  key={routes[i]}
                  href={routes[i]}
                  aria-current={
                    page && `/${page}` === routes[i] ? 'page' : undefined
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className={styles.headerActions}>
              <Link className={styles.headerStart} href="/how-it-works">
                {th ? 'เริ่มต้นเช่า' : 'Start renting'}
              </Link>
              <button
                onClick={toggleLanguage}
                aria-label={th ? 'เปลี่ยนเป็นภาษาอังกฤษ' : 'Switch to Thai'}
              >
                <span className={th ? styles.languageActive : ''}>TH</span>
                <i>/</i>
                <span className={!th ? styles.languageActive : ''}>EN</span>
              </button>
              <button
                className={styles.menu}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={th ? 'เปิดเมนู' : 'Toggle menu'}
                aria-expanded={menuOpen}
              >
                <Icon
                  kind="menu"
                  animateOnHover={false}
                  animationState={menuOpen ? 'animate' : 'normal'}
                  animationTrigger={menuOpen}
                />
              </button>
            </div>
          </div>
        </header>
        <main id="main" className={styles.main}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
            }}
          />
          {!page ? (
            <section className={styles.hero}>
              <Image
                src="/images/rentals/hero.png"
                alt={
                  th
                    ? 'รถยนต์ มอเตอร์ไซค์ไฟฟ้า เรือยอชต์ และเครื่องบินสำหรับการเดินทาง'
                    : 'Rental vehicles by road, sea and air'
                }
                fill
                priority
                sizes="100vw"
              />
              <div className={styles.heroShade} />
              <div className={styles.heroCopy}>
                <h1>
                  {c.headline.map((line, i) => (
                    <span className={styles.titleMask} key={i}>
                      <motion.span
                        initial={reduced ? false : { y: '110%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.95,
                          delay: i * 0.14,
                          ease: rentalEase,
                        }}
                      >
                        {line}
                      </motion.span>
                    </span>
                  ))}
                </h1>
                <motion.p
                  initial={reduced ? false : { y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: rentalEase }}
                >
                  {c.intro}
                </motion.p>
                <MotionLink
                  initial={reduced ? false : { y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.65, delay: 0.45, ease: rentalEase }}
                  className={styles.primary}
                  href="/rides"
                >
                  {c.explore}
                  <Arrow />
                </MotionLink>
              </div>
            </section>
          ) : (
            <RentalReveal className={styles.pageIntro}>
              <span className={styles.sectionLabel}>
                RBC GO / {c.nav[routes.indexOf(`/${page}`)]}
              </span>
              <h1>{title}</h1>
              <p>
                {page === 'rides'
                  ? c.collectionCopy
                  : page === 'about'
                    ? c.intro
                    : th
                      ? 'รายละเอียดที่ช่วยให้คุณเลือกบริการเช่าได้เหมาะกับการเดินทางของคุณ'
                      : 'Helpful details to find the right rental for your plans.'}
              </p>
            </RentalReveal>
          )}

          {(!page || page === 'rides') && (
            <section className={styles.collection} id="categories">
              {!page && (
                <div className={styles.sectionHeading}>
                  <div>
                    <span className={styles.sectionLabel}>
                      {th
                        ? 'การเดินทางที่คุณเลือกได้'
                        : 'EXPLORE THE POSSIBILITIES'}
                    </span>
                    <h2>{c.collection}</h2>
                  </div>
                  <p>{c.collectionCopy}</p>
                </div>
              )}
              {page === 'rides' && (
                <div
                  className={styles.filters}
                  aria-label={th ? 'ประเภทยานพาหนะ' : 'Vehicle categories'}
                >
                  {[
                    { id: 'all', th: 'ทั้งหมด', en: 'All vehicles' },
                    ...rentalCategories,
                  ].map((item) => (
                    <button
                      key={item.id}
                      aria-pressed={category === item.id}
                      onClick={() => setCategory(item.id)}
                    >
                      {th ? item.th : item.en}
                    </button>
                  ))}
                </div>
              )}
              <div className={styles.categoryGrid}>
                {rentalCategories
                  .filter((item) => category === 'all' || category === item.id)
                  .map((item, i) => (
                    <MotionLink
                      layout="position"
                      initial={reduced ? false : { opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.65,
                        delay: i * 0.08,
                        ease: rentalEase,
                      }}
                      whileHover={reduced ? undefined : { y: -7 }}
                      whileTap={reduced ? undefined : { scale: 0.985 }}
                      href={`/rides#${item.id}`}
                      className={styles.category}
                      key={item.id}
                    >
                      <div className={styles.categoryImage}>
                        <Image
                          src={item.image}
                          alt={th ? item.th : item.en}
                          fill
                          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
                        />
                        <span>0{i + 1}</span>
                      </div>
                      <div className={styles.categoryTitle}>
                        <h3>{th ? item.th : item.en}</h3>
                        <Arrow />
                      </div>
                      <p>{th ? item.thCopy : item.enCopy}</p>
                    </MotionLink>
                  ))}
              </div>
              <p className={styles.caption}>{c.disclaimer}</p>
            </section>
          )}

          {page === 'rides' && (
            <div className={styles.detailList}>
              {rentalCategories.map((item) => (
                <RentalReveal
                  id={item.id}
                  key={item.id}
                  className={styles.detail}
                >
                  <div className={styles.detailImage}>
                    <Image
                      src={item.image}
                      alt={th ? item.th : item.en}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <span className={styles.sectionLabel}>
                      {item.en.toUpperCase()}
                    </span>
                    <h2>{th ? item.th : item.en}</h2>
                    <p>{th ? item.thDetail : item.enDetail}</p>
                    <ul>
                      {(th ? item.note : item.enNotes).map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                    <Link className={styles.textLink} href="/how-it-works">
                      {th ? 'เตรียมตัวก่อนเช่า' : 'Plan your rental'}
                      <Arrow />
                    </Link>
                  </div>
                </RentalReveal>
              ))}
            </div>
          )}

          {(!page || page === 'how-it-works') && (
            <RentalReveal className={styles.guide} id="safety">
              <div>
                <span className={styles.sectionLabel}>
                  {th ? 'วิธีการเช่า' : 'RENTAL GUIDE'}
                </span>
                <h2>{c.guideTitle}</h2>
              </div>
              <ol>
                {c.steps.map(([label, copy], i) => (
                  <motion.li
                    key={label}
                    initial={reduced ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.12,
                      duration: 0.6,
                      ease: rentalEase,
                    }}
                  >
                    <span>0{i + 1}</span>
                    <h3>{label}</h3>
                    <p>{copy}</p>
                  </motion.li>
                ))}
              </ol>
            </RentalReveal>
          )}

          {page === 'how-it-works' && (
            <section className={styles.reading}>
              <h2>
                {th
                  ? 'เตรียมให้พร้อม เพื่อทริปที่ราบรื่น'
                  : 'A little preparation goes a long way.'}
              </h2>
              <p>
                {th
                  ? 'ตรวจสอบเอกสารผู้เช่า ใบขับขี่หรือข้อกำหนดผู้โดยสาร เงื่อนไขรับ–คืน และสิ่งที่รวมในบริการ เรือยอชต์และเครื่องบินอาจมีข้อกำหนดเรื่องเส้นทาง สภาพอากาศ และผู้ให้บริการเพิ่มเติม'
                  : 'Review renter documents, licence or passenger requirements, handover details and service inclusions. Yacht and aircraft charters may have additional route, weather and operator requirements.'}
              </p>
            </section>
          )}

          {page === 'pricing' && (
            <section className={styles.reading}>
              <h2>
                {th
                  ? 'ค่าเช่าที่เหมาะกับรูปแบบการเดินทาง'
                  : 'Rental details shaped around your plans.'}
              </h2>
              <p>
                {th
                  ? 'แต่ละประเภทมีรูปแบบการเช่าแตกต่างกัน เราจึงให้ความสำคัญกับรายละเอียดราคาและเงื่อนไขของแต่ละรายการ แทนการใช้ราคาเดียวกับทุกบริการ'
                  : 'Each category has its own rental structure. Review the price and terms for the individual service you choose.'}
              </p>
              <div className={styles.pricingRows}>
                {rentalCategories.map((item) => (
                  <div key={item.id}>
                    <h3>{th ? item.th : item.en}</h3>
                    <p>
                      {th ? item.note.join(' · ') : item.enNotes.join(' · ')}
                    </p>
                  </div>
                ))}
              </div>
              <p className={styles.notice}>
                {th
                  ? 'ยังไม่มีการประกาศอัตราค่าเช่าหรือเปิดรับชำระเงินบนเว็บไซต์นี้'
                  : 'Rental rates have not yet been published. This website does not currently accept payments.'}
              </p>
            </section>
          )}

          {page === 'about' && (
            <RentalReveal className={styles.about}>
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
                  {th
                    ? 'หนึ่งแบรนด์ หลายวิธีเดินทาง'
                    : 'One destination for more ways to go.'}
                </h2>
                <p>
                  {th
                    ? 'RBC GO นำเสนอทางเลือกการเช่ายานพาหนะที่หลากหลาย ตั้งแต่การใช้ชีวิตในเมือง การเดินทางบนถนน ทริปพักผ่อนทางทะเล ไปจนถึงการเดินทางทางอากาศ'
                    : 'RBC GO brings together vehicle rental categories for city life, road trips, time at sea and travel by air.'}
                </p>
                <p>
                  {th
                    ? 'เราเริ่มต้นจากความต้องการของการเดินทาง ให้คุณสำรวจประเภทบริการ เปรียบเทียบสิ่งที่เหมาะกับแผน และเข้าใจรายละเอียดก่อนตัดสินใจเช่า'
                    : 'Start with what your journey needs. Explore the categories, consider your plans and understand the details before choosing a rental.'}
                </p>
                <Link className={styles.textLink} href="/rides">
                  {c.explore}
                  <Arrow />
                </Link>
              </div>
            </RentalReveal>
          )}

          {page === 'help' && (
            <section className={styles.reading}>
              <label className={styles.search}>
                {th ? 'ค้นหาคำถาม' : 'Search questions'}
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
                      <summary>{q}</summary>
                      <p>{a}</p>
                    </details>
                  ))}
              </div>
              {!faq.some(([q, a]) =>
                `${q} ${a}`.toLowerCase().includes(query.toLowerCase()),
              ) && (
                <p role="status">
                  {th
                    ? 'ไม่พบคำถามที่ตรงกัน ลองใช้คำค้นอื่น'
                    : 'No matching questions. Try another search.'}
                </p>
              )}
            </section>
          )}

          <RentalReveal className={styles.final}>
            <div>
              <span className={styles.sectionLabel}>YOUR NEXT JOURNEY</span>
              <h2>{c.finalTitle}</h2>
              <p>{c.finalCopy}</p>
            </div>
            <Link
              className={styles.primary}
              href={page === 'rides' ? '/how-it-works' : '/rides'}
            >
              {page === 'rides' ? c.nav[1] : c.explore}
              <Arrow />
            </Link>
          </RentalReveal>
        </main>
        <footer className={styles.footer}>
          <div>
            <Link href="/" className={styles.brand}>
              RBC <span>GO</span>
            </Link>
            <p>
              {th
                ? 'หลากหลายการเช่า เพื่อทุกการเดินทาง'
                : 'More ways to rent. More ways to go.'}
            </p>
          </div>
          <nav aria-label={th ? 'เมนูท้ายหน้า' : 'Footer navigation'}>
            {c.nav.map((label, i) => (
              <Link href={routes[i]} key={label}>
                {label}
              </Link>
            ))}
          </nav>
          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} RBC GO</span>
            <span>
              {th
                ? 'เว็บไซต์นำเสนอบริการ · เตรียมพบกับการจองออนไลน์'
                : 'Discover our services · Online booking coming soon'}
            </span>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
