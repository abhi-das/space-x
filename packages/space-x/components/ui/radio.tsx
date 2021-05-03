import React from "react";

export const Radio = ({ id, label, value, checked, setter }) => {
  return (
    <>
      <input
        type="radio"
        id={id}
        checked={checked == value}
        onChange={() => setter(value)}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default Radio;
