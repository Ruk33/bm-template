import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default function Alert({ className, title, kind, children, ...props }) {
  const css = classnames(className, styles.alert, {
    [styles.success]: kind === "success",
    [styles.warning]: kind === "warning",
    [styles.info]: kind === "info",
    [styles.error]: kind === "error",
  });
  return (
    <div {...props} className={css}>
      <h5 className="font-weight-bold">{title}</h5>
      {children}
    </div>
  );
}
