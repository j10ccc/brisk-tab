import { useRef } from "react";

import { Bookmark } from "@/types";
import Button from "@/ui/button";
import Modal from "@/ui/modal";

import EditBookmarkForm, { EditBookmarkFormRef } from "../edit-bookmark-form";

interface EditBookmarkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (newBookmark: Bookmark) => void;
  onRemove: () => void;
  bookmark: Bookmark | undefined;
}

export default function EditBookmarkModal({
  isOpen,
  bookmark,
  onClose,
  onUpdate,
  onRemove
}: EditBookmarkModalProps) {
  const formRef = useRef<EditBookmarkFormRef>(null);

  const handleConfirm = () => {
    if (!bookmark) {
      return;
    }
    if (!formRef.current) {
      return;
    }
    const newBookmark = formRef.current.getFormData();
    onUpdate(newBookmark);
  };

  const handleRemove = () => {
    if (!bookmark) {
      return;
    }
    onRemove();
  };

  return (
    <Modal
      title="Edit bookmark"
      isOpen={isOpen}
      onClose={onClose}
      action={
        <div
          className="flex items-center gap-1 text-brand-error cursor-pointer"
          onClick={handleRemove}
        >
          <div className="i-fluent-delete-24-regular" />
          <span className="text-[14px]">Delete</span>
        </div>
      }
      operation={
        <div className="flex gap-2">
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleConfirm}>
            Save
          </Button>
        </div>
      }
    >
      <EditBookmarkForm ref={formRef} bookmark={bookmark} />
    </Modal>
  );
}
