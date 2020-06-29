import React from "react";
import classnames from "classnames";
import Spinner from "react-bootstrap/Spinner";
import styles from "./style.module.scss";

export default function Button({
  loading,
  className,
  children,
  kind,
  ...props
}) {
  const css = classnames(className, styles.button, {
    [styles.primary]: kind === "primary",
    [styles.secondary]: kind === "secondary",
    [styles.link]: kind === "link",
  });
  return (
    <button {...props} disabled={loading} className={css}>
      {loading && (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          className="mr-2 align-middle"
        />
      )}
      {children}
    </button>
  );
}
