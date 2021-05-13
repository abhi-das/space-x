import { App } from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startSpaceXApiService = () => {
  App.listen(PORT, () => {
    console.log(`Listening PORT=${PORT} => API Version=${process.env.APIVERSION}`);
  });
};

startSpaceXApiService();
