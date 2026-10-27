'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import type { Page } from '../../../data/navigation';
import { rentalCopy } from '../../../data/rentals';
import { rentalEase } from '../../../components/interactive/WebsiteMotion';
import { Arrow } from '../../../components/ui/Arrow';
import { HeadingText, ThaiText } from '../../../components/ui/HeadingText';
import styles from '../../../styles/website.module.css';
const MotionLink = motion.create(Link);

export function HeroSection({ th, page }: { th: boolean; page?: Page }) {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  // Match the journey image treatment: the image tracks vertically with the
  // viewport, while its scale stays constant so scrolling never creates a
  // zoom effect or forces per-frame image resampling.
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const mediaStyle = reduced ? undefined : { y: imageY };
  const c = rentalCopy(th ? 'th' : 'en');
  const pageHeroImages = {
    rides: '/images/rentals/marina-services.png',
    'how-it-works': '/images/rentals/rental-planning.png',
    pricing: '/images/rentals/aircraft-charter.png',
    about: '/images/rentals/yacht.png',
    help: '/images/rentals/travel-support.png',
  } satisfies Record<Page, string>;
  const pageTitleLines =
    page === 'rides'
      ? th
        ? ['เลือกวิธีเดินทาง', 'ของคุณ']
        : ['Find your way', 'to go']
      : page === 'how-it-works'
        ? th
          ? ['เช่าอย่างไร', 'ให้ตรงกับแผนของคุณ']
          : ['Your rental,', 'step by step.']
        : page === 'pricing'
          ? th
            ? ['รู้รายละเอียด', 'ก่อนเริ่มเดินทาง']
            : ['Know the details.', 'Enjoy the journey.']
          : page === 'about'
            ? th
              ? ['มากกว่าจุดหมาย', 'คือวิธีที่คุณเลือกไป']
              : ['More ways to move.', 'More ways to live.']
            : th
              ? ['ทุกคำถาม', 'ก่อนออกเดินทาง']
              : ['A little clarity', 'before you go.'];
  const pageIntroCopy =
    page === 'rides'
      ? c.collectionCopy
      : page === 'about'
        ? c.intro
        : th
          ? 'รายละเอียดที่ช่วยให้คุณเลือกบริการเช่าได้เหมาะกับการเดินทางของคุณ'
          : 'Helpful details to find the right rental for your plans.';

  return (
    <>
      {' '}
      {!page ? (
        <section className={styles.hero} ref={heroRef}>
          <motion.div className={styles.heroMedia} style={mediaStyle}>
            <Image
              src="/images/rentals/hero-charter.png"
              alt={
                th
                  ? 'รถยนต์ มอเตอร์ไซค์ไฟฟ้า เรือยอชต์ และเครื่องบินสำหรับการเดินทาง'
                  : 'Rental vehicles by road, sea and air'
              }
              fill
              priority
              sizes="100vw"
            />
          </motion.div>
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
                    <HeadingText>{line}</HeadingText>
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={reduced ? false : { y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: rentalEase }}
            >
              <ThaiText>{c.intro}</ThaiText>
            </motion.p>
            <MotionLink
              initial={reduced ? false : { y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.45, ease: rentalEase }}
              className={styles.primary}
              href="/rides"
            >
              <ThaiText>{c.explore}</ThaiText>
              <Arrow />
            </MotionLink>
          </div>
          <a
            className={styles.scrollCue}
            href="#categories"
            aria-label={th ? 'เลื่อนลงสำรวจบริการ' : 'Scroll to explore'}
          >
            <span>{th ? 'เลื่อนเพื่อสำรวจ' : 'SCROLL TO EXPLORE'}</span>
            <span className={styles.scrollCueLine} />
          </a>
        </section>
      ) : (
        <section className={`${styles.hero} ${styles.pageHero}`} ref={heroRef}>
          <motion.div className={styles.heroMedia} style={mediaStyle}>
            <Image
              src={pageHeroImages[page]}
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </motion.div>
          <div className={styles.heroShade} />
          <div className={styles.heroCopy}>
            <h1 className={styles.pageTitle}>
              {pageTitleLines.map((line, index) => (
                <span className={styles.titleMask} key={line}>
                  <motion.span
                    initial={reduced ? false : { y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.95,
                      delay: index * 0.14,
                      ease: rentalEase,
                    }}
                  >
                    <HeadingText phrases={th}>{line}</HeadingText>
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={reduced ? false : { y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: rentalEase }}
            >
              <ThaiText>{pageIntroCopy}</ThaiText>
            </motion.p>
          </div>
        </section>
      )}
    </>
  );
}
