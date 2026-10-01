import type { Metadata } from 'next';
import { MobileLoginLink } from '../src/components/MobileLoginLink';
import { customerUrl, description, siteUrl } from '../src/lib/site';
export const metadata: Metadata = { alternates: { canonical: '/' } };
export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RBC GO',
    url: siteUrl.toString(),
    description,
    inLanguage: 'th-TH',
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\u003c'),
        }}
      />
      <header>
        <span className="brand">RBC GO</span>
        <a href="#how-it-works">วิธีใช้งาน</a>
      </header>
      <main>
        <section className="hero">
          <h1>
            เติมเงิน สแกนรถ
            <br />
            <span>แล้วออกเดินทาง</span>
          </h1>
          <p>
            จักรยานไฟฟ้าและสกู๊ตเตอร์ไฟฟ้าสำหรับการเดินทางในเมือง
            <br />
            ใช้บัตร RBC GO และชำระค่าบริการตามระยะทาง
          </p>
          <MobileLoginLink href={customerUrl} />
          <p className="mobile-guidance">
            ใช้งานเว็บแอปผ่านสมาร์ทโฟน · กำลังเตรียมเปิดให้บริการ
          </p>
        </section>
        <section id="how-it-works">
          <h2>เริ่มเดินทางกับ RBC GO</h2>
          <ol>
            <li>
              <strong>เติมเงินเข้าบัตร</strong>
              <p>เตรียมยอดเงินในวอลเล็ตก่อนเริ่มใช้งาน</p>
            </li>
            <li>
              <strong>สแกน QR บนรถ</strong>
              <p>ตรวจสอบรถ แบตเตอรี่ และยอดเงินก่อนปลดล็อก</p>
            </li>
            <li>
              <strong>เดินทางและคืนรถ</strong>
              <p>จอดในพื้นที่ที่กำหนด แล้วสรุปค่าบริการตามระยะทาง</p>
            </li>
          </ol>
        </section>
      </main>
      <footer>RBC GO · เดินทางสะอาด</footer>
    </>
  );
}
