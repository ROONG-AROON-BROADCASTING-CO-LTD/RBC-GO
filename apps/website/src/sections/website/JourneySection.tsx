'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { Page } from '../../data/landing';
import { rentalCopy } from '../../data/rentals';
import {
  WebsiteReveal,
  rentalEase,
} from '../../components/interactive/WebsiteMotion';
import { HeadingText, ThaiText } from '../../components/ui/HeadingText';
import styles from '../../components/website.module.css';

export function JourneySection({ th, page }: { th: boolean; page?: Page }) {
  const reduced = useReducedMotion();
  const c = rentalCopy(th ? 'th' : 'en');

  return (
    <>
      {' '}
      {!page && (
        <WebsiteReveal className={styles.guide} id="safety">
          <div>
            <span className={styles.sectionLabel}>
              <ThaiText>{th ? 'วิธีการเช่า' : 'RENTAL GUIDE'}</ThaiText>
            </span>
            <h2>
              <HeadingText>{c.guideTitle}</HeadingText>
            </h2>
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
                <h3>
                  <HeadingText>{label}</HeadingText>
                </h3>
                <p>
                  <ThaiText>{copy}</ThaiText>
                </p>
              </motion.li>
            ))}
          </ol>
        </WebsiteReveal>
      )}
    </>
  );
}
