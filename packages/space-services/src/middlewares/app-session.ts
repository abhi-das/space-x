import connectMongo from 'connect-mongodb-session';
import session from 'express-session';
import { appConf, dbConf, dbUri } from '../config';

const appSession = () => {

    const mongoSessionStore = connectMongo(session);
    const store = new mongoSessionStore({
        uri: `${dbUri}/${dbConf.dbName}`,
        collection: `${dbConf.appSessionCollection}`
    });
    return session({
        secret: `${appConf.tokenKey}`,
        resave: false,
        saveUninitialized: false,
        store
    });
}

export default appSession;