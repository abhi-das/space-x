import { GetServerSideProps } from "next";
import { getFilteredLaunch } from "../../helpers/api-utils";
import Head from "next/head";
import Header from "../../components/header/Header";
import LaunchList from "../../components/launches/launch-list";
import React from "react";
import styles from "../../styles/globals.module.scss";

const FilteredLaunchPage = (props) => {
  const { filteredLaunches, error } = props;

  if (!filteredLaunches) {
    return <p className={styles.center}>Loading...</p>;
  }

  if (filteredLaunches.length === 0) {
    return <p className={styles.center}>No match!</p>;
  }

  return (
    <>
      <Head>
        <title>Filtered Launch</title>
      </Head>
      <Header headerType="h2" title="Filtered Launch Page" />
      <section className={styles.containerCenter}>
        {filteredLaunches && <LaunchList items={filteredLaunches} />}
        {error && <p className="error">{error.message}</p>}
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const filterKeys = context.params.slug;
  const response = await getFilteredLaunch({
    year: filterKeys[0],
    isSuccessLaunch: filterKeys[1],
    isSuccessLand: filterKeys[2],
  });

  if (response instanceof Array) {
    return {
      props: {
        filteredLaunches: response,
        fallback: false,
      },
    };
  }
  return {
    props: {
      error: response,
    },
  };
};

export default FilteredLaunchPage;
