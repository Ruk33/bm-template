import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default function RadioButton({ className, options, onChange, value }) {
  return (
    <div className={className}>
      {options.map((option) => (
        <button
          className={styles.radioButton}
          key={option.label}
          onClick={() => onChange(option.value)}
        >
          <div
            className={classnames(styles.radio, {
              [styles.checked]: option.value === value,
            })}
          />
          {option.label}
        </button>
      ))}
    </div>
  );
}
