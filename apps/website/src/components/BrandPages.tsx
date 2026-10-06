'use client';

import Image from 'next/image';
import { useState } from 'react';
import { type Locale, type Page, text } from '../data/landing';
import { referenceCopy } from '../data/brandPages';
import { customerUrl, siteUrl } from '../../app/site';
import { HelpQuestions, FleetHero, InfoDialog } from './Interactive';
import { WebsiteNav } from './WebsiteNav';
import { MobileLoginLink } from './MobileLoginLink';
import { Icon } from './Icon';
import { useWebsiteLanguage } from './WebsiteLanguageProvider';

import { WebsiteAction } from './WebsiteAction';
import { WebsiteFooter } from './WebsiteFooter';
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
    <>
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
            <section
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
              <figure className="vehicle-components-image">
                <Image
                  src="/images/vehicles/rbc-go-scooter-components.png"
                  alt={
                    locale === 'en'
                      ? 'Annotated RBC GO electric motorcycle components'
                      : 'ภาพอธิบายส่วนประกอบของมอเตอร์ไซค์ไฟฟ้า RBC GO'
                  }
                  width={1672}
                  height={941}
                  sizes="(max-width: 767px) 100vw, min(90vw, 1600px)"
                />
              </figure>
              <ol className="vehicle-components-list">
                {c.components.map(([title, description], index) => (
                  <li key={title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
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
              <p>{c.howIntro}</p>
            </section>
            <JourneySection locale={locale} phones />
            <section className="safety-note" id="safety">
              <Icon kind="motorcycle" />
              <div>
                <h2>{t.safety}</h2>
                <p>{t.safetyCopy}</p>
              </div>
              <MobileLoginLink href={customerUrl} label={t.login} />
            </section>
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
                <p>
                  {c.priceIntro[0]}
                  <br />
                  {c.priceIntro[1]}
                </p>
              </section>
              <section className="pricing-grid">
                <div className="pricing-list">
                  {c.priceItems.map(([title, copy], i) => (
                    <article key={title}>
                      <Icon
                        kind={(['route', 'chart', 'receipt'] as const)[i]}
                      />
                      <div>
                        <h3>{title}</h3>
                        <p>{copy}</p>
                      </div>
                    </article>
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
            </section>
            <section id="mission" className="about-benefits">
              {c.aboutBenefits.map(([title, copy], i) => (
                <article
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
                </article>
              ))}
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
              <p>{c.helpIntro}</p>
            </section>
            <HelpQuestions locale={locale} />
            <section className="help-callout">
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
            </section>
          </div>
        )}
        <section className="closing-cta">
          <Image
            src="/images/city/bangkok-line.png"
            alt=""
            fill
            sizes="100vw"
          />
          <h2>
            {c.cta[0]}
            <br />
            {c.cta[1]}
          </h2>
          <WebsiteAction href="/how-it-works" dark>
            {c.getStarted}
          </WebsiteAction>
        </section>
      </main>
      <WebsiteFooter locale={locale} page={page} />
    </>
  );
}
