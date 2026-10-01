import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['apps/**/*.test.{ts,tsx}'],
    setupFiles: ['./test/setup.ts'],
  },
});
