import { useEffect } from "react";

import styles from "./index.module.css";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  field: string;
  options: SelectOption[] | readonly SelectOption[];
}

export default function Select(props: SelectProps) {
  const { label, field, options, ...otherProps } = props;

  useEffect(() => {
    // If options changed. set refresh the value
    const prevSelectedOption = options.find(
      (option) => option.value === otherProps.value
    );

    if (!prevSelectedOption && options.at(0)) {
      otherProps.onChange?.({
        // @ts-expect-error custom event
        target: { value: options.at(0)?.value ?? "" }
      });
    }
  }, [options, otherProps.onChange]);

  return (
    <div className={styles.container}>
      {label ? <label htmlFor={field}>{label}</label> : null}
      <div className="relative">
        <select id={field} name={field} {...otherProps}>
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
