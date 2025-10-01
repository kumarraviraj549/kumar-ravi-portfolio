
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { promises as fs } from 'fs';

// Custom plugin to copy index.html to 404.html for GitHub Pages SPA support
function copy404Plugin() {
  return {
    name: 'copy-404',
    closeBundle: async () => {
      const outDir = resolve(__dirname, 'dist');
      const indexPath = resolve(outDir, 'index.html');
      const notFoundPath = resolve(outDir, '404.html');
      try {
        await fs.copyFile(indexPath, notFoundPath);
        // eslint-disable-next-line no-console
        console.log('Copied index.html to 404.html for GitHub Pages.');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('Could not copy 404.html:', e);
      }
    },
  };
}

// https://vitejs.dev/config/
// IMPORTANT: Replace 'your-github-username' and 'your-repo-name' below with your actual GitHub username and repository name
// Example: base: '/freelance-portfolio/'
export default defineConfig({
  base: '/freelance-portfolio/',
  plugins: [react(), copy404Plugin()],
  build: {
    // Use esbuild minifier (default, faster than terser)
    minify: 'esbuild',
    // Enhanced optimizations
    cssCodeSplit: true,
    sourcemap: false,
    target: 'es2015', // Better browser support while staying modern
    chunkSizeWarningLimit: 800, // Smaller chunks
    
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for React libs
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
          
          // Component chunks based on route importance
          if (id.includes('components/Hero') || id.includes('components/Navbar')) {
            return 'critical'; // Above-the-fold components
          }
          
          if (id.includes('components/About') || id.includes('components/Skills')) {
            return 'primary'; // Primary content
          }
          
          if (id.includes('components/Projects') || id.includes('components/Services')) {
            return 'showcase'; // Portfolio content
          }
          
          return 'secondary'; // Other components
        }
      },
      // Tree shaking optimization
      treeshake: {
        moduleSideEffects: false
      }
    }
  },
  // Development optimizations
  server: {
    hmr: {
      overlay: false // Reduce overlay noise during development
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})