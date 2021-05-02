"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var supertest = require("supertest");
var fs = require("fs");
var index_1 = require("../index");
var request = supertest(index_1.default);
// endpoint tests are always asynchronous
describe('Test endpoint responses', function () {
    // 200
    it('gets the / endpoint with a 200 response', function () {
        return request.get('/').then(function (result) {
            expect(result.status).toBe(200);
        });
    });
    // 200
    it('gets the /api endpoint with a 200 response', function () {
        return request.get('/api').then(function (result) {
            expect(result.status).toBe(200);
        });
    });
    // route does not exist
    it('does not get the /zzyzzyzyz endpoint with a 404 response', function () {
        return request.get('/zzyzzyzyz').then(function (result) {
            expect(result.status).toBe(404);
        });
    });
    // 200
    it('ensures server sends 200 response with proper query string', function () {
        return request
            .get('/api/images?filename=santamonica&width=500&height=500')
            .then(function (result) {
            expect(result.status).toBe(200);
            try {
                fs.unlinkSync('./assets/thumb/santamonica_500_500_thumb.jpg');
            }
            catch (_a) {
                console.log('error in deleting test image');
            }
        });
    });
    // 404
    it('ensures server sends 404 response with unknown filename', function () {
        return request
            .get('/api/images?filename=aasantamonica&width=500&height=500')
            .then(function (result) {
            expect(result.status).toBe(404);
        });
    });
    // 404
    it('ensures server sends 404 response with missing query arguments width and height', function () {
        return request.get('/api/images?filename=aasantamonica').then(function (result) {
            expect(result.status).toBe(404);
        });
    });
    /*
    afterAll((): void => {
        fs.unlinkSync('santamonica_500_500_thumb.jpg');
    });
    */
});
