'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { type Locale, text } from '../data/landing';
import { referenceCopy } from '../data/brandPages';
import { Icon } from '../components/Icon';
import { JourneySection } from './JourneySection';

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: {
    type: 'tween' as const,
    duration: 1.05,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

export function FleetSection({ locale }: { locale: Locale }) {
  const t = text[locale];
  const c = referenceCopy(locale);
  const [isFeatureVideoReady, setIsFeatureVideoReady] = useState(false);
  return (
    <div id="explore" className="lower-home">
      <section className="fleet-section">
        <motion.div {...reveal} className="section-heading">
          <div>
            <span className="eyebrow">
              {locale === 'en' ? 'OUR MOTORCYCLE' : 'มอเตอร์ไซค์ของเรา'}
            </span>
            <h2>{c.lowerFleet}</h2>
            <p>{c.lowerIntro}</p>
          </div>
        </motion.div>
        <motion.div
          {...reveal}
          className="ride-tiles motorcycle-tile-wrap"
          whileHover={{ y: -8, rotateX: 1.2 }}
          transition={{ type: 'spring', stiffness: 210, damping: 22 }}
        >
          <Link className="ride-tile motorcycle-tile" href="/rides">
            <motion.span
              aria-hidden="true"
              className="tile-lime-orbit"
              animate={{ opacity: [0.3, 0.68, 0.3], scale: [0.92, 1.08, 0.92] }}
              transition={{
                duration: 4.8,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
            <Image
              className="motorcycle-tile-poster"
              src="/images/vehicles/rbc-go-future-scooter.png"
              alt={c.vehicle}
              fill
              sizes="(max-width:767px) 100vw, 90vw"
              loading="eager"
            />
            <video
              aria-label={c.vehicle}
              autoPlay
              className={`motorcycle-tile-video${isFeatureVideoReady ? ' is-ready' : ''}`}
              loop
              muted
              onCanPlay={() => setIsFeatureVideoReady(true)}
              playsInline
              poster="/images/vehicles/rbc-go-future-scooter.png"
              preload="metadata"
              src="/images/vehicles/rbc-go-motorcycle-feature.mp4"
            />
            <div className="tile-caption">
              <div>
                <h3>{c.vehicle}</h3>
                <p>{c.vehicleCopy}</p>
              </div>
              <span className="round-arrow outline">
                <Icon kind="arrow" />
              </span>
            </div>
          </Link>
        </motion.div>
      </section>
      <section className="journey-section">
        <motion.div {...reveal} className="section-heading">
          <div>
            <span className="eyebrow">{t.nav[1]}</span>
            <h2>{c.lowerHow}</h2>
            <p>{c.howIntro}</p>
          </div>
        </motion.div>
        <JourneySection locale={locale} />
      </section>
    </div>
  );
}
