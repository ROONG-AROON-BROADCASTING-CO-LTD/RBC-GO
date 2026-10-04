'use client';

import Image from 'next/image';
import Link from 'next/link';
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
            <p className="illustration-note">
              {locale === 'en'
                ? 'Coming soon in Bangkok · Vehicle images illustrate the planned service.'
                : 'เตรียมพบกันที่กรุงเทพฯ · ภาพรถใช้ประกอบแนวคิดบริการ'}
            </p>
          </>
        )}
        {!page && <FleetSection locale={locale} />}
        {page === 'how-it-works' && (
          <div className="page-content how-content">
            <section className="page-intro">
              <span className="eyebrow">{t.nav[1]}</span>
              <Heading lines={c.how} />
              <p>{c.howIntro}</p>
            </section>
            <JourneySection locale={locale} phones />
            <section className="safety-note" id="safety">
              <Icon kind="bike" />
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
              <section className="page-intro">
                <span className="eyebrow">{t.nav[2]}</span>
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
            <section className="river-banner">
              <Image
                src="/images/bangkok-river.png"
                alt={
                  locale === 'en'
                    ? 'Bangkok river and bridge at sunset'
                    : 'แม่น้ำและสะพานกรุงเทพฯ ยามเย็น'
                }
                fill
                sizes="100vw"
              />
              <div>
                <h2>
                  {c.river[0]}
                  <br />
                  {c.river[1]}
                </h2>
                <p>{c.riverCopy}</p>
              </div>
            </section>
          </>
        )}
        {page === 'about' && (
          <>
            <section className="about-hero">
              <Image
                src="/images/bangkok-temple-wide.png"
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
                <span className="eyebrow">
                  {locale === 'en' ? 'ABOUT RBC GO' : 'เกี่ยวกับ RBC GO'}
                </span>
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
                <Link className="inline-link mission-link" href="#mission">
                  <span className="round-arrow">
                    <Icon kind="arrow" />
                  </span>
                  {c.mission}
                </Link>
              </div>
            </section>
            <section id="mission" className="about-benefits">
              {c.aboutBenefits.map(([title, copy], i) => (
                <article key={title}>
                  <Icon kind={(['leaf', 'people', 'sparkle'] as const)[i]} />
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
            <section className="page-intro">
              <span className="eyebrow">{t.nav[4]}</span>
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
                <Icon kind="arrow" />
              </InfoDialog>
            </section>
          </div>
        )}
        <section className="closing-cta">
          <Image src="/images/bangkok-line.png" alt="" fill sizes="100vw" />
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
      <WebsiteFooter
        locale={locale}
        page={page}
        onLanguageChange={setLanguage}
      />
    </>
  );
}
