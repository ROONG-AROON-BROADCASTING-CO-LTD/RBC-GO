import { Fragment } from 'react';

const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
// Keep these editorial compounds intact even when dictionary segmentation
// treats their syllables as separate words.
const compounds =
  /(มอเตอร์ไซค์ไฟฟ้า|เดินทาง|จุดหมาย|รายละเอียด|รูปแบบ|ค่าเช่า|คำถาม|เรือยอชต์|เครื่องบิน|ครั้งต่อไป|ไฟฟ้า|เตรียมตัว|ให้พร้อม)/;

export function HeadingText({
  children,
  phrases = false,
}: {
  children: string;
  phrases?: boolean;
}) {
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
