const request = require('supertest');
const createUserApp = require('./createUSer.js'); 

describe('given a username, email, password', () => {
    beforeEach(() => {
        // Clear the registeredUsers array before each test
        createUserApp.registeredUsers = [];
    });
    test('should respond with 200 status code and a success message', async () => {
        const response = await request(createUserApp)
            .post('/api/v1/users')
            .send({
                name: 'user',
                email: 'user@gmail.com',
                password: 'user123',
            });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User registered with success');

    });
 
    test('should handle an existing user', async () => {
        // Assuming 'user@gmail.com' is already registered
        const response = await request(createUserApp)
            .post('/api/v1/users')
            .send({
                name: 'user',
                email: 'user@gmail.com',
                password: 'user123',
            });

        console.log(response.body);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User already registered');
    });
  
});

