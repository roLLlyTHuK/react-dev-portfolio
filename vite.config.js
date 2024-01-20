import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from '@mdx-js/rollup'


export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          particles: ['./src/Components/Particles/particlesOptions.js'],
          constants: ['./src/Constants/constants.js'],
        },
      },
    },
  }
});


