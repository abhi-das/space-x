import { GetStaticProps, NextPage } from "next";
import React from "react";
import Head from 'next/head';

import { getFeaturedLaunch } from '../helpers/api-utils';
import LaunchList from "../components/launches/launch-list";

const Home = (props) => {
    return (<div>
        <Head>
            <title>Space-X App Landing !!</title>
            <meta name="description" content="space-X launch" />
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