import React from "react";
import styles from "./radio.module.scss";

export const Radio = ({ id, label, value, checked, setter }) => {
  return (
    <div className={styles.radioItem}>
      <input
        type="radio"
        id={id}
        checked={checked == value}
        onChange={() => setter(value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Radio;
