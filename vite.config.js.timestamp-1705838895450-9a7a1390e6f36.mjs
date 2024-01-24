// vite.config.js
import { defineConfig } from "file:///home/andy/GitHub/react-dev-portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///home/andy/GitHub/react-dev-portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
import mdx from "file:///home/andy/GitHub/react-dev-portfolio/node_modules/@mdx-js/rollup/index.js";
var vite_config_default = defineConfig({
  plugins: [
    { enforce: "pre", ...mdx() },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          particles: ["./src/Components/Particles/particlesOptions.js"],
          constants: ["./src/Constants/constants.js"]
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9hbmR5L0dpdEh1Yi9yZWFjdC1kZXYtcG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9hbmR5L0dpdEh1Yi9yZWFjdC1kZXYtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2FuZHkvR2l0SHViL3JlYWN0LWRldi1wb3J0Zm9saW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IG1keCBmcm9tICdAbWR4LWpzL3JvbGx1cCdcblxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgeyBlbmZvcmNlOiAncHJlJywgLi4ubWR4KCkgfSxcbiAgICByZWFjdCh7IGluY2x1ZGU6IC9cXC4obWR4fGpzfGpzeHx0c3x0c3gpJC8gfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIHBhcnRpY2xlczogWycuL3NyYy9Db21wb25lbnRzL1BhcnRpY2xlcy9wYXJ0aWNsZXNPcHRpb25zLmpzJ10sXG4gICAgICAgICAgY29uc3RhbnRzOiBbJy4vc3JjL0NvbnN0YW50cy9jb25zdGFudHMuanMnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufSk7XG5cblxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUyxTQUFTLG9CQUFvQjtBQUM5VCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBR2hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLEVBQUUsU0FBUyxPQUFPLEdBQUcsSUFBSSxFQUFFO0FBQUEsSUFDM0IsTUFBTSxFQUFFLFNBQVMseUJBQXlCLENBQUM7QUFBQSxFQUM3QztBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osV0FBVyxDQUFDLGdEQUFnRDtBQUFBLFVBQzVELFdBQVcsQ0FBQyw4QkFBOEI7QUFBQSxRQUM1QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
