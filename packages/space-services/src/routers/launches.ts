import { Application, Request, Response } from 'express';
import { DbQuery, MissionItem } from '../common';
import { Mission } from '../models/mission';
import { appConf } from '../config';
import requireAuth from '../middlewares/require-auth';
import verifyToken from '../middlewares/verify-token';

const getAllMission = async (q: DbQuery) => {
  // Get all mission from DB
  let query = {};
  /* eslint-disable camelcase */
  if (q.landing_successful) {
    query = {
      ...query,
      landing_successful: q.landing_successful.toString(),
    };
  }

  if (q.launch_successful) {
    query = {
      ...query,
      launch_successful: q.launch_successful.toString(),
    };
  }

  if (q.launch_year) {
    query = {
      ...query,
      launch_year: q.launch_year.toString(),
    };
  }
  /* eslint-enable camelcase */
  const allMission = await Mission.find(query).limit(Number(q.limit)).exec();
  return allMission;
};

const LaunchRoutes = (app: Application): void => {
  const version = appConf.apiVersion;
  app
    .route(`/${version}/launches`)
    .get(async (req: Request, res: Response) => {
      const query = req.query;
      let missions: Array<MissionItem> = [];
      // Get all missions
      try {
        missions = await getAllMission(query);
        res.status(200).send(missions);
      } catch (error) {
        res.status(400).json({ message: 'No mission found in the DB!' });
      }
    })

    .post(verifyToken, requireAuth, async (req: Request, res: Response) => {
      /* eslint-disable camelcase */
      const launchFromReqBody = {
        details: req.body.details.toString(),
        image: req.body.image.toString(),
        isFeatured: req.body.isFeatured.toString(),
        landing_successful: req.body.landing_successful.toString(),
        launch_successful: req.body.launch_successful.toString(),
        launch_year: req.body.launch_year.toString(),
        mission_id: req.body.mission_id.toString(),
        mission_name: req.body.mission_name.toString(),
      };
      try {
        const newMission = Mission.buildMission(launchFromReqBody);
        await newMission.save();
        res.status(200).json({ message: 'Mission created!' });
      } catch (error) {
        res.status(500).json({ message: 'Error on mission creation!' });
      }
    });

  app
    .route(`/${version}/launches/:id/launch`)
    .get(verifyToken, requireAuth, async (req: Request, res: Response) => {
      try {
        const mission = await Mission.findOne({ mission_id: req.params.id });
        res.status(200).send(mission);
      } catch (error) {
        res
          .status(500)
          .json({ message: 'MissionItem could not found by given id!' });
      }
    });
};

export default LaunchRoutes;
