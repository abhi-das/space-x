import { useRouter } from "next/router";
import CtaLoader from "../cta-loader/cta-loader";
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
        <div className={styles.loadingContainer}>
          <CtaLoader isBackDrop={true} />
        </div>
      )}
    </>
  );
};

export default CustomLoading;
