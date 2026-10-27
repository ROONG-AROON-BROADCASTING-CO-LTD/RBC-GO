'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Locale } from '../../data/landing';
import { Symbol } from './DiscoverySymbol';
import styles from './rentalDiscoveryPage.module.css';
export function DiscoveryNav({
  locale,
  onLanguageChange,
}: {
  locale: Locale;
  onLanguageChange: (locale: Locale) => void;
}) {
  const th = locale === 'th';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 40);
    listener();
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', escape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', escape);
    };
  }, [open]);
  return (
    <>
      <header
        className={`${styles.header} ${scrolled || open ? styles.solid : ''}`}
      >
        <Link href="/" className={styles.logo} aria-label="RBC GO home">
          <Image
            src="/images/brand/rbc-go-logo.jpeg"
            alt=""
            width={32}
            height={32}
            priority
          />
          <span>RBC GO</span>
        </Link>
        <nav
          className={styles.desktopNav}
          aria-label={th ? 'เมนูหลัก' : 'Main navigation'}
        >
          <Link href="/about">{th ? 'เกี่ยวกับเรา' : 'About us'}</Link>
          <Link href="/help">{th ? 'ช่วยเหลือ' : 'Help'}</Link>
        </nav>
        <div className={styles.headerActions}>
          <Link className={styles.softButton} href="/how-it-works">
            {th ? 'วิธีการเช่า' : 'Rental guide'}
          </Link>
          <Link
            className={`${styles.roundButton} ${styles.desktopSearch}`}
            href="/#rental-search"
            aria-label={th ? 'ค้นหาบริการ' : 'Search services'}
          >
            <Symbol name="search" />
          </Link>
          <button
            className={styles.language}
            type="button"
            onClick={() => onLanguageChange(th ? 'en' : 'th')}
            aria-label={th ? 'เปลี่ยนเป็นภาษาอังกฤษ' : 'Switch to Thai'}
          >
            {th ? <span className={styles.flag} /> : 'EN'}
          </button>
          <Link
            className={`${styles.softButton} ${styles.ownerNav}`}
            href="/about#car-owners"
          >
            {th ? 'สำหรับเจ้าของรถ' : 'For car owners'}
          </Link>
          <Link
            className={`${styles.blueButton} ${styles.exploreNav}`}
            href="/rides"
          >
            {th ? 'สำรวจบริการ' : 'Explore rentals'}
          </Link>
          <button
            className={`${styles.roundButton} ${styles.menuButton}`}
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={
              open
                ? th
                  ? 'ปิดเมนู'
                  : 'Close menu'
                : th
                  ? 'เปิดเมนู'
                  : 'Open menu'
            }
            aria-expanded={open}
            aria-controls="discovery-menu"
          >
            <Symbol name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </header>
      {open && (
        <nav
          id="discovery-menu"
          className={styles.drawer}
          aria-label={th ? 'เมนูมือถือ' : 'Mobile navigation'}
        >
          {[
            ['/', 'หน้าแรก', 'Home'],
            ['/rides', 'ยานพาหนะให้เช่า', 'Vehicles'],
            ['/how-it-works', 'วิธีการเช่า', 'Rental guide'],
            ['/pricing', 'ข้อมูลค่าเช่า', 'Rental details'],
            ['/about', 'เกี่ยวกับเรา', 'About'],
            ['/help', 'ช่วยเหลือ', 'Help'],
          ].map(([href, thai, english]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {th ? thai : english}
              <Symbol name="arrow" />
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
