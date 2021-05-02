import { GetStaticProps } from "next";
import React from "react";
import Head from 'next/head';

import { getFeaturedLaunch } from '../helpers/api-utils';
import LaunchList from "../components/launches/launch-list";

const Home = (props) => {
    return (<div>
        <Head>
            <title>Space-X App Landing !!</title>
            <meta name="description" content="space-X launch" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        </Head>
        <LaunchList items={props.launches} />
    </div>);
}

export const getStaticProps: GetStaticProps = async (context) => {
    const featureLaunch = await getFeaturedLaunch();
    return {
        props: {
            launches: featureLaunch
        }
    }
}

export default Home;