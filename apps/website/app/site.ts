export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:5185',
);
export const indexable =
  process.env.SEO_ALLOW_INDEXING === 'true' && siteUrl.protocol === 'https:';
export const description =
  'RBC GO มอเตอร์ไซค์ไฟฟ้าตามสถานี ฝากรถยนต์ปล่อยเช่า เรือยอชต์เหมาลำ และเครื่องบินเหมาลำ สำหรับทุกแผนการเดินทาง';
