import { createRequire } from 'node:module';
import { readFile, writeFile } from 'node:fs/promises';
const require = createRequire(
  new URL(
    '../../../apps/website/node_modules/next/package.json',
    import.meta.url,
  ),
);
const sharp = require(
  new URL(
    '../../../node_modules/.pnpm/sharp@0.35.4_@types+node@26.4.1/node_modules/sharp',
    import.meta.url,
  ).pathname,
);
const dir = new URL('./', import.meta.url);
const source = await readFile(new URL('selected-reference.png', dir));
const positions = [
  [0, 0],
  [517, 0],
  [1031, 0],
  [0, 518],
  [517, 518],
  [1031, 518],
];
const names = ['fleet', 'how', 'pricing', 'about', 'help', 'lower'];
const pass = process.argv[2] || '2';
for (let i = 0; i < names.length; i++) {
  const s = await sharp(source)
    .extract({
      left: positions[i][0] + 2,
      top: positions[i][1] + 2,
      width: 500,
      height: 500,
    })
    .resize(512, 512)
    .toBuffer();
  const file = new URL(`${names[i]}-full-pass${pass}.jpg`, dir);
  const image = await sharp(await readFile(file)).metadata();
  const a = await sharp(await readFile(file))
    .extract({
      left: 0,
      top: 0,
      width: 1280,
      height: Math.min(1280, image.height),
    })
    .resize(512, 512)
    .toBuffer();
  await sharp({
    create: { width: 1024, height: 512, channels: 3, background: '#777' },
  })
    .composite([
      { input: s, left: 0, top: 0 },
      { input: a, left: 512, top: 0 },
    ])
    .png()
    .toFile(new URL(`${names[i]}-comparison-pass${pass}.png`, dir).pathname);
}
const tiles = [];
for (let i = 0; i < names.length; i++)
  tiles.push({
    input: await readFile(
      new URL(`${names[i]}-comparison-pass${pass}.png`, dir),
    ),
    left: (i % 2) * 1024,
    top: Math.floor(i / 2) * 512,
  });
await sharp({
  create: { width: 2048, height: 1536, channels: 3, background: '#777' },
})
  .composite(tiles)
  .png()
  .toFile(new URL(`comparison-board-pass${pass}.png`, dir).pathname);
