import { uniqueBy } from "remeda";

import { UngroupedBookmark } from "@/types";

// TODO: parse structure instead of flat list
export function parseChromeBookmarkNodes(
  nodes: chrome.bookmarks.BookmarkTreeNode[]
): UngroupedBookmark[] {
  const bookmarks: UngroupedBookmark[] = [];

  const traverse = (list: chrome.bookmarks.BookmarkTreeNode[]): void => {
    for (const node of list) {
      if (Array.isArray(node.children) && node.children.length > 0) {
        traverse(node.children);
      } else if (node.url) {
        bookmarks.push({
          url: node.url,
          name: node.title
        });
      }
    }
  };

  traverse(nodes);

  return uniqueBy(bookmarks, (item) => item.url);
}
