import fs from "fs";
import { globSync } from "glob";
import { exit } from "process";
import { build } from "tsdown";

import manifest from "../manifest.config";

async function buildBackgroundScript() {
  await build();
}

function transformNextOutFiles() {
  if (!process.env.CRX_DIST) {
    exit(1);
  }

  console.info("[script] Start transform next out files...");

  const files = globSync(`${process.env.CRX_DIST}/**/*.html`);

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");
    const modifiedContent = content.replace(/\/_next/g, "./next");
    fs.writeFileSync(file, modifiedContent, "utf-8");
  });

  const sourcePath = `${process.env.CRX_DIST}/_next`;
  const destinationPath = `${process.env.CRX_DIST}/next`;

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
  if (!process.env.CRX_DIST) {
    exit(1);
  }

  const outputPath = `${process.env.CRX_DIST}/manifest.json`;
  const manifestJson = JSON.stringify(manifest, null, 2);

  try {
    fs.mkdirSync(process.env.CRX_DIST, { recursive: true });
    fs.writeFileSync(outputPath, manifestJson, "utf-8");
    console.info(
      `[script] Manifest file written successfully to ${outputPath}`
    );
  } catch (err) {
    console.error("[script] Failed to write manifest file:", err);
  }
}

await buildBackgroundScript();
transformNextOutFiles();
writeManifest();
