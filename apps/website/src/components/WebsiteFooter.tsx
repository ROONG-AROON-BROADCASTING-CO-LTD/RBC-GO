'use client';
import Image from 'next/image';
import Link from 'next/link';
import { type Locale, type Page, text, pages } from '../data/landing';
import { referenceCopy } from '../data/brandPages';
import { InfoDialog } from './Interactive';
function pageHref(page?: Page) {
  return page ? `/${page}` : '/';
}
export function WebsiteFooter({
  locale,
  page,
}: {
  locale: Locale;
  page?: Page;
}) {
  const t = text[locale];
  const c = referenceCopy(locale);
  return (
    <footer className="site-footer">
      <div className="footer-rail" />
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link className="brand" href="/">
            <Image
              className="brand-logo"
              src="/images/brand/rbc-go-logo.jpeg"
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
        </div>
        <div className="footer-links">
          <nav aria-label="Explore">
            <h3>{c.explore}</h3>
            {pages.slice(0, 4).map((p, i) => (
              <Link key={p} href={pageHref(p)}>
                {i === 0
                  ? locale === 'en'
                    ? 'Motorcycle'
                    : 'มอเตอร์ไซค์'
                  : t.nav[i]}
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
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} RBC GO</span>
        <span>{t.coming}</span>
      </div>
    </footer>
  );
}
