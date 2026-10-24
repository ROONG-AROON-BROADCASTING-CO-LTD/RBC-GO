'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';

import type { Page } from '../../data/landing';
import { rentalCopy } from '../../data/rentals';
import { WebsiteReveal } from '../../components/interactive/WebsiteMotion';
import { Arrow } from '../../components/ui/Arrow';
import { HeadingText, ThaiText } from '../../components/ui/HeadingText';
import styles from '../../components/website.module.css';
import experience from './experience.module.css';

export function ClosingSection({ th, page }: { th: boolean; page?: Page }) {
  const c = rentalCopy(th ? 'th' : 'en');
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <>
      {' '}
      <div ref={ref}>
        <WebsiteReveal className={experience.closing}>
          <motion.div
            className={experience.closingImage}
            style={reduced ? undefined : { y }}
          >
            <Image src="/images/rentals/yacht.png" alt="" fill sizes="100vw" />
          </motion.div>
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
      </div>
    </>
  );
}
