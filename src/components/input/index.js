import React from "react";
import styles from "./style.module.scss";

export default function Input({ onChange, value, ...props }) {
  return (
    <input
      className={styles.input}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      {...props}
    />
  );
}
