import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true, // This is needed by @testing-library to be cleaned up after each test
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.{js,jsx,ts,tsx}', '**/*.d.ts'],
      reporter: ['html'],
    },
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
    ],
    setupFiles: ['./vitest-setup.ts'],
    env: loadEnv('', process.cwd(), ''),
  },
});
