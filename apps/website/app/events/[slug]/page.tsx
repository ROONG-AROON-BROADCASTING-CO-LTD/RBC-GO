import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BrandEventPage } from '../../../src/features/events/BrandEventPage';
import { brandEvents, getBrandEvent } from '../../../src/data/brandEvents';

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return brandEvents.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getBrandEvent(slug);

  if (!event) return {};

  return {
    title: event.copy.th.title,
    description: event.copy.th.detail,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getBrandEvent(slug);

  if (!event) notFound();

  return <BrandEventPage event={event} />;
}
