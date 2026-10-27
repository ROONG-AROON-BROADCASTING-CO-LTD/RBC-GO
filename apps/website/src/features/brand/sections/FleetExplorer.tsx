'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { rentalCategories } from '../../../data/rentals';
import { Arrow } from '../../../components/ui/Arrow';
import { ThaiText } from '../../../components/ui/HeadingText';
import styles from './rentalDiscovery.module.css';

const modes = [
  { id: 'all', th: 'ทั้งหมด', en: 'All services' },
  { id: 'motorcycles', th: 'ตามสถานี', en: 'Station rentals' },
  { id: 'cars', th: 'รถยนต์', en: 'Cars' },
  { id: 'charter', th: 'เหมาลำ', en: 'Private charters' },
];
export function FleetExplorer({ th }: { th: boolean }) {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('all');
  const reduced = useReducedMotion();
  const results = rentalCategories.filter((item) => {
    const matches =
      mode === 'all' ||
      mode === item.id ||
      (mode === 'charter' && ['yachts', 'aircraft'].includes(item.id));
    return (
      matches &&
      `${item.th} ${item.en} ${item.thDetail} ${item.enDetail}`
        .toLocaleLowerCase()
        .includes(query.trim().toLocaleLowerCase())
    );
  });
  return (
    <div className={styles.discovery}>
      <div className={styles.toolbar}>
        <label className={styles.search}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <circle cx="10.5" cy="10.5" r="7" />
            <path d="m16 16 5 5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label={th ? 'ค้นหาบริการเช่า' : 'Search rental services'}
            placeholder={
              th
                ? 'ค้นหาบริการ เช่น รถยนต์ สถานี หรือเหมาลำ'
                : 'Search cars, stations or private charters'
            }
          />
        </label>
        <div
          className={styles.filters}
          aria-label={th ? 'รูปแบบบริการ' : 'Service type'}
        >
          {modes.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={mode === item.id}
              onClick={() => setMode(item.id)}
            >
              {th ? item.th : item.en}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.results} role="status">
        {(query || mode !== 'all') &&
          (th
            ? `พบบริการ ${results.length} ประเภท`
            : `${results.length} service categories`)}
      </div>
      <div className={styles.grid}>
        {results.map((item) => (
          <motion.article
            key={item.id}
            className={styles.card}
            initial={false}
            whileHover={reduced ? undefined : { y: -5 }}
            transition={{ duration: 0.25 }}
          >
            <Link href={`/rides#${item.id}`} className={styles.cardLink}>
              <div className={styles.image}>
                <Image
                  src={item.image}
                  alt={th ? item.th : item.en}
                  fill
                  sizes="(max-width: 700px) 50vw, 25vw"
                />
              </div>
              <h3>
                <ThaiText>{th ? item.th : item.en}</ThaiText>
              </h3>
              <p>
                <ThaiText>
                  {item.id === 'motorcycles'
                    ? th
                      ? 'เช่าผ่านสถานี'
                      : 'Station-based rentals'
                    : item.id === 'cars'
                      ? th
                        ? 'รถจากเจ้าของ'
                        : 'Cars from owners'
                      : th
                        ? 'เหมาลำส่วนตัว'
                        : 'Private charters'}
                </ThaiText>
              </p>
              <span className={styles.action}>
                {th ? 'ดูรายละเอียด' : 'View details'}
                <Arrow />
              </span>
            </Link>
          </motion.article>
        ))}
      </div>
      {results.length === 0 && (
        <div className={styles.empty}>
          <h3>{th ? 'ยังไม่พบบริการที่ตรงกัน' : 'No matching services'}</h3>
          <p>
            {th
              ? 'ลองค้นหาประเภทยานพาหนะ หรือดูบริการทั้งหมด'
              : 'Try a vehicle category or explore all services.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setMode('all');
            }}
          >
            {th ? 'ดูบริการทั้งหมด' : 'Show all services'}
          </button>
        </div>
      )}
    </div>
  );
}
