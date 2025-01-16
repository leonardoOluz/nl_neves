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
        name: 'NL_NEVES',
        short_name: 'NL_NEVES',
        description: 'NL_NEVES - Solução Completa em Hidráulica',
        theme_color: '#ffffff',
        background_color: '#BB000',
        display: 'standalone',
        icons: [
          {
            src: '/favicon.svg', // Substitua pelo caminho do seu ícone
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: '/favicon.svg', // Substitua pelo caminho do seu ícone
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
});