import LaunchRoutes from './routers/launches';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';

const App: Application = express();

// Middlewares
App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());
App.use(cors());

// SpaceX API routes
LaunchRoutes(App);

export { App };
