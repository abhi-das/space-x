import { Application, Request, Response } from 'express';
import { SessionData } from '../custom-types';
import { appConf, dbConf } from '../config';
import { getDb } from '../db-connect';
import jwt from 'jsonwebtoken';

interface User {
  name: string;
  email: string;
}

const createUser = async (user: User) => {
  // Save user into DB
  const db = getDb();
  const newUser = await db
    .collection(`${dbConf.userCollection}`)
    .insertOne(user);
  return newUser;
};

const AuthRoute = (app: Application): void => {
  const version = appConf.apiVersion;
  const tokenKey = appConf.tokenKey;

  app.route(`/${version}/login`).post(async (req: (Request & SessionData), res: Response) => {
    if (!tokenKey) {
      res.status(401).json({ message: 'token key not found from ENV' });
      throw new Error('token key not found from ENV');
    }

    const user: User = {
      ...req.body,
    };

    try {
      const newUser = await createUser(user);
      // Once user created generate JWT
      const token = jwt.sign(user, tokenKey!, { expiresIn: '1h' });

      // if using express-session only uncomment below
      // req.session.isLoggedIn = true;
      // req.session.cookie = {
      //   httpOnly: true,
      //   originalMaxAge: 10
      // };

      res.status(200).json({ token: token, userId: newUser.insertedId });
    } catch (error) {
      res.status(500).json({ message: 'login error from DB!' });
    }
  });

  app.route(`/${version}/logout`).post((req:Request, res:Response) => {

    // if using express-session only uncomment below
    // req.session.destroy((error) => {
    //   if(error) {
    //     res.status(500).json({ message: 'Error on application logout!'});
    //   } else {
    //     res.status(200).json({ message: 'Logout successfully!'});
    //   }
    // })

  });
};

export default AuthRoute;
