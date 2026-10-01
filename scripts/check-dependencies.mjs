import { readFileSync } from 'node:fs';
const root = new URL('../', import.meta.url);
const read = (file) => JSON.parse(readFileSync(new URL(file, root), 'utf8'));
const ref = read('docs/reference-dependencies.json');
const paths = [
  'package.json',
  'apps/customer/package.json',
  'apps/admin/package.json',
  'apps/website/package.json',
  'packages/ui/package.json',
  'packages/management/package.json',
];
let errors = 0;
for (const file of paths) {
  const data = read(file);
  const importer =
    file === 'package.json'
      ? '.'
      : file
          .replace('/package.json', '')
          .replace('apps/customer', 'apps/admin');
  const actual = { ...data.dependencies, ...data.devDependencies };
  const expectedPackages = Object.entries(ref.packages).flatMap(
    ([name, entries]) =>
      entries
        .filter((entry) => entry.importer === importer)
        .map((entry) => [name, entry.version]),
  );
  for (const [name, expected] of expectedPackages) {
    if (actual[name] !== expected) {
      errors++;
      console.error(`${file}: ${name}: ${actual[name]} != ${expected}`);
    }
  }
  for (const [name, version] of Object.entries(actual)) {
    if (
      !version.startsWith('workspace:') &&
      !expectedPackages.some(([expectedName]) => expectedName === name)
    ) {
      errors++;
      console.error(`${file}: unexpected dependency ${name}`);
    }
  }
}
const goMod = readFileSync(new URL('apps/api/go.mod', root), 'utf8');
const goVersions = new Map(
  goMod
    .split('\n')
    .filter((line) => !line.includes('// indirect'))
    .map((line) => line.trim().split(/\s+/)),
);
for (const [name, expected] of Object.entries(ref.goDirectDependencies)) {
  if (goVersions.get(name) !== expected) {
    errors++;
    console.error(`go.mod: ${name}: ${goVersions.get(name)} != ${expected}`);
  }
}
if (errors) process.exitCode = 1;
else console.log(`Dependency manifests match reference commit ${ref.commit}.`);
