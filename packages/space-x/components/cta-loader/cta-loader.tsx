import React from "react";
import styles from "./cta-loading.module.scss";

interface CtaLoaderProps {
  isBackDrop?: boolean;
}

const CtaLoader = (props: CtaLoaderProps) => {
  const { isBackDrop } = props;
  return (
    <>
      <div className={styles.container}>
        {isBackDrop && <div className={styles.backDrop}></div>}
        <div className={styles.spinner}>
          <div className={styles.rect1}></div>
          <div className={styles.rect2}></div>
          <div className={styles.rect3}></div>
          <div className={styles.rect4}></div>
          <div className={styles.rect5}></div>
        </div>
      </div>
    </>
  );
};

export default CtaLoader;
