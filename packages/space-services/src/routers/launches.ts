import { Application, Request, Response } from 'express';
import { DbQuery, Mission } from '../common';
import { appConf, dbConf } from '../config';
import { getDb } from '../db-connect';
import verifyToken from '../middlewares/verify-token';

const createMission = async (mission: Mission) => {
  // Save mission into DB
  const db = getDb();
  const newMission = await db
    .collection(`${dbConf.missionCollection}`)
    .insertOne(mission);
  return newMission;
};

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
  const db = getDb();
  const allMission = await db
    .collection(`${dbConf.missionCollection}`)
    .find(query)
    .limit(Number(q.limit))
    .toArray();
  return allMission;
};

const getMissionByMissionId = async (missionId: string) => {
  // Get mission by Id from DB
  /* eslint-disable camelcase */
  const q = { mission_id: missionId };
  /* eslint-enable camelcase */
  const db = getDb();
  const mission = await db.collection(`${dbConf.missionCollection}`).findOne(q);
  return mission;
};

const LaunchRoutes = (app: Application): void => {
  const version = appConf.apiVersion;
  app
    .route(`/${version}/launches`)
    .get(verifyToken, async (req: Request, res: Response) => {
      const query = req.query;
      let missions: Array<Mission> = [];
      // Get all missions
      try {
        missions = await getAllMission(query);
      } catch (error) {
        res.status(400).json({ message: 'No mission found in the DB!' });
      }
      res.status(200).send(missions);
    })
    .post(verifyToken, async (req: Request, res: Response) => {
      const launchFromReqBody: Mission = {
        ...req.body,
      };
      try {
        const newMission = await createMission(launchFromReqBody);
        res.status(201).send(newMission.ops);
      } catch (error) {
        res.status(500).json({ message: 'Error on mission creation!' });
      }
    });

  app
    .route(`/${version}/launches/:id/launch`)
    .get(verifyToken, async (req: Request, res: Response) => {
      try {
        const mission = await getMissionByMissionId(req.params.id);
        res.status(200).send(mission);
      } catch (error) {
        res
          .status(500)
          .json({ message: 'Mission could not found by given id!' });
      }
    });
};

export default LaunchRoutes;
