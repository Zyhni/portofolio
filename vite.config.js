// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isVercel = !!process.env.VERCEL;

export default defineConfig({
  base: isVercel ? '/' : '/portofolio/',
  plugins: [react(), tailwindcss()],
})
