import React from "react";
import classnames from "classnames";
import Avatar from "components/avatar";
import styles from "./style.module.scss";

export default function VerticalMedia({
  border,
  shadow,
  className,
  img,
  children,
  ...props
}) {
  const css = classnames(className, styles.verticalMedia, {
    [styles.border]: border,
    [styles.shadow]: shadow,
  });
  return (
    <div {...props} className={css}>
      <Avatar src={img} className="mx-auto d-block my-3" />
      <div>{children}</div>
    </div>
  );
}
