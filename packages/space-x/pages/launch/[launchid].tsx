import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

import { getFeaturedLaunch, getLaunchById } from '../../helpers/api-utils';

const LaunchDetailPage = (props) => {

    //TODO: Use Context and find if search criteria has more then 1 param (YEAR, and isSuccess etc..) 
    //TODO: Make the change accordingly in api-util logic getLaunchById method

    const launch = props.selectedLaunch;

    if (!launch) {
        return <p>Loading...</p>
    }

    return <>
        <Head>
            <title>{launch.title}</title>
            <meta name="description" content={launch.description} />
        </Head>
        <section>
            <h1>{launch.title}</h1>
        </section>
        <section>
            <Image src={`/${launch.image}`} alt={launch.title} width={340} height={160} />
            <p>{launch.date}</p>
            <p>{launch.location}</p>
        </section>
        <section>
            <p>{launch.description}</p>
        </section>
    </>
}

export const getStaticProps: GetStaticProps = async (context) => {
    const launchId = context.params.launchid;
    const launch = await getLaunchById(launchId);
    return {
        props: {
            selectedLaunch: launch
        },
        revalidate: 30
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const allLaunch = await getFeaturedLaunch();
    const path = allLaunch.map(launch => ({ params: { launchid: launch.id } }));
    return {
        paths: path,
        fallback: true
    }
}

export default LaunchDetailPage;