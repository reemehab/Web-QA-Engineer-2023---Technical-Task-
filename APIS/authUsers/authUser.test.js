const request = require('supertest');
const { app } = require('./authApp'); // Make sure to destructure app from the import

describe('Authentication API', () => {
  test('should handle invalid email or password', async () => {
    const response = await request(app) // Use app directly
      .post('/api/v1/auth')
      .send({
        email: 'invalid@gmail.com',
        password: 'invalidpassword',
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Incorrect email or password');
  });

  test('should authenticate a user and return a mocked token', async () => {
    const response = await request(app) // Use app directly
      .post('/api/v1/auth')
      .send({
        email: 'user@gmail.com',
        password: 'user123',
      });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
