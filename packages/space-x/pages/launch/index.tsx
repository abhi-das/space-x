import React from 'react';
import LaunchList from '../../components/launches/launch-list';
import LaunchSearch from '../../components/launches/launch-search';
import { getAllLaunch } from '../../helpers/api-utils';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

const AllLaunches = (props) => {

    const router = useRouter();
    const { allLaunches } = props;

    if (!allLaunches) {
        return <p>Loading...</p>
    }

    const onSearch = (filterKey, success) => {
        // TODO: make second param dynamic in the filterPagePath
        const filterPagePath = `/launch/${filterKey}/${success}`;
        router.push(filterPagePath);
    }

    return <>
        <LaunchSearch onSearch={onSearch} />
        <LaunchList items={allLaunches} />
    </>
}

export const getStaticProps: GetStaticProps = async () => {
    const launchs = await getAllLaunch();
    return {
        props: {
            allLaunches: launchs
        },
        revalidate: 60
    }
}

export default AllLaunches;