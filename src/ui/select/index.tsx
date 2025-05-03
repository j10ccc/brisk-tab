import styles from "./index.module.css";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  field: string;
  options: SelectOption[];
}

export default function Select(props: SelectProps) {
  const { label, field, options } = props;

  return (
    <div className={styles.container}>
      {label ? <label htmlFor={field}>{label}</label> : null}
      <div className="relative">
        <select id={field} name={field}>
          {options.map((option) => (
            <option key={`${field}-${option.value}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={styles.dropdown} />
      </div>
    </div>
  );
}
