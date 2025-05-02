export interface Bookmark {
  name: string;
  url: string;
  favicon?: string;
}

export interface BookmarkGroup {
  name: string;
  bookmarks: Bookmark[];
}

export type BookmarkList = Array<Bookmark | BookmarkGroup>;
