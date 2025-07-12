import { useState } from "react";

import useBookmarkGroups from "@/hooks/use-bookmark-groups";
import useBookmarks from "@/hooks/use-bookmarks";
import { UngroupedBookmark } from "@/types";
import Button from "@/ui/button";
import Input from "@/ui/input";
import Modal from "@/ui/modal";
import Select, { SelectOption } from "@/ui/select";

const STORE_WAY_SELECT_OPTION: ReadonlyArray<SelectOption> = [
  { label: "Add to existed group", value: "patch" },
  { label: "Add to a new group", value: "create" }
];

interface AddToGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  bookmarksToImport: UngroupedBookmark[];
}

export default function AddToGroupModal({
  isOpen,
  onClose,
  onConfirm,
  bookmarksToImport
}: AddToGroupModalProps) {
  const { addBookmarks } = useBookmarks();
  const { groups, createGroup } = useBookmarkGroups();

  const [storeWay, setStoreWay] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [newGroupName, setNewGroupName] = useState("");

  const handleConfirmImport = () => {
    if (storeWay === "patch") {
      addBookmarks(bookmarksToImport, selectedGroup);
    } else if (storeWay === "create") {
      createGroup(newGroupName);
      addBookmarks(bookmarksToImport, newGroupName);
    }
    onConfirm();
  };

  return (
    <Modal
      title="Add to an existed group?"
      isOpen={isOpen}
      onClose={onClose}
      operation={
        <div className="flex gap-xs">
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleConfirmImport}>
            Confirm
          </Button>
        </div>
      }
    >
      <p className="op-60 text-sm mb-2">
        You are going to import <strong>{bookmarksToImport.length}</strong>{" "}
        bookmarks. This will add bookmarks to the selected group.
      </p>
      <Select
        label="Select import way"
        field="importWay"
        value={storeWay}
        onChange={(e) => setStoreWay(e.target.value)}
        options={STORE_WAY_SELECT_OPTION}
      />
      {storeWay === "patch" ? (
        <Select
          label="Select an existed group"
          field="groupKey"
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          options={groups.map((g) => ({ label: g.name, value: g.name }))}
        />
      ) : null}
      {storeWay === "create" ? (
        <Input
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          label="The new group name"
          field="newGroupName"
          placeholder="A cool name"
        />
      ) : null}
    </Modal>
  );
}
