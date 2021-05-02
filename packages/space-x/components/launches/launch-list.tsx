import React from 'react';
import LaunchItem from './launch-item';

import styles from './launch-list.module.scss';

const LaunchList = ({ items }) => {
    return <ul className={styles.list}>
        {items.map(launch =>
            <LaunchItem
                key={launch.id}
                id={launch.id}
                title={launch.title}
                images={launch.image}
                date={launch.date}
                location={launch.location}
            />
        )}
    </ul>
}

export default LaunchList;