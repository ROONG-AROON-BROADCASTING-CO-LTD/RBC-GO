import type { NextConfig } from 'next';
const config: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@stackbuild/ui'],
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  watchOptions: { pollIntervalMs: 1000 },
};
export default config;
