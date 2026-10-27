import type { Locale } from './navigation';

export const languageCookieName = 'rbc-go-language';

export function normalizeLanguage(value: string | undefined): Locale {
  return value === 'en' ? 'en' : 'th';
}
