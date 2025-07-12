import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    background: "./chrome/index.ts"
  },
  format: "esm",
  outDir: "./out",
  clean: false
});
