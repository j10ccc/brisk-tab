import clsx from "clsx";

import { useEditingMode } from "@/hooks/use-editing-mode";
import { Bookmark } from "@/types";

import styles from "./index.module.css";

type BookmarkItemProps = {
  bookmark: Bookmark;
};

export default function BookmarkItemView(props: BookmarkItemProps) {
  const { name, url, favicon } = props.bookmark;
  const { isOpen: isEditingModeOpen } = useEditingMode();

  const isNavigateDisabled = isEditingModeOpen;

  return (
    <li className={clsx(styles.container, isEditingModeOpen && styles.editing)}>
      {favicon ? (
        <img src={favicon} alt={name} className={styles.favicon} />
      ) : (
        <div className={clsx(styles.favicon, "i-fluent-earth-16-filled")} />
      )}
      {isEditingModeOpen ? (
        <div className={styles.editingIcon}>
          <div className="i-fluent-note-edit-20-filled" />
        </div>
      ) : null}
      <a
        href={isNavigateDisabled ? "#" : url}
        className={styles.name}
        draggable={false}
      >
        {name}
      </a>
      {!isEditingModeOpen ? (
        <a
          href={url}
          className={styles.actionButton}
          target="_blank"
          draggable={false}
        >
          <div className="i-fluent-arrow-forward-16-filled" />
        </a>
      ) : null}
    </li>
  );
}
