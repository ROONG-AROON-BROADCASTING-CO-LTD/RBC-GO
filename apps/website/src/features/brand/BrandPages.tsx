'use client';

import Image from 'next/image';
import { useState } from 'react';
import { type Locale, type Page, text } from '../../data/landing';
import { referenceCopy } from '../../data/brandPages';
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

const eventImages = [
  '/images/about/kronos-event-bitec.jpg',
  '/images/about/kronos-event-cross-border.jpg',
  '/images/about/kronos-event-udon-01.jpg',
  '/images/about/kronos-event-ladprao.jpg',
  '/images/about/kronos-event-paragon.jpg',
  '/images/about/kronos-event-power-buy.jpg',
];

export function BrandPages({ page }: { page?: Page }) {
  const { language: locale, setLanguage } = useWebsiteLanguage();
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
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
              <ol className="vehicle-components-list">
                {c.components.map(([title, description], index) => (
                  <motion.li
                    key={`${title}-${index}`}
                    {...reveal}
                    transition={{
                      ...reveal.transition,
                      delay: (index % 3) * 0.12,
                    }}
                  >
                    <>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                    </>
                  </motion.li>
                ))}
              </ol>
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
              <div className="vehicle-care-list">
                {c.vehicleCareItems.map(([title, copy], index) => (
                  <motion.article key={`${title}-${index}`} {...reveal}>
                    <>
                      <Icon
                        kind={(['bolt', 'chart', 'chat'] as const)[index]}
                        animateOnHover={false}
                      />
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </>
                  </motion.article>
                ))}
              </div>
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
              <motion.section {...reveal} className="pricing-grid">
                <div className="pricing-list">
                  {c.priceItems.map(([title, copy], i) => (
                    <motion.article key={`${title}-${i}`} {...reveal}>
                      <>
                        <Icon
                          kind={(['route', 'chart', 'receipt'] as const)[i]}
                        />
                        <div>
                          <h3>{title}</h3>
                          <p>{copy}</p>
                        </div>
                      </>
                    </motion.article>
                  ))}
                </div>
                <aside className="rate-notice">
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
                </aside>
              </motion.section>
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
            <section id="mission" className="about-benefits">
              {c.aboutBenefits.map(([title, copy], i) => (
                <motion.article
                  key={`${title}-${i}`}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.12 }}
                  onPointerEnter={() => setActiveBenefit(i)}
                  onPointerLeave={() => setActiveBenefit(null)}
                >
                  <>
                    <Icon
                      kind={(['leaf', 'people', 'sparkle'] as const)[i]}
                      animateOnHover={false}
                      animationState={
                        activeBenefit === i ? 'animate' : 'normal'
                      }
                      animationTrigger={activeBenefit === i}
                    />
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </>
                </motion.article>
              ))}
            </section>
            <section
              className="about-proof"
              aria-labelledby="about-proof-heading"
            >
              <motion.div {...reveal} className="about-proof-heading">
                <span className="eyebrow">{c.manufacturingLabel}</span>
                <h2 id="about-proof-heading">{c.manufacturingTitle}</h2>
                <p>{c.manufacturingIntro}</p>
              </motion.div>
              <div className="about-proof-list">
                {c.manufacturingPoints.map(([title, copy], index) => (
                  <motion.article
                    key={`${title}-${index}`}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: index * 0.12 }}
                  >
                    <>
                      <Icon
                        kind={(['motorcycle', 'chart', 'chat'] as const)[index]}
                        animateOnHover={false}
                      />
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </>
                  </motion.article>
                ))}
              </div>
            </section>
            <section
              className="factory-capabilities"
              aria-labelledby="factory-capabilities-heading"
            >
              <motion.div {...reveal} className="factory-capabilities-heading">
                <span className="eyebrow">{c.factoryDetailLabel}</span>
                <h2 id="factory-capabilities-heading">
                  {c.factoryDetailTitle}
                </h2>
                <p>{c.factoryDetailIntro}</p>
              </motion.div>
              <motion.div
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.1 }}
                className="factory-facts"
                aria-label={c.factoryDetailLabel}
              >
                {c.factoryFacts.map(([value, label], index) => (
                  <motion.div key={value} {...galleryReveal(index)}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </motion.div>
                ))}
              </motion.div>
              <div className="factory-capability-list">
                {c.factoryCapabilities.map(([title, copy], index) => (
                  <motion.article
                    key={title}
                    {...galleryReveal(index)}
                    whileHover={{ y: -4 }}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
            <section
              className="manufacturing-gallery"
              aria-labelledby="manufacturing-gallery-heading"
            >
              <motion.div {...reveal} className="manufacturing-gallery-heading">
                <h2 id="manufacturing-gallery-heading">
                  {c.manufacturingGalleryTitle}
                </h2>
                <p>{c.manufacturingGalleryCopy}</p>
              </motion.div>
              <div className="manufacturing-gallery-grid">
                {[
                  {
                    src: '/images/about/kronos-factory-floor.jpg',
                    caption: c.manufacturingGalleryCaptions[0],
                  },
                  {
                    src: '/images/about/kronos-assembly-line.jpg',
                    caption: c.manufacturingGalleryCaptions[1],
                  },
                  {
                    src: '/images/about/kronos-metal-fabrication.jpg',
                    caption: c.manufacturingGalleryCaptions[2],
                  },
                  {
                    src: '/images/about/kronos-factory-exterior.jpg',
                    caption: c.manufacturingGalleryCaptions[3],
                  },
                  {
                    src: '/images/about/kronos-factory-machining.jpg',
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
              className="brand-events"
              aria-labelledby="brand-events-heading"
            >
              <motion.div {...reveal} className="brand-events-heading">
                <span className="eyebrow">{c.eventsLabel}</span>
                <h2 id="brand-events-heading">{c.eventsTitle}</h2>
                <p>{c.eventsIntro}</p>
              </motion.div>
              <ol className="brand-events-list">
                {c.events.map(([date, title, detail], index) => (
                  <motion.li
                    key={`${date}-${title}`}
                    {...galleryReveal(index)}
                    whileHover={{ y: -4 }}
                  >
                    <Image
                      src={eventImages[index]}
                      alt={`${title} — KRONOS E-BIKES`}
                      width={1080}
                      height={811}
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 160px, 140px"
                    />
                    <time>{date}</time>
                    <div>
                      <h3>{title}</h3>
                      <p>{detail}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
              <motion.div {...reveal} className="events-gallery-heading">
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
        <motion.section {...reveal} className="closing-cta closing-cta-video">
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
