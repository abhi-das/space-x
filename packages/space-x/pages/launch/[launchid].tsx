import { GetStaticPaths, GetStaticProps } from "next";
import { LaunchListItem } from "../../components/launches/launch-list";
import { getFeaturedLaunch, getLaunchById } from "../../helpers/api-utils";
import Head from "next/head";
import Header from "../../components/header/Header";
import Image from "next/image";
import React from "react";
import styles from "../../styles/globals.module.scss";

const LaunchDetailPage = (props) => {
  //TODO: Use Context and find if search criteria has more then 1 param (YEAR, and isSuccess etc..)
  //TODO: Make the change accordingly in api-util logic getLaunchById method

  const { selectedLaunch, error } = props;
  return (
    <>
      {selectedLaunch && (
        <>
          <Head>
            <title>{selectedLaunch.mission_name}</title>
            <meta name="description" content={selectedLaunch.details} />
          </Head>
          <Header headerType="h2" title={selectedLaunch.mission_name} />
          <section className={styles.containerCenter}>
            <Image
              src={`/${selectedLaunch.image}`}
              alt={selectedLaunch.title}
              width={300}
              height={260}
            />
            <p>
              <strong>Year: </strong>
              {selectedLaunch.launch_year}
            </p>
            <p>{selectedLaunch.details}</p>
          </section>
        </>
      )}
      {!selectedLaunch && !error && <p>Loading...</p>}
      {error && <p className="error">{error.message}</p>}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const launchId = context.params.launchid;
  const response = await getLaunchById(launchId);

  if (
    response !== null &&
    Object.prototype.hasOwnProperty.call(
      response as LaunchListItem,
      "mission_id"
    )
  ) {
    return {
      props: {
        selectedLaunch: response,
      },
      revalidate: 30,
    };
  }

  return {
    props: {
      error: response,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getFeaturedLaunch();
  if (response instanceof Array) {
    const path = response.map((launch) => ({
      params: { launchid: launch.mission_id },
    }));
    return {
      paths: path,
      fallback: true,
    };
  }
  return {
    paths: [
      {
        params: { launchid: "" },
      },
    ],
    fallback: true,
  };
};

export default LaunchDetailPage;
