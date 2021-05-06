import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Header from "../../components/header/Header";
import Image from "next/image";
import React from "react";
import styles from "../../styles/globals.module.scss";

import { getFeaturedLaunch, getLaunchById } from "../../helpers/api-utils";

const LaunchDetailPage = (props) => {
  //TODO: Use Context and find if search criteria has more then 1 param (YEAR, and isSuccess etc..)
  //TODO: Make the change accordingly in api-util logic getLaunchById method

  const launch = props.selectedLaunch;

  if (!launch) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{launch.mission_name}</title>
        <meta name="description" content={launch.details} />
      </Head>
      <Header headerType="h2" title={launch.mission_name} />
      <section className={styles.containerCenter}>
        <Image
          src={`/${launch.image}`}
          alt={launch.title}
          width={300}
          height={260}
        />
        <p>
          <strong>Year: </strong>
          {launch.launch_year}
        </p>
        <p>{launch.details}</p>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const launchId = context.params.launchid;
  const launch = await getLaunchById(launchId);
  return {
    props: {
      selectedLaunch: launch,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allLaunch = await getFeaturedLaunch();
  const path = allLaunch.map((launch) => ({
    params: { launchid: launch.mission_id },
  }));
  return {
    paths: path,
    fallback: true,
  };
};

export default LaunchDetailPage;
