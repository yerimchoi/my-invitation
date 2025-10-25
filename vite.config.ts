import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), imagetools()],
  base: '/my-invitation/',
});
