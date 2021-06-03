import { useRouter } from "next/router";
import React from "react";
import styles from "./loading.module.scss";

const CustomLoading = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const loadingStart = (url) => {
      setLoading(true);
    };

    const loadingEnd = (url) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", loadingStart);
    router.events.on("routeChangeComplete", loadingEnd);
    router.events.on("routeChangeError", loadingEnd);

    return () => {
      router.events.off("routeChangeStart", loadingStart);
      router.events.off("routeChangeComplete", loadingEnd);
      router.events.off("routeChangeError", loadingEnd);
    };
  }, [router.events]);

  return (
    <>
      {loading && (
        <div className={styles.loading}>
          <div className={styles.container}>
            <div className={styles.backDrop}></div>
            <div className={styles.spinner}>
              <div className={styles.rect1}></div>
              <div className={styles.rect2}></div>
              <div className={styles.rect3}></div>
              <div className={styles.rect4}></div>
              <div className={styles.rect5}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomLoading;
