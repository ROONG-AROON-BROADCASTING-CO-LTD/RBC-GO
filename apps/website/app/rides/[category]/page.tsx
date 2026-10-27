import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { rentalCategories } from '../../../src/data/rentals';
import { RentalDetailPage } from '../../../src/features/rentals/detail/RentalDetailPage';

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return rentalCategories.map(({ id }) => ({ category: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const item = rentalCategories.find(({ id }) => id === category);
  if (!item) return {};
  return {
    title: `${item.th} | RBC GO`,
    description: item.thDetail,
    alternates: { canonical: `/rides/${item.id}` },
  };
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const item = rentalCategories.find(({ id }) => id === category);
  if (!item) notFound();
  return <RentalDetailPage category={item.id} />;
}
