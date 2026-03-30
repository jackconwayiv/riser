import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/static/",
  build: {
    outDir: path.resolve(__dirname, "../backend/frontend_build"),
    emptyOutDir: true,
    assetsDir: "assets",
  },
});
