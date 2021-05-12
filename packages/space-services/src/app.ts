import LaunchRoutes from './routers/launches';
import LoginRoute from './routers/login';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';

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

// SpaceX API routes
LaunchRoutes(App);

// Login
LoginRoute(App);

export { App };
