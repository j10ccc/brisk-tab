import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useMemo } from "react";

import { Bookmark, UngroupedBookmark } from "../types";

const bookmarkListAtom = atomWithStorage<Bookmark[]>("__btab-bookmarks", []);

function getUniqueBookmarks(bookmarks: Bookmark[]) {
  // Check if the URL already exists in the target group
  const urlMap = bookmarks.reduce((acc, bookmark) => {
    acc.set(`${bookmark.groupId}-${bookmark.url}`, bookmark);
    return acc;
  }, new Map<string, Bookmark>());

  return Array.from(urlMap.values());
}

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useAtom(bookmarkListAtom);

  const groupIdMap = useMemo(
    () =>
      bookmarks.reduce((acc, cur) => {
        if (acc.has(cur.groupId)) {
          acc.get(cur.groupId)?.push(cur);
        } else {
          acc.set(cur.groupId, [cur]);
        }
        return acc;
      }, new Map<string, Bookmark[]>()),
    [bookmarks]
  );

  const addBookmarks = (newList: UngroupedBookmark[], groupName: string) => {
    const grouped: Bookmark[] = newList.map((item) => ({
      ...item,
      groupId: groupName
    }));
    setBookmarks(getUniqueBookmarks(bookmarks.concat(grouped)));
  };

  return {
    bookmarks,
    groupIdMap,
    addBookmarks
  };
}
