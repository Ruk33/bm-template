import React from "react";
import classnames from "classnames";
import Button from "components/button";
import styles from "./style.module.scss";

export default function NotificationBox({
  kind,
  primaryButton,
  secondaryButton,
  extraButton,
  children,
  className,
  ...props
}) {
  const css = classnames(className, styles.notificationBox, {
    [styles.success]: kind === "success",
    [styles.info]: kind === "info",
    [styles.warning]: kind === "warning",
    [styles.error]: kind === "error",
  });
  return (
    <div {...props} className={css}>
      <div className={styles.icon}>
        {kind === "success" && <i className="fa fa-check" />}
        {kind === "error" && <i className="fa fa-times" />}
        {kind === "warning" && <i className="fas fa-exclamation-triangle" />}
        {kind === "info" && <i className="fas fa-info" />}
      </div>
      <div className="my-4 lead font-weight-normal">{children}</div>
      <div className="my-2">
        {primaryButton && (
          <Button kind="primary" type="button" onClick={primaryButton.onClick}>
            {primaryButton.label}
          </Button>
        )}
      </div>
      <div className="my-2">
        {secondaryButton && (
          <Button
            kind="secondary"
            type="button"
            onClick={secondaryButton.onClick}
          >
            {secondaryButton.label}
          </Button>
        )}
      </div>
      <div className="my-2">
        {extraButton && (
          <Button kind="link" type="button" onClick={extraButton.onClick}>
            {extraButton.label}
          </Button>
        )}
      </div>
    </div>
  );
}
