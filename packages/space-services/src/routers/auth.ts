import { Application, Request, Response } from 'express';
import { SessionData } from '../custom-types';
import { appConf, dbConf } from '../config';
import { getDb } from '../db-connect';
import jwt from 'jsonwebtoken';
import requireAuth from '../middlewares/require-auth';
import verifyToken from '../middlewares/verify-token';

interface User {
  name?: string;
  email?: string;
  password?: string;
}

export interface currentUserReq {
  currentUser?: string | object;
}

const createUser = async (user: User) => {
  const db = getDb();
  // Save user into DB
  const newUser = await db
    .collection(`${dbConf.userCollection}`)
    .insertOne(user);
  return newUser;
};

const findExistingUser = async (user: User) => {
  const db = getDb();
  return await db.collection(`${dbConf.userCollection}`).findOne(user);
};

const AuthRoute = (app: Application): void => {
  const version = appConf.apiVersion;
  const tokenKey = appConf.tokenKey;

  app
    .route(`/${version}/signin`)
    .post(async (req: Request & SessionData, res: Response) => {
      if (!tokenKey) {
        res.status(401).json({ message: 'token key not found from ENV' });
        throw new Error('token key not found from ENV');
      }

      const user: User = {
        name: req.body.name,
        email: req.body.email,
      };
      let newUser: any = {};

      try {
        newUser = await createUser(user);
        const token = jwt.sign(user, tokenKey);
        req.session = {
          jwt: token,
        };
        req.sessionOptions = {
          maxAge: 6 * 60 * 60 * 1000,
        };
        res.status(200).json({ userId: newUser.insertedId! });
      } catch (error) {
        res.status(500).json({ message: 'login error from DB!' });
      }
    });

  app
    .route(`/${version}/currentuser`)
    .get(
      verifyToken,
      requireAuth,
      async (req: Request & currentUserReq, res: Response) => {
        res.send({ currentUser: req.currentUser || null });
      },
    );

  app
    .route(`/${version}/login`)
    .post(async (req: Request & currentUserReq, res: Response) => {
      if (!tokenKey) {
        res.status(401).json({ message: 'token key not found from ENV' });
        throw new Error('token key not found from ENV');
      }

      // TODO:
      // Add password match logic here on signin
      const user = {
        email: req.body.email,
        // password: req.body.password
      };
      try {
        const exUser = await findExistingUser(user);
        const token = jwt.sign(
          {
            name: exUser.name,
            email: exUser.email,
          },
          tokenKey,
        );
        req.session = {
          jwt: token,
        };
        req.sessionOptions = {
          maxAge: 6 * 60 * 60 * 1000,
        };
        res.status(200).json({ userId: exUser._id! });
      } catch (error) {
        res.send({ message: 'User not found!' });
      }
    });

  app.route(`/${version}/logout`).post((req: Request, res: Response) => {
    req.session = null;
    req.sessionOptions = {
      maxAge: 0,
    };
    res.send({ message: 'successfulyy logout!' });
  });
};

export default AuthRoute;
