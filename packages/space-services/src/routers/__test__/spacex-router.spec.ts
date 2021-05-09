import { App } from '../../app';
import { randomBytes } from 'crypto';
import request from 'supertest';

const allMissions: any = [];
const version = 'v3';

it('Scenario: Create new mission', async () => {
  const launchFromReqBody = {
    missionId: randomBytes(4).toString('hex'),
    missionName: 'm 3',
    launch_success: 'false',
    land_success: 'false',
    launch_year: '2001',
  };
  allMissions.push(launchFromReqBody);
  return request(App)
    .post(`/${version}/launches`)
    .send(launchFromReqBody)
    .expect(201);
});

it('Scenario: Get all missions', async () => {
  return request(App).get(`/${version}/launches`).send(allMissions).expect(200);
});

it('Scenario: Get mission by id', async () => {
  const id = allMissions[0].missionId;
  return request(App)
    .get(`/${version}/launches/:id/launch`)
    .send(allMissions[id])
    .expect(200);
});

// Scenario: Get launch only launch_success = true
// Scenario: Get launch only launch_success = false
// Scenario: Get launch only land_success = true
// Scenario: Get launch only land_success = false
