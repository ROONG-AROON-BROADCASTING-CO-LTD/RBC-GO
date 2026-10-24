'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { Page } from '../../data/landing';
import { rentalCopy, rentalCategories } from '../../data/rentals';
import {
  WebsiteReveal,
  rentalEase,
} from '../../components/interactive/WebsiteMotion';
import { Arrow } from '../../components/ui/Arrow';
import { HeadingText, ThaiText } from '../../components/ui/HeadingText';
import styles from '../../components/website.module.css';
import { FleetExplorer } from './FleetExplorer';
const MotionLink = motion.create(Link);

export function FleetSection({ th, page }: { th: boolean; page?: Page }) {
  const reduced = useReducedMotion();
  const c = rentalCopy(th ? 'th' : 'en');
  const [category, setCategory] = useState('all');
  return (
    <>
      {' '}
      {(!page || page === 'rides') && (
        <section className={styles.collection} id="categories">
          {!page && (
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionLabel}>
                  <ThaiText>
                    {th
                      ? 'การเดินทางที่คุณเลือกได้'
                      : 'EXPLORE THE POSSIBILITIES'}
                  </ThaiText>
                </span>
                <h2>
                  <HeadingText>{c.collection}</HeadingText>
                </h2>
                <p className={styles.sectionHeadingCopy}>
                  <ThaiText>{c.collectionCopy}</ThaiText>
                </p>
              </div>
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
                  <ThaiText>{th ? item.th : item.en}</ThaiText>
                </button>
              ))}
            </div>
          )}
          {!page && <FleetExplorer th={th} />}
          {page && (
            <div className={styles.categoryGrid}>
              <AnimatePresence mode="popLayout" initial={false}>
                {rentalCategories
                  .filter((item) => category === 'all' || category === item.id)
                  .map((item, i) => (
                    <MotionLink
                      layout="position"
                      initial={reduced ? false : { opacity: 0, y: 30 }}
                      exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
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
                        <h3>
                          <HeadingText>{th ? item.th : item.en}</HeadingText>
                        </h3>
                        <Arrow />
                      </div>
                      <p>
                        <ThaiText>{th ? item.thCopy : item.enCopy}</ThaiText>
                      </p>
                    </MotionLink>
                  ))}
              </AnimatePresence>
            </div>
          )}
          <p className={styles.caption}>
            <ThaiText>{c.disclaimer}</ThaiText>
          </p>
        </section>
      )}
      {page === 'rides' && (
        <div className={styles.detailList}>
          {rentalCategories.map((item) => (
            <WebsiteReveal id={item.id} key={item.id} className={styles.detail}>
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
                <h2>
                  <HeadingText>{th ? item.th : item.en}</HeadingText>
                </h2>
                <p>
                  <ThaiText>{th ? item.thDetail : item.enDetail}</ThaiText>
                </p>
                <ul>
                  {(th ? item.note : item.enNotes).map((note) => (
                    <li key={note}>
                      <ThaiText>{note}</ThaiText>
                    </li>
                  ))}
                </ul>
                <Link className={styles.textLink} href="/how-it-works">
                  <ThaiText>
                    {th ? 'เตรียมตัวก่อนเช่า' : 'Plan your rental'}
                  </ThaiText>
                  <Arrow />
                </Link>
              </div>
            </WebsiteReveal>
          ))}
        </div>
      )}
    </>
  );
}
