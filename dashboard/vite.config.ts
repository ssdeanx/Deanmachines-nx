/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { join } from 'path';

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  
  return {
    root: __dirname,
    cacheDir: '../node_modules/.vite/dashboard',
    
    // Enable source maps in development
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    
    server: {
      port: 4200,
      host: 'localhost',
      fs: {
        // Allow serving files from the project root
        allow: ['..'],
      },
    },
    
    preview: {
      port: 4300,
      host: 'localhost',
    },
    
    plugins: [
      react(),
      nxViteTsPaths(),
    ],
    
    // Enable test configuration
    test: {
      globals: true,
      cache: {
        dir: '../node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
    
    // Resolve configuration for better module imports
    resolve: {
      alias: {
        '@': join(__dirname, 'src'),
      },
    },
    
    build: {
      outDir: './dist',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        output: {
          manualChunks: isProduction ? {
            vendor: ['react', 'react-dom'],
          } : undefined,
        },
      },
    },
  };
});
