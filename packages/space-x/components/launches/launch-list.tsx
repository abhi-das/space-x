import React from 'react';
import LaunchItem from './launch-item';

import styles from './launch-list.module.scss';

const LaunchList = ({ items }) => {
    return <ul className={styles.list}>
        {items.map(launch =>
            <LaunchItem
                key={launch.mission_id}
                id={launch.mission_id}
                title={launch.mission_name}
                images={launch.image}
                date={launch.launch_year}
                successFulLaunch={launch.launch_successful.toString()}
                successFulLanding={launch.landing_successful.toString()}
            />
        )}
    </ul>
}

export default LaunchList;