'use client';

import Link from 'next/link';

import { motion } from 'motion/react';
import type { Page } from '../../data/landing';
import { rentalCopy } from '../../data/rentals';
import { WebsiteReveal } from '../../components/interactive/WebsiteMotion';
import { Arrow } from '../../components/ui/Arrow';
import { HeadingText, ThaiText } from '../../components/ui/HeadingText';
import styles from '../../components/website.module.css';

export function ClosingSection({ th, page }: { th: boolean; page?: Page }) {
  const c = rentalCopy(th ? 'th' : 'en');

  return (
    <>
      {' '}
      <WebsiteReveal className={styles.final}>
        <div>
          <span className={styles.sectionLabel}>YOUR NEXT JOURNEY</span>
          <h2>
            <HeadingText>{c.finalTitle}</HeadingText>
          </h2>
          <p>
            <ThaiText>{c.finalCopy}</ThaiText>
          </p>
        </div>
        <Link
          className={styles.primary}
          href={page === 'rides' ? '/how-it-works' : '/rides'}
        >
          <ThaiText>{page === 'rides' ? c.nav[1] : c.explore}</ThaiText>
          <Arrow />
        </Link>
      </WebsiteReveal>
    </>
  );
}
