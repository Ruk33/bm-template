import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default function Button({ kind, ...props }) {
  const css = classnames({
    [styles.primary]: kind === "primary",
  });
  return <button className={css} {...props} />;
}
