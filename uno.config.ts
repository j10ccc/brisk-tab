import fs from "node:fs/promises";

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3
} from "unocss";

export default defineConfig({
  presets: [presetWind3(), presetAttributify(), presetIcons()],
  preflights: [
    {
      layer: "reset",
      getCSS: async () =>
        fs.readFile("node_modules/@unocss/reset/tailwind-compat.css", "utf-8")
    }
  ],
  theme: {
    colors: {
      brand: {
        primary: "#617d71",
        secondary: "#f1f5f4",
        background: "#f9fafa"
      }
    }
  },
  shortcuts: {
    "text-cut": "text-ellipsis overflow-hidden whitespace-nowrap",
    "brand-btn":
      "rounded-sm cursor-pointer p-2 hover:text-brand-primary hover:bg-brand-secondary",
    "form-item": "focus:outline-none focus:ring-1 focus:ring-brand-primary"
  }
});
