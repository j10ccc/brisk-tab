import { Bookmark } from "@/app/types";

import styles from "./index.module.css";

interface ResultItemProps {
  bookmark: Bookmark;
}

export default function ResultItem(props: ResultItemProps) {
  const { bookmark } = props;

  return (
    <a
      href={bookmark.url}
      className={styles.container}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles["title-row"]}>
        <h1 className={styles.name} title={bookmark.name}>
          {bookmark.name}
        </h1>
        <span className={styles.group}>{bookmark.groupId}</span>
      </div>
      <span className={styles.url}>{bookmark.url}</span>
    </a>
  );
}
