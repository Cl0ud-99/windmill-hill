import { defineConfig } from 'vite';

export default defineConfig({
  // 相对路径，保证 GitHub Pages 子路径 / 本地 file 都能正确加载资源
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2020',
  },
});
