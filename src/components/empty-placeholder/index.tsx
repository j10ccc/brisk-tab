import styles from "./index.module.css";

export type EmptyPlaceholderProps = {
  iconClassName?: string;
  title?: string;
  desc?: string;
};

export default function EmptyPlaceholder(props: EmptyPlaceholderProps) {
  const {
    iconClassName = "i-fluent-collections-empty-16-regular",
    title = "Not Found",
    desc
  } = props;

  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={`${iconClassName} ${styles.icon}`} />
        <div className={styles.divider} />
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </section>
  );
}
