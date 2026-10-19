'use client';

import Image from 'next/image';
import { useState } from 'react';
import { type Locale, type Page, text } from '../data/landing';
import { referenceCopy } from '../data/brandPages';
import { customerUrl, siteUrl } from '../../app/site';
import { HelpQuestions, FleetHero, InfoDialog } from './Interactive';
import { WebsiteNav } from './WebsiteNav';
import { Icon } from './Icon';
import { useWebsiteLanguage } from './WebsiteLanguageProvider';

import { WebsiteAction } from './WebsiteAction';
import { WebsiteFooter } from './WebsiteFooter';
import { motion, MotionConfig } from 'motion/react';
import { HeroSection } from '../sections/HeroSection';
import { FleetSection } from '../sections/FleetSection';
import { JourneySection } from '../sections/JourneySection';

function pageHref(page?: Page) {
  return page ? `/${page}` : '/';
}
function Heading({ lines }: { lines: string[] }) {
  return (
    <h1>
      {lines[0]}
      <br />
      {lines[1]}
    </h1>
  );
}

const reveal = {
  initial: false as const,
  whileInView: { opacity: [0.12, 1], y: [48, 0] },
  viewport: { once: true, amount: 0.12 },
  transition: {
    type: 'tween' as const,
    duration: 1.05,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

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
                    {...reveal}
                    transition={{
                      ...reveal.transition,
                      delay: (index % 3) * 0.12,
                    }}
                    key={title}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
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
                  <motion.article {...reveal} key={title}>
                    <Icon
                      kind={(['bolt', 'chart', 'chat'] as const)[index]}
                      animateOnHover={false}
                    />
                    <h3>{title}</h3>
                    <p>{copy}</p>
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
            <motion.section {...reveal} className="page-intro">
              <Heading lines={c.how} />
              <p>{c.howIntro}</p>
            </motion.section>
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
              <motion.section {...reveal} className="page-intro">
                <Heading lines={c.pricing} />
                <p>
                  {c.priceIntro[0]}
                  <br />
                  {c.priceIntro[1]}
                </p>
              </motion.section>
              <motion.section {...reveal} className="pricing-grid">
                <div className="pricing-list">
                  {c.priceItems.map(([title, copy], i) => (
                    <motion.article {...reveal} key={title}>
                      <Icon
                        kind={(['route', 'chart', 'receipt'] as const)[i]}
                      />
                      <div>
                        <h3>{title}</h3>
                        <p>{copy}</p>
                      </div>
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
            <motion.section {...reveal} className="about-hero">
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
                <p className="about-lead">
                  {c.aboutIntro[0]}
                  <br />
                  {c.aboutIntro[1]}
                </p>
                <div className="about-narrative">
                  {c.aboutBody.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </motion.section>
            <motion.section {...reveal} id="mission" className="about-benefits">
              {c.aboutBenefits.map(([title, copy], i) => (
                <motion.article
                  {...reveal}
                  key={title}
                  onPointerEnter={() => setActiveBenefit(i)}
                  onPointerLeave={() => setActiveBenefit(null)}
                >
                  <Icon
                    kind={(['leaf', 'people', 'sparkle'] as const)[i]}
                    animateOnHover={false}
                    animationState={activeBenefit === i ? 'animate' : 'normal'}
                    animationTrigger={activeBenefit === i}
                  />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </motion.article>
              ))}
            </motion.section>
            <motion.section
              {...reveal}
              className="about-proof"
              aria-labelledby="about-proof-heading"
            >
              <div className="about-proof-heading">
                <span className="eyebrow">{c.manufacturingLabel}</span>
                <h2 id="about-proof-heading">{c.manufacturingTitle}</h2>
                <p>{c.manufacturingIntro}</p>
              </div>
              <div className="about-proof-list">
                {c.manufacturingPoints.map(([title, copy], index) => (
                  <motion.article {...reveal} key={title}>
                    <Icon
                      kind={(['motorcycle', 'chart', 'chat'] as const)[index]}
                      animateOnHover={false}
                    />
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </motion.article>
                ))}
              </div>
            </motion.section>
            <motion.section
              {...reveal}
              className="manufacturing-gallery"
              aria-labelledby="manufacturing-gallery-heading"
            >
              <div className="manufacturing-gallery-heading">
                <h2 id="manufacturing-gallery-heading">
                  {c.manufacturingGalleryTitle}
                </h2>
                <p>{c.manufacturingGalleryCopy}</p>
              </div>
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
                ].map((image) => (
                  <motion.figure {...reveal} key={image.src}>
                    <Image
                      src={image.src}
                      alt={image.caption}
                      width={1478}
                      height={1108}
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />
                    <figcaption>{image.caption}</figcaption>
                  </motion.figure>
                ))}
              </div>
            </motion.section>
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
            <motion.section {...reveal} className="page-intro">
              <Heading lines={c.help} />
              <p>{c.helpIntro}</p>
            </motion.section>
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
        <motion.section {...reveal} className="closing-cta">
          <Image
            src="/images/city/bangkok-line.png"
            alt=""
            width={2172}
            height={724}
            sizes="100vw"
            loading="eager"
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
