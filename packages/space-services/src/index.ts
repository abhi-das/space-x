import { App } from './app';
import { appConf } from './config';
import { dbConnect } from './db-connect';

const startSpaceXApiService = async () => {
  await dbConnect();
  App.listen(appConf.port, () => {
    console.log(
      `Listening PORT=${appConf.port} => API Version=${appConf.apiVersion} =>  TOKEN_KEY=${appConf.tokenKey}`,
    );
  });
};

startSpaceXApiService();
