import React from 'react';
import Radio from '../ui/radio';
import styles from './launch-search.module.scss';

const LaunchSearch = (props) => {
    const [year, setYear] = React.useState(undefined);
    const [isSuccessFul, setIsSuccessFul] = React.useState("false");

    React.useEffect(() => {
        if (year && isSuccessFul !== undefined) { searchHandler() };
    }, [year, isSuccessFul])

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
        { id: 15, value: "2020" }
    ];

    const launchSuccessOpt = [
        { id: 1, value: "true" },
        { id: 2, value: "false" }
    ]

    const searchHandler = () => {
        props.onSearch(year, isSuccessFul)
    }

    return <form className={styles.form}>
        <div className="set-year">
            <h2>Filters</h2>
            <div className={styles.radioContainer}>
                <p className={styles.subTitle}>Launch Years</p>
                <div className={styles.radioBox}>
                    {FilterOpts.map(opt => <Radio
                        key={opt.id}
                        id={opt.id}
                        label={opt.value}
                        value={opt.value}
                        checked={year}
                        setter={setYear}
                    />)}
                </div>
            </div>
        </div>
        <div className={styles.radioContainer}>
            <p className={styles.subTitle}>SuccessFul Launch</p>
            <div className={styles.radioBox}>
                {launchSuccessOpt.map(opt => <Radio
                    key={opt.id}
                    id={opt.id}
                    label={opt.value}
                    value={opt.value}
                    checked={isSuccessFul}
                    setter={setIsSuccessFul}
                />)}
            </div>
        </div>
    </form>;
}

export default LaunchSearch;