import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages: if your repo is username.github.io, use base: '/'
// Otherwise, use base: '/your-repo-name/'
// Update the base path below to match your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? (process.env.VITE_BASE_PATH || '/comunity-portfolio/') 
    : '/',
})
