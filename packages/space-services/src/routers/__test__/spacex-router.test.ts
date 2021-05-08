import { randomBytes } from 'crypto';
import request from 'supertest';
import { App } from '../../app';

const allMissions: any = [];

it('Scenario: Create new mission', async () => {
  const missionId = randomBytes(4).toString('hex');
  const missionName = 'Test Launch Mission';
  allMissions.push({ missionId, missionName });
  return request(App)
    .post('/space-launches')
    .send({ missionId, missionName })
    .expect(201);
});

it('Scenario: Get all missions', async () => {
  return request(App).get('/space-launches').send(allMissions).expect(200);
});

it('Scenario: Get mission by id', async () => {
  const id = allMissions[0].missionId;
  return request(App)
    .get(`/space-launches/:${id}/launch`)
    .send(allMissions[id])
    .expect(200);
});
