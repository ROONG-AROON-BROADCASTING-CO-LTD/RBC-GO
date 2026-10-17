'use client';
import { useState } from 'react';
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
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const phoneImages =
    locale === 'en'
      ? [
          '/images/journey/phone-wallet-en.png',
          '/images/journey/phone-scan-en.png',
          '/images/journey/phone-ride-en.png',
        ]
      : [
          '/images/journey/phone-wallet-th.png',
          '/images/journey/phone-scan-th.png',
          '/images/journey/phone-ride-th.png',
        ];
  const journeyIcons = [WalletIcon, ScanTextIcon, RouteIcon];
  return (
    <section className={`journey ${phones ? 'with-phones' : ''}`}>
      <div className="journey-columns">
        {c.steps.map((title, i) => (
          <article
            key={title}
            onPointerEnter={() => setActiveStep(i)}
            onPointerLeave={() => setActiveStep(null)}
          >
            <div className="journey-title">
              <span className="number">{i + 1}</span>
              <h3>{title}</h3>
            </div>
            <p>{c.stepCopy[i]}</p>
            {!phones &&
              (() => {
                const JourneyIcon = journeyIcons[i];
                return (
                  <JourneyIcon
                    active={activeStep === i}
                    className="animated-journey-icon"
                  />
                );
              })()}
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
    </section>
  );
}
