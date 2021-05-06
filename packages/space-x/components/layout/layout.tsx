import Footer from "../footer/Footer";
import MainHeader from "./main-header";
import React from "react";
import styles from "../../styles/globals.module.scss";
const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: #e5e5e5;
        }
      `}</style>
      <MainHeader />
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
