import type { Metadata } from 'next';
import { BrandPages } from '../../src/features/brand/BrandPages';
import { pageMetadata } from '../pageMetadata';

export const metadata: Metadata = pageMetadata('th', 'about');

export default function About() {
  return <BrandPages page="about" />;
}
