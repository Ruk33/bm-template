import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default function Label({ children, className, title, ...props }) {
  const css = classnames(className, styles.label);
  return (
    <label {...props} className={css}>
      <div className="font-weight-bold">{title}</div>
      {children}
    </label>
  );
}
