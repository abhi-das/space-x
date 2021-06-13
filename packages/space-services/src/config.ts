import dotenv from 'dotenv';

dotenv.config();

export const appConf = {
  port: process.env.PORT,
  apiVersion: process.env.APIVERSION,
  tokenKey: process.env.TOKEN_KEY,
};

export const dbConf = {
  dbUserName: process.env.DB_USER_NAME,
  dbUserPassword: process.env.DB_USER_PASSWORD,
  dbName: process.env.DB_NAME,
  userCollection: process.env.USER_COLLECTION,
  missionCollection: process.env.MISSION_COLLECTION,
  appSessionCollection: process.env.SESSION_COLLECTION,
  productCollection: process.env.PRODUCT_COLLECTION,
  orderCollection: process.env.ORDER_COLLECTION
};

export const dbUri = `mongodb+srv://${dbConf.dbUserName}:${dbConf.dbUserPassword}@cluster0.3ynf5.mongodb.net`;
