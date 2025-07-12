/* eslint-disable camelcase */
import { description, name, version } from "./package.json";

const manifest: Readonly<chrome.runtime.ManifestV3> = {
  manifest_version: 3,
  name,
  version,
  description,
  action: {
    default_title: "Jump to Brisk Tab"
  },
  permissions: ["activeTab", "scripting", "bookmarks"],
  background: {
    service_worker: "background.mjs"
  }
};

export default manifest;
