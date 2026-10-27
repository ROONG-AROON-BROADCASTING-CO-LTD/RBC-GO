'use client';
import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Symbol } from './DiscoverySymbol';
import styles from './rentalDiscoveryPage.module.css';
export function Rail({
  title,
  href = '/rides',
  th,
  children,
}: {
  title: string;
  href?: string;
  th: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ start: true, end: false });
  const update = () => {
    const el = ref.current;
    if (el)
      setPosition({
        start: el.scrollLeft < 2,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
      });
  };
  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [children]);
  return (
    <section className={styles.railSection}>
      <div className={styles.sectionHead}>
        <h2>{title}</h2>
        <Link href={href}>{th ? 'ดูทั้งหมด' : 'View all'}</Link>
        <div className={styles.railActions}>
          <button
            type="button"
            disabled={position.start}
            onClick={() =>
              ref.current?.scrollBy({ left: -600, behavior: 'smooth' })
            }
            aria-label={th ? 'เลื่อนก่อนหน้า' : 'Previous'}
          >
            <Symbol name="arrow" />
          </button>
          <button
            type="button"
            disabled={position.end}
            onClick={() =>
              ref.current?.scrollBy({ left: 600, behavior: 'smooth' })
            }
            aria-label={th ? 'เลื่อนถัดไป' : 'Next'}
          >
            <Symbol name="arrow" />
          </button>
        </div>
      </div>
      <div className={styles.rail} ref={ref} onScroll={update}>
        {children}
      </div>
    </section>
  );
}
