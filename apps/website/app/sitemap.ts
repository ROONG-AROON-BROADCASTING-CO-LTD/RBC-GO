import type { MetadataRoute } from 'next';
import { siteUrl } from './site';
import { pages } from '../src/data/landing';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', ...pages].map((page) => ({
    url: new URL(page ? `/${page}` : '/', siteUrl).toString(),
    changeFrequency: 'monthly' as const,
    priority: page ? 0.7 : 1,
  }));
}
