'use client';
import Image from 'next/image';
import { RouteIcon, ScanTextIcon, WalletIcon } from '@stackbuild/ui/icons';
import type { Locale } from '../data/landing';
import { referenceCopy } from '../data/brandPages';
export function JourneySection({
  locale,
  phones = false,
}: {
  locale: Locale;
  phones?: boolean;
}) {
  const c = referenceCopy(locale);
  const phoneImages =
    locale === 'en'
      ? [
          '/images/phone-wallet-en.png',
          '/images/phone-scan-en.png',
          '/images/phone-ride-en.png',
        ]
      : [
          '/images/phone-wallet-th.png',
          '/images/phone-scan-th.png',
          '/images/phone-ride-th.png',
        ];
  const journeyIcons = [WalletIcon, ScanTextIcon, RouteIcon];
  return (
    <section className={`journey ${phones ? 'with-phones' : ''}`}>
      <div className="journey-columns">
        {c.steps.map((title, i) => (
          <article key={title}>
            <div className="journey-title">
              <span className="number">{i + 1}</span>
              {!phones &&
                (() => {
                  const JourneyIcon = journeyIcons[i];
                  return <JourneyIcon className="animated-journey-icon" />;
                })()}
              <h3>{title}</h3>
            </div>
            <p>{c.stepCopy[i]}</p>
            {phones && (
              <div className="phone-art">
                <Image
                  src={phoneImages[i]}
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
                  width={941}
                  height={1672}
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
