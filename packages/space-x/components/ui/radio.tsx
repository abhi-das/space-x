import React from "react";
import styles from "./radio.module.scss";

interface RadioProps {
  id: number;
  label: string;
  value: string;
  checked: string;
  name: string;
  key?: number;
}

interface RadioDispatch {
  setter: (selectedValue: string) => void;
}

type Props = RadioProps & RadioDispatch;

export const Radio = (props: Props) => {
  const { id, label, value, checked, setter, name } = props;

  return (
    <div className={styles.radioItem}>
      <label htmlFor={id.toString()}>
        <input
          type="radio"
          id={id.toString()}
          checked={checked == value}
          onChange={() => setter(value)}
          name={name}
          aria-hidden="true"
        />
        <div className={styles.bg}>
          <span>{label}</span>
        </div>
      </label>
    </div>
  );
};

export default Radio;
