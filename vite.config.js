import { defineConfig } from 'vite';

export default defineConfig({
  // 相对路径，保证 GitHub Pages 子路径 / 本地 file 都能正确加载资源
  base: './',
  server: {
    // 绑 0.0.0.0，手机 / 平板 / 另一台机器可以用局域网 IP 直接打开
    host: true,
    port: 5173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2020',
  },
});
