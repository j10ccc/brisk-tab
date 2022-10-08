import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "./",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@store": resolve(__dirname, "./src/store"),
      "@types": resolve(__dirname, "./src/types"),
      "@api": resolve(__dirname, "./src/api")
    }
  }
});
