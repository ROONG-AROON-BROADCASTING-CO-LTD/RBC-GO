'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Locale } from '../../../data/navigation';
import styles from '../../../styles/discovery.module.css';

const languages = [
  { locale: 'en', label: 'English', flag: '/images/flags-us.svg' },
  { locale: 'th', label: 'ภาษาไทย', flag: '/images/flags-th.svg' },
] as const;

function Flag({ locale }: { locale: Locale }) {
  const language = languages.find((item) => item.locale === locale)!;
  return (
    <Image
      className={`${styles.flag} ${locale === 'th' ? styles.thaiFlag : styles.englishFlag}`}
      src={language.flag}
      alt=""
      width={40}
      height={40}
      aria-hidden="true"
    />
  );
}

export function LanguagePicker({
  locale,
  onLanguageChange,
}: {
  locale: Locale;
  onLanguageChange: (locale: Locale) => void;
}) {
  const [open, setOpen] = useState(false);
  const label = locale === 'th' ? 'เลือกภาษา' : 'Choose language';

  return (
    <div className={styles.languagePicker}>
      <button
        className={styles.language}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={label}
        aria-expanded={open}
        aria-controls="language-menu"
      >
        <Flag locale={locale} />
      </button>
      {open && (
        <div
          id="language-menu"
          className={styles.languageMenu}
          role="menu"
          aria-label={label}
        >
          {languages.map((language) => (
            <button
              key={language.locale}
              type="button"
              role="menuitemradio"
              aria-checked={locale === language.locale}
              onClick={() => {
                onLanguageChange(language.locale);
                setOpen(false);
              }}
            >
              <Flag locale={language.locale} />
              <span>{language.label}</span>
              {locale === language.locale && (
                <span className={styles.languageCheck}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
