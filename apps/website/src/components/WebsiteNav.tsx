'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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
  const t = text[locale];
  const c = referenceCopy(locale);

  return (
    <header className="site-header">
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
                ? 'Fleet'
                : 'รถของเรา'
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
    </header>
  );
}
