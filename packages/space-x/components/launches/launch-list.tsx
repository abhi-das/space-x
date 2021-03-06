import LaunchItem from "./launch-item";
import React from "react";

import styles from "./launch-list.module.scss";

export interface LaunchListItem {
  mission_id: string;
  mission_name: string;
  image: string;
  launch_year: string;
  launch_successful: boolean;
  landing_successful: boolean;
  isFeatured: boolean;
}

interface LaunchListProps {
  items: Array<LaunchListItem>;
}

const LaunchList = (props: LaunchListProps) => {
  const { items } = props;

  return (
    <ul className={`launch-list ${styles.list}`}>
      {items.length > 0 &&
        items.map((item) => (
          <LaunchItem
            id={item.mission_id}
            title={item.mission_name}
            image={item.image}
            date={item.launch_year}
            successFulLaunch={item.launch_successful}
            successFulLanding={item.landing_successful}
            key={item.mission_id}
          />
        ))}
    </ul>
  );
};

export default LaunchList;
