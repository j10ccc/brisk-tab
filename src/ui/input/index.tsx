import styles from "./index.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  field: string;
}

export default function Input(props: InputProps) {
  const { label, field, ...otherProps } = props;

  return (
    <div className={styles.container}>
      {label ? <label htmlFor={field}>{label}</label> : null}
      <input id={field} name={field} type="text" {...otherProps} />
    </div>
  );
}
