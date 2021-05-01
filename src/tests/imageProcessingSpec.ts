import * as supertest from 'supertest';
import * as fs from 'fs';
import app from '../index';

const request = supertest(app);

describe('Test image responses', () => {
    // test cached image
    // test generating new image

	xit('ensures an image is stored in cache', async () => {
		// const response = await request.get('/api/images?filename=santamonica');
		// expect(response.status).toBe(200);
	});

	xit('ensures an image is resized', async () => {
		// const response = await request.get('/api');
		// expect(response.status).toBe(200);
	});

	xit('ensures invalid queries are handled correctly', async () => {
		// const response = await request.get('/api');
		// expect(response.status).toBe(200);
	});
});
