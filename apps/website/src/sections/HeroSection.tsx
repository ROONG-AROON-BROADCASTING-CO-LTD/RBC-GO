'use client';
import Image from 'next/image';
import type { Locale } from '../data/landing';
import { WebsiteAction } from '../components/WebsiteAction';
export function HeroSection({ locale }: { locale: Locale }) {
  const isThai = locale === 'th';
  const copy = isThai
    ? {
        title: ['เมืองของคุณ', 'ไปได้ไกลกว่า'],
        description:
          'การเดินทางไฟฟ้าที่คล่องตัว เชื่อมทุกจุดหมายของวันให้ไปต่อได้อย่างเป็นธรรมชาติ',
        primary: 'ดูรถของเรา',
        secondary: 'ดูวิธีใช้งาน',
      }
    : {
        title: ['Your city.', 'Your way forward.'],
        description:
          'Electric mobility designed to keep your day moving — smooth, simple, and ready when you are.',
        primary: 'Explore the fleet',
        secondary: 'How it works',
      };

  return (
    <section className="home-hero">
      <Image
        src="/images/city-rides.png"
        alt={
          isThai
            ? 'จักรยานและสกู๊ตเตอร์ไฟฟ้าในเมือง'
            : 'Electric bike and scooter in the city'
        }
        fill
        priority
        sizes="100vw"
      />
      <div className="home-hero-overlay" />
      <div className="home-hero-content">
        <h1>
          {copy.title[0]}
          <br />
          {copy.title[1]}
        </h1>
        <p>{copy.description}</p>
        <div className="home-hero-actions">
          <WebsiteAction href="/rides">{copy.primary}</WebsiteAction>
          <WebsiteAction dark href="/how-it-works">
            {copy.secondary}
          </WebsiteAction>
        </div>
      </div>
    </section>
  );
}
