import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/Football-Live/' : '/', 
});
