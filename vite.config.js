import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures relative paths work correctly
  build: {
    outDir: "dist", // Explicitly set the output directory
    assetsDir: "assets", // Ensures assets are in the right folder
    rollupOptions: {
      input: "index.html", // Ensure Vercel finds the entry point
    },
  },
});
