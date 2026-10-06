'use client';
import Image from 'next/image';
import Link from 'next/link';
import { type Locale, text } from '../data/landing';
import { referenceCopy } from '../data/brandPages';
import { Icon } from '../components/Icon';
import { JourneySection } from './JourneySection';
export function FleetSection({ locale }: { locale: Locale }) {
  const t = text[locale];
  const c = referenceCopy(locale);
  return (
    <div id="explore" className="lower-home">
      <section className="fleet-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              {locale === 'en' ? 'OUR MOTORCYCLE' : 'มอเตอร์ไซค์ของเรา'}
            </span>
            <h2>{c.lowerFleet}</h2>
            <p>{c.lowerIntro}</p>
          </div>
        </div>
        <div className="ride-tiles motorcycle-tile-wrap">
          <Link className="ride-tile motorcycle-tile" href="/rides">
            <Image
              src="/images/rbc-go-future-scooter.png"
              alt={c.vehicle}
              fill
              sizes="(max-width:767px) 100vw, 90vw"
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
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t.nav[1]}</span>
            <h2>{c.lowerHow}</h2>
            <p>{c.howIntro}</p>
          </div>
        </div>
        <JourneySection locale={locale} />
      </section>
    </div>
  );
}
