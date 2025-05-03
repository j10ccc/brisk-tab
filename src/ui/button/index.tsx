import { clsx } from "clsx";

import styles from "./index.module.css";

interface ButtonProps {
  variant?: "primary" | "filled" | "default";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  otherProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  const { children, icon, className, otherProps, variant = "default" } = props;
  const buttonType = otherProps?.type ?? "button";

  return (
    <button
      type={buttonType}
      className={clsx(styles.container, styles[variant], className)}
      {...otherProps}
    >
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <span>{children}</span>
    </button>
  );
}
