import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default function Button({ className, kind, ...props }) {
  const css = classnames(className, styles.button, {
    [styles.primary]: kind === "primary",
    [styles.secondary]: kind === "secondary",
    [styles.link]: kind === "link",
  });
  return <button className={css} {...props} />;
}
