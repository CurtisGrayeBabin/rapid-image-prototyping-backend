"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
describe('Test assets available', function () {
    it('ensures the assets folder exists', function () {
        var path = '../assets';
        expect(fs.existsSync(path)).toBeTruthy();
    });
    it('ensures the assets/full folder exists', function () {
        var path = '../assets/full';
        expect(fs.existsSync(path)).toBeTruthy();
    });
    it('ensures the assets/thumb folder exists', function () {
        var path = '../assets/thumb';
        expect(fs.existsSync(path)).toBeTruthy();
    });
    it('ensures the assets/thumb/hehe folder does NOT exist', function () {
        var path = '../assets/thumb/hehe';
        expect(fs.existsSync(path)).toBeFalsy();
    });
});
