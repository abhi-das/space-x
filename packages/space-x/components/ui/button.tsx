import React from 'react';
import Link from 'next/link';
import styles from './button.module.scss';

const Button = (props) => {
    if (props.link) {
        return <>
            <Link href={props.link}>
                <a className={styles.btn}>{props.children}</a>
            </Link>
        </>
    }
    return <>
        <button onClick={props.onClick}>{props.children}</button>
    </>;
}

export default Button;