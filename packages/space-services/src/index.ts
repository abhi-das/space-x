import { randomBytes } from 'crypto';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = 5000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

interface SpaceLaunch {
  missionId: string;
  missionName: string;
}

interface SpaceLaunches {
  spaceLaunch: Array<SpaceLaunch>;
}

const spaceLaunches: SpaceLaunches = {
  spaceLaunch: [],
};

app.get('/space-launches', (req: Request, res: Response) => {
  const maxLimit = req.query.limit;
  if (maxLimit) {
    spaceLaunches.spaceLaunch.splice(
      Number(maxLimit),
      spaceLaunches.spaceLaunch.length,
    );
  }
  res.status(200).send(spaceLaunches);
});

app.get('/space-launches/:id/launch', (req: Request, res: Response) => {
  const selectedLaunch = spaceLaunches.spaceLaunch.filter(
    launch => launch.missionId === req.params.id,
  );
  res.status(200).send(selectedLaunch);
});

app.post('/space-launches', (req: Request, res: Response) => {
  const missionId = randomBytes(4).toString('hex');
  const missionName = req.body;
  spaceLaunches.spaceLaunch?.push({ missionId, missionName });
  res.status(201).send(spaceLaunches);
});

app.listen(PORT, () => {
  // console.log(`Listening on ${PORT}`);
});
