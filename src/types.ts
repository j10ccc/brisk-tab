export interface Bookmark {
  name: string;
  url: string;
  favicon?: string;
  groupId: string;
}

export interface BookmarkGroup {
  id: string;
  name: string;
  createAt: number;
  bookmarks: Bookmark[];
}

export type BookmarkGroupForStore = Omit<BookmarkGroup, "bookmarks">;

export type UngroupedBookmark = Omit<Bookmark, "groupId">;
