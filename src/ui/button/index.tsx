import { clsx } from "clsx";

import styles from "./index.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "filled" | "default";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const {
    children,
    icon,
    className,
    variant = "default",
    ...otherProps
  } = props;
  const buttonType = otherProps.type ?? "button";

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
