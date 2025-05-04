"use client";
import { ChangeEvent, useState } from "react";

import useBookmarkGroups from "@/app/hooks/use-bookmark-groups";
import useBookmarks from "@/app/hooks/use-bookmarks";
import { UngroupedBookmark } from "@/app/types";
import convertNetscapeBookmark from "@/app/utils/convert-chrome-bookmark";
import readLocalFile from "@/app/utils/read-local-file";
import Button from "@/ui/button";
import Input from "@/ui/input";
import Modal from "@/ui/modal";
import Select, { SelectOption } from "@/ui/select";

import styles from "./index.module.css";

const IMPORT_WAY_SELECT_OPTION: ReadonlyArray<SelectOption> = [
  { label: "Add to existed group", value: "patch" },
  { label: "Add to a new group", value: "create" }
];

export default function ImportFromButton() {
  const { groups, createGroup } = useBookmarkGroups();
  const { addBookmarks } = useBookmarks();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [targetBookmarks, setTargetBookmarks] = useState<UngroupedBookmark[]>(
    []
  );
  const [importWay, setImportWay] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [newGroupName, setNewGroupName] = useState("");

  const handleParseChromeBookmark = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const fileContent = await readLocalFile(file);
    const res = convertNetscapeBookmark(fileContent);
    setTargetBookmarks(res);
    setIsOpenModal(true);
    e.target.value = "";
  };

  const handleCloseModal = () => {
    setTargetBookmarks([]);
    setIsOpenModal(false);
  };

  const handleConfirmImport = () => {
    if (importWay === "patch") {
      addBookmarks(targetBookmarks, selectedGroup);
    } else if (importWay === "create") {
      createGroup(newGroupName);
      addBookmarks(targetBookmarks, newGroupName);
    }
    handleCloseModal();
  };

  return (
    <>
      <label className={styles["import-from"]}>
        <div className="i-fluent-document-arrow-up-20-regular" />
        <input
          type="file"
          className="hidden"
          onChange={handleParseChromeBookmark}
        />
      </label>
      <Modal
        title="Add to an existed group?"
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        operation={
          <div className="flex gap-xs">
            <Button onClick={handleCloseModal}>Cancel</Button>
            <Button variant="primary" onClick={handleConfirmImport}>
              Confirm
            </Button>
          </div>
        }
      >
        <p className="op-60 text-sm mb-2">
          You are going to import <strong>{targetBookmarks.length}</strong>{" "}
          bookmarks. This will add bookmarks to the selected group.
        </p>
        <Select
          label="Select import way"
          field="importWay"
          value={importWay}
          onChange={(e) => setImportWay(e.target.value)}
          options={IMPORT_WAY_SELECT_OPTION}
        />
        {importWay === "patch" ? (
          <Select
            label="Select an existed group"
            field="groupKey"
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            options={groups.map((g) => ({ label: g.name, value: g.name }))}
          />
        ) : null}
        {importWay === "create" ? (
          <Input
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            label="The new group name"
            field="newGroupName"
            placeholder="A cool name"
          />
        ) : null}
      </Modal>
    </>
  );
}
