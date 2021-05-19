import { App } from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startSpaceXApiService = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://user_new:password1234@cluster0.3ynf5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log('DB connected successfully!');
  } catch (error) {
    throw new Error('DB connection error at the startup of the application!');
  }

  App.listen(PORT, () => {
    console.log(
      `Listening PORT=${PORT} => API Version=${process.env.APIVERSION} =>  TOKEN_KEY=${process.env.TOKEN_KEY}`,
    );
  });
};

startSpaceXApiService();
