'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Locale } from '../data/landing';
import { WebsiteAction } from '../components/WebsiteAction';

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: {
    type: 'tween' as const,
    duration: 1.05,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

const heroLine = {
  initial: { opacity: 0, y: 42, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: {
    type: 'tween' as const,
    duration: 0.92,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

export function HeroSection({ locale }: { locale: Locale }) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const showVideo = () => setIsVideoReady(true);
    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) showVideo();
    video.addEventListener('canplay', showVideo, { once: true });

    return () => video.removeEventListener('canplay', showVideo);
  }, []);

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
    <section
      className="home-hero"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          '--hero-pointer-x',
          `${event.clientX - bounds.left}px`,
        );
        event.currentTarget.style.setProperty(
          '--hero-pointer-y',
          `${event.clientY - bounds.top}px`,
        );
      }}
    >
      <Image
        className="home-hero-poster"
        src="/images/heroes/home-hero-scooter-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <video
        ref={videoRef}
        className={isVideoReady ? 'is-ready' : undefined}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/images/heroes/home-hero-scooter.mp4"
        aria-label={
          isThai
            ? 'มอเตอร์ไซค์ไฟฟ้าในกรุงเทพฯ'
            : 'Electric motorcycle in Bangkok'
        }
      />
      <div className="home-hero-overlay" />
      <div className="home-hero-content">
        <motion.h1 initial="initial" animate="animate">
          <motion.span {...heroLine} className="home-hero-title-line">
            {copy.title[0]}
          </motion.span>
          <motion.span
            {...heroLine}
            className="home-hero-title-line"
            transition={{ ...heroLine.transition, delay: 0.12 }}
          >
            {copy.title[1]}
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal.transition, delay: 0.36 }}
        >
          {copy.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal.transition, delay: 0.5 }}
          className="home-hero-actions"
        >
          <WebsiteAction href="/rides">{copy.primary}</WebsiteAction>
          <WebsiteAction dark href="/how-it-works">
            {copy.secondary}
          </WebsiteAction>
        </motion.div>
      </div>
    </section>
  );
}
