import Link from "next/link";
import React from "react";
import styles from "./main-header.module.scss";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">
          <p>
            <span>Space</span>X <span> Launch Programs</span>
          </p>
        </Link>
      </h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/launch">Browse All Launch</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
