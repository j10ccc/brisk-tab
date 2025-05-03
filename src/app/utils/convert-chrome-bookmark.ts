import { UngroupedBookmark } from "../types";

/**
 * Converts a chrome bookmark to a bookmark flatly
 * @description Folder structure is unstructured to flatted list.
 * @param content Text content of a chrome bookmark file
 * @returns
 */
export default function convertChromeBookmark(
  content: string
): UngroupedBookmark[] {
  const parser = new DOMParser();
  const document = parser.parseFromString(content, "text/html");
  const aTags = document.querySelectorAll("a");

  const converted = Array.from(aTags)
    .map((aTag) => ({
      name: aTag.textContent ?? "",
      url: aTag.getAttribute("href") ?? ""
    }))
    .filter(({ name, url }) => name && url);

  return converted;
}
