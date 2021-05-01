import * as supertest from 'supertest';
import app from '../index';

const request = supertest(app);

// endpoint tests are always asynchronous

describe('Test endpoint responses', () => {
	// 200
	it('gets the / endpoint with a 200 response', () => {
		return request.get('/').then((result) => {
			expect(result.status).toBe(200);
		});
	});
	// 200
	it('gets the /api endpoint with a 200 response', () => {
		return request.get('/api').then((result) => {
			expect(result.status).toBe(200);
		});
	});
	// route does not exist
	it('does not get the /zzyzzyzyz endpoint with a 404 response', () => {
		return request.get('/zzyzzyzyz').then((result) => {
			expect(result.status).toBe(404);
		});
	});
	// 200
	it('ensures server sends 200 response with proper query string', () => {
		return request
			.get('/api/images?filename=santamonica&width=500&height=500')
			.then((result) => {
				expect(result.status).toBe(200);
			});
	});
	// 404
	it('ensures server sends 404 response with unknown filename', () => {
		return request
			.get('/api/images?filename=aasantamonica&width=500&height=500')
			.then((result) => {
				expect(result.status).toBe(404);
			});
	});
	// 404
	it('ensures server sends 404 response with missing query arguments width and height', () => {
		return request.get('/api/images?filename=aasantamonica').then((result) => {
			expect(result.status).toBe(404);
		});
	});
});
