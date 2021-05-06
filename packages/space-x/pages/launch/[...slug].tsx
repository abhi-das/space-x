import { GetServerSideProps } from "next";
import { getFilteredLaunch } from "../../helpers/api-utils";
import Head from "next/head";
import Header from "../../components/header/Header";
import LaunchList from "../../components/launches/launch-list";
import React from "react";
import styles from "../../styles/Globals.module.scss";

const FilteredLaunchPage = (props) => {
  const { filteredLaunches } = props;

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
        <LaunchList items={filteredLaunches} />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const filterKeys = context.params.slug;
  const launches = await getFilteredLaunch({
    year: filterKeys[0],
    isSuccessLaunch: filterKeys[1],
    isSuccessLand: filterKeys[2],
  });

  return {
    props: {
      filteredLaunches: launches,
      fallback: false,
    },
  };
};

export default FilteredLaunchPage;
