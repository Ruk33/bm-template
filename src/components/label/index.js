import React from "react";

export default function Label({ children, title, ...props }) {
  return (
    <label {...props}>
      {title}
      {children}
    </label>
  );
}
