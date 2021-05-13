import { Application, Request, Response } from 'express';
import { randomBytes } from 'crypto';
import jwt from 'jsonwebtoken';

const LoginRoute = (app: Application): void => {
  const version = 'v3';

  app.route(`/${version}/login`).post((req: Request, res: Response): void => {
    const user = {
      id: randomBytes(4).toString('hex'),
      ...req.body,
    };

    const token = jwt.sign(user, 'secr', { expiresIn: '1h' });
    res.status(200).json({ token: token, userId: user.id });
  });
};

export default LoginRoute;
