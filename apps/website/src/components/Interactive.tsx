'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { type Locale, text } from '../data/landing';
import { referenceCopy } from '../data/brandPages';
import { MobileLoginLink } from './MobileLoginLink';
import { Icon } from './Icon';

export function FleetHero({ locale }: { locale: Locale }) {
  const [details, setDetails] = useState(false);
  const c = referenceCopy(locale);
  const t = text[locale];
  return (
    <>
      <section className="fleet-hero motorcycle-hero">
        <Image
          src="/images/rides-hero.png"
          alt={c.vehicle}
          fill
          sizes="100vw"
          preload
        />
        <div className="motorcycle-shade" />
        <div className="fleet-intro">
          <h1>
            {c.fleet[0]}
            <br />
            {c.fleet[1]}
          </h1>
          <p>
            {c.fleetIntro[0]}
            <br />
            {c.fleetIntro[1]}
          </p>
          <ul className="fleet-features">
            {c.features.map((feature, index) => (
              <li key={feature}>
                <Icon kind={(['bolt', 'route', 'scan'] as const)[index]} />
                {feature}
              </li>
            ))}
          </ul>
          <MobileLoginLink
            href={
              process.env.NEXT_PUBLIC_CUSTOMER_URL ?? 'http://localhost:5183'
            }
            label={t.login}
          />
        </div>
      </section>
      {details && (
        <section className="fleet-details" aria-live="polite">
          <div>
            <span className="eyebrow">{t.coming}</span>
            <h2>{c.vehicle}</h2>
            <p>{t.specifications}</p>
          </div>
          <button
            className="icon-button"
            onClick={() => setDetails(false)}
            aria-label={
              locale === 'en'
                ? 'Close motorcycle details'
                : 'ปิดรายละเอียดมอเตอร์ไซค์'
            }
          >
            <Icon kind="close" />
          </button>
        </section>
      )}
    </>
  );
}

export function InfoDialog({
  locale,
  kind,
  children,
  className = '',
}: {
  locale: Locale;
  kind: 'support' | 'policy';
  children: React.ReactNode;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const c = referenceCopy(locale);
  const title = kind === 'support' ? c.supportTitle : c.policyTitle;
  return (
    <>
      <button className={className} onClick={() => dialog.current?.showModal()}>
        {children}
      </button>
      <dialog
        ref={dialog}
        className="info-dialog"
        aria-label={title}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="icon-button dialog-close"
          onClick={() => dialog.current?.close()}
          aria-label={locale === 'en' ? 'Close' : 'ปิด'}
        >
          <Icon kind="close" />
        </button>
        <span className="eyebrow">RBC GO</span>
        <h2>{title}</h2>
        <p>{kind === 'support' ? c.supportCopy : c.policyCopy}</p>
        <Link
          className="button lime"
          href="/how-it-works"
          onClick={() => dialog.current?.close()}
        >
          {c.guide}
          <Icon kind="arrow" />
        </Link>
      </dialog>
    </>
  );
}

export function HelpQuestions({ locale }: { locale: Locale }) {
  const t = text[locale];
  const c = referenceCopy(locale);
  const [query, setQuery] = useState('');
  const found = t.faq.filter(([, q, a]) =>
    `${q} ${a}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()),
  );
  return (
    <section className="help-content">
      <label className="search">
        <Icon kind="search" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            locale === 'en' ? 'Search for a question...' : 'ค้นหาคำถาม...'
          }
          aria-label={t.search}
        />
      </label>
      <h2>{c.popular}</h2>
      <p className="sr-only" role="status">
        {found.length} {locale === 'en' ? 'questions' : 'คำถาม'}
      </p>
      <div className="faq-list">
        {found.map(([group, q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <Icon kind="chevron" />
            </summary>
            <p>{a}</p>
            <small>{group}</small>
          </details>
        ))}
        {!found.length && <p className="empty-state">{t.empty}</p>}
      </div>
    </section>
  );
}
