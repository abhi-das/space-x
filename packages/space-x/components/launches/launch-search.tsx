import Radio from "../ui/radio";
import React from "react";
import styles from "./launch-search.module.scss";

interface LaunchSearchDispatch {
  onSearch: (
    year: string,
    isSuccessFulLaunch: string,
    isSuccessFulLand: string
  ) => void;
}

type Props = LaunchSearchDispatch;

const LaunchSearch = (props: Props) => {
  const [year, setYear] = React.useState<string | undefined>(undefined);
  const [isSuccessFulLaunch, setIsSuccessFulLaunch] = React.useState<
    string | undefined
  >(undefined);
  const [isSuccessFulLand, setIsSuccessFulLand] = React.useState<
    string | undefined
  >(undefined);

  const [isEnable, setIsEnable] = React.useState<boolean | undefined>(
    undefined
  );

  const isValid = () => year && isSuccessFulLaunch && isSuccessFulLand;
  const searchHandler = (event): void => {
    event.preventDefault();
    props.onSearch(year, isSuccessFulLaunch, isSuccessFulLand);
  };

  React.useEffect(() => {
    if (isValid()) {
      setIsEnable(true);
    }
  }, [year, isSuccessFulLaunch, isSuccessFulLand]);
  const FilterOpts = [
    { id: 1, value: "2006" },
    { id: 2, value: "2007" },
    { id: 3, value: "2008" },
    { id: 4, value: "2009" },
    { id: 5, value: "2010" },
    { id: 6, value: "2011" },
    { id: 7, value: "2012" },
    { id: 8, value: "2013" },
    { id: 9, value: "2014" },
    { id: 10, value: "2015" },
    { id: 11, value: "2016" },
    { id: 12, value: "2017" },
    { id: 13, value: "2018" },
    { id: 14, value: "2019" },
    { id: 15, value: "2020" },
  ];

  const launchSuccessLaunchOpt = [
    { id: 16, value: "true" },
    { id: 17, value: "false" },
  ];

  const launchSuccessLandOpt = [
    { id: 18, value: "true" },
    { id: 19, value: "false" },
  ];

  return (
    <form className={styles.form} onSubmit={searchHandler}>
      <h2>Filters</h2>
      <p className={styles.subTitle}>Launch Years</p>
      <div className={styles.radioContainer}>
        {FilterOpts.map((opt) => (
          <Radio
            key={opt.id}
            id={opt.id}
            label={opt.value}
            value={opt.value}
            checked={year}
            setter={setYear}
            name={"launchYear"}
          />
        ))}
      </div>
      <p className={styles.subTitle}>SuccessFul Launch</p>
      <div className={styles.radioContainer}>
        {launchSuccessLaunchOpt.map((opt) => (
          <Radio
            key={opt.id}
            id={opt.id}
            label={opt.value}
            value={opt.value}
            checked={isSuccessFulLaunch}
            setter={setIsSuccessFulLaunch}
            name={"successfulLaunch"}
          />
        ))}
      </div>
      <p className={styles.subTitle}>SuccessFul Land</p>
      <div className={styles.radioContainer}>
        {launchSuccessLandOpt.map((opt) => (
          <Radio
            key={opt.id}
            id={opt.id}
            label={opt.value}
            value={opt.value}
            checked={isSuccessFulLand}
            setter={setIsSuccessFulLand}
            name={"successfulLand"}
          />
        ))}
      </div>
      <input
        type="submit"
        value="Apply"
        className={styles.submitBtn}
        disabled={!isEnable}
      />
    </form>
  );
};

export default LaunchSearch;
