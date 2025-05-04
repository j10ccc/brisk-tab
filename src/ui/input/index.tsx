import { Ref } from "react";

import styles from "./index.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  field: string;
  ref?: Ref<HTMLInputElement>;
}

export default function Input(props: InputProps) {
  const { ref, label, field, ...otherProps } = props;

  return (
    <div className={styles.container}>
      {label ? <label htmlFor={field}>{label}</label> : null}
      <input ref={ref} id={field} name={field} type="text" {...otherProps} />
    </div>
  );
}
