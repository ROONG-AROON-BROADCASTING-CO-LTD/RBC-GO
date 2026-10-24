import type { Metadata } from 'next';
import { RentalWebsite } from '../../src/features/rentals/RentalWebsite';
import { pageMetadata } from '../pageMetadata';

export const metadata: Metadata = pageMetadata('th', 'rides');

export default function Rides() {
  return <RentalWebsite page="rides" />;
}
