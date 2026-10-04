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
              {locale === 'en' ? 'OUR FLEET' : 'รถของเรา'}
            </span>
            <h2>{c.lowerFleet}</h2>
            <p>{c.lowerIntro}</p>
          </div>
          <Link className="inline-link" href="/rides">
            {t.meet}
            <span className="round-arrow">
              <Icon kind="arrow" />
            </span>
          </Link>
        </div>
        <div className="ride-tiles">
          {(['bike', 'scooter'] as const).map((ride, i) => (
            <Link className={`ride-tile ${ride}`} href="/rides" key={ride}>
              <Image
                src={`/images/fleet-${ride}.png`}
                alt={t[ride]}
                fill
                sizes="(max-width:767px) 100vw, 50vw"
              />
              <div className="tile-caption">
                <div>
                  <h3>{c.types[i]}</h3>
                  <p>{i === 0 ? c.bikeCopy : c.scooterCopy}</p>
                </div>
                <span className="round-arrow outline">
                  <Icon kind="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="journey-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t.nav[1]}</span>
            <h2>{c.lowerHow}</h2>
          </div>
          <Link className="inline-link" href="/how-it-works">
            {t.how}
            <span className="round-arrow">
              <Icon kind="arrow" />
            </span>
          </Link>
        </div>
        <JourneySection locale={locale} />
      </section>
    </div>
  );
}
