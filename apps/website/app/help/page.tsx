import type { Metadata } from 'next';
import { BrandPages } from '../../src/features/brand/BrandPages';
import { pageMetadata } from '../pageMetadata';

export const metadata: Metadata = pageMetadata('th', 'help');

export default function Help() {
  return <BrandPages page="help" />;
}
