"use client";

import BookmarkGroupView from "./components/bookmark-group-view";
import EmptyPlaceholder from "./components/empty-placeholder";
import GlobalSearch from "./components/global-search";
import useBookmarkGroups from "./hooks/use-bookmark-groups";
import useBookmarks from "./hooks/use-bookmarks";

export default function Home() {
  const { bookmarks } = useBookmarks();
  const { groups } = useBookmarkGroups();

  return (
    <section className="px-8 flex flex-col h-full overflow-x-auto">
      {bookmarks.length === 0 ? (
        <EmptyPlaceholder
          title="No bookmarks"
          desc="You can import bookmarks from browser or create a new one."
        />
      ) : (
        groups.map((group) => (
          <BookmarkGroupView key={group.name} group={group} />
        ))
      )}
      <GlobalSearch />
    </section>
  );
}
