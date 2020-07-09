import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";
import Spinner from "react-bootstrap/Spinner";
import Input from "components/input";
import styles from "./style.module.scss";

export default function AutoComplete({
  className,
  value,
  onChange,
  onSearch,
  options,
}) {
  const node = useRef();
  const [inputValue, setInputValue] = useState(value || {});
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const css = classnames(className, styles.component);
  const optionsCss = classnames(styles.optionsContainer, {
    "d-none": !optionsVisible,
  });
  const handleClick = (e) => {
    const insideClick = node.current.contains(e.target);
    if (insideClick) return;
    setOptionsVisible(false);
  };
  const handleInputChange = async (newValue) => {
    setInputValue({ ...value, label: newValue });
    setLoading(true);
    await onSearch(newValue);
    setOptionsVisible(true);
    setLoading(false);
  };
  const handleSelect = (option) => {
    onChange(option);
    setOptionsVisible(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={node} className={css}>
      <Input value={inputValue.label} onChange={handleInputChange} />
      <div className={optionsCss}>
        {loading && <Spinner />}
        {!loading &&
          options.map((option, index) => (
            <button
              className={styles.option}
              onClick={() => handleSelect(option)}
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
