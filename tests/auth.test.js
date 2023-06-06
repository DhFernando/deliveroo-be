const request = require('supertest');

const app = require('../src/server');

describe('Authentication endpoints', () => {
    it('should allow the user to sign up for an account', async () => {
        const response = await request(app)
            .post('/api/v1/auth/signup')
            .send({
                name: 'supertest user 1',
                email: 'supertestuser1@email.com',
                password: "Test@123"
            });
        expect(response.statusCode).toEqual(201);
    });

    it('should allow the user to login and get a JWT token', async () => {
        const response = await request(app)
            .post('/api/v1/auth/login')
            .send({
                email: 'supertestuser1@email.com',
                password: 'Test@123'
            });
        expect(response.statusCode).toEqual(200);
        expect(response._body).toHaveProperty('data.token');
    });

    it('should allow the user to access protected routes with a token', async () => {
        const response = await request(app)
            .post('/api/v1/auth/login')
            .send({
                email: 'admin@localhost.com',
                password: 'admin'
            });
        expect(response.statusCode).toEqual(200);
        expect(response._body).toHaveProperty('data.token');

        const token = response._body.data.token;
        
        const secretEndpointResponse = await request(app)
            .get('/api/v1/auth/secret')
            .set('Authorization', `Bearer ${token}`);
        expect(secretEndpointResponse.statusCode).toEqual(200);
        expect(secretEndpointResponse._body).toHaveProperty('message', 'secret message');
    });

    it('should not allow the user to access protected routes without a token', async () => {
        const response = await request(app)
            .get('/api/v1/auth/secret');
        expect(response.statusCode).toEqual(401);
    });
});