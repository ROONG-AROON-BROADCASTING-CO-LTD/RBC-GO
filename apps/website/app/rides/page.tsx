import type { Metadata } from 'next';
import { BrandPages } from '../../src/features/brand/BrandPages';
import { pageMetadata } from '../pageMetadata';

export const metadata: Metadata = pageMetadata('th', 'rides');

export default function Rides() {
  return <BrandPages page="rides" />;
}
