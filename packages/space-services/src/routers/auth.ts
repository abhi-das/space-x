import { Application, Request, Response } from 'express';
import { SessionData } from '../custom-types';
import { User } from '../models/user';
import { appConf } from '../config';
import jwt from 'jsonwebtoken';
import requireAuth from '../middlewares/require-auth';
import verifyToken from '../middlewares/verify-token';

export interface currentUserReq {
  currentUser?: string | object;
}

const AuthRoute = (app: Application): void => {
  const version = appConf.apiVersion;
  const tokenKey = appConf.tokenKey;

  app
    .route(`/${version}/signup`)
    .post(async (req: Request & SessionData, res: Response) => {
      if (!tokenKey) {
        return res
          .status(401)
          .json({ message: 'token key not found from ENV' });
      }

      const userPayload = {
        email: req.body.email.toString(),
      };

      try {
        const exUser = await User.findOne(userPayload);
        if (exUser) {
          return res.status(200).json({ message: 'email already in use!' });
        }
      } catch (error) {
        res.status(400).json({ message: 'Error while finding email from DB!' });
      }

      try {
        const newUser = User.buildUser(userPayload);
        const result = await newUser.save();
        const token = jwt.sign(userPayload, tokenKey);
        req.session = {
          jwt: token,
        };
        req.sessionOptions = {
          maxAge: 6 * 60 * 60 * 1000,
          sameSite: 'none'
        };
        res.status(201).json({ userId: result._id! });
      } catch (error) {
        res.status(400).json({ message: 'Error on save user in User DB!' });
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
    .route(`/${version}/signin`)
    .post(async (req: Request & currentUserReq, res: Response) => {
      if (!tokenKey) {
        return res
          .status(401)
          .json({ message: 'token key not found from ENV' });
        // throw new Error('token key not found from ENV');
      }

      // TODO:
      // Add password match logic here on signin
      const user = {
        email: req.body.email.toString(),
      };

      try {
        const signInUser = await User.findOne(user);
        if (!signInUser) {
          return res.status(200).json({ message: 'User does not exist!' });
        }
        const token = jwt.sign(user, tokenKey);
        req.session = {
          jwt: token,
        };
        req.sessionOptions = {
          maxAge: 6 * 60 * 60 * 1000,
          sameSite: 'none'
        };
        res.status(200).json({ userId: signInUser._id });
      } catch (error) {
        res.status(400).send({ message: 'Error while finding user in DB!' });
      }
    });

  app.route(`/${version}/signout`).post((req: Request, res: Response) => {
    req.session = null;
    req.sessionOptions = {
      maxAge: 0,
      sameSite: 'none'
    };
    res.send({ message: 'successfully logout!' });
  });
};

export default AuthRoute;
