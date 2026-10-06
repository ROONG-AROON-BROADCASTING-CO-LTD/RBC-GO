'use client';

import { useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { type Page, text } from '../data/landing';
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
    const page = pageByPath[pathname];
    const titles =
      language === 'en'
        ? [
            'Electric motorcycle for Bangkok',
            'RBC GO electric motorcycle',
            'How RBC GO works',
            'RBC GO pricing',
            'About RBC GO',
            'RBC GO help and FAQs',
          ]
        : [
            'มอเตอร์ไซค์ไฟฟ้าสำหรับกรุงเทพฯ',
            'มอเตอร์ไซค์ไฟฟ้า RBC GO',
            'วิธีใช้งาน RBC GO',
            'ค่าบริการ RBC GO',
            'เกี่ยวกับ RBC GO',
            'ช่วยเหลือและคำถามที่พบบ่อย | RBC GO',
          ];
    const title =
      titles[
        page
          ? ['rides', 'how-it-works', 'pricing', 'about', 'help'].indexOf(
              page,
            ) + 1
          : 0
      ];

    return { title, description: text[language].description };
  }, [language, pathname]);

  useEffect(() => {
    const applyMetadata = () => {
      const title = `RBC GO | ${copy.title}`;
      document.title = title;
      setMeta('name', 'description', copy.description);
      setMeta('property', 'og:title', title);
      setMeta('property', 'og:description', copy.description);
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
