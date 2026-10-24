import type { Metadata } from 'next';
import { RentalWebsite } from '../../src/features/rentals/RentalWebsite';
import { pageMetadata } from '../pageMetadata';

export const metadata: Metadata = pageMetadata('th', 'help');

export default function Help() {
  return <RentalWebsite page="help" />;
}
