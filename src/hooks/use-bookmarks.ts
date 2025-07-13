import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useMemo } from "react";
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

  const addBookmarks = (
    newList: UngroupedBookmark[],
    groupId: string
  ): number => {
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
  };

  return {
    bookmarks,
    groupIdMap,
    addBookmarks
  };
}
