import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default function Table({ className, columns, rows }) {
  const css = classnames(className, styles.table);
  return (
    <table className={css}>
      <thead>
        <tr>
          {columns.map((column, key) => (
            <th key={`header-${key}`}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, key) => (
          <tr key={`row-${key}`}>
            {columns.map((column, key) => (
              <td key={`cell-${key}`}>
                <column.component row={row} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
