import { GetServerSideProps } from "next";
import { getFilteredLaunch } from "../../helpers/api-utils";
import Head from "next/head";
import LaunchList from "../../components/launches/launch-list";
import React from "react";

const FilteredLaunchPage = (props) => {
  const { filteredLaunches } = props;

  if (!filteredLaunches) {
    return <p>Loading...</p>;
  }

  if (filteredLaunches.length === 0) {
    return <p>No match!</p>;
  }

  return (
    <>
      <Head>
        <title>Filtered Launch</title>
      </Head>
      <h1>Filtered Launch Page</h1>
      <LaunchList items={filteredLaunches} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const filterKeys = context.params.slug;
  const launches = await getFilteredLaunch({
    year: filterKeys[0],
    isSuccess: filterKeys[1],
  });

  return {
    props: {
      filteredLaunches: launches,
    },
  };
};

export default FilteredLaunchPage;
