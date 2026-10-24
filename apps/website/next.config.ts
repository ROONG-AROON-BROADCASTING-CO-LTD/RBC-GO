import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  // Docker copies `.next/standalone`, while Vercel builds its own deployment
  // artifact. With Next 16.3.x, combining standalone output with Vercel's
  // build adapter makes the adapter look for a trace file that Next omits.
  output: process.env.VERCEL ? undefined : 'standalone',
  images: {
    localPatterns: [{ pathname: '/**' }],
    unoptimized: true,
  },
};
export default nextConfig;
