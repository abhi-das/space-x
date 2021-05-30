import { NextFunction, Request, Response } from 'express';
import { appConf } from '../config';
import { currentUserReq } from '../routers/auth';
import jwt from 'jsonwebtoken';

const verifyToken = async (
  req: Request & currentUserReq,
  res: Response,
  next: NextFunction,
) => {
  if (!req.session?.jwt || !appConf.tokenKey) {
    res.status(401).json({ message: 'Not Authorised!' });
    return next();
  }
  try {
    const payload = await jwt.verify(req.session.jwt, appConf.tokenKey);
    req.currentUser = payload;
  } catch (error) {}

  next();
};

export default verifyToken;
