"use client";

import { useMemo } from "react";

import BookmarkGroupView from "./components/bookmark-group-view";
import EmptyPlaceholder from "./components/empty-placeholder";
import useBookmarks from "./hooks/use-boomarks";
import { Bookmark, BookmarkGroup } from "./types";

export default function Home() {
  const { bookmarks } = useBookmarks();

  const groups = useMemo(() => {
    const ungrouped = bookmarks.filter(
      (item) => !Array.isArray((item as BookmarkGroup).bookmarks)
    ) as Bookmark[];
    const grouped = bookmarks.filter((item) =>
      Array.isArray((item as BookmarkGroup).bookmarks)
    ) as BookmarkGroup[];

    if (ungrouped.length !== 0) {
      grouped.unshift({
        name: "Ungrouped",
        bookmarks: ungrouped
      });
    }

    return grouped;
  }, [bookmarks]);

  return (
    <section className="mx-8 flex flex-col h-full">
      {groups.length === 0 ? (
        <EmptyPlaceholder
          title="No bookmarks"
          desc="You can import bookmarks from browser or create a new one."
        />
      ) : (
        groups.map((group) => (
          <BookmarkGroupView key={group.name} group={group} />
        ))
      )}
    </section>
  );
}
