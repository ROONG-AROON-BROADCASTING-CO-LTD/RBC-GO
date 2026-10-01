import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './e2e',
  use: { baseURL: 'http://localhost:5185' },
  webServer: [
    {
      command: 'pnpm dev:website',
      url: 'http://localhost:5185',
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'pnpm dev:customer',
      url: 'http://localhost:5183',
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'pnpm dev:admin',
      url: 'http://localhost:5184',
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'pnpm dev:api',
      url: 'http://localhost:8081/health',
      reuseExistingServer: !process.env.CI,
      timeout: 120000,
    },
  ],
});
