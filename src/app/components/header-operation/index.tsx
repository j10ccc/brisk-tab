import ImportFromButton from "../import-from-button";
import styles from "./index.module.css";

export default function HeaderOperation() {
  return (
    <div className={styles.container}>
      <ImportFromButton />
    </div>
  );
}
