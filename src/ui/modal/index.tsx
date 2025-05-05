import React from "react";

import styles from "./index.module.css";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  operation?: React.ReactNode;
};

export default function Modal(props: ModalProps) {
  const { isOpen, onClose, children, title, operation } = props;
  if (!isOpen) return null;

  return (
    <dialog className={styles.container}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.body} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
        <div className={styles.footer}>{operation}</div>
      </div>
    </dialog>
  );
}
