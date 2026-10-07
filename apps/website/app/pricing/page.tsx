import type { Metadata } from 'next';
import { BrandPages } from '../../src/components/BrandPages';
import { pageMetadata } from '../pageMetadata';

export const metadata: Metadata = pageMetadata('th', 'pricing');

export default function Pricing() {
  return <BrandPages page="pricing" />;
}
