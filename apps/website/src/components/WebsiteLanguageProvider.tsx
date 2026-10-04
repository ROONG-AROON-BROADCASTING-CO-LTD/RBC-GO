'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Locale } from '../data/landing';

type WebsiteLanguageContextValue = {
  language: Locale;
  setLanguage: (language: Locale) => void;
  toggleLanguage: () => void;
};

const WebsiteLanguageContext =
  createContext<WebsiteLanguageContextValue | null>(null);

const storageKey = 'rbc-go-language';

export function WebsiteLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>('th');
  const [languageLoaded, setLanguageLoaded] = useState(false);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(storageKey);
    const url = new URL(window.location.href);
    const requestedLanguage = url.searchParams.get('lang');
    const nextLanguage =
      requestedLanguage === 'en' || requestedLanguage === 'th'
        ? requestedLanguage
        : storedLanguage === 'en' || storedLanguage === 'th'
          ? storedLanguage
          : 'th';

    setLanguageState(nextLanguage);

    if (url.searchParams.has('lang')) {
      url.searchParams.delete('lang');
      window.history.replaceState(
        window.history.state,
        '',
        `${url.pathname}${url.search}${url.hash}`,
      );
    }
    setLanguageLoaded(true);
  }, []);

  useEffect(() => {
    if (!languageLoaded) return;

    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
  }, [language, languageLoaded]);

  const setLanguage = useCallback((nextLanguage: Locale) => {
    setLanguageState(nextLanguage);
  }, []);

  const value = useMemo<WebsiteLanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === 'th' ? 'en' : 'th'),
    }),
    [language, setLanguage],
  );

  return (
    <WebsiteLanguageContext.Provider value={value}>
      {children}
    </WebsiteLanguageContext.Provider>
  );
}

export function useWebsiteLanguage() {
  const context = useContext(WebsiteLanguageContext);
  if (!context) {
    throw new Error(
      'useWebsiteLanguage must be used inside WebsiteLanguageProvider',
    );
  }
  return context;
}
