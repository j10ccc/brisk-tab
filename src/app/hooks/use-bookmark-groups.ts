import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useMemo } from "react";

import { BookmarkGroup, BookmarkGroupForStore } from "../types";
import useBookmarks from "./use-bookmarks";

export const DEFAULT_GROUP_NAME = "Ungrouped";

const bookmarkGroupsAtom = atomWithStorage<BookmarkGroupForStore[]>(
  "__btab-bookmarkGroups",
  [{ id: DEFAULT_GROUP_NAME, name: DEFAULT_GROUP_NAME, createAt: Date.now() }]
);

function getUniqueGroups(list: BookmarkGroupForStore[]) {
  const idMap = list.reduce((acc, cur) => {
    acc.set(cur.id, cur);
    return acc;
  }, new Map<string, BookmarkGroupForStore>());

  return Array.from(idMap.values());
}

export default function useBookmarkGroups() {
  const { groupIdMap } = useBookmarks();
  const [storeGroups, setStoreGroups] = useAtom(bookmarkGroupsAtom);

  const createGroup = (name: string) => {
    const newGroup: BookmarkGroupForStore = {
      id: name,
      name,
      createAt: Date.now()
    };
    setStoreGroups(getUniqueGroups([...storeGroups, newGroup]));
  };

  const groups = useMemo<BookmarkGroup[]>(() => {
    return storeGroups.map((g) => ({
      ...g,
      bookmarks: groupIdMap.get(g.id) ?? []
    }));
  }, [groupIdMap, storeGroups]);

  return {
    groups,
    createGroup
  };
}
