import React from 'react';
import MainHeader from './main-header';
import styles from './layout.module.scss';

const Layout = (props) => {
    return <div className={styles.layout}>
        <MainHeader />
        <main>
            {props.children}
        </main>
    </div>;
}

export default Layout;