import { Application, Request, Response } from 'express';
import { randomBytes } from 'crypto';
import { SpaceLaunch } from '../common';


const SpacexRoutes = (app: Application): void => {
  const spaceLaunches: SpaceLaunch[] = [];
  app
    .route('/space-launches')
    .get((req: Request, res: Response): void => {
      const maxLimit = req.query.limit;
      if (maxLimit) {
        spaceLaunches.splice(
          Number(maxLimit),
          spaceLaunches.length,
        );
      }
      res.status(200).send(spaceLaunches);
    })
    .post((req: Request, res: Response): void => {
      const missionId = randomBytes(4).toString('hex');
      const missionName = req.body;
      spaceLaunches.push({ missionId, missionName });
      res.status(201).send({ missionId, missionName });
    });

  app
    .route('/space-launches/:id/launch')
    .get((req: Request, res: Response): void => {
      const selectedLaunch = spaceLaunches.filter(
        launch => launch.missionId === req.params.id,
      );
      res.status(200).send(selectedLaunch);
    });
};

export default SpacexRoutes;
