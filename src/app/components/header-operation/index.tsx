"use client";

import { ChangeEvent } from "react";

import useBookmarks from "@/app/hooks/use-boomarks";
import convertChromeBookmark from "@/app/utils/convert-chrome-bookmark";
import readLocalFile from "@/app/utils/read-local-file";

import styles from "./index.module.css";

export default function HeaderOperation() {
  const { setBookmarks } = useBookmarks();
  const handleConvertChromeBookmark = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const fileContent = await readLocalFile(file);
    const res = convertChromeBookmark(fileContent);
    setBookmarks(res);
  };

  return (
    <div className={styles.container}>
      <label className={styles["import-from"]}>
        <div className="i-fluent-document-arrow-up-20-regular" />
        <input
          type="file"
          className="hidden"
          onChange={handleConvertChromeBookmark}
        />
      </label>
    </div>
  );
}
