import React from 'react';
import styles from './launch-item.module.scss';
import Button from '../ui/button';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';

const LaunchItem = (props) => {

    const { title, images, date, id, successFulLaunch, successFulLanding } = props;

    const exploreLink = `/launch/${id}`;

    return <li className={styles.item}>
        <img src={'/' + images} alt={title} />
        <div className={styles.content}>
            <h2><Button link={exploreLink}>{title}</Button></h2>
            <div>
                <strong>Mission Id:</strong> {id}
            </div>
            <div className={styles.date}>
                <strong>Launch Year:</strong> <DateIcon /> <time>{date}</time>
            </div>
            <div>
                <strong>Successful Launch:</strong> {successFulLaunch}
            </div>
            <div>
                <strong>Successful Landing:</strong>  {successFulLanding}
            </div>
        </div>
    </li>
}

export default LaunchItem;