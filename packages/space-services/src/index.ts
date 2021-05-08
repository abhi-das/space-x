import SpacexRoutes from './routers/spacex-router';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';

const app: Application = express();
const PORT = 5000;

// Middlewares
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cors());

// SpaceX API routes
SpacexRoutes(app);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
