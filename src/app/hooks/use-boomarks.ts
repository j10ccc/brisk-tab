import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { BookmarkList } from "../types";

const bookmarkListAtom = atomWithStorage<BookmarkList>("__btab-bookmarks", []);

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useAtom(bookmarkListAtom);

  return {
    bookmarks,
    setBookmarks
  };
}
