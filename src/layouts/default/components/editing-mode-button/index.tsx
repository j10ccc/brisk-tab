import { clsx } from "clsx";

import { useEditingMode } from "@/hooks/use-editing-mode";

import styles from "./index.module.css";

export default function EditingModeButton() {
  const { isOpen, setIsOpen } = useEditingMode();

  return (
    <div
      className={clsx(styles.container, isOpen && styles.active)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="i-fluent-column-triple-edit-20-regular inline-block" />
      {isOpen ? <span className="text-4 leading-5">Editing</span> : null}
    </div>
  );
}
