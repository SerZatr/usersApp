import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dynamicImport from "vite-plugin-dynamic-import";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dynamicImport({
      filter: (id) => {
        return id === "user";
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src/pages"),
    },
  },
});
