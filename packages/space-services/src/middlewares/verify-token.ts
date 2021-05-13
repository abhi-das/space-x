import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface custReq {
  userId?: string;
}

const verifyToken = (
  req: Request & custReq,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.get('Aurthorization');
  const err = new Error('Not Aurthorized!');

  if (!authHeader) {
    res.status(401).json({ message: 'Token not found', statusCode: 401 });
    throw err;
  }
  const token = authHeader.split(' ')[1];
  let decodedToken: any;
  try {
    decodedToken = jwt.verify(token, 'secr');
  } catch (err) {
    const message = 'Token does not match';
    res.json({ message, statusCode: 401 });
    throw message;
  }
  if (!decodedToken) {
    const message = 'Invalid token';
    res.status(500).json({ message, statusCode: 500 });
    throw message;
  }
  req.userId = decodedToken.userId;
  next();
};

export default verifyToken;
