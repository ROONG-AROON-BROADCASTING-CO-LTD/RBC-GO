import type { Metadata } from 'next';
import { RentalWebsite } from '../../src/features/rentals/RentalWebsite';
import { pageMetadata } from '../pageMetadata';

export const metadata: Metadata = pageMetadata('th', 'about');

export default function About() {
  return <RentalWebsite page="about" />;
}
