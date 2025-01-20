import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'NL NEVES',
        short_name: 'NL NEVES',
        description: 'NL_NEVES - Solução Completa em Hidráulica',
        theme_color: '#fff',
        background_color: '#BB0000',
        display: 'standalone',
        icons: [
          {
            src: '/Nlneves.svg', // Substitua pelo caminho do seu ícone
            sizes: '254x254',
            type: 'image/svg+xml',
          },
          {
            src: '/favicon.svg', // Substitua pelo caminho do seu ícone
            sizes: '876x876',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
});