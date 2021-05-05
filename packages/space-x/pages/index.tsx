import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

import { getFeaturedLaunch } from "../helpers/api-utils";
import LaunchList, { LaunchListItem } from "../components/launches/launch-list";

interface PageProps {
  launches: Array<LaunchListItem>;
}

const Home = (props: PageProps) => {
  return (
    <section>
      <Head>
        <title>Space-X App Landing !!</title>
        <meta name="description" content="space-X launch" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <LaunchList items={props.launches} />
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featureLaunch = await getFeaturedLaunch();
  return {
    props: {
      launches: featureLaunch,
    },
  };
};

export default Home;
