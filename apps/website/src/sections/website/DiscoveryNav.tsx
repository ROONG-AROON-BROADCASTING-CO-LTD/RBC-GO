'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Locale } from '../../data/landing';
import { Symbol } from './DiscoverySymbol';
import styles from './rentalDiscoveryPage.module.css';

function Flag({ locale }: { locale: Locale }) {
  return (
    <Image
      className={`${styles.flag} ${locale === 'th' ? styles.thaiFlag : styles.englishFlag}`}
      src={locale === 'th' ? '/images/flags-th.svg' : '/images/flags-us.svg'}
      alt=""
      width={40}
      height={40}
      aria-hidden="true"
    />
  );
}

export function DiscoveryNav({
  locale,
  onLanguageChange,
}: {
  locale: Locale;
  onLanguageChange: (locale: Locale) => void;
}) {
  const th = locale === 'th';
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 40);
    listener();
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  }, []);
  useEffect(() => {
    if (!open && !searchOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', escape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', escape);
    };
  }, [open, searchOpen]);
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
          <button
            className={`${styles.roundButton} ${styles.desktopSearch}`}
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label={th ? 'ค้นหาบริการ' : 'Search services'}
          >
            <Symbol name="search" />
          </button>
          <div className={styles.languagePicker}>
            <button
              className={styles.language}
              type="button"
              onClick={() => setLanguageOpen(!languageOpen)}
              aria-label={th ? 'เลือกภาษา' : 'Choose language'}
              aria-expanded={languageOpen}
              aria-controls="language-menu"
            >
              <Flag locale={locale} />
            </button>
            {languageOpen && (
              <div
                id="language-menu"
                className={styles.languageMenu}
                role="menu"
                aria-label={th ? 'เลือกภาษา' : 'Choose language'}
              >
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={!th}
                  onClick={() => {
                    onLanguageChange('en');
                    setLanguageOpen(false);
                  }}
                >
                  <Flag locale="en" />
                  <span>English</span>
                  {!th && <span className={styles.languageCheck}>✓</span>}
                </button>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={th}
                  onClick={() => {
                    onLanguageChange('th');
                    setLanguageOpen(false);
                  }}
                >
                  <Flag locale="th" />
                  <span>ภาษาไทย</span>
                  {th && <span className={styles.languageCheck}>✓</span>}
                </button>
              </div>
            )}
          </div>
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
      {searchOpen && (
        <div
          className={styles.searchOverlay}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSearchOpen(false);
          }}
        >
          <section
            className={styles.searchDialog}
            role="dialog"
            aria-modal="true"
            aria-label={th ? 'ค้นหาบริการเช่า' : 'Search rentals'}
          >
            <form
              className={styles.dialogSearch}
              onSubmit={(event) => {
                event.preventDefault();
                const destination = query.trim()
                  ? `/?q=${encodeURIComponent(query.trim())}#rental-search`
                  : '/#rental-search';
                window.location.assign(destination);
              }}
            >
              <Symbol name="search" />
              <input
                autoFocus
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={
                  th
                    ? 'ค้นหามอเตอร์ไซค์ รถยนต์ เรือยอชต์ หรือเครื่องบิน'
                    : 'Search motorcycles, cars, yachts or aircraft'
                }
              />
              <button type="submit">{th ? 'ค้นหา' : 'Search'}</button>
            </form>
            <div className={styles.searchDialogBody}>
              <div className={styles.searchTypes}>
                {[
                  [
                    'motorcycles',
                    'มอเตอร์ไซค์ไฟฟ้า',
                    'Electric motorcycles',
                    'bike',
                  ],
                  ['cars', 'รถยนต์', 'Cars', 'car'],
                  ['yachts', 'เรือยอชต์', 'Yachts', 'boat'],
                  ['aircraft', 'เครื่องบิน', 'Aircraft', 'plane'],
                ].map(([id, thai, english, icon]) => (
                  <Link
                    href={`/rides/${id}`}
                    key={id}
                    onClick={() => setSearchOpen(false)}
                  >
                    <Symbol name={icon as 'bike' | 'car' | 'boat' | 'plane'} />
                    <span>{th ? thai : english}</span>
                  </Link>
                ))}
              </div>
              <div className={styles.searchSuggestions}>
                <p>{th ? 'เลือกได้เร็วขึ้น' : 'QUICK PICKS'}</p>
                <div>
                  {[
                    ['/rides/motorcycles', 'สถานีใกล้คุณ', 'Nearby stations'],
                    ['/rides/cars', 'รถสำหรับทริป', 'Cars for your trip'],
                    ['/rides/yachts', 'ทริปทะเลส่วนตัว', 'Private sea trips'],
                    [
                      '/rides/aircraft',
                      'เที่ยวบินเหมาลำ',
                      'Private charter flights',
                    ],
                  ].map(([href, thai, english]) => (
                    <Link
                      href={href}
                      key={href}
                      onClick={() => setSearchOpen(false)}
                    >
                      {th ? thai : english}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
