import dotenv from 'dotenv';

dotenv.config();

export const appConf = {
  port: process.env.PORT,
  apiVersion: process.env.APIVERSION,
  tokenKey: process.env.TOKEN_KEY,
};

export const dbConf = {
  dbName: process.env.DB_NAME,
  userCollection: process.env.USER_COLLECTION,
  missionCollection: process.env.MISSION_COLLECTION,
};
