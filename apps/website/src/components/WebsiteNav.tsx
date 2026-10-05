'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { type Locale, type Page, pages, text } from '../data/landing';
import { referenceCopy } from '../data/brandPages';
import { Icon } from './Icon';
import { MobileLoginLink } from './MobileLoginLink';

type WebsiteNavProps = {
  locale: Locale;
  page?: Page;
  customerUrl: string;
  onLanguageChange: (locale: Locale) => void;
};

function pageHref(page?: Page) {
  return page ? `/${page}` : '/';
}

export function WebsiteNav({
  locale,
  page,
  customerUrl,
  onLanguageChange,
}: WebsiteNavProps) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = text[locale];
  const c = referenceCopy(locale);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="site-topbar">
        <span>
          {locale === 'en'
            ? 'Electric journeys · A brighter city · Every ride'
            : 'การเดินทางด้วยพลังงานไฟฟ้า · เพื่อเมืองที่ดีขึ้น · ทุกการเดินทาง'}
        </span>
        <div
          className="topbar-contact"
          aria-label={locale === 'en' ? 'Contact channels' : 'ช่องทางติดต่อ'}
        >
          <a
            href="https://www.instagram.com/rbc_go_go"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={15}
              height={15}
            />
          </a>
          <a
            href="https://youtube.com/@RBCGO"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <Image
              src="/icons/youtube.svg"
              alt="YouTube"
              width={15}
              height={15}
            />
          </a>
          <a
            href="https://tiktok.com/@rbc_go"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <Image
              src="/icons/tiktok.svg"
              alt="TikTok"
              width={15}
              height={15}
            />
          </a>
        </div>
      </div>
      <div className="site-nav">
        <Link className="brand" href="/" aria-label="RBC GO home">
          <Image
            className="brand-logo"
            src="/images/rbc-go-logo.jpeg"
            alt="RBC GO"
            width={72}
            height={72}
            priority
          />
          <span className="brand-name" lang="en">
            RBC GO
          </span>
        </Link>

        <nav
          className="desktop-nav"
          aria-label={locale === 'en' ? 'Main navigation' : 'เมนูหลัก'}
        >
          <Link aria-current={page === undefined ? 'page' : undefined} href="/">
            {locale === 'en' ? 'Home' : 'หน้าแรก'}
          </Link>
          {pages.map((item, index) => (
            <Link
              aria-current={page === item ? 'page' : undefined}
              key={item}
              href={pageHref(item)}
            >
              {index === 0
                ? locale === 'en'
                  ? 'Motorcycle'
                  : 'มอเตอร์ไซค์'
                : t.nav[index]}
            </Link>
          ))}
        </nav>

        <div className="header-right">
          <Link className="button lime header-start" href="/how-it-works">
            {c.getStarted}
          </Link>
          <button
            className="locale-switch"
            type="button"
            aria-label={locale === 'en' ? 'Change language' : 'เปลี่ยนภาษา'}
            onClick={() => onLanguageChange(locale === 'th' ? 'en' : 'th')}
          >
            <span className={locale === 'th' ? 'active' : ''} lang="th">
              TH
            </span>
            <i>/</i>
            <span className={locale === 'en' ? 'active' : ''} lang="en">
              EN
            </span>
          </button>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            <Icon kind={open ? 'close' : 'menu'} />
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
          >
            <Link href="/" onClick={() => setOpen(false)}>
              {locale === 'en' ? 'Home' : 'หน้าแรก'}
              <Icon kind="arrow" />
            </Link>
            {pages.map((item, index) => (
              <Link
                key={item}
                href={pageHref(item)}
                onClick={() => setOpen(false)}
              >
                {t.nav[index]}
                <Icon kind="arrow" />
              </Link>
            ))}
            <MobileLoginLink href={customerUrl} label={t.login} />
          </nav>
        )}
      </div>
    </header>
  );
}
