import React from 'react';
import Link from 'next/link';
import styles from './main-header.module.scss';

const MainHeader = () => {
    return (<header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/">SpaceX Launch Programs</Link>
        </div>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/launch">Browse All Launch</Link>
                </li>
            </ul>
        </nav>
    </header>);
}

export default MainHeader;