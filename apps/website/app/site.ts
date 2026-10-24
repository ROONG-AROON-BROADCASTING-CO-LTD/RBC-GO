export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:5185',
);
export const indexable =
  process.env.SEO_ALLOW_INDEXING === 'true' && siteUrl.protocol === 'https:';
export const description =
  'RBC GO รวมทางเลือกการเช่ามอเตอร์ไซค์ไฟฟ้า รถยนต์ เรือยอชต์ และเครื่องบิน สำหรับทุกวันและทุกโอกาส';
