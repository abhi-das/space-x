import React from 'react';
import styles from './launch-item.module.scss';
import Button from '../ui/button';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';

const LaunchItem = (props) => {

    const { title, images, date, location, id } = props;
    const readableDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const exploreLink = `/launch/${id}`;

    return <li className={styles.item}>
        <img src={'/' + images} alt={title} />
        <div className={styles.content}>
            <h2>{title}</h2>
            <div className={styles.date}>
                <DateIcon />
                <time>{readableDate}</time>
            </div>
            <div className={styles.address}>
                <AddressIcon />
                <address>{location}</address>
            </div>
            <div className={styles.actions}>
                <Button link={exploreLink}>Explore Details</Button>
            </div>
        </div>
    </li>
}

export default LaunchItem;