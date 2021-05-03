import { GetStaticProps } from "next";
import { getAllLaunch } from "../../helpers/api-utils";
import { useRouter } from "next/router";
import LaunchList from "../../components/launches/launch-list";
import LaunchSearch from "../../components/launches/launch-search";
import React from "react";
import styles from "../../styles/Globals.module.scss";

const AllLaunches = (props) => {
  const router = useRouter();
  const { allLaunches } = props;

  if (!allLaunches) {
    return <p>Loading...</p>;
  }
  console.log('test--')

  const onSearch = (filterKey, success) => {
    // TODO: make second param dynamic in the filterPagePath
    const filterPagePath = `/launch/${filterKey}/${success}`;
    router.push(filterPagePath);
  };

  return (
    <>
      <div className={styles.flex}>
        <LaunchSearch onSearch={onSearch} />
        <LaunchList items={allLaunches} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const launchs = await getAllLaunch();
  return {
    props: {
      allLaunches: launchs,
    },
    revalidate: 60,
  };
};

export default AllLaunches;
