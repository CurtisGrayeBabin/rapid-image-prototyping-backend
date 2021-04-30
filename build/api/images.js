"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var imagesRoute = express.Router();
imagesRoute.get('/images', function (req, res, next) {
    res.send('hey, you made it to images');
});
exports.default = imagesRoute;
