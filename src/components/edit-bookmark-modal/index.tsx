import { useRef } from "react";

import { Bookmark } from "@/types";
import Button from "@/ui/button";
import Modal from "@/ui/modal";

import EditBookmarkForm, { EditBookmarkFormRef } from "../edit-bookmark-form";

interface EditBookmarkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (newBookmark: Bookmark) => void;
  bookmark: Bookmark | undefined;
}

export default function EditBookmarkModal({
  isOpen,
  onClose,
  onConfirm,
  bookmark
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
    onConfirm(newBookmark);
  };

  return (
    <Modal
      title="Edit bookmark"
      isOpen={isOpen}
      onClose={onClose}
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
