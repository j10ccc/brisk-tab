/* eslint-disable camelcase */
import { description, name, version } from "./package.json";

const manifest: Readonly<chrome.runtime.ManifestV3> = {
  manifest_version: 3,
  name,
  version,
  description,
  chrome_url_overrides: {
    newtab: "index.html"
  },
  action: {
    default_popup: "crx-popup.html"
  },
  permissions: ["activeTab", "scripting", "bookmarks"],
  background: {
    service_worker: "background.mjs"
  }
};

export default manifest;
