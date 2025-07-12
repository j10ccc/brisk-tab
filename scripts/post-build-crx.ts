import fs from "fs";
import { globSync } from "glob";

import manifest from "../manifest.config";

function transformNextOutFiles() {
  console.info("[script] Start transform next out files...");

  const files = globSync("out/**/*.html");

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");
    const modifiedContent = content.replace(/\/_next/g, "./next");
    fs.writeFileSync(file, modifiedContent, "utf-8");
  });

  const sourcePath = "out/_next";
  const destinationPath = "out/next";

  try {
    fs.renameSync(sourcePath, destinationPath);
    console.info('[script] Renamed "_next" directory to "next" successfully.');
  } catch (err) {
    console.error(
      '[script] Failed to rename "_next" directory to "next".',
      err
    );
  }
}

function writeManifest() {
  const outputPath = "out/manifest.json";
  const manifestJson = JSON.stringify(manifest, null, 2);

  try {
    fs.mkdirSync("out", { recursive: true });
    fs.writeFileSync(outputPath, manifestJson, "utf-8");
    console.info(
      "[script] Manifest file written successfully to out/manifest.json"
    );
  } catch (err) {
    console.error("[script] Failed to write manifest file:", err);
  }
}

transformNextOutFiles();

writeManifest();
