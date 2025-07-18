import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useCallback, useMemo } from "react";
import { uniqueBy } from "remeda";

import { Bookmark, UngroupedBookmark } from "@/types";

const bookmarkListAtom = atomWithStorage<Bookmark[]>("__btab-bookmarks", []);

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

  const addBookmarks = useCallback(
    (newList: UngroupedBookmark[], groupId: string): number => {
      const originalLength = bookmarks.length;

      const grouped: Bookmark[] = newList.map((item) => ({
        ...item,
        groupId
      }));

      const uniqueList = uniqueBy(
        bookmarks.concat(grouped),
        (item) => `${item.groupId}-${item.url}`
      );

      setBookmarks(uniqueList);

      return uniqueList.length - originalLength;
    },
    [bookmarks, setBookmarks]
  );

  const updateBookmarks = useCallback(
    (newBookmark: Bookmark, oldBookmark: Bookmark) => {
      const list = bookmarks.slice();
      const existing = list.find(
        (item) =>
          item.groupId === newBookmark.groupId && item.url === newBookmark.url
      );

      if (existing) {
        throw new Error("Same bookmark exists in the group");
      }

      const oldIndex = list.findIndex(
        (item) =>
          item.groupId === oldBookmark.groupId && item.url === oldBookmark.url
      );

      if (oldIndex !== -1) {
        list.splice(oldIndex, 1, newBookmark);
      }

      setBookmarks(list);
    },
    [setBookmarks, bookmarks]
  );

  const removeBookmarks = useCallback(
    (oldBookmark: Bookmark) => {
      const list = bookmarks.slice();
      const oldIndex = list.findIndex(
        (item) =>
          item.groupId === oldBookmark.groupId && item.url === oldBookmark.url
      );

      if (oldIndex !== -1) {
        list.splice(oldIndex, 1);
      }

      setBookmarks(list);
    },
    [setBookmarks, bookmarks]
  );

  return {
    bookmarks,
    groupIdMap,
    addBookmarks,
    updateBookmarks,
    removeBookmarks
  };
}
