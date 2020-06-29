import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default function CheckBox({ className, value, options, onChange }) {
  const css = classnames(className, styles.container);
  const isOptionSelected = (option) => value.includes(option.value);
  return (
    <div className={css}>
      {options.map((option) => (
        <button
          key={option.label}
          type="button"
          onClick={() => {
            const isSelected = isOptionSelected(option);
            if (isSelected)
              return onChange(value.filter((value) => value !== option.value));
            onChange([...value, option.value]);
          }}
          className={classnames(styles.checkBox, {
            [styles.checked]: isOptionSelected(option),
          })}
        >
          <div className={styles.box}>
            <i className="fas fa-check" />
          </div>
          {option.label}
        </button>
      ))}
    </div>
  );
}
