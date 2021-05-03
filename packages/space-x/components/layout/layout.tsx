import React from "react";
import MainHeader from "./main-header";
import styles from "../../styles/Globals.module.scss";
const Layout = (props) => {
  return (
    <div className={styles.layout}>
      {/* <style jsx global>{`
            body {
                margin: 0;
                padding: 0;
                background: #e5e5e5;
            }
        `}</style> */}
      <MainHeader />
      <main>{props.children}</main>
      <footer className={styles.footer}>
        <strong>Developed By:&nbsp;</strong>
        <span>Abhishek Das</span>
      </footer>
    </div>
  );
};

export default Layout;
