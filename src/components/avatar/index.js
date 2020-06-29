import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default function Avatar({
  className,
  size = "medium",
  style = {},
  src,
  ...props
}) {
  const css = classnames(className, "d-inline-block", styles.avatar, {
    [styles.big]: size === "big",
    [styles.medium]: size === "medium",
    [styles.small]: size === "small",
  });
  return (
    <div
      {...props}
      style={{ ...style, backgroundImage: `url('${src}')` }}
      className={css}
    />
  );
}
