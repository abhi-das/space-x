import Link from "next/link";
import React from "react";
import styles from "./main-header.module.scss";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={`title ${styles.logo}`}>
        <Link href="/">Space-x Launch Programs</Link>
      </h1>
      <nav className={`nav ${styles.nav}`}>
        <ul className={"nav-list"}>
          <li className={"nav-list-item"}>
            <Link href="/launch">Browse All Launch</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
