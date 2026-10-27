import type { MetadataRoute } from 'next';
import { siteUrl } from './site';
import { pages } from '../src/data/navigation';
import { brandEvents } from '../src/data/brandEvents';
import { rentalCategories } from '../src/data/rentals';
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

  const rentalPages = rentalCategories.map(({ id }) => ({
    url: new URL(`/rides/${id}`, siteUrl).toString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  return [...staticPages, ...rentalPages, ...eventPages];
}
