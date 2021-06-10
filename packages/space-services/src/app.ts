import { shouldSendSameSiteNone } from 'should-send-same-site-none';
import AuthRoute from './routers/auth';
import LaunchRoutes from './routers/launches';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieSession from 'cookie-session';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

const App: Application = express();

App.set('trust proxy', true);
App.set('Access-Control-Allow-Origin', '*');
App.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
App.set(
  'Access-Control-Allow-Headers',
  'Origin, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
);
App.set('Access-Control-Allow-Credentials', 'true');

// Middlewares
App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());

// session
App.use(shouldSendSameSiteNone);
App.use(
  cookieSession({
    signed: false,
    secure: true,
    sameSite: 'none',
  }),
);

// Set Required Headers
// const whitelist = ["https://space-x-eight.vercel.app", "http://localhost:3000"];
const corsOptions = {
  origin: true,
  credentials: true,
  exposedHeaders: '*',
};
App.use(helmet());
App.use(cors(corsOptions));

// Compression
App.use(compression());
// res.flush()

// Log HTTP calls and Errors
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a',
  },
);
App.use(morgan('combined', { stream: accessLogStream }));

// SpaceX API routes
LaunchRoutes(App);

// Login
AuthRoute(App);

// App.use((error: Error, req: Request, res: Response, next: NextFunction) => {
//   if(error) {
//     return res.json({ message: "Ops! Something went wrong."})
//   }
// })

App.all('*', async (req: Request, res: Response) => {
  // throw new Error('Not found page!');
  res.status(401).json({ message: '401 Page - Wrong end point!' });
});

export { App };
