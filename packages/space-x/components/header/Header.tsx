import React from "react";

import styles from "./header.module.scss";

const Header = ({ headerType, title }) => {
  return (
    <header className={styles.header}>
      {headerType === "h1" && <h1 className={`title`}>{title}</h1>}
      {headerType === "h2" && <h2 className={`sub-title`}>{title}</h2>}
    </header>
  );
};

export default Header;
