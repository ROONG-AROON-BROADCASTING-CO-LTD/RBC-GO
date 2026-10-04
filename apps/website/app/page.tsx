import type { Metadata } from 'next';
import { BrandPages } from '../src/components/BrandPages';
import { pageMetadata } from './pageMetadata';

export const metadata: Metadata = pageMetadata('th');

export default function Home() {
  return <BrandPages />;
}
