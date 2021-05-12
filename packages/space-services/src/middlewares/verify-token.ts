import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface custReq {
  userId?: string;
}

const verifyToken = (
  req: Request & custReq,
  res: Response,
  next: NextFunction,
): Response | undefined => {
  const authHeader = req.get('Aurthorization');
  // const error = new Error('Not Aurthorized !');

  if (!authHeader) {
    return res.sendStatus(401).json({ message: 'Forbiden!' });
    // throw error;
  }
  const token = authHeader.split(' ')[1];
  let decodedToken: any;
  try {
    decodedToken = jwt.verify(token, 'secr');
  } catch (err) {
    // throw err
    return res.sendStatus(401).json({ message: 'Forbiden!' });
  }
  if (!decodedToken) {
    // throw error;
    return res.sendStatus(401).json({ message: 'Forbiden!' });
  }
  req.userId = decodedToken.userId;
  next();
};

export default verifyToken;
