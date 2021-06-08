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
// Middlewares
App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());

// Set Required Headers
App.use(helmet());
App.use(cors({ credentials: true, origin: ["http://localhost:3000", "https://space-x-eight.vercel.app"] }));

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

// session
App.use(cookieSession({ signed: false, secure: true }));

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
