/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef(
  ({ label, type, name, value, onChange, error, onBlur, placeholder }, ref) => {
    return (
      <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <input
          className={styles.input}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          placeholder={placeholder}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

export default Input;
