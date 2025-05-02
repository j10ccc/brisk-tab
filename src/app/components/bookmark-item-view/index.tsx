import { Bookmark } from "@/app/types";

import styles from "./index.module.css";

type BookmarkItemProps = {
  bookmark: Bookmark;
};

export default function BookmarkItemView(props: BookmarkItemProps) {
  const { name, url, favicon } = props.bookmark;

  return (
    <li className={styles.container}>
      {favicon ? (
        <img src={favicon} alt={name} className={styles.favicon} />
      ) : (
        <div className="i-fluent-earth-16-filled" />
      )}
      <a href={url} className={styles.name}>
        {name}
      </a>
      <a href={url} className={styles.forward} target="_blank">
        <div className="i-fluent-arrow-forward-16-filled" />
      </a>
    </li>
  );
}
