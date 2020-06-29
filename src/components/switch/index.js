import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default function Switch({ className, value, onChange }) {
  const css = classnames(className, styles.switch, { [styles.checked]: value });
  return (
    <button className={css} onClick={() => onChange(!value)}>
      <div className={styles.slider} />
    </button>
  );
}
