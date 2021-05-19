import mongoose from 'mongoose';
import { dbConf } from './config';

let _client: any;
const dbConnect = async () => {
  try {
    _client = await mongoose.connect(
      `mongodb+srv://user_new:password1234@cluster0.3ynf5.mongodb.net/${dbConf.dbName}?retryWrites=true&w=majority`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log(`DB connect successfully here - ${dbConf.dbName}`);
  } catch (err) {
    throw new Error('DB connection error on the application load!');
  }
};

const getDb = () => {
  if (_client) {
    return _client.connection.db;
  }
  throw new Error('No DB found in the application');
};

export { dbConnect, getDb };
