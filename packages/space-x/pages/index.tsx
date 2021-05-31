import { GetStaticProps } from "next";
import React from "react";

import { ResError, getFeaturedLaunch } from "../helpers/api-utils";
import LaunchList, { LaunchListItem } from "../components/launches/launch-list";

interface PageProps {
  launches?: Array<LaunchListItem>;
  error?: ResError;
}

const Home = (props: PageProps) => {
  const { launches, error } = props;
  return (
    <section>
      {launches && <LaunchList items={props.launches} />}
      {error && <p className="error">{error.message}</p>}
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getFeaturedLaunch();
  if (response instanceof Array) {
    return {
      props: {
        launches: response,
      },
    };
  }
  return {
    props: {
      error: response,
    },
  };
};

export default Home;
