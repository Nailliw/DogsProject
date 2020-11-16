import React from "react";
import styles from "./Input.module.css";
const Input = ({ name, label, type }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>

      <input 
      id={name} 
      name={name} 
      className={styles.input} 
      type={type}
      ></input>
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
