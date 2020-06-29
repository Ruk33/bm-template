import React from "react";
import classnames from "classnames";
import Avatar from "components/avatar";
import styles from "./style.module.scss";

export default function Media({
  border,
  shadow,
  className,
  img,
  children,
  ...props
}) {
  const css = classnames(className, "media", styles.media, {
    [styles.border]: border,
    [styles.shadow]: shadow,
  });
  return (
    <div {...props} className={css}>
      <Avatar src={img} className="mr-3" />
      <div className="media-body mt-2">{children}</div>
    </div>
  );
}
