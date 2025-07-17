import { atom, useAtom } from "jotai";
import { useCallback } from "react";

import { Bookmark } from "@/types";

const isOpenBookmarkModalAtom = atom(false);
const toEditBookmarkAtom = atom<Bookmark | undefined>(undefined);

export function useEditBookmarkModal() {
  const [isOpenBookmarkModal, setIsOpenBookmarkModal] = useAtom(
    isOpenBookmarkModalAtom
  );
  const [toEditBookmark, setToEditBookmark] = useAtom(toEditBookmarkAtom);

  const openEditBookmarkModal = useCallback(
    (original: Bookmark) => {
      setIsOpenBookmarkModal(true);
      setToEditBookmark(original);
    },
    [setIsOpenBookmarkModal, setToEditBookmark]
  );

  const closeEditBookmarkModal = useCallback(() => {
    setIsOpenBookmarkModal(false);
    setToEditBookmark(undefined);
  }, [setIsOpenBookmarkModal, setToEditBookmark]);

  return {
    isOpenBookmarkModal,
    toEditBookmark,
    openEditBookmarkModal,
    closeEditBookmarkModal
  };
}
