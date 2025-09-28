import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [react(),VitePWA({
    registerType: 'autoUpdate', // Register the Service Worker
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    manifest: {
      // This generates your manifest.json
      name: 'My Awesome PWA',
      short_name: 'My PWA',
      theme_color: '#ffffff',
      icons: [
        { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
  }), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       registerType: 'autoUpdate', // Register the Service Worker
//       includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
//       manifest: {
//         // This generates your manifest.json
//         name: 'My Awesome PWA',
//         short_name: 'My PWA',
//         theme_color: '#ffffff',
//         icons: [
//           { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
//           { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
//         ],
//       },
//     })
//   ],
// })