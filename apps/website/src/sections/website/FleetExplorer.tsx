'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { rentalCategories } from '../../data/rentals';
import { Arrow } from '../../components/ui/Arrow';
import { ThaiText } from '../../components/ui/HeadingText';
import styles from './experience.module.css';

export function FleetExplorer({ th }: { th: boolean }) {
  const [active, setActive] = useState('cars');
  const reduced = useReducedMotion();
  const selected = rentalCategories.find((item) => item.id === active)!;

  return (
    <div className={styles.explorer}>
      <div
        className={styles.panels}
        aria-label={th ? 'สำรวจยานพาหนะ' : 'Explore vehicles'}
      >
        {rentalCategories.map((item, index) => (
          <motion.button
            type="button"
            key={item.id}
            className={styles.panel}
            data-active={active === item.id}
            aria-pressed={active === item.id}
            aria-label={th ? item.th : item.en}
            aria-controls="fleet-preview"
            onClick={() => setActive(item.id)}
            initial={reduced ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 767px) 90vw, 65vw"
            />
            <span className={styles.panelShade} />
            <span className={styles.panelName}>
              <ThaiText>{th ? item.th : item.en}</ThaiText>
            </span>
            <span className={styles.panelArrow} aria-hidden="true">
              <Arrow />
            </span>
          </motion.button>
        ))}
      </div>
      <div
        className={styles.preview}
        id="fleet-preview"
        aria-live="polite"
        aria-atomic="true"
      >
        <p key={selected.id}>
          <ThaiText>{th ? selected.thCopy : selected.enCopy}</ThaiText>
        </p>
        <Link href={`/rides#${selected.id}`}>
          <ThaiText>
            {th
              ? 'สำรวจ' + selected.th
              : `Explore ${selected.en.toLowerCase()}`}
          </ThaiText>
          <Arrow />
        </Link>
      </div>
    </div>
  );
}
