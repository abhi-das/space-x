import { Application, Request, Response } from 'express';
import { randomBytes } from 'crypto';
import jwt from 'jsonwebtoken';

const LoginRoute = (app: Application): void => {
  const version = 'v3';

  app.route(`/${version}/login`).post((req: Request, res: Response): void => {
    const tokenKey = process.env.TOKEN_KEY;
    if (!tokenKey) {
      res.status(401).json({ message: 'token key not found from ENV' });
      throw new Error('token key not found from ENV');
    }

    const user = {
      id: randomBytes(4).toString('hex'),
      ...req.body,
    };

    const token = jwt.sign(user, tokenKey!, { expiresIn: '1h' });
    res.status(200).json({ token: token, userId: user.id });
  });
};

export default LoginRoute;
