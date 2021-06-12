import { createContext } from 'react';

export type CurrentUserContextProps = {
    updateUserId: (id: string) => void;
    userId?: string;
}

const CurrentUserContext = createContext<CurrentUserContextProps | null>(null);

export default CurrentUserContext;