import { isStringEmpty } from "@/utils/string";

import styles from "./index.module.css";

interface SearchFooterProps {
  resultTotal: number;
  keyword: string;
}

export default function SearchFooter({
  resultTotal,
  keyword
}: SearchFooterProps) {
  if (isStringEmpty(keyword)) {
    return null;
  }

  return (
    <div className={styles.container}>
      <span>{resultTotal} results</span>
    </div>
  );
}
