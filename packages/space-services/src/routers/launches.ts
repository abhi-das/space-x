import { Application, Request, Response } from 'express';
import { SpaceLaunch } from '../common';
import { randomBytes } from 'crypto';
import verifyToken from '../middlewares/verify-token';

const getSuccessFulLaunches = (
  ar: Array<SpaceLaunch>,
  status?: string,
): Array<SpaceLaunch> => {
  if (status === 'true') {
    return ar.filter(itm => itm.launch_success === 'true');
  } else if (status === 'false') {
    return ar.filter(itm => itm.launch_success === 'false');
  } else {
    return ar;
  }
};

const getSuccessFulLandings = (
  ar: Array<SpaceLaunch>,
  status?: string,
): Array<SpaceLaunch> => {
  if (status === 'true') {
    return ar.filter(itm => itm.land_success === 'true');
  } else if (status === 'false') {
    return ar.filter(itm => itm.land_success === 'false');
  } else {
    return ar;
  }
};

const getLaunchByYear = (
  ar: Array<SpaceLaunch>,
  year?: string,
): Array<SpaceLaunch> => {
  return ar.filter(itm => itm.launch_year === year);
};

const LaunchRoutes = (app: Application): void => {
  let filteredLaunch: Array<SpaceLaunch> = [];
  const version = process.env.APIVERSION || 'v3';

  app
    .route(`/${version}/launches`)
    .get(verifyToken, (req: Request, res: Response): void => {
      const query = req.query;

      if (query.launch_success) {
        const successFulLaunches = getSuccessFulLaunches(
          filteredLaunch,
          query.launch_success.toString(),
        );
        filteredLaunch = successFulLaunches;
      }

      if (query.land_success) {
        const successFulLanding = getSuccessFulLandings(
          filteredLaunch,
          query.land_success.toString(),
        );
        filteredLaunch = [...filteredLaunch, ...successFulLanding];
      }

      if (query.launch_year) {
        const launchByYear = getLaunchByYear(
          filteredLaunch,
          query.launch_year.toString(),
        );
        filteredLaunch = [...filteredLaunch, ...launchByYear];
      }

      if (query.limit) {
        filteredLaunch.splice(Number(query.limit), filteredLaunch.length);
      }

      res.status(200).send(filteredLaunch);
    })
    .post(verifyToken, (req: Request, res: Response): void => {
      const launchFromReqBody = {
        missionId: randomBytes(4).toString('hex'),
        ...req.body,
      };
      filteredLaunch.push(launchFromReqBody);
      res.status(201).send(launchFromReqBody);
    });

  app
    .route(`/${version}/launches/:id/launch`)
    .get(verifyToken, (req: Request, res: Response): void => {
      const selectedLaunch = filteredLaunch.filter(
        launch => launch.missionId === req.params.id,
      );
      res.status(200).send(selectedLaunch);
    });
};

export default LaunchRoutes;
