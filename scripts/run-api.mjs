import { readFileSync, existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const cwd = fileURLToPath(new URL('../apps/api/', import.meta.url));
const file = `${cwd}.env`;
const env = { ...process.env };
if (existsSync(file))
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    const match = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (match && env[match[1]] === undefined)
      env[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
  }
const child = spawn('go', ['run', './cmd/api'], { cwd, env, stdio: 'inherit' });
for (const signal of ['SIGINT', 'SIGTERM'])
  process.on(signal, () => child.kill(signal));
child.on('error', (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.on('exit', (code) => {
  process.exitCode = code ?? 0;
});
