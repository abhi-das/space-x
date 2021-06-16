import Link from "next/link";
import React from "react";
import style from "./button.module.scss";

interface ButtonAttr {
  link?: string;
  children?: string | JSX.Element;
  icon?: JSX.Element;
  title?: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAttr;

const Button = (props: ButtonProps) => {
  const { children, link, title, icon, onClick } = props;

  if (link) {
    return (
      <>
        <Link href={link}>
          <a className={style.link} title={title}>
            {icon && <span className={style.icon}>{icon}</span>}
            {children}
          </a>
        </Link>
      </>
    );
  }
  return (
    <>
      <button className={style.btn} onClick={onClick}>
        {icon && <span className={style.icon}>{icon}</span>}
        {children}
      </button>
    </>
  );
};

export default Button;
