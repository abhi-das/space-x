import { appConf } from './config';
import AuthRoute from './routers/auth';
import LaunchRoutes from './routers/launches';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';

const App: Application = express();

// Middlewares
App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());
App.use(cors());
App.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, POST, GET, PATCH, DELETE',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Aurthorization');
  next();
});

// Log HTTP calls and Errors
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a',
  },
);
App.use(morgan('combined', { stream: accessLogStream }));

// use session
App.use(session({
  secret: appConf.tokenKey!,
  resave: false,
  saveUninitialized: false
}))

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
  throw new Error('Not found page!');
});

export { App };
