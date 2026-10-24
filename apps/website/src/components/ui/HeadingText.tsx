import { Fragment } from 'react';

const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
// Keep these editorial compounds intact even when dictionary segmentation
// treats their syllables as separate words.
const compounds =
  /(มอเตอร์ไซค์ไฟฟ้า|มอเตอร์ไซค์|การเดินทาง|เดินทาง|จุดหมาย|รายละเอียด|รูปแบบ|ค่าเช่า|คำถาม|เรือยอชต์|เครื่องบิน|ครั้งต่อไป|ไฟฟ้า|เตรียมตัว|ให้พร้อม|ยานพาหนะ|ยืนยันการเช่า|เงื่อนไข|ผู้โดยสาร|ผู้ให้บริการ|สถานที่|เส้นทาง|ประกัน|เงินประกัน|บริการเช่า|ทุกโอกาส|ทุกวัน|ทริปพักผ่อน|ทริปธุรกิจ|จุดรับ|จุดคืน|ใบขับขี่|ความพร้อม|ชำระเงิน|ออนไลน์|เปรียบเทียบ|ระยะเวลา|ช่วยเหลือ|เกี่ยวกับเรา|หน้าแรก)/;

type ThaiTextProps = {
  children: string;
  phrases?: boolean;
};

/**
 * Supplies deliberate word break opportunities while keeping each Thai word
 * together. This prevents browsers from wrapping in the middle of a word
 * without turning an entire paragraph into one unbreakable line.
 */
export function ThaiText({ children, phrases = false }: ThaiTextProps) {
  const segments = phrases
    ? children.split(/(\s+)/)
    : children
        .split(compounds)
        .flatMap((part, index) =>
          index % 2 === 1
            ? [part]
            : Array.from(segmenter.segment(part), ({ segment }) => segment),
        );
  const words: string[] = [];
  for (const segment of segments) {
    if (/^[.,!?;:ๆฯ]+$/.test(segment) && words.length) {
      words[words.length - 1] += segment;
    } else {
      words.push(segment);
    }
  }

  return words.map((word, index) => (
    <Fragment key={index}>
      {word.trim() ? (
        <span style={{ whiteSpace: 'nowrap' }}>{word}</span>
      ) : (
        word
      )}
      {index < words.length - 1 && <wbr />}
    </Fragment>
  ));
}

export function HeadingText(props: ThaiTextProps) {
  return <ThaiText {...props} />;
}
