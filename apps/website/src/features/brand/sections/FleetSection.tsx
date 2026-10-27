'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Page } from '../../../data/navigation';
import { rentalCopy, rentalCategories } from '../../../data/rentals';
import {
  WebsiteReveal,
  rentalEase,
} from '../../../components/interactive/WebsiteMotion';
import { Arrow } from '../../../components/ui/Arrow';
import { HeadingText, ThaiText } from '../../../components/ui/HeadingText';
import styles from '../../../styles/website.module.css';
import { FleetExplorer } from './FleetExplorer';

export function FleetSection({ th, page }: { th: boolean; page?: Page }) {
  const c = rentalCopy(th ? 'th' : 'en');
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
          <FleetExplorer th={th} />
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
                <Link className={styles.textLink} href={`/rides/${item.id}`}>
                  <ThaiText>
                    {th ? 'ดูรายละเอียดบริการ' : 'View service details'}
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
