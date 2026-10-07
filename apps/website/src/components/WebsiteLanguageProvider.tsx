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
import { languageCookieName } from '../data/language';

type WebsiteLanguageContextValue = {
  language: Locale;
  setLanguage: (language: Locale) => void;
  toggleLanguage: () => void;
};

const WebsiteLanguageContext =
  createContext<WebsiteLanguageContextValue | null>(null);

export function WebsiteLanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Locale;
}) {
  const [language, setLanguageState] = useState<Locale>(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Locale) => {
    setLanguageState(nextLanguage);
    document.cookie = `${languageCookieName}=${nextLanguage}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, []);

  useEffect(() => {
    if (
      document.cookie
        .split('; ')
        .some((entry) => entry.startsWith(`${languageCookieName}=`))
    ) {
      return;
    }

    const legacyLanguage = window.localStorage.getItem(languageCookieName);
    if (legacyLanguage === 'en' || legacyLanguage === 'th') {
      setLanguage(legacyLanguage);
    }
  }, [setLanguage]);

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
