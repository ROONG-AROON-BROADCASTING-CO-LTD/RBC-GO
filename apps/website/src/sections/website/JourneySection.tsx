'use client';

import Link from 'next/link';
import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import type { Page } from '../../data/landing';
import { rentalCopy } from '../../data/rentals';
import {
  WebsiteReveal,
  rentalEase,
} from '../../components/interactive/WebsiteMotion';
import { HeadingText, ThaiText } from '../../components/ui/HeadingText';
import styles from '../../components/website.module.css';
import experience from './experience.module.css';
import { Arrow } from '../../components/ui/Arrow';

export function JourneySection({ th, page }: { th: boolean; page?: Page }) {
  return page ? null : <HomeJourney th={th} />;
}

function HomeJourney({ th }: { th: boolean }) {
  const reduced = useReducedMotion();
  const c = rentalCopy(th ? 'th' : 'en');
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 85%', 'end 55%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <WebsiteReveal className={styles.journey} id="safety">
      <div className={experience.journeyHead}>
        <div>
          <span className={styles.sectionLabel}>
            <ThaiText>{th ? 'วิธีการเช่า' : 'RENTAL GUIDE'}</ThaiText>
          </span>
          <h2>
            <HeadingText>{c.guideTitle}</HeadingText>
          </h2>
        </div>
        <Link href="/how-it-works">
          <ThaiText>{th ? 'ดูวิธีการเช่า' : 'Discover how it works'}</ThaiText>
          <Arrow />
        </Link>
      </div>
      <div className={experience.journeyTrack} ref={trackRef}>
        <div className={experience.trackLine} aria-hidden="true">
          <motion.span
            className={experience.horizontalProgress}
            style={reduced ? undefined : { scaleX: lineScale }}
          />
          <motion.span
            className={experience.verticalProgress}
            style={reduced ? undefined : { scaleY: lineScale }}
          />
        </div>
        <ol className={experience.steps}>
          {c.steps.map(([label, copy], i) => (
            <motion.li
              className={experience.step}
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
              <span className={experience.stepNumber}>0{i + 1}</span>
              <h3>
                <HeadingText>{label}</HeadingText>
              </h3>
              <p>
                <ThaiText>{copy}</ThaiText>
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </WebsiteReveal>
  );
}
