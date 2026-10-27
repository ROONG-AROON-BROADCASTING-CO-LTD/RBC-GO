export type Locale = 'en' | 'th';
export const pages = [
  'rides',
  'how-it-works',
  'pricing',
  'about',
  'help',
] as const;
export type Page = (typeof pages)[number];
