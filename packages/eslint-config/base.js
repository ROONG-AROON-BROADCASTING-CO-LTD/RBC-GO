export default [
  {
    ignores: [
      '**/dist/**',
      '**/.next/**',
      '**/.next-dev/**',
      '**/node_modules/**',
    ],
  },
  { files: ['**/*.{js,mjs}'], rules: { eqeqeq: 'error', 'no-var': 'error' } },
];
