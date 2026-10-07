import type { Metadata } from 'next';
import { BrandPages } from '../../src/components/BrandPages';
import { pageMetadata } from '../pageMetadata';

export const metadata: Metadata = pageMetadata('th', 'how-it-works');

export default function HowItWorks() {
  return <BrandPages page="how-it-works" />;
}
