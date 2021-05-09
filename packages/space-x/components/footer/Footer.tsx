import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={`footer ${styles.footer}`}>
      <strong>Developed By:&nbsp;</strong> <span>Abhishek Das</span>
    </footer>
  );
};

export default Footer;
