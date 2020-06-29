import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default function Card({ children, className, ...props }) {
  const css = classnames(className, styles.card);
  return (
    <div {...props} className={css}>
      {children}
    </div>
  );
}
