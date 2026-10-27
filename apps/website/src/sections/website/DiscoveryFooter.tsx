import Image from 'next/image';
import Link from 'next/link';
import { rentalCategories } from '../../data/rentals';
import styles from './rentalDiscoveryPage.module.css';
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
