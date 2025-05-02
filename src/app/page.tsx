import { useMemo } from "react";

import BookmarkGroupView from "./components/bookmark-group-view";
import { Bookmark, BookmarkGroup, BookmarkList } from "./types";

const mockedData: BookmarkList = [
  {
    name: "crx",
    bookmarks: [
      {
        name: "CRX Viewer",
        url: "https://robwu.nl/crxviewer/",
        favicon: "https://robwu.nl/favicon.ico"
      },
      {
        name: "Chrome 应用商店",
        url: "https://chromewebstore.google.com/",
        favicon: "https://ssl.gstatic.com/chrome/webstore/images/icon_48px.png"
      }
    ]
  },
  {
    name: "Project structure and organization",
    url: "https://nextjs.org/docs/app/getting-started/project-structure"
  },
  {
    url: "https://www.destructuring-bind.org/scratchpad/",
    name: "scratchpad"
  },
  {
    name: "火山对话 API",
    url: "https://www.volcengine.com/docs/82379/1494384"
  },
  {
    url: "https://github.com/unjs/unbuild",
    name: "unjs/unbuild: 📦 A unified JavaScript build system"
  }
] as const;

export default function Home() {
  const groups = useMemo(() => {
    const ungrouped = mockedData.filter(
      (item) => !Array.isArray((item as BookmarkGroup).bookmarks)
    ) as Bookmark[];
    const grouped = mockedData.filter((item) =>
      Array.isArray((item as BookmarkGroup).bookmarks)
    ) as BookmarkGroup[];

    grouped.unshift({
      name: "Ungrouped",
      bookmarks: ungrouped
    });

    return grouped;
  }, []);

  return (
    <section className="mx-8 flex flex-col">
      {groups.map((group) => (
        <BookmarkGroupView key={group.name} group={group} />
      ))}
    </section>
  );
}
