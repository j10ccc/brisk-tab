import { BookmarkGroup } from "@/app/types";

import BookmarkItemView from "../bookmark-item-view";

interface BookmarkGroupProps {
  group: BookmarkGroup;
}

export default function BookmarkGroupView(props: BookmarkGroupProps) {
  const { group } = props;

  return (
    <section className="mb-4">
      <h2 className="my-2 font-medium">{group.name}</h2>
      <ul className="flex flex-wrap gap-1">
        {group.bookmarks.map((bookmark) => (
          <BookmarkItemView key={bookmark.url} bookmark={bookmark} />
        ))}
      </ul>
    </section>
  );
}
