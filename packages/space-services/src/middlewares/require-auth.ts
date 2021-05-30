import { NextFunction, Request, Response } from 'express';
import { currentUserReq } from '../routers/auth';

const requireAuth = (
  req: Request & currentUserReq,
  res: Response,
  next: NextFunction,
) => {
  if (!req.currentUser) {
    res.status(401).json({ message: 'Not Authorised!' });
  }

  next();
};

export default requireAuth;
