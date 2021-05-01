import * as supertest from 'supertest';
import app from '../index';

const request = supertest(app);

// endpoint tests are always asynchronous

describe('Test endpoint responses', () => {
	// 200
	it('gets the / endpoint with a 200 response', async () => {
		const response = await request.get('/');
		expect(response.status).toBe(200);
	});
	// 200
	it('gets the /api endpoint with a 200 response', async () => {
		const response = await request.get('/api');
		expect(response.status).toBe(200);
	});
	// route does not exist
	it('does not get the endpoint with a 404 response', async () => {
		const response = await request.get('/zzyzzyzyz');
		expect(response.status).toBe(404);
	});
	// 200
	it('does get the /api/images endpoint with a 200 response', async () => {
		const response = await request.get('/api/images');
		expect(response.status).toBe(200);
	});
});
