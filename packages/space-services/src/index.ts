import { App } from './app';

const PORT = 5000;

const startSpaceXApiService = () => {
  App.listen(PORT, () => {
    console.log(`Listening ${PORT}`);
  });
};

startSpaceXApiService();
