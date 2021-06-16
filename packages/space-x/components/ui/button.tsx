import Link from "next/link";
import React from "react";
import styles from "./button.module.scss";

interface ButtonAttrs {
  link?: string;
  title?: string;
  classes?: Array<string>;
  children?: string | JSX.Element;
  onClick?: () => void;
}

type ButtonProps = ButtonAttrs;

const Button = (props: ButtonProps) => {
  const { link, title, children, onClick } = props;
  if (link) {
    return (
      <>
        <Link href={link}>
          <a className={`${styles.btn} ${styles.btnLink}`} title={title}>
            {children}
          </a>
        </Link>
      </>
    );
  }
  return (
    <>
      <button className={styles.btn} title={title} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
