import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Standard Vite configuration for SPA deployment
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
