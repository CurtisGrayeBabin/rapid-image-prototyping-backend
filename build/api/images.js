"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var imageProcessHandler_1 = require("../utilities/imageProcessHandler");
var imagesRoute = express.Router();
// middleware that sends the user an image in the browswer
var imgPro = function (req, res, next) {
    // typecasting saves lives
    var filename = req.query.filename;
    var width = req.query.width;
    var height = req.query.height;
    if (filename && width && height) {
        // image processing result
        var choice = imageProcessHandler_1.default(filename, width, height);
        // result possibilities
        if (choice === -1) {
            res.send('Error: image not created :(').status(404);
            next();
        }
        else {
            // const path = `./assets/thumb/${filename}_thumb.jpg`;
            var path = "../assets/full/" + filename + ".jpg";
            return res.sendFile(filename + ".jpg", { root: '../assets/full' }, function (err) {
                if (err) {
                    console.log('Error: Invalid image filename given.');
                    next();
                }
                else {
                    console.log('File successfully sent to user!');
                }
            });
        }
    }
    else {
        next();
    }
};
// incorrect query string format route
imagesRoute.get('/images', imgPro, function (req, res, next) {
    // user gets here by entering invalid parameters
    res.send('Try entering a query string in the proper format of [filename][width][height]!');
});
exports.default = imagesRoute;
