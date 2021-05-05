import { GetStaticProps } from "next";
import { getAllLaunch } from "../../helpers/api-utils";
import { useRouter } from "next/router";
import LaunchList, {
  LaunchListItem,
} from "../../components/launches/launch-list";
import LaunchSearch from "../../components/launches/launch-search";
import React from "react";
import styles from "../../styles/Globals.module.scss";

interface AllLaunchesProps {
  allLaunches: Array<LaunchListItem>;
}

const AllLaunches = (props: AllLaunchesProps) => {
  const router = useRouter();
  const { allLaunches } = props;

  if (!allLaunches) {
    return <p>Loading...</p>;
  }

  const onSearch = (filterKey, success) => {
    const filterPagePath = `/launch/${filterKey}/${success}`;
    router.push(filterPagePath);
  };

  return (
    <>
      <section className={styles.flex}>
        <LaunchSearch onSearch={onSearch} />
        <LaunchList items={allLaunches} />
      </section>
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
