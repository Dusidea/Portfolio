import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";

export default defineConfig({
  base: "/Portfolio/",

  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true, // Dipslay GZip size in the report
      brotliSize: true, // Dipslay brotli size in the report
    }),
    compression({ algorithm: "brotliCompress" }), // activate brotli (more efficient thant gzip)
  ],

  build: {
    target: "es2020", // lighter more modern code
    minify: "esbuild", // faster and more efficient than terser
    sourcemap: false, // deactivate sources in production
    rollupOptions: {
      treeshake: true, // cleaning unused code
      output: {
        manualChunks(id) {
          // Split big external modules to avoid a big unique bundle
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor-react";
            if (id.includes("chart.js")) return "vendor-chart";
            if (id.includes("@fortawesome")) return "vendor-icons";
            return "vendor";
          }
        },
      },
    },
  },
});
