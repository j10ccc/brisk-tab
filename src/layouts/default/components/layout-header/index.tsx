import PackageJSON from "packageJSON";

import HeaderOperation from "../header-operation";
import styles from "./index.module.css";

export default function LayoutHeader() {
  return (
    <header className={styles.container}>
      <div className={styles.brand}>
        <h2>SummersDay</h2>
        <div>
          <span>Brisk Tab</span>
          <span className={styles.version}>v{PackageJSON.version}</span>
        </div>
      </div>
      <HeaderOperation />
    </header>
  );
}
