'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Locale, Page } from '../../data/landing';
import { rentalCopy } from '../../data/rentals';
import { Icon } from '../ui/Icon';
import { ThaiText } from '../ui/HeadingText';
import styles from '../website.module.css';
const routes = ['/rides', '/how-it-works', '/pricing', '/about', '/help'];
export function WebsiteNav({
  locale,
  page,
  onLanguageChange,
}: {
  locale: Locale;
  page?: Page;
  onLanguageChange: (locale: Locale) => void;
}) {
  const th = locale === 'th';
  const c = rentalCopy(locale);
  const toggleLanguage = () => onLanguageChange(th ? 'en' : 'th');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${styles.overlayHeader}${isScrolled ? ` ${styles.scrolled}` : ''}${menuOpen ? ` ${styles.menuOpen}` : ''}`}
    >
      <div className={styles.topbar}>
        <span>
          <ThaiText>
            {th
              ? 'การเดินทางที่คุณเลือกได้ · ทุกแผนของคุณ · ทุกโอกาส'
              : 'Choose your way to go · Every plan · Every occasion'}
          </ThaiText>
        </span>
        <div
          className={styles.topbarContact}
          aria-label={th ? 'ช่องทางติดต่อ' : 'Contact channels'}
        >
          {[
            [
              'Instagram',
              'https://www.instagram.com/rbc_go_go',
              'instagram.svg',
            ],
            ['YouTube', 'https://youtube.com/@RBCGO', 'youtube.svg'],
            ['TikTok', 'https://tiktok.com/@rbc_go', 'tiktok.svg'],
          ].map(([label, href, icon]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <Image src={`/icons/${icon}`} alt="" width={16} height={16} />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.navbar}>
        <Link href="/" className={styles.brand} aria-label="RBC GO home">
          <Image
            src="/images/brand/rbc-go-logo.jpeg"
            alt=""
            width={46}
            height={46}
            priority
          />
          <span>RBC GO</span>
        </Link>
        <nav
          className={`${styles.navigation} ${menuOpen ? styles.open : ''}`}
          aria-label={th ? 'เมนูหลัก' : 'Main navigation'}
        >
          <Link
            href="/"
            aria-current={page === undefined ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <ThaiText>{th ? 'หน้าแรก' : 'Home'}</ThaiText>
          </Link>
          {c.nav.map((label, i) => (
            <Link
              key={routes[i]}
              href={routes[i]}
              aria-current={
                page && `/${page}` === routes[i] ? 'page' : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              <ThaiText>{label}</ThaiText>
            </Link>
          ))}
        </nav>
        <div className={styles.headerActions}>
          <Link className={styles.headerStart} href="/how-it-works">
            <ThaiText>{th ? 'เริ่มต้นเช่า' : 'Start renting'}</ThaiText>
          </Link>
          <button
            onClick={toggleLanguage}
            aria-label={th ? 'เปลี่ยนเป็นภาษาอังกฤษ' : 'Switch to Thai'}
          >
            <span className={th ? styles.languageActive : ''}>TH</span>
            <i>/</i>
            <span className={!th ? styles.languageActive : ''}>EN</span>
          </button>
          <button
            className={styles.menu}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={th ? 'เปิดเมนู' : 'Toggle menu'}
            aria-expanded={menuOpen}
          >
            <Icon
              kind="menu"
              animateOnHover={false}
              animationState={menuOpen ? 'animate' : 'normal'}
              animationTrigger={menuOpen}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
