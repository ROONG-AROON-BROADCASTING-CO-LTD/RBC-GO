'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Locale } from '../../data/landing';
import { rentalCategories } from '../../data/rentals';
import styles from './rentalDiscoveryPage.module.css';

type SymbolName =
  | 'search'
  | 'pin'
  | 'car'
  | 'bike'
  | 'boat'
  | 'plane'
  | 'sun'
  | 'bag'
  | 'grid'
  | 'arrow'
  | 'menu'
  | 'close';
function Symbol({ name }: { name: SymbolName }) {
  const paths: Record<SymbolName, ReactNode> = {
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="7" />
        <path d="m16 16 5 5" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    car: (
      <>
        <path d="m4 10 2-6h12l2 6M3 10h18v8H3zM6 18v3m12-3v3M6 14h2m8 0h2" />
      </>
    ),
    bike: (
      <>
        <circle cx="6" cy="17" r="4" />
        <circle cx="18" cy="17" r="4" />
        <path d="m6 17 4-10 5 10M8 7h5m2-4h3l2 14M8 12h10" />
      </>
    ),
    boat: (
      <>
        <path d="m3 14 3 7h12l3-7-9-3-9 3Zm4-1V7h10v6M12 7V2M2 22l4-1 6 1 6-1 4 1" />
      </>
    ),
    plane: (
      <path d="m22 9-8 3-1 8-2 1-1-8-7 3-2-2 9-6V3a2 2 0 0 1 4 0v5l7-1Z" />
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" />
      </>
    ),
    bag: (
      <>
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M9 7V3h6v4M4 12h16M9 11v3m6-3v3" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    arrow: <path d="m9 5 7 7-7 7" />,
    menu: <path d="M5 6h14M5 12h14M5 18h14" />,
    close: <path d="m5 5 14 14M19 5 5 19" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export function DiscoveryNav({
  locale,
  onLanguageChange,
}: {
  locale: Locale;
  onLanguageChange: (locale: Locale) => void;
}) {
  const th = locale === 'th';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 40);
    listener();
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', escape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', escape);
    };
  }, [open]);
  return (
    <>
      <header
        className={`${styles.header} ${scrolled || open ? styles.solid : ''}`}
      >
        <Link href="/" className={styles.logo} aria-label="RBC GO home">
          <Image
            src="/images/brand/rbc-go-logo.jpeg"
            alt=""
            width={32}
            height={32}
            priority
          />
          <span>RBC GO</span>
        </Link>
        <nav
          className={styles.desktopNav}
          aria-label={th ? 'เมนูหลัก' : 'Main navigation'}
        >
          <Link href="/about">{th ? 'เกี่ยวกับเรา' : 'About us'}</Link>
          <Link href="/help">{th ? 'ช่วยเหลือ' : 'Help'}</Link>
        </nav>
        <div className={styles.headerActions}>
          <Link className={styles.softButton} href="/how-it-works">
            {th ? 'วิธีการเช่า' : 'Rental guide'}
          </Link>
          <Link
            className={`${styles.roundButton} ${styles.desktopSearch}`}
            href="/#rental-search"
            aria-label={th ? 'ค้นหาบริการ' : 'Search services'}
          >
            <Symbol name="search" />
          </Link>
          <button
            className={styles.language}
            type="button"
            onClick={() => onLanguageChange(th ? 'en' : 'th')}
            aria-label={th ? 'เปลี่ยนเป็นภาษาอังกฤษ' : 'Switch to Thai'}
          >
            {th ? <span className={styles.flag} /> : 'EN'}
          </button>
          <Link
            className={`${styles.softButton} ${styles.ownerNav}`}
            href="/about#car-owners"
          >
            {th ? 'สำหรับเจ้าของรถ' : 'For car owners'}
          </Link>
          <Link
            className={`${styles.blueButton} ${styles.exploreNav}`}
            href="/rides"
          >
            {th ? 'สำรวจบริการ' : 'Explore rentals'}
          </Link>
          <button
            className={`${styles.roundButton} ${styles.menuButton}`}
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={
              open
                ? th
                  ? 'ปิดเมนู'
                  : 'Close menu'
                : th
                  ? 'เปิดเมนู'
                  : 'Open menu'
            }
            aria-expanded={open}
            aria-controls="discovery-menu"
          >
            <Symbol name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </header>
      {open && (
        <nav
          id="discovery-menu"
          className={styles.drawer}
          aria-label={th ? 'เมนูมือถือ' : 'Mobile navigation'}
        >
          {[
            ['/', 'หน้าแรก', 'Home'],
            ['/rides', 'ยานพาหนะให้เช่า', 'Vehicles'],
            ['/how-it-works', 'วิธีการเช่า', 'Rental guide'],
            ['/pricing', 'ข้อมูลค่าเช่า', 'Rental details'],
            ['/about', 'เกี่ยวกับเรา', 'About'],
            ['/help', 'ช่วยเหลือ', 'Help'],
          ].map(([href, thai, english]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {th ? thai : english}
              <Symbol name="arrow" />
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}

export function DiscoveryFooter({ th }: { th: boolean }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/brand/rbc-go-logo.jpeg"
              alt=""
              width={32}
              height={32}
            />
            <span>RBC GO</span>
          </Link>
          <p>
            {th
              ? 'ทุกการเดินทาง เลือกได้ในแบบคุณ'
              : 'Your journey. Your choice.'}
          </p>
        </div>
        {[
          {
            title: th ? 'สำรวจบริการเช่า' : 'Explore rentals',
            links: rentalCategories.map((item) => [
              `/rides#${item.id}`,
              th ? item.th : item.en,
            ]),
          },
          {
            title: th ? 'ช่วยเหลือ' : 'Support',
            links: [
              ['/how-it-works', th ? 'วิธีการเช่า' : 'Rental guide'],
              ['/pricing', th ? 'ข้อมูลค่าเช่า' : 'Rental details'],
              ['/help', th ? 'คำถามที่พบบ่อย' : 'FAQs'],
            ],
          },
          {
            title: 'RBC GO',
            links: [
              ['/about', th ? 'เกี่ยวกับเรา' : 'About us'],
              ['/about#car-owners', th ? 'สำหรับเจ้าของรถ' : 'For car owners'],
              ['/help', th ? 'ติดต่อเรา' : 'Contact us'],
            ],
          },
        ].map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} RBC GO. All Rights Reserved.</span>
        <div>
          <a
            href="https://www.instagram.com/rbc_go_go"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a href="https://youtube.com/@RBCGO" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://tiktok.com/@rbc_go" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}

function Rail({
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

const shortcuts: { icon: SymbolName; th: string; en: string; id: string }[] = [
  {
    icon: 'bike',
    th: 'มอเตอร์ไซค์',
    en: 'Electric bikes',
    id: 'motorcycles',
  },
  { icon: 'car', th: 'รถยนต์', en: 'Cars', id: 'cars' },
  { icon: 'boat', th: 'เรือยอชต์', en: 'Yachts', id: 'yachts' },
  { icon: 'plane', th: 'เครื่องบิน', en: 'Aircraft', id: 'aircraft' },
  { icon: 'pin', th: 'เดินทางในเมือง', en: 'City travel', id: 'motorcycles' },
  { icon: 'sun', th: 'ทริปพักผ่อน', en: 'Getaways', id: 'yachts' },
  { icon: 'bag', th: 'ทริปธุรกิจ', en: 'Business trips', id: 'aircraft' },
  { icon: 'car', th: 'ทริปบนถนน', en: 'Road trips', id: 'cars' },
  { icon: 'pin', th: 'รับรถที่สถานี', en: 'Station pickup', id: 'motorcycles' },
  { icon: 'pin', th: 'คืนรถที่สถานี', en: 'Station return', id: 'motorcycles' },
  { icon: 'boat', th: 'เที่ยวกับเพื่อน', en: 'Group trips', id: 'yachts' },
  { icon: 'sun', th: 'งานฉลอง', en: 'Celebrations', id: 'yachts' },
  { icon: 'plane', th: 'ทริปส่วนตัว', en: 'Private travel', id: 'aircraft' },
  { icon: 'car', th: 'เช่ารถสำหรับทริป', en: 'Car rentals', id: 'cars' },
  { icon: 'plane', th: 'เดินทางทางอากาศ', en: 'Air travel', id: 'aircraft' },
  { icon: 'grid', th: 'ดูทั้งหมด', en: 'View all', id: 'all' },
];

export function RentalDiscoveryPage({ th }: { th: boolean }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('all');
  const [searched, setSearched] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const results = rentalCategories.filter(
    (item) =>
      (selected === 'all' || item.id === selected) &&
      `${item.th} ${item.en} ${item.thDetail} ${item.enDetail}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  function showResults(id = selected) {
    setSelected(id);
    setSearched(true);
    requestAnimationFrame(() =>
      document
        .getElementById('rental-results')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    );
  }
  const model = (id: string) =>
    id === 'motorcycles'
      ? th
        ? 'เช่าผ่านสถานี'
        : 'Station rentals'
      : id === 'cars'
        ? th
          ? 'รถจากเจ้าของ'
          : 'Owner-supplied cars'
        : th
          ? 'เหมาลำส่วนตัว'
          : 'Private charter';
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/images/rentals/hero-charter.png"
          alt={
            th
              ? 'ยานพาหนะให้เช่าทางถนน ทะเล และอากาศ'
              : 'Rentals by road, sea and air'
          }
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h1>
            {th
              ? 'ค้นหาและเลือกการเดินทางที่ใช่ในแบบคุณ'
              : 'Find your next journey. Your way.'}
          </h1>
          <div className={styles.searchPanel}>
            <form
              id="rental-search"
              className={styles.searchBox}
              onSubmit={(event) => {
                event.preventDefault();
                showResults();
              }}
            >
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label={th ? 'ค้นหาบริการเช่า' : 'Search rentals'}
                placeholder={
                  th
                    ? 'ค้นหามอเตอร์ไซค์ รถยนต์ เรือยอชต์ หรือเครื่องบิน'
                    : 'Search motorcycles, cars, yachts or aircraft'
                }
              />
              <button type="submit" aria-label={th ? 'ค้นหา' : 'Search'}>
                <Symbol name="search" />
              </button>
            </form>
            <div
              className={`${styles.shortcuts} ${expanded ? styles.expanded : ''}`}
            >
              {shortcuts.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    if (item.id === 'all') {
                      setExpanded((previous) => !previous);
                      setQuery('');
                      if (window.matchMedia('(min-width: 701px)').matches)
                        showResults('all');
                      return;
                    }
                    setQuery('');
                    showResults(item.id);
                  }}
                  aria-pressed={searched && selected === item.id && index < 4}
                >
                  <Symbol name={item.icon} />
                  <span>{th ? item.th : item.en}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className={styles.content}>
        <div id="rental-results" className={styles.resultAnchor}>
          {searched ? (
            <section className={styles.railSection}>
              <div className={styles.sectionHead}>
                <h2>{th ? 'ผลการค้นหา' : 'Search results'}</h2>
                <button
                  className={styles.textButton}
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setSelected('all');
                    setSearched(false);
                  }}
                >
                  {th ? 'ล้างตัวกรอง' : 'Clear filters'}
                </button>
              </div>
              <p className={styles.resultCount} role="status">
                {th
                  ? `พบบริการ ${results.length} ประเภท`
                  : `${results.length} service categories`}
              </p>
              <div className={styles.results}>
                {results.map((item) => (
                  <Link
                    href={`/rides#${item.id}`}
                    className={styles.serviceCard}
                    key={item.id}
                  >
                    <div className={styles.cardImage}>
                      <Image
                        src={item.image}
                        alt={th ? item.th : item.en}
                        fill
                        sizes="(max-width: 700px) 85vw, 25vw"
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <h3>{th ? item.th : item.en}</h3>
                      <p>{th ? item.thCopy : item.enCopy}</p>
                      <span className={styles.tag}>{model(item.id)}</span>
                    </div>
                  </Link>
                ))}
              </div>
              {!results.length && (
                <div className={styles.empty}>
                  {th
                    ? 'ไม่พบบริการที่ตรงกัน ลองค้นหาประเภทยานพาหนะอื่น'
                    : 'No matching services. Try another vehicle category.'}
                </div>
              )}
            </section>
          ) : (
            <Rail
              title={th ? 'เลือกวิธีเดินทางของคุณ' : 'Choose your way to go'}
              th={th}
            >
              {rentalCategories.map((item) => (
                <Link
                  href={`/rides#${item.id}`}
                  key={item.id}
                  className={styles.poster}
                >
                  <div className={styles.posterImage}>
                    <Image
                      src={item.image}
                      alt={th ? item.th : item.en}
                      fill
                      sizes="(max-width: 700px) 45vw, 240px"
                    />
                  </div>
                  <h3>{th ? item.th : item.en}</h3>
                  <p>
                    <Symbol name="pin" />
                    {model(item.id)}
                  </p>
                  <p>{th ? item.thCopy : item.enCopy}</p>
                </Link>
              ))}
              <Link href="/about#car-owners" className={styles.poster}>
                <div className={styles.posterImage}>
                  <Image
                    src="/images/rentals/car.png"
                    alt=""
                    fill
                    sizes="240px"
                  />
                </div>
                <h3>
                  {th
                    ? 'มีรถว่าง ให้เราช่วยปล่อยเช่า'
                    : 'Put your unused car to work'}
                </h3>
                <p>{th ? 'สำหรับเจ้าของรถยนต์' : 'For car owners'}</p>
              </Link>
            </Rail>
          )}
        </div>
        <Rail
          title={th ? 'สำรวจบริการเช่า' : 'Explore rental services'}
          th={th}
        >
          {rentalCategories.map((item) => (
            <Link
              href={`/rides#${item.id}`}
              className={styles.serviceCard}
              key={item.id}
            >
              <div className={styles.cardImage}>
                <Image
                  src={item.image}
                  alt={th ? item.th : item.en}
                  fill
                  sizes="(max-width: 700px) 75vw, 295px"
                />
              </div>
              <div className={styles.cardBody}>
                <h3>{th ? item.th : item.en}</h3>
                <p>{th ? item.thCopy : item.enCopy}</p>
                <div className={styles.tags}>
                  <span>{model(item.id)}</span>
                  <span>{th ? 'ดูรายละเอียด' : 'View details'}</span>
                </div>
              </div>
            </Link>
          ))}
        </Rail>
        <Rail
          title={th ? 'เดินทางแบบเหมาลำส่วนตัว' : 'Private charter experiences'}
          href="/rides#yachts"
          th={th}
        >
          {rentalCategories
            .filter((item) => ['yachts', 'aircraft'].includes(item.id))
            .map((item) => (
              <Link
                key={item.id}
                href={`/rides#${item.id}`}
                className={`${styles.serviceCard} ${styles.charterCard}`}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={item.image}
                    alt={th ? item.th : item.en}
                    fill
                    sizes="(max-width: 700px) 80vw, 50vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3>
                    {th
                      ? `${item.th}เหมาลำ`
                      : `Private ${item.en.toLowerCase()} charter`}
                  </h3>
                  <p>{th ? item.thCopy : item.enCopy}</p>
                  <div className={styles.tags}>
                    {(th ? item.note : item.enNotes).slice(0, 2).map((note) => (
                      <span key={note}>{note}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </Rail>
        <section className={styles.benefits}>
          <h2>{th ? 'ทำไมต้องเลือก RBC GO?' : 'Why choose RBC GO?'}</h2>
          <div>
            {[
              {
                icon: 'search' as const,
                th: 'ค้นหาการเดินทางที่ใช่',
                en: 'Find your way',
                copy: th
                  ? 'เลือกบริการจากรูปแบบการเดินทาง ทั้งในเมือง บนถนน กลางทะเล และบนท้องฟ้า'
                  : 'Explore travel options for the city, the road, the sea and the sky.',
              },
              {
                icon: 'grid' as const,
                th: 'รายละเอียดที่เข้าใจง่าย',
                en: 'Clear service details',
                copy: th
                  ? 'ดูรูปแบบบริการ สิ่งที่ควรเตรียม และเงื่อนไขของแต่ละประเภทก่อนตัดสินใจ'
                  : 'Review each rental model, what to prepare and the service terms.',
              },
              {
                icon: 'pin' as const,
                th: 'เลือกให้ตรงกับแผนของคุณ',
                en: 'Built around your plans',
                copy: th
                  ? 'ตั้งแต่การเดินทางผ่านจุดสถานี ไปจนถึงทริปส่วนตัวแบบเหมาลำสำหรับกลุ่มของคุณ'
                  : 'From station-based city rides to private charters for your whole group.',
              },
            ].map((item) => (
              <article key={item.en}>
                <Symbol name={item.icon} />
                <h3>{th ? item.th : item.en}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="car-owners" className={styles.owner}>
          <h2>
            {th
              ? 'มีรถยนต์ที่ไม่ได้ใช้? ให้ RBC GO ช่วยปล่อยเช่า'
              : 'Have an unused car? Let RBC GO help you rent it out.'}
          </h2>
          <div className={styles.ownerPanel}>
            <div className={styles.ownerImage}>
              <Image
                src="/images/rentals/car.png"
                alt={
                  th
                    ? 'รถยนต์สำหรับฝากปล่อยเช่า'
                    : 'Car for owner rental programme'
                }
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </div>
            <div className={styles.ownerCopy}>
              <h2>
                {th
                  ? 'เพิ่มโอกาสให้รถที่คุณมี'
                  : 'More possibilities for your car'}
              </h2>
              <ul>
                <li>
                  {th
                    ? 'แจ้งข้อมูลรถและช่วงเวลาที่รถว่าง'
                    : 'Share your vehicle details and available dates'}
                </li>
                <li>
                  {th
                    ? 'ตรวจสอบรถและความเหมาะสมก่อนเข้าร่วม'
                    : 'Review the vehicle before joining'}
                </li>
                <li>
                  {th
                    ? 'ตกลงส่วนแบ่งรายได้ ประกัน และการดูแลรถ'
                    : 'Agree on revenue sharing, insurance and vehicle care'}
                </li>
              </ul>
              <p>
                {th
                  ? 'ดูรายละเอียดการฝากรถให้ RBC GO ช่วยปล่อยเช่า'
                  : 'Learn about entrusting your car to RBC GO.'}
              </p>
              <Link href="/about#car-owners" className={styles.blueButton}>
                {th ? 'ดูรายละเอียดที่นี่' : 'Learn more'}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
