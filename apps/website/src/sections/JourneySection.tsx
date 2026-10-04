'use client';
import Image from 'next/image';
import type { Locale } from '../data/landing';
import { referenceCopy } from '../data/brandPages';
import { Icon } from '../components/Icon';
export function JourneySection({
  locale,
  phones = false,
}: {
  locale: Locale;
  phones?: boolean;
}) {
  const c = referenceCopy(locale);
  return (
    <section className={`journey ${phones ? 'with-phones' : ''}`}>
      <div className="journey-columns">
        {c.steps.map((title, i) => (
          <article key={title}>
            <div className="journey-title">
              <span className="number">{i + 1}</span>
              {!phones && (
                <Icon kind={(['wallet', 'scan', 'bike'] as const)[i]} />
              )}
              <h3>{title}</h3>
            </div>
            <p>{c.stepCopy[i]}</p>
            {phones && (
              <div className="phone-art">
                <Image
                  src={`/images/phone-${['wallet', 'scan', 'ride'][i]}.png`}
                  alt={
                    locale === 'en'
                      ? [
                          'Illustrative wallet screen with prepaid card',
                          'Illustrative QR scan screen',
                          'Illustrative ride map and trip status',
                        ][i]
                      : [
                          'ภาพตัวอย่างวอลเล็ตและบัตรเติมเงิน',
                          'ภาพตัวอย่างการสแกน QR',
                          'ภาพตัวอย่างแผนที่และสถานะการเดินทาง',
                        ][i]
                  }
                  width={887}
                  height={1774}
                  sizes="(max-width:767px) 75vw, 30vw"
                  loading="eager"
                />
              </div>
            )}
          </article>
        ))}
      </div>
      {phones && <p className="demo-note">{c.demo}</p>}
    </section>
  );
}
