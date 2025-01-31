import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

const viteConfig = defineConfig((env) => {
  const isDevMode = env.mode.includes('development');

  return {
    plugins: [
      react({
        jsxRuntime: 'automatic',
      }),
      tailwindcss(),
    ],
    server: {
      host: 'localhost',
      port: 3000,
    },
    preview: {
      host: 'localhost',
      port: 8080,
    },
    css: {
      devSourcemap: true,
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: isDevMode
          ? '[local]_[hash:base64:5]'
          : '_[hash:base64:3]',
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});

export default viteConfig;
