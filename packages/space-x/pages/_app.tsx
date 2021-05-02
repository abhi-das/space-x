import React from 'react';
import Layout from '../components/layout/layout';

const MyApp = ({ Component, pageProps }) => {
    return <Layout>
        <Component {...pageProps} />
    </Layout>;
}

export default MyApp;