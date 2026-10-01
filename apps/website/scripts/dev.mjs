import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
const require = createRequire(import.meta.url);
const child = spawn(
  process.execPath,
  [
    require.resolve('next/dist/bin/next'),
    'dev',
    '--hostname',
    '0.0.0.0',
    '--port',
    '5185',
  ],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      WATCHPACK_POLLING: process.env.WATCHPACK_POLLING ?? 'true',
    },
  },
);
for (const signal of ['SIGINT', 'SIGTERM'])
  process.on(signal, () => child.kill(signal));
child.on('error', (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.on('exit', (code) => {
  process.exitCode = code ?? 0;
});
