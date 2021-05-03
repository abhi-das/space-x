import React from "react";
import styles from "./radio.module.scss";

export const Radio = ({ id, label, value, checked, setter }) => {
  return (
    <div className={styles.radioItem}>
      <label htmlFor={id}>
        <input
          type="radio"
          id={id}
          checked={checked == value}
          onChange={() => setter(value)}
        />
        <div className={styles.bg}>
          <span>{label}</span>
        </div>
      </label>
    </div>
  );
};

export default Radio;
