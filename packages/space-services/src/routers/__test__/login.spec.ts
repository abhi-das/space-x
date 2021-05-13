import request from 'supertest';
import { App } from '../../app';

const version = 'v3';

it('simple login', async () => {
  const user = {
    isFeatured: 'true',
    landing_successful: 'true',
    launch_successful: 'true',
    launch_year: '2001',
    mission_name: 'Test Mission',
  };
  const response = await request(App).post(`/${version}/login`).send(user);

  expect(response.status).not.toEqual(401);
});
