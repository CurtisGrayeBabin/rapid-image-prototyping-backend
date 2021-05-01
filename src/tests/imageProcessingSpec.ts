import * as supertest from 'supertest';
import * as fs from 'fs';
import app from '../index';

const request = supertest(app);
const finalPath = './assets/thumb/test_thumb.jpg';

const deleteResizedTestImage = (): void => {
	if (fs.existsSync(finalPath)) {
		// delete test_thumb.jpg from ./assets/thumb folder to ensure it can be re-generated
		fs.unlinkSync(finalPath);
	}
};

describe('Test image response', () => {
	// delete the test_thumb.jpg from ./assets/thumb
	beforeAll((): void => {
		deleteResizedTestImage();
	});

	it('ensures test.jpg can be successfully resized and stored into ./assets/thumb', () => {
		// send request to generate resized test image from ./assets/full
		return request
			.get('/api/images?filename=test&width=200&height=200')
			.then((result) => {
				// ensure image was generated and stored in correct directory (./assets/thumb)
				expect(fs.existsSync(finalPath)).toBeTruthy();
			});
	});

	afterAll((): void => {
		deleteResizedTestImage();
	});
});
