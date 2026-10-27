'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Symbol, type SymbolName } from './DiscoverySymbol';
import { Rail } from './DiscoveryRail';
import { rentalCategories } from '../../data/rentals';
import styles from './rentalDiscoveryPage.module.css';

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
];

export function RentalDiscoveryPage({ th }: { th: boolean }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('all');
  const [searched, setSearched] = useState(false);
  useEffect(() => {
    const nextQuery = new URLSearchParams(window.location.search)
      .get('q')
      ?.trim();
    if (!nextQuery) return;
    setQuery(nextQuery);
    setSearched(true);
    requestAnimationFrame(() =>
      document
        .getElementById('rental-results')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    );
  }, []);
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
            <div className={styles.shortcuts}>
              {shortcuts.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setQuery('');
                    showResults(item.id);
                  }}
                  aria-pressed={searched && selected === item.id}
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
                    href={`/rides/${item.id}`}
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
                  href={`/rides/${item.id}`}
                  key={item.id}
                  className={styles.serviceCard}
                >
                  <div className={styles.cardImage}>
                    <Image
                      src={item.image}
                      alt={th ? item.th : item.en}
                      fill
                      sizes="(max-width: 700px) 78vw, 300px"
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{th ? item.th : item.en}</h3>
                    <p className={styles.cardMeta}>
                      <Symbol name="pin" />
                      {model(item.id)}
                    </p>
                    <p>{th ? item.thCopy : item.enCopy}</p>
                    <div className={styles.cardTags}>
                      {(th ? item.note : item.enNotes)
                        .slice(0, 2)
                        .map((note) => (
                          <span className={styles.tag} key={note}>
                            {note}
                          </span>
                        ))}
                    </div>
                  </div>
                </Link>
              ))}
            </Rail>
          )}
        </div>
        {!searched && (
          <Rail
            title={th ? 'วางแผนการเช่าของคุณ' : 'Plan your rental'}
            href="/how-it-works"
            th={th}
          >
            {[
              {
                image: '/images/rentals/marina-services.png',
                title: th
                  ? 'เลือกสถานี แล้วเดินทางต่อ'
                  : 'Find a station and get moving',
                copy: th
                  ? 'ดูจุดรับ–คืน และสิ่งที่ต้องเตรียมก่อนขี่'
                  : 'Review pickup, return and rider requirements.',
                tag: th ? 'มอเตอร์ไซค์ไฟฟ้า' : 'Electric motorcycles',
                href: '/how-it-works',
              },
              {
                image: '/images/rentals/rental-planning.png',
                title: th
                  ? 'เลือกรถให้เข้ากับทริป'
                  : 'Choose a car for your trip',
                copy: th
                  ? 'กำหนดวันเช่า จุดรับ–คืน และตรวจสอบเงื่อนไข'
                  : 'Plan dates, handover and rental terms.',
                tag: th ? 'รถยนต์' : 'Cars',
                href: '/how-it-works',
              },
              {
                image: '/images/rentals/owner-handover.png',
                title: th
                  ? 'ให้รถว่างสร้างโอกาสใหม่'
                  : 'Give your unused car a new purpose',
                copy: th
                  ? 'ดูขั้นตอนฝากรถ และข้อตกลงสำหรับเจ้าของรถ'
                  : 'Explore vehicle review and owner agreements.',
                tag: th ? 'สำหรับเจ้าของรถ' : 'For car owners',
                href: '/about#car-owners',
              },
              {
                image: '/images/rentals/hero-charter.png',
                title: th
                  ? 'ออกแบบทริปเหมาลำของคุณ'
                  : 'Plan your private charter',
                copy: th
                  ? 'เตรียมเส้นทาง วันเดินทาง และจำนวนผู้ร่วมทริป'
                  : 'Prepare your route, dates and group size.',
                tag: th ? 'เรือยอชต์ · เครื่องบิน' : 'Yachts · Aircraft',
                href: '/pricing',
              },
            ].map((item) => (
              <Link
                href={item.href}
                className={styles.serviceCard}
                key={item.title}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 700px) 78vw, 300px"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <span className={styles.tag}>{item.tag}</span>
                </div>
              </Link>
            ))}
          </Rail>
        )}
        <section id="car-owners" className={styles.owner}>
          <h2>
            {th
              ? 'มีรถยนต์ที่ไม่ได้ใช้? ให้ RBC GO ช่วยปล่อยเช่า'
              : 'Have an unused car? Let RBC GO help you rent it out.'}
          </h2>
          <div className={styles.ownerPanel}>
            <div className={styles.ownerImage}>
              <Image
                src="/images/rentals/owner-handover.png"
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
