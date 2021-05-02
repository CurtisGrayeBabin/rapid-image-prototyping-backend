import * as supertest from 'supertest';
import * as fs from 'fs';
import app from '../index';

const request = supertest(app);
// set these to the query parameters the test will look for to resize
const [testFilename, testWidth, testHeight] = ['test', 200, 200];
const testPath = `./assets/thumb/${testFilename}_${testWidth}_${testHeight}_thumb.jpg`;

const deleteResizedTestImage = (): void => {
	if (fs.existsSync(testPath)) {
		// delete test_thumb.jpg from ./assets/thumb folder to ensure it can be re-generated
		fs.unlinkSync(testPath);
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
				expect(fs.existsSync(testPath)).toBeTruthy();
			});
	});

	afterAll((): void => {
		deleteResizedTestImage();
	});
});
