export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:5185',
);
export const customerUrl =
  process.env.NEXT_PUBLIC_CUSTOMER_URL ?? 'http://localhost:5183';
export const indexable =
  process.env.SEO_ALLOW_INDEXING === 'true' && siteUrl.protocol === 'https:';
export const description =
  'RBC GO แพลตฟอร์มเช่าจักรยานไฟฟ้าและสกู๊ตเตอร์ไฟฟ้า เติมเงินเข้าบัตร สแกน QR และเดินทางโดยคิดค่าบริการตามระยะทาง';
