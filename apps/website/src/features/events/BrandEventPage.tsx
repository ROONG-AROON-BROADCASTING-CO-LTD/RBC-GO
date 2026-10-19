'use client';

import Image from 'next/image';
import { motion, MotionConfig } from 'motion/react';
import { customerUrl } from '../../../app/site';
import type { BrandEvent } from '../../data/brandEvents';
import { WebsiteFooter } from '../../components/layout/WebsiteFooter';
import { WebsiteNav } from '../../components/layout/WebsiteNav';
import { useWebsiteLanguage } from '../../components/layout/WebsiteLanguageProvider';

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: {
    type: 'tween' as const,
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

export function BrandEventPage({ event }: { event: BrandEvent }) {
  const { language: locale, setLanguage } = useWebsiteLanguage();
  const c = event.copy[locale];
  const label =
    locale === 'en' ? 'KRONOS event archive' : 'คลังภาพกิจกรรม KRONOS';
  const galleryLabel =
    locale === 'en' ? 'Complete photo album' : 'อัลบั้มภาพเต็ม';

  return (
    <MotionConfig reducedMotion="user">
      <WebsiteNav
        locale={locale}
        page="about"
        customerUrl={customerUrl}
        onLanguageChange={setLanguage}
      />
      <main id="main" className="event-page">
        <section className="event-detail-hero" aria-labelledby="event-title">
          <motion.div {...reveal} className="event-detail-copy">
            <span className="eyebrow">{label}</span>
            <time>{c.date}</time>
            <h1 id="event-title">{c.title}</h1>
            <p>{c.detail}</p>
          </motion.div>
          <motion.figure
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
          >
            <Image
              src={event.images[0]}
              alt={`${c.title} — KRONOS E-BIKES`}
              width={1600}
              height={1200}
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </motion.figure>
        </section>

        <section
          className="event-detail-gallery"
          aria-labelledby="event-gallery-title"
        >
          <motion.div {...reveal} className="event-detail-gallery-heading">
            <span className="eyebrow">{galleryLabel}</span>
            <h2 id="event-gallery-title">{c.title}</h2>
            <p>
              {locale === 'en'
                ? `${event.images.length} photographs from this KRONOS event.`
                : `ภาพกิจกรรม KRONOS จำนวน ${event.images.length} ภาพ`}
            </p>
          </motion.div>
          <div className="event-detail-gallery-grid">
            {event.images.map((src, index) => (
              <figure key={src}>
                <Image
                  src={src}
                  alt={`${c.title} — ${index + 1}`}
                  width={1400}
                  height={1050}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </figure>
            ))}
          </div>
        </section>
      </main>
      <WebsiteFooter locale={locale} page="about" />
    </MotionConfig>
  );
}
