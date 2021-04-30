"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var images_1 = require("./api/images");
var app = express();
var port = 3000;
var logger = function (req, res, next) {
    next();
};
app.use(logger);
app.get('/api', logger, function (req, res, next) {
    res.send('server online');
    next();
});
app.use('/api/', images_1.default);
app.listen(port, function () {
    console.log("Listening in on port " + port);
});
exports.default = app;
