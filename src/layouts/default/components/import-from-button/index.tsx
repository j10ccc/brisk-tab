"use client";
import { useState } from "react";

import { UngroupedBookmark } from "@/types";

import AddToGroupModal from "../add-to-group-modal";
import SelectImportSourceModal from "../select-import-source-modal";
import styles from "./index.module.css";

export default function ImportFromButton() {
  const [isOpenImportWayModal, setIsOpenImportWayModal] = useState(false);
  const [isOpenStorageWayModal, setIsOpenStorageWayModal] = useState(false);
  const [targetBookmarks, setTargetBookmarks] = useState<UngroupedBookmark[]>(
    []
  );

  const handleImportBookmarks = (bookmarks: UngroupedBookmark[]) => {
    setTargetBookmarks(bookmarks);
    setIsOpenImportWayModal(false);
    setIsOpenStorageWayModal(true);
  };

  const handleCloseAllModal = () => {
    setTargetBookmarks([]);
    setIsOpenStorageWayModal(false);
    setIsOpenImportWayModal(false);
  };

  return (
    <>
      <div
        className={styles["import-from"]}
        onClick={() => setIsOpenImportWayModal(true)}
      >
        <div className="i-fluent-document-arrow-up-20-regular" />
      </div>
      <SelectImportSourceModal
        isOpen={isOpenImportWayModal}
        onClose={handleCloseAllModal}
        onImportFromFile={handleImportBookmarks}
      />
      <AddToGroupModal
        isOpen={isOpenStorageWayModal}
        bookmarksToImport={targetBookmarks}
        onClose={handleCloseAllModal}
        onConfirm={handleCloseAllModal}
      />
    </>
  );
}
