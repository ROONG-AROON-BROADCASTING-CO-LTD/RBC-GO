import type { Metadata } from 'next';
import { RentalWebsite } from '../src/features/rentals/RentalWebsite';
import { pageMetadata } from './pageMetadata';

export const metadata: Metadata = pageMetadata('th');

export default function Home() {
  return <RentalWebsite />;
}
