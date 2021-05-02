import React from 'react';
import Layout from '../components/layout/layout';
import styles from '../styles/Globals.module.scss';

const MyApp = ({ Component, pageProps }) => {
    return <Layout>
        <Component {...pageProps} />
        <footer className={styles.footer}>
            <strong>Developed By:</strong>
        </footer>
    </Layout>;
}

export default MyApp;