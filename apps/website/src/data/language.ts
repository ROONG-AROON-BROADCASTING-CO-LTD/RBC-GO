import type { Locale } from './landing';

export const languageCookieName = 'rbc-go-language';

export function normalizeLanguage(value: string | undefined): Locale {
  return value === 'en' ? 'en' : 'th';
}
