import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default function Select({ value, onChange, options }) {
  const node = useRef();
  const [optionsVisible, setOptionsVisible] = useState(false);
  const onSelect = (option) => {
    onChange(option);
    setOptionsVisible(false);
  };
  const handleClick = (e) => {
    const insideClick = node.current.contains(e.target);
    if (insideClick) return;
    setOptionsVisible(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div ref={node} className={styles.container}>
      <button
        type="button"
        className={styles.select}
        onClick={() => setOptionsVisible(!optionsVisible)}
      >
        {value.label}
        <div className={styles.icon}>
          <i className="fas fa-angle-down" />
        </div>
      </button>
      <div
        className={classnames(styles.optionsContainer, {
          "d-none": !optionsVisible,
        })}
      >
        {options.map((option, index) => (
          <button
            className={styles.option}
            onClick={() => onSelect(option)}
            type="button"
            key={`${option.label}-${index}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
