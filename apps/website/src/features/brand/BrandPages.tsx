'use client';
import { motion, MotionConfig, useScroll, useSpring } from 'motion/react';
import type { Page } from '../../data/landing';
import { useWebsiteLanguage } from '../../components/layout/WebsiteLanguageProvider';
import { WebsiteNav } from '../../components/layout/WebsiteNav';
import { WebsiteFooter } from '../../components/layout/WebsiteFooter';
import { RentalAppGuide } from '../../sections/website/app-guide/RentalAppGuide';
import { HeroSection } from '../../sections/website/HeroSection';
import { FleetSection } from '../../sections/website/FleetSection';
import { JourneySection } from '../../sections/website/JourneySection';
import { InformationSection } from '../../sections/website/InformationSection';
import { HelpSection } from '../../sections/website/HelpSection';
import { ClosingSection } from '../../sections/website/ClosingSection';
import { siteUrl } from '../../../app/site';
import { pageSeoCopy } from '../../../app/pageMetadata';
import styles from '../../components/website.module.css';
export function BrandPages({ page }: { page?: Page }) {
  const { language, setLanguage } = useWebsiteLanguage();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 30 });
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
      <div className={styles.site}>
        <motion.div
          className={styles.scrollProgress}
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
        <WebsiteNav
          locale={language}
          page={page}
          onLanguageChange={setLanguage}
        />
        <main id="main" className={styles.main}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
            }}
          />
          <HeroSection th={th} page={page} />
          <FleetSection th={th} page={page} />
          <JourneySection th={th} page={page} />
          {page === 'how-it-works' && <RentalAppGuide th={th} />}
          <InformationSection th={th} page={page} />
          <HelpSection th={th} page={page} />
          <ClosingSection th={th} page={page} />
        </main>
        <WebsiteFooter locale={language} />
      </div>
    </MotionConfig>
  );
}
