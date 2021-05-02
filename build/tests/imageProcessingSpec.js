"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var supertest = require("supertest");
var fs = require("fs");
var index_1 = require("../index");
var request = supertest(index_1.default);
// set these to the query parameters the test will look for to resize
var _a = ['test', 200, 200], testFilename = _a[0], testWidth = _a[1], testHeight = _a[2];
var testPath = "./assets/thumb/" + testFilename + "_" + testWidth + "_" + testHeight + "_thumb.jpg";
var deleteResizedTestImage = function () {
    if (fs.existsSync(testPath)) {
        // delete test_thumb.jpg from ./assets/thumb folder to ensure it can be re-generated
        fs.unlinkSync(testPath);
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
            expect(fs.existsSync(testPath)).toBeTruthy();
        });
    });
    afterAll(function () {
        deleteResizedTestImage();
    });
});
