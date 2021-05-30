// import { startSpaceXApiService } from "../index";

import { randomBytes } from 'crypto';
import jwt from 'jsonwebtoken';

declare global {
  namespace NodeJS {
    interface Global {
      login(): Promise<string>;
    }
  }
}

beforeAll(async () => {
  process.env.TOKEN_KEY = 'secr';
  // startSpaceXApiService()
});

global.login = async () => {
  const tokenKey = process.env.TOKEN_KEY;

  const user = {
    email: 'test@tes.com',
  };

  const token = jwt.sign(user, tokenKey!, { expiresIn: '1h' });
  return token;
};
