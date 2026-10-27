'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Symbol,
  type SymbolName,
} from '../../../components/ui/DiscoverySymbol';
import { rentalCategories, type RentalCategoryId } from '../../../data/rentals';
import styles from '../../../styles/discovery.module.css';

const categoryIcons: Record<RentalCategoryId, SymbolName> = {
  motorcycles: 'bike',
  cars: 'car',
  yachts: 'boat',
  aircraft: 'plane',
};

const quickPicks = [
  ['/rides/motorcycles', 'สถานีใกล้คุณ', 'Nearby stations'],
  ['/rides/cars', 'รถสำหรับทริป', 'Cars for your trip'],
  ['/rides/yachts', 'ทริปทะเลส่วนตัว', 'Private sea trips'],
  ['/rides/aircraft', 'เที่ยวบินเหมาลำ', 'Private charter flights'],
] as const;

export function RentalSearchDialog({
  th,
  onClose,
}: {
  th: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  return (
    <div
      className={styles.searchOverlay}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.searchDialog}
        role="dialog"
        aria-modal="true"
        aria-label={th ? 'ค้นหาบริการเช่า' : 'Search rentals'}
      >
        <form
          className={styles.dialogSearch}
          onSubmit={(event) => {
            event.preventDefault();
            window.location.assign(
              query.trim()
                ? `/?q=${encodeURIComponent(query.trim())}#rental-search`
                : '/#rental-search',
            );
          }}
        >
          <Symbol name="search" />
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={
              th
                ? 'ค้นหามอเตอร์ไซค์ รถยนต์ เรือยอชต์ หรือเครื่องบิน'
                : 'Search motorcycles, cars, yachts or aircraft'
            }
          />
          <button type="submit">{th ? 'ค้นหา' : 'Search'}</button>
        </form>
        <div className={styles.searchDialogBody}>
          <div className={styles.searchTypes}>
            {rentalCategories.map((category) => (
              <Link
                href={`/rides/${category.id}`}
                key={category.id}
                onClick={onClose}
              >
                <Symbol name={categoryIcons[category.id]} />
                <span>{th ? category.th : category.en}</span>
              </Link>
            ))}
          </div>
          <div className={styles.searchSuggestions}>
            <p>{th ? 'เลือกได้เร็วขึ้น' : 'QUICK PICKS'}</p>
            <div>
              {quickPicks.map(([href, thai, english]) => (
                <Link href={href} key={href} onClick={onClose}>
                  {th ? thai : english}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
