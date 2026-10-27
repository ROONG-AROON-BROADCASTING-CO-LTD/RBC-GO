'use client';
import { MotionConfig } from 'motion/react';
import type { Page } from '../../data/landing';
import { useWebsiteLanguage } from '../../components/layout/WebsiteLanguageProvider';
import { RentalAppGuide } from '../../sections/website/app-guide/RentalAppGuide';
import { HeroSection } from '../../sections/website/HeroSection';
import { FleetSection } from '../../sections/website/FleetSection';
import { InformationSection } from '../../sections/website/InformationSection';
import { HelpSection } from '../../sections/website/HelpSection';
import { ClosingSection } from '../../sections/website/ClosingSection';
import {
  DiscoveryNav,
  DiscoveryFooter,
  RentalDiscoveryPage,
} from '../../sections/website/RentalDiscoveryPage';
import discovery from '../../sections/website/rentalDiscoveryPage.module.css';
import { siteUrl } from '../../../app/site';
import { pageSeoCopy } from '../../../app/pageMetadata';
import styles from '../../components/website.module.css';
export function BrandPages({ page }: { page?: Page }) {
  const { language, setLanguage } = useWebsiteLanguage();
  const th = language === 'th';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RBC GO',
    url: siteUrl.toString(),
    description: pageSeoCopy(language, page).description,
    inLanguage: language,
  };
  return (
    <MotionConfig reducedMotion="user">
      <div className={`${styles.site} ${discovery.theme}`}>
        <DiscoveryNav locale={language} onLanguageChange={setLanguage} />
        <main id="main" className={styles.main}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
            }}
          />
          {!page ? (
            <RentalDiscoveryPage th={th} />
          ) : (
            <>
              <HeroSection th={th} page={page} />
              <FleetSection th={th} page={page} />
              <InformationSection th={th} page={page} />
              {page === 'how-it-works' && <RentalAppGuide th={th} />}
              <HelpSection th={th} page={page} />
              <ClosingSection th={th} page={page} />
            </>
          )}
        </main>
        <DiscoveryFooter th={th} />
      </div>
    </MotionConfig>
  );
}
