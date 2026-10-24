'use client';

import { useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { type Page } from '../../data/landing';
import { pageSeoCopy } from '../../../app/pageMetadata';
import { useWebsiteLanguage } from './WebsiteLanguageProvider';

const pageByPath: Record<string, Page | undefined> = {
  '/': undefined,
  '/rides': 'rides',
  '/how-it-works': 'how-it-works',
  '/pricing': 'pricing',
  '/about': 'about',
  '/help': 'help',
};

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  const elements = Array.from(
    document.head.querySelectorAll<HTMLMetaElement>(selector),
  );
  const metaElements = elements.length
    ? elements
    : [document.head.appendChild(document.createElement('meta'))];

  metaElements.forEach((element) => {
    element.setAttribute(attribute, key);
    element.content = content;
  });
}

export function WebsiteDocumentMetadata() {
  const pathname = usePathname();
  const { language } = useWebsiteLanguage();
  const copy = useMemo(() => {
    if (!Object.hasOwn(pageByPath, pathname)) return null;
    return pageSeoCopy(language, pageByPath[pathname]);
  }, [language, pathname]);

  useEffect(() => {
    if (!copy) return;
    const applyMetadata = () => {
      const title = `RBC GO - ${copy.title}`;
      document.title = title;
      setMeta('name', 'description', copy.description);
      setMeta('property', 'og:title', title);
      setMeta('property', 'og:description', copy.description);
      setMeta('name', 'twitter:title', title);
      setMeta('name', 'twitter:description', copy.description);
      setMeta('property', 'og:locale', language === 'en' ? 'en_US' : 'th_TH');
    };

    applyMetadata();
    const timeout = window.setTimeout(applyMetadata, 50);
    const observer = new MutationObserver(applyMetadata);
    observer.observe(document.head, { childList: true });

    return () => {
      window.clearTimeout(timeout);
      observer.disconnect();
    };
  }, [copy, language]);

  return null;
}
