import { GetStaticProps } from "next";
import React from "react";

import { getFeaturedLaunch } from "../helpers/api-utils";
import LaunchList, { LaunchListItem } from "../components/launches/launch-list";

interface PageProps {
  launches: Array<LaunchListItem>;
}

const Home = (props: PageProps) => {
  return (
    <section>
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
