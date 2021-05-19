import { App } from '../../app';
import { randomBytes } from 'crypto';
import request from 'supertest';
import { appConf } from '../../config';

const allMissions: any = [];
const version = appConf.apiVersion;
// Login and create JWT Token

it('Scenario: Create new mission without JWT Token', async () => {
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
    .expect(401);
});

it('Scenario: Create new mission with JWT Token', async () => {
  const launchFromReqBody = {
    missionId: randomBytes(4).toString('hex'),
    missionName: 'm 3',
    launch_success: 'false',
    land_success: 'false',
    launch_year: '2001',
  };

  allMissions.push(launchFromReqBody);
  // Login and create JWT Token
  const token = await global.login();
  const response = await request(App)
    .post(`/${version}/launches`)
    .set('Aurthorization', token)
    .send(launchFromReqBody);

  expect(response.status).toBe(200);
});

it('Scenario: Get all missions with JWT Token', async () => {
  // Login and create JWT Token
  const token = await global.login();
  const response = await request(App)
    .get(`/${version}/launches`)
    .set('Aurthorization', token)
    .send(allMissions);

  expect(response.status).toBe(200);
});

it('Scenario: Get mission by id with JWT Token', async () => {
  const id = allMissions[0].missionId;
  // Login and create JWT Token
  const token = await global.login();
  const response = await request(App)
    .get(`/${version}/launches/:id/launch`)
    .set('Aurthorization', token)
    .send(allMissions[id]);

  expect(response.status).toBe(200);
});

// Scenario: Get launch only launch_success = true
// Scenario: Get launch only launch_success = false
// Scenario: Get launch only land_success = true
// Scenario: Get launch only land_success = false
