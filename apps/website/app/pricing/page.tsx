import type { Metadata } from 'next';
import { RentalWebsite } from '../../src/features/rentals/RentalWebsite';
import { pageMetadata } from '../pageMetadata';

export const metadata: Metadata = pageMetadata('th', 'pricing');

export default function Pricing() {
  return <RentalWebsite page="pricing" />;
}
