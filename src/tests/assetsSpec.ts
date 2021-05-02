import * as fs from 'fs';

describe('Test assets available', () => {
	it('ensures the assets folder exists', () => {
		const path = './assets';
		expect(fs.existsSync(path)).toBeTruthy();
	});

	it('ensures the assets/full folder exists', () => {
		const path = './assets/full';
		expect(fs.existsSync(path)).toBeTruthy();
	});

	it('ensures the assets/thumb folder exists', () => {
		const path = './assets/thumb';
		expect(fs.existsSync(path)).toBeTruthy();
	});
});
