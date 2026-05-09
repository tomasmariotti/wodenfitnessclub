import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// TanStack Start configuration for Vercel deployment
export default defineConfig({
  base: '/',
  plugins: [
    tanstackStart(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  tanstackStart: {
    server: { entry: "server" },
  },
});
