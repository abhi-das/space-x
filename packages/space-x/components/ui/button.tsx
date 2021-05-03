import Link from "next/link";
import React from "react";
import styles from "./button.module.scss";

const Button = (props) => {
  if (props.link) {
    return (
      <>
        <Link href={props.link}>
          <a href={props.link} className={styles.btn}>{props.children}</a>
        </Link>
      </>
    );
  }
  return (
    <>
      <button onClick={props.onClick}>{props.children}</button>
    </>
  );
};

export default Button;
