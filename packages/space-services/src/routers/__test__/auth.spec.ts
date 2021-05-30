import request from 'supertest';
import { App } from '../../app';
import { appConf } from '../../config';

it('simple login', async () => {
  const user = {
    email: 'test@test.com',
  };
  const response = await request(App)
    .post(`/${appConf.apiVersion}/login`)
    .send(user);

  expect(response.status).not.toEqual(401);
});
