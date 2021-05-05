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
        <title>Space-X App Landing</title>
        <meta charSet="utf-8" />
        <meta name="description" content="space-X launch" />
        <meta property="og:title" content="Space-X App Landing" key="ogtitle" />
+       <meta property="og:description" content="space-X launch" key="ogdesc" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#c7c7c7" />
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
