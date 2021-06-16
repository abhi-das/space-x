import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import Image from "next/image";
import React from "react";
import styles from "./launch-item.module.scss";

export interface LaunchItemProps {
  id: string;
  title: string;
  image: string;
  date: string;
  successFulLaunch: boolean;
  successFulLanding: boolean;
  key?: string;
}

const LaunchItem = (props: LaunchItemProps) => {
  const { title, image, date, id, successFulLaunch, successFulLanding } = props;

  const exploreLink = `/launch/${id}`;

  return (
    <li className={`launch-list-item ${styles.item}`}>
      <a className={styles.imgContent}>
        <Image
          src={"/" + image}
          loading={"lazy"}
          alt={title}
          title={title}
          width={300}
          height={260}
        />
      </a>
      <div className={`content ${styles.content}`}>
        <h2>
          <Button link={exploreLink}>{title}</Button>
        </h2>
        <div>
          <strong>Mission Id:</strong> {id}
        </div>
        <div className={styles.date}>
          <strong>Launch Year:</strong> <DateIcon /> <time>{date}</time>
        </div>
        <div>
          <strong>Successful Launch:</strong> {successFulLaunch.toString()}
        </div>
        <div>
          <strong>Successful Landing:</strong> {successFulLanding.toString()}
        </div>
      </div>
    </li>
  );
};

export default LaunchItem;
