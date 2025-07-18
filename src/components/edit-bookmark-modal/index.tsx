import { useRef, useState } from "react";

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
  const [error, setError] = useState("");

  const handleConfirm = () => {
    if (!bookmark || !formRef.current) {
      return;
    }

    const err = formRef.current.validate();
    if (err) {
      setError(err);
      return;
    }

    const newBookmark = formRef.current.getFormData();
    try {
      onUpdate(newBookmark);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
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
          <i className="i-fluent-delete-24-regular" />
          <span className="text-[14px]">Delete</span>
        </div>
      }
      operation={
        <div className="flex gap-2 items-center flex-auto">
          {error ? (
            <span
              className="text-brand-error text-[14px] line-clamp-1"
              title={error}
            >
              {error}
            </span>
          ) : null}
          <div className="flex-auto" />
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
