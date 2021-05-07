import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = 5000;

const spaceLaunch = {
  msg: 'Get me all launches here.',
};

app.get('/space-launches', (req: Request, res: Response) => {
  res.status(200).send(spaceLaunch);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
