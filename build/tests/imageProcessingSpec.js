"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var supertest = require("supertest");
var fs = require("fs");
var index_1 = require("../index");
var request = supertest(index_1.default);
var finalPath = './assets/thumb/test_thumb.jpg';
var deleteResizedTestImage = function () {
    if (fs.existsSync(finalPath)) {
        // delete test_thumb.jpg from ./assets/thumb folder to ensure it can be re-generated
        fs.unlinkSync(finalPath);
    }
};
describe('Test image response', function () {
    // delete the test_thumb.jpg from ./assets/thumb
    beforeAll(function () {
        deleteResizedTestImage();
    });
    it('ensures test.jpg can be successfully resized and stored into ./assets/thumb', function () {
        // send request to generate resized test image from ./assets/full
        return request
            .get('/api/images?filename=test&width=200&height=200')
            .then(function (result) {
            // ensure image was generated and stored in correct directory (./assets/thumb)
            expect(fs.existsSync(finalPath)).toBeTruthy();
        });
    });
    afterAll(function () {
        deleteResizedTestImage();
    });
});
