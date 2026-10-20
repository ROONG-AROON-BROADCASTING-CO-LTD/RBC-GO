'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { type Locale, type Page, text } from '../../data/landing';
import { referenceCopy } from '../../data/brandPages';
import { brandEvents } from '../../data/brandEvents';
import { customerUrl, siteUrl } from '../../../app/site';
import {
  HelpQuestions,
  FleetHero,
  InfoDialog,
} from '../../components/interactive/Interactive';
import { WebsiteNav } from '../../components/layout/WebsiteNav';
import { WebsiteFooter } from '../../components/layout/WebsiteFooter';
import { useWebsiteLanguage } from '../../components/layout/WebsiteLanguageProvider';
import { Icon } from '../../components/ui/Icon';
import { WebsiteAction } from '../../components/ui/WebsiteAction';
import { motion, MotionConfig } from 'motion/react';
import { HeroSection } from '../../sections/home/HeroSection';
import { FleetSection } from '../../sections/home/FleetSection';
import { JourneySection } from '../../sections/home/JourneySection';

function pageHref(page?: Page) {
  return page ? `/${page}` : '/';
}
const heroLine = {
  initial: { opacity: 0, y: 42, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: {
    type: 'tween' as const,
    duration: 0.92,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

function Heading({ lines }: { lines: string[] }) {
  return (
    <motion.h1 initial="initial" animate="animate">
      <motion.span {...heroLine} className="page-hero-title-line">
        {lines[0]}
      </motion.span>
      <motion.span
        {...heroLine}
        className="page-hero-title-line"
        transition={{ ...heroLine.transition, delay: 0.12 }}
      >
        {lines[1]}
      </motion.span>
    </motion.h1>
  );
}

function HeroCopy({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        type: 'tween',
        duration: 0.82,
        delay: 0.36,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.p>
  );
}

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

const componentListReveal = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.09,
    },
  },
};

const componentItemReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween' as const,
      duration: 0.48,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const componentCardReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween' as const,
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const sequentialCardListReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function galleryReveal(index: number) {
  return {
    initial: { opacity: 0, y: 28, scale: 0.985 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      type: 'tween' as const,
      duration: 0.72,
      delay: Math.min(index * 0.08, 0.32),
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  };
}

export function BrandPages({ page }: { page?: Page }) {
  const { language: locale, setLanguage } = useWebsiteLanguage();
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  const [pricingHoveredIndex, setPricingHoveredIndex] = useState<number | null>(
    null,
  );
  const [pricingIconTrigger, setPricingIconTrigger] = useState(0);
  const t = text[locale];
  const c = referenceCopy(locale);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RBC GO',
    url: new URL(pageHref(page), siteUrl).toString(),
    description: t.description,
    inLanguage: locale,
  };
  return (
    <MotionConfig reducedMotion="user">
      <WebsiteNav
        locale={locale}
        page={page}
        customerUrl={customerUrl}
        onLanguageChange={setLanguage}
      />
      <main id="main" className={`page-${page ?? 'home'}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
        {!page && <HeroSection locale={locale} />}
        {page === 'rides' && (
          <>
            <FleetHero locale={locale} />
            <motion.section
              {...reveal}
              className="vehicle-components"
              aria-labelledby="vehicle-components-heading"
            >
              <div className="vehicle-components-heading">
                <span className="eyebrow">
                  {locale === 'en' ? 'VEHICLE DETAILS' : 'รายละเอียดตัวรถ'}
                </span>
                <h2 id="vehicle-components-heading">{c.componentTitle}</h2>
                <p>{c.componentIntro}</p>
              </div>
              <motion.figure {...reveal} className="vehicle-components-image">
                <Image
                  src="/images/vehicles/rbc-go-scooter-components.png"
                  alt={
                    locale === 'en'
                      ? 'KRONOS K6 electric scooter specifications'
                      : 'ข้อมูลสเปกมอเตอร์ไซค์ไฟฟ้า KRONOS K6'
                  }
                  width={1672}
                  height={941}
                  sizes="(max-width: 767px) 100vw, min(90vw, 1600px)"
                />
              </motion.figure>
              <motion.ol
                className="vehicle-components-list"
                variants={componentListReveal}
                initial={false}
                whileInView="visible"
                viewport={{ once: true, amount: 0.16 }}
              >
                {c.components.map(([title, description], index) => (
                  <li key={`${title}-${index}`}>
                    <motion.div
                      className="vehicle-component-content"
                      variants={componentItemReveal}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                    </motion.div>
                  </li>
                ))}
              </motion.ol>
            </motion.section>
            <motion.section
              {...reveal}
              className="vehicle-care"
              aria-labelledby="vehicle-care-heading"
            >
              <div className="vehicle-care-heading">
                <span className="eyebrow">{c.vehicleCareLabel}</span>
                <h2 id="vehicle-care-heading">{c.vehicleCareTitle}</h2>
                <p>{c.vehicleCareIntro}</p>
              </div>
              <motion.div
                className="vehicle-care-list"
                variants={componentListReveal}
                initial={false}
                whileInView="visible"
                viewport={{ once: true, amount: 0.16 }}
              >
                {c.vehicleCareItems.map(([title, copy], index) => (
                  <article key={`${title}-${index}`}>
                    <motion.div
                      className="vehicle-care-content"
                      variants={componentItemReveal}
                    >
                      <Icon
                        kind={(['bolt', 'chart', 'chat'] as const)[index]}
                        animateOnHover={false}
                      />
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </motion.div>
                  </article>
                ))}
              </motion.div>
            </motion.section>
          </>
        )}
        {!page && <FleetSection locale={locale} />}
        {page === 'how-it-works' && (
          <div className="page-content how-content">
            <div className="page-hero-visual">
              <Image
                src="/images/heroes/how-it-works-hero.png"
                alt=""
                fill
                sizes="100vw"
                priority
              />
            </div>
            <section className="page-intro">
              <Heading lines={c.how} />
              <HeroCopy>{c.howIntro}</HeroCopy>
            </section>
            <motion.div
              {...reveal}
              className="section-heading how-details-heading"
            >
              <div>
                <span className="eyebrow">{t.nav[2]}</span>
                <h2>{c.howDetailsTitle}</h2>
                <p>{c.howDetailsIntro}</p>
              </div>
            </motion.div>
            <JourneySection locale={locale} phones />
            <motion.section {...reveal} className="safety-note" id="safety">
              <Icon kind="motorcycle" />
              <div>
                <h2>{t.safety}</h2>
                <p>{t.safetyCopy}</p>
              </div>
            </motion.section>
          </div>
        )}
        {page === 'pricing' && (
          <>
            <div className="page-content pricing-content">
              <div className="page-hero-visual">
                <Image
                  src="/images/heroes/pricing-hero.png"
                  alt=""
                  fill
                  sizes="100vw"
                  priority
                />
              </div>
              <section className="page-intro">
                <Heading lines={c.pricing} />
                <HeroCopy>
                  {c.priceIntro[0]}
                  <br />
                  {c.priceIntro[1]}
                </HeroCopy>
              </section>
              <section className="pricing-grid">
                <motion.div {...reveal} className="section-heading">
                  <div>
                    <span className="eyebrow">{c.rates[0]}</span>
                    <h2>{c.pricingDetailsTitle}</h2>
                    <p>{c.pricingDetailsIntro}</p>
                  </div>
                </motion.div>
                <motion.div
                  className="pricing-list"
                  variants={sequentialCardListReveal}
                  initial={false}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.16 }}
                >
                  {c.priceItems.map(([title, copy], i) => (
                    <motion.article
                      key={`${title}-${i}`}
                      variants={componentCardReveal}
                      whileHover={{ y: -5 }}
                      onMouseEnter={() => {
                        setPricingHoveredIndex(i);
                        setPricingIconTrigger((value) => value + 1);
                      }}
                      onMouseLeave={() => setPricingHoveredIndex(null)}
                    >
                      <div className="journey-title">
                        <span className="number">{i + 1}</span>
                        <h3>{title}</h3>
                      </div>
                      <p>{copy}</p>
                      <Icon
                        kind={(['route', 'chart', 'receipt'] as const)[i]}
                        className="pricing-card-icon"
                        animateOnHover={false}
                        animationState={
                          pricingHoveredIndex === i ? 'animate' : 'normal'
                        }
                        animationTrigger={
                          pricingHoveredIndex === i ? pricingIconTrigger : 0
                        }
                      />
                    </motion.article>
                  ))}
                </motion.div>
                <motion.aside
                  {...reveal}
                  initial={false}
                  className="rate-notice"
                >
                  <Icon kind="tag" />
                  <div>
                    <h2>
                      {c.rates[0]}
                      <br />
                      {c.rates[1]}
                    </h2>
                    <p>{c.rateCopy}</p>
                    <small>{c.stay}</small>
                  </div>
                </motion.aside>
              </section>
            </div>
          </>
        )}
        {page === 'about' && (
          <>
            <section className="about-hero">
              <Image
                src="/images/heroes/about-hero.png"
                alt={
                  locale === 'en'
                    ? 'Wat Arun and the Chao Phraya River at sunset'
                    : 'วัดอรุณและแม่น้ำเจ้าพระยาช่วงเย็น'
                }
                fill
                sizes="100vw"
                preload
              />
              <div className="about-copy">
                <Heading lines={c.about} />
                <motion.p
                  className="about-lead"
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    type: 'tween',
                    duration: 0.82,
                    delay: 0.36,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {c.aboutIntro[0]}
                  <br />
                  {c.aboutIntro[1]}
                </motion.p>
                <motion.div
                  className="about-narrative"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: 'tween',
                    duration: 0.78,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {c.aboutBody.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </motion.div>
              </div>
            </section>
            <motion.section
              id="mission"
              className="about-benefits"
              variants={componentListReveal}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.16 }}
            >
              {c.aboutBenefits.map(([title, copy], i) => (
                <motion.article
                  key={`${title}-${i}`}
                  variants={componentCardReveal}
                  whileHover={{ y: -5 }}
                  onPointerEnter={() => setActiveBenefit(i)}
                  onPointerLeave={() => setActiveBenefit(null)}
                >
                  <div className="about-benefit-icon-motion">
                    <Icon
                      kind={(['leaf', 'people', 'sparkle'] as const)[i]}
                      animateOnHover={false}
                      animationState={
                        activeBenefit === i ? 'animate' : 'normal'
                      }
                      animationTrigger={activeBenefit === i}
                    />
                  </div>
                  <div className="about-benefit-copy">
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.section>
            <section
              id="collaboration"
              className="kronos-collaboration"
              aria-labelledby="kronos-collaboration-heading"
            >
              <motion.div
                {...reveal}
                className="kronos-collaboration-copy about-section-heading"
              >
                <span className="eyebrow">{c.collaborationLabel}</span>
                <h2 id="kronos-collaboration-heading">
                  {c.collaborationTitle}
                </h2>
                <p>{c.collaborationIntro}</p>
              </motion.div>
              <div className="kronos-press-gallery">
                {[
                  '/images/about/kronos-press/kronos-motor-expo-2023-01.jpg',
                  '/images/about/kronos-press/kronos-motor-expo-2023-02.jpg',
                  '/images/about/kronos-press/kronos-motor-expo-2023-03.jpg',
                  '/images/about/kronos-press/kronos-motor-expo-2023-04.jpg',
                ].map((src, index) => (
                  <motion.figure
                    key={src}
                    {...galleryReveal(index)}
                    whileHover={{ y: -5 }}
                  >
                    <Image
                      src={src}
                      alt={c.pressGalleryCaptions[index]}
                      width={index === 3 ? 600 : 940}
                      height={[569, 643, 694, 397][index]}
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />
                    <figcaption>{c.pressGalleryCaptions[index]}</figcaption>
                  </motion.figure>
                ))}
              </div>
              <motion.div {...reveal} className="kronos-press-sources">
                <div className="about-section-heading about-subsection-heading">
                  <span className="eyebrow">{c.pressGalleryLabel}</span>
                  <h3>{c.pressGalleryTitle}</h3>
                  <p>{c.pressGalleryCopy}</p>
                </div>
                <div aria-label="KRONOS press sources">
                  {c.pressSources.map(([label, href]) => (
                    <a key={href} href={href} target="_blank" rel="noreferrer">
                      {label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </section>
            <section
              className="about-proof"
              aria-labelledby="about-proof-heading"
            >
              <motion.div
                {...reveal}
                className="about-proof-heading about-section-heading"
              >
                <span className="eyebrow">{c.manufacturingLabel}</span>
                <h2 id="about-proof-heading">{c.manufacturingTitle}</h2>
                <p>{c.manufacturingIntro}</p>
              </motion.div>
              <motion.div
                className="about-proof-list"
                variants={componentListReveal}
                initial={false}
                whileInView="visible"
                viewport={{ once: true, amount: 0.16 }}
              >
                {c.manufacturingPoints.map(([title, copy], index) => (
                  <article key={`${title}-${index}`}>
                    <motion.div
                      className="about-proof-content"
                      variants={componentItemReveal}
                    >
                      <Icon
                        kind={(['motorcycle', 'chart', 'chat'] as const)[index]}
                        animateOnHover={false}
                      />
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </motion.div>
                  </article>
                ))}
              </motion.div>
            </section>
            <section
              className="factory-capabilities"
              aria-labelledby="factory-capabilities-heading"
            >
              <motion.div
                {...reveal}
                className="factory-capabilities-heading about-section-heading"
              >
                <span className="eyebrow">{c.factoryDetailLabel}</span>
                <h2 id="factory-capabilities-heading">
                  {c.factoryDetailTitle}
                </h2>
                <p>{c.factoryDetailIntro}</p>
              </motion.div>
              <div className="factory-facts" aria-label={c.factoryDetailLabel}>
                {c.factoryFacts.map(([value, label], index) => (
                  <motion.article
                    key={value}
                    {...galleryReveal(index)}
                    whileHover={{ y: -6, scale: 1.012 }}
                  >
                    <span className="factory-fact-label">
                      {locale === 'en'
                        ? `FACT ${String(index + 1).padStart(2, '0')}`
                        : `ข้อมูลสำคัญ ${String(index + 1).padStart(2, '0')}`}
                    </span>
                    <div className="factory-fact-content">
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  </motion.article>
                ))}
              </div>
              <motion.div
                className="factory-location"
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.16 }}
                whileHover={{ y: -6, scale: 1.012 }}
              >
                <div className="factory-location-content">
                  <div>
                    <span className="eyebrow">{c.factoryLocationLabel}</span>
                    <h3>{c.factoryLocationTitle}</h3>
                  </div>
                  <address>
                    <span className="factory-address-label">
                      {locale === 'en' ? 'Factory address' : 'ที่อยู่โรงงาน'}
                    </span>
                    <strong>{c.factoryLocationCompany}</strong>
                    <span>{c.factoryLocationAddress}</span>
                    <small>{c.factoryLocationNote}</small>
                  </address>
                </div>
              </motion.div>
              <motion.div
                className="factory-capability-list"
                variants={componentListReveal}
                initial={false}
                whileInView="visible"
                viewport={{ once: true, amount: 0.16 }}
              >
                {c.factoryCapabilities.map(([title, copy], index) => (
                  <motion.article
                    key={title}
                    variants={componentItemReveal}
                    whileHover={{ y: -6, scale: 1.012 }}
                  >
                    <div className="factory-capability-content">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <h3>{title}</h3>
                        <p>{copy}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </section>
            <section
              id="production-gallery"
              className="manufacturing-gallery"
              aria-labelledby="manufacturing-gallery-heading"
            >
              <motion.div
                {...reveal}
                className="manufacturing-gallery-heading about-section-heading"
              >
                <span className="eyebrow">{c.manufacturingGalleryLabel}</span>
                <h2 id="manufacturing-gallery-heading">
                  {c.manufacturingGalleryTitle}
                </h2>
                <p>{c.manufacturingGalleryCopy}</p>
              </motion.div>
              <div className="manufacturing-gallery-grid">
                {[
                  {
                    src: '/images/about/kronos-factory-gate.jpg',
                    caption: c.manufacturingGalleryCaptions[0],
                  },
                  {
                    src: '/images/about/kronos-factory-overview.jpg',
                    caption: c.manufacturingGalleryCaptions[1],
                  },
                  {
                    src: '/images/about/kronos-factory-press-shop.jpg',
                    caption: c.manufacturingGalleryCaptions[2],
                  },
                  {
                    src: '/images/about/kronos-factory-laser-cut.jpg',
                    caption: c.manufacturingGalleryCaptions[3],
                  },
                  {
                    src: '/images/about/kronos-factory-assembly-floor.jpg',
                    caption: c.manufacturingGalleryCaptions[4],
                  },
                ].map((image, index) => (
                  <motion.figure
                    key={image.src}
                    {...galleryReveal(index)}
                    whileHover={{ y: -5 }}
                  >
                    <>
                      <Image
                        src={image.src}
                        alt={image.caption}
                        width={1478}
                        height={1108}
                        sizes="(max-width: 767px) 100vw, 50vw"
                      />
                      <figcaption>{image.caption}</figcaption>
                    </>
                  </motion.figure>
                ))}
              </div>
            </section>
            <section
              id="events"
              className="brand-events"
              aria-labelledby="brand-events-heading"
            >
              <motion.div
                {...reveal}
                className="brand-events-heading about-section-heading"
              >
                <span className="eyebrow">{c.eventsLabel}</span>
                <h2 id="brand-events-heading">{c.eventsTitle}</h2>
                <p>{c.eventsIntro}</p>
              </motion.div>
              <ol className="brand-events-list">
                {brandEvents.map((event, index) => {
                  const eventCopy = event.copy[locale];
                  return (
                    <motion.li
                      key={event.slug}
                      {...galleryReveal(index)}
                      whileHover={{ y: -4 }}
                    >
                      <Link href={`/events/${event.slug}`}>
                        <Image
                          src={event.images[0]}
                          alt={`${eventCopy.title} — KRONOS E-BIKES`}
                          width={1080}
                          height={811}
                          sizes="(max-width: 600px) 100vw, (max-width: 900px) 160px, 140px"
                        />
                        <time>{eventCopy.date}</time>
                        <div>
                          <h3>{eventCopy.title}</h3>
                          <p>{eventCopy.detail}</p>
                        </div>
                      </Link>
                    </motion.li>
                  );
                })}
              </ol>
              <motion.div
                {...reveal}
                className="events-gallery-heading about-section-heading about-subsection-heading"
              >
                <span className="eyebrow">{c.eventGalleryLabel}</span>
                <h3>{c.eventGalleryTitle}</h3>
                <p>{c.eventGalleryCopy}</p>
              </motion.div>
              <div className="events-gallery-grid">
                {[
                  '/images/about/kronos-event-udon-01.jpg',
                  '/images/about/kronos-event-udon-02.jpg',
                  '/images/about/kronos-event-udon-03.jpg',
                ].map((src, index) => (
                  <motion.figure
                    key={src}
                    {...galleryReveal(index)}
                    whileHover={{ y: -5 }}
                  >
                    <Image
                      src={src}
                      alt={c.eventGalleryCaptions[index]}
                      width={1440}
                      height={1077}
                      sizes="(max-width: 767px) 100vw, 33vw"
                    />
                    <figcaption>{c.eventGalleryCaptions[index]}</figcaption>
                  </motion.figure>
                ))}
              </div>
            </section>
          </>
        )}
        {page === 'help' && (
          <div className="page-content help-page">
            <div className="page-hero-visual">
              <Image
                src="/images/heroes/help-hero.png"
                alt=""
                fill
                sizes="100vw"
                priority
              />
            </div>
            <section className="page-intro">
              <Heading lines={c.help} />
              <HeroCopy>{c.helpIntro}</HeroCopy>
            </section>
            <HelpQuestions locale={locale} />
            <motion.section {...reveal} className="help-callout">
              <Icon kind="chat" />
              <div>
                <h2>{c.helpMore}</h2>
                <p>{c.helpMoreCopy}</p>
              </div>
              <InfoDialog
                locale={locale}
                kind="support"
                className="button lime"
              >
                {c.contact}
              </InfoDialog>
            </motion.section>
          </div>
        )}
        <motion.section
          {...reveal}
          className="closing-cta closing-cta-video"
          whileHover={{ y: -8, rotateX: 1.2 }}
          transition={{ type: 'spring', stiffness: 210, damping: 22 }}
        >
          <video
            aria-label={
              locale === 'th'
                ? 'ผู้ขับขี่มอเตอร์ไซค์ในเมืองอนาคต'
                : 'Scooter rider in a futuristic city'
            }
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            src="/images/city/scooter-rider-futuristic-city.mp4"
          />
          <h2>
            {c.cta[0]}
            <br />
            {c.cta[1]}
          </h2>
          <WebsiteAction href="/how-it-works" dark>
            {c.getStarted}
          </WebsiteAction>
        </motion.section>
      </main>
      <WebsiteFooter locale={locale} page={page} />
    </MotionConfig>
  );
}
