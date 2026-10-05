'use client';
import type { Locale } from '../data/landing';
import { WebsiteAction } from '../components/WebsiteAction';
export function HeroSection({ locale }: { locale: Locale }) {
  const isThai = locale === 'th';
  const copy = isThai
    ? {
        title: ['ไปให้ไกลกว่า', 'ในทุกจังหวะของเมือง'],
        description:
          'การเดินทางไฟฟ้าที่ออกแบบมาเพื่อเชื่อมต่อทุกจุดหมายของคุณ ให้ทุกวันในเมืองไปต่อได้อย่างเป็นธรรมชาติ',
        primary: 'ดูมอเตอร์ไซค์',
        secondary: 'ดูวิธีใช้งาน',
      }
    : {
        title: ['Go beyond', 'the everyday.'],
        description:
          'One electric motorcycle for the parts of Bangkok that keep your day moving.',
        primary: 'Meet the motorcycle',
        secondary: 'How it works',
      };

  return (
    <section className="home-hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/images/home-hero-scooter.mp4"
        aria-label={
          isThai
            ? 'มอเตอร์ไซค์ไฟฟ้าในกรุงเทพฯ'
            : 'Electric motorcycle in Bangkok'
        }
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
