"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var api_1 = require("./api/api");
var images_1 = require("./api/images");
// server
var app = express();
var port = 3000;
// index handles GET / directly
app.get('/', function (req, res, next) {
    res.send('Image server online... enter /api for details');
    next();
});
// where the magic happens => /api/images?...
app.use('/', api_1.default);
app.use('/api/', images_1.default);
app.listen(port, function () {
    console.log("Listening in on port " + port, '\n');
});
exports.default = app;
