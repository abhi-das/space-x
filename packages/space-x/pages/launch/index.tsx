import { GetStaticProps } from "next";
import { ResError, getAllLaunch } from "../../helpers/api-utils";
import { useRouter } from "next/router";
import Head from "next/head";
import LaunchList, {
  LaunchListItem,
} from "../../components/launches/launch-list";
import LaunchSearch from "../../components/launches/launch-search";
import React from "react";
import styles from "../../styles/globals.module.scss";

interface AllLaunchesProps {
  allLaunches: Array<LaunchListItem>;
  error?: ResError;
}

const AllLaunches = (props: AllLaunchesProps) => {
  const router = useRouter();
  const { allLaunches, error } = props;

  // if (!allLaunches) {
  //   return <p>Loading....</p>;
  // }

  const onSearch = (filterKey, isSuccessLaunch, isSuccessLand) => {
    const filterPagePath = `/launch/${filterKey}/${isSuccessLaunch}/${isSuccessLand}`;
    router.push(filterPagePath);
  };

  return (
    <>
      <Head>
        <title>Browse All Launch</title>
        <meta
          name="description"
          content="Browse all launch by year, also filter by landing and launching year."
        />
      </Head>
      <section className={styles.flex}>
        {allLaunches && (
          <>
            <LaunchSearch onSearch={onSearch} />
            <LaunchList items={allLaunches} />
          </>
        )}
        {!allLaunches && <p>Loading...</p>}
        {error && <p className="error">{error.message}</p>}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getAllLaunch();
  if (response instanceof Array) {
    return {
      props: {
        allLaunches: response,
      },
      revalidate: 60,
    };
  }
  return {
    props: {
      error: response,
    },
  };
};

export default AllLaunches;
