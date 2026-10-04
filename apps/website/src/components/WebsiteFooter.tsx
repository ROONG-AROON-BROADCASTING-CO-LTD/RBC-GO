'use client';
import Image from 'next/image';
import Link from 'next/link';
import { type Locale, type Page, text, pages } from '../data/landing';
import { referenceCopy } from '../data/brandPages';
import { customerUrl } from '../../app/site';
import { InfoDialog } from './Interactive';
import { MobileLoginLink } from './MobileLoginLink';
function pageHref(page?: Page) {
  return page ? `/${page}` : '/';
}
export function WebsiteFooter({
  locale,
  page,
  onLanguageChange,
}: {
  locale: Locale;
  page?: Page;
  onLanguageChange: (locale: Locale) => void;
}) {
  const t = text[locale];
  const c = referenceCopy(locale);
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link className="brand" href="/">
            <Image
              className="brand-logo"
              src="/images/rbc-go-logo.jpeg"
              alt="RBC GO"
              width={88}
              height={88}
            />
            <span className="brand-name" lang="en">
              RBC GO
            </span>
          </Link>
          <p>
            {c.footer[0]}
            <br />
            {c.footer[1]}
          </p>
          <MobileLoginLink href={customerUrl} label={t.login} />
        </div>
        <nav aria-label="Explore">
          <h3>{c.explore}</h3>
          {pages.slice(0, 4).map((p, i) => (
            <Link key={p} href={pageHref(p)}>
              {i === 0 ? (locale === 'en' ? 'Fleet' : 'รถของเรา') : t.nav[i]}
            </Link>
          ))}
        </nav>
        <nav aria-label="Support">
          <h3>{c.support}</h3>
          <Link href="/help">{t.nav[4]}</Link>
          <Link href="/how-it-works#safety">{c.safety}</Link>
          <InfoDialog locale={locale} kind="support">
            {c.contact}
          </InfoDialog>
        </nav>
        <nav aria-label="Legal">
          <h3>{c.legal}</h3>
          {[c.terms, c.privacy, c.cookies].map((item) => (
            <InfoDialog key={item} locale={locale} kind="policy">
              {item}
            </InfoDialog>
          ))}
        </nav>
        <nav aria-label="Language">
          <h3>{c.language}</h3>
          <button
            type="button"
            className={locale === 'en' ? 'active-language' : ''}
            onClick={() => onLanguageChange('en')}
            lang="en"
          >
            EN <span>English</span>
          </button>
          <button
            type="button"
            className={locale === 'th' ? 'active-language' : ''}
            onClick={() => onLanguageChange('th')}
            lang="th"
          >
            TH <span>ไทย</span>
          </button>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} RBC GO</span>
        <span>{t.coming}</span>
      </div>
    </footer>
  );
}
