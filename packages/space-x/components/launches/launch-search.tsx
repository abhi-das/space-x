import React from 'react';
import Radio from '../ui/radio';

const LaunchSearch = (props) => {
    const [year, setYear] = React.useState(undefined);
    const [isSuccessFul, setIsSuccessFul] = React.useState("false");

    React.useEffect(() => {
        if (year && isSuccessFul !== undefined) { searchHandler() };
    }, [year, isSuccessFul])

    const FilterOpts = [
        { id: 1, value: "2000" },
        { id: 2, value: "2001" },
        { id: 3, value: "2002" },
        { id: 4, value: "2003" }
    ];

    const launchSuccessOpt = [
        { id: 1, value: "true" },
        { id: 2, value: "false" }
    ]

    const searchHandler = () => {
        props.onSearch(year, isSuccessFul)
    }

    return <form>
        <div className="set-year">
            <label>Years:</label>
            {FilterOpts.map(opt => <Radio
                key={opt.id}
                id={opt.id}
                label={opt.value}
                value={opt.value}
                checked={year}
                setter={setYear}
            />)}
        </div>
        <div>
            <p>SuccessFul Launch</p>
            <div className="radio">
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