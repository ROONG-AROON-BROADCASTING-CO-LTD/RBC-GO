'use client';
import Image from 'next/image';
import Link from 'next/link';
import { type Locale, text } from '../data/landing';
import { referenceCopy } from '../data/brandPages';
import { Icon } from '../components/Icon';
import { JourneySection } from './JourneySection';
import { WebsiteAction } from '../components/WebsiteAction';
import { HomeMotion } from './HomeMotion';
export function FleetSection({ locale }: { locale: Locale }) {
  const t = text[locale];
  const c = referenceCopy(locale);
  return (
    <div id="explore" className="lower-home">
      <HomeMotion />
      <section className="fleet-section">
        <div className="section-heading" data-home-reveal>
          <div>
            <span className="eyebrow">
              {locale === 'en' ? 'OUR MOTORCYCLE' : 'มอเตอร์ไซค์ของเรา'}
            </span>
            <h2>{c.lowerFleet}</h2>
            <p>{c.lowerIntro}</p>
          </div>
        </div>
        <div className="ride-tiles motorcycle-tile-wrap" data-home-reveal>
          <Link className="ride-tile motorcycle-tile" href="/rides">
            <Image
              src="/images/vehicles/rbc-go-future-scooter.png"
              alt={c.vehicle}
              fill
              sizes="(max-width:767px) 100vw, 90vw"
              loading="eager"
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
        </div>
      </section>
      <section className="journey-section">
        <div className="section-heading" data-home-reveal>
          <div>
            <span className="eyebrow">{t.nav[1]}</span>
            <h2>{c.lowerHow}</h2>
            <p>{c.howIntro}</p>
          </div>
        </div>
        <JourneySection locale={locale} />
      </section>
      <section className="home-production" data-home-reveal>
        <div className="home-production-image">
          <Image
            src="/images/about/kronos-assembly-line.jpg"
            alt={
              locale === 'th'
                ? 'งานประกอบที่โรงงาน KRONOS E-BIKES'
                : 'Assembly at the KRONOS E-BIKES factory'
            }
            width={1477}
            height={1108}
            loading="eager"
            sizes="(max-width: 767px) 90vw, 50vw"
          />
          <span>KRONOS E-BIKES</span>
        </div>
        <div className="home-production-copy">
          <h2>
            {locale === 'th'
              ? 'เบื้องหลังทุกการเดินทาง'
              : 'Behind every journey.'}
          </h2>
          <p>
            {locale === 'th'
              ? 'รู้จักบริบทการผลิตของ KRONOS E-BIKES และแนวคิดการเดินทางในเมืองของ RBC GO'
              : 'Explore the production context behind KRONOS E-BIKES and the city-first thinking behind RBC GO.'}
          </p>
          <WebsiteAction dark href="/about">
            {locale === 'th' ? 'เกี่ยวกับ RBC GO' : 'About RBC GO'}
          </WebsiteAction>
        </div>
      </section>
    </div>
  );
}
