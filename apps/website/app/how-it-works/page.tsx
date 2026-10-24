import type { Metadata } from 'next';
import { RentalWebsite } from '../../src/features/rentals/RentalWebsite';
import { pageMetadata } from '../pageMetadata';

export const metadata: Metadata = pageMetadata('th', 'how-it-works');

export default function HowItWorks() {
  return <RentalWebsite page="how-it-works" />;
}
