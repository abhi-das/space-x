import CurrentUserContext from './currentuser-context';
import React from 'react';

const CurrentUserProvider = (props) => {

    const [userId, setUserId] = React.useState<string | undefined>();

    const updateUserId = (id: string) => {
        setUserId(id)
    }

    return (
        <CurrentUserContext.Provider value={{ userId, updateUserId }}>
            {props.children}
        </CurrentUserContext.Provider>
    )
}

export default CurrentUserProvider;