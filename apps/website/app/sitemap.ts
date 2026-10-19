import type { MetadataRoute } from 'next';
import { siteUrl } from './site';
import { pages } from '../src/data/landing';
import { brandEvents } from '../src/data/brandEvents';
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', ...pages].map((page) => ({
    url: new URL(page ? `/${page}` : '/', siteUrl).toString(),
    changeFrequency: 'monthly' as const,
    priority: page ? 0.7 : 1,
  }));
  const eventPages = brandEvents.map((event) => ({
    url: new URL(`/events/${event.slug}`, siteUrl).toString(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...eventPages];
}
