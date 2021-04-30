import * as supertest from 'supertest';
import app from '../index';

const request = supertest(app);

// endpoint tests are always asynchronous

describe('Test endpoint responses', () => {
	// success
	it('gets the /api endpoint with a 200 response', async () => {
		const response = await request.get('/api');
		expect(response.status).toBe(200);
	});
	// error
	it('does not get the /api endpoint with a 404 response', async () => {
		const response = await request.get('/zzyzzyzyz');
		expect(response.status).toBe(404);
	});
	// success
	it('does get the /api/images endpoint with a 200 response', async () => {
		const response = await request.get('/api/images');
		expect(response.status).toBe(200);
	});
});
