"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var apiRoute = express.Router();
// this route serves user instructions before the user enters /images
apiRoute.get('/api', function (req, res, next) {
    res.send('Inside /api => Get resized img from /images route with 3 required query string parameters: [filename][width][height]<p>Example: </p>localhost:3000/api/images?filename=santamonica&width=450&height=450');
});
exports.default = apiRoute;
