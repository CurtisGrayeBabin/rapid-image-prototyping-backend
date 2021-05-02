"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var sharp = require("sharp");
var path = require("path");
var imagesRoute = express.Router();
var imgNotFoundString = '<p>404 Image not found</p>Try entering a query string in the proper format of [filename][width][height]!<p>Example: </p>localhost:3000/api/images?filename=santamonica&width=450&height=450';
// found this method to get the path to assets via stackOverflow:
// https://stackoverflow.com/questions/30845416/how-to-go-back-1-folder-level-with-dirname
var assetsPath = path.join(__dirname, '../../assets');
var thumbPath = assetsPath + '/thumb';
// middleware that either processes an image or not
var imgPro = function (req, res, next) {
    // typecasting still saves lives
    var filename = req.query.filename;
    var width = req.query.width;
    var height = req.query.height;
    // have necessary query arguments
    if (filename && width && height) {
        // path to full size image
        var _path = assetsPath + '/full/' + (filename + ".jpg");
        // resize destination path
        var _checkPath = assetsPath + '/thumb/' + (filename + "_" + width + "_" + height + "_thumb.jpg");
        // check if image in cache
        if (fs.existsSync(_checkPath)) {
            // send cached image
            console.log('Retrieving a cached image...', '\n');
            // move on to send the user their previously cached image
            next();
        }
        else {
            try {
                // resizing of image handled as a promise
                sharp(_path)
                    .resize(Number(width), Number(height))
                    .toFile(_checkPath)
                    .then(function (resolve) {
                    // successfully wrote and cached image to ./assets/thumb
                    console.log('Successfully resized and cached a new image!', '\n');
                    // send user their newly resized and cached image
                    next();
                })
                    .catch(function (reject) {
                    // failed to resize the given image (likely a user error in entering values)
                    console.log('Invalid image request - please enter valid query values!', '\n');
                    res.status(404).send(imgNotFoundString);
                });
            }
            catch (err) {
                console.log('Did not resize: width and/or height arguments must be valid numbers!', '\n');
                res.status(404).send(imgNotFoundString);
            }
        }
    }
    else {
        // incomplete query string sent to endpoint
        console.log('Incorrect query format string sent', '\n');
        res.status(404).send(imgNotFoundString);
    }
};
// send the user their (newly or previously) cached image
imagesRoute.get('/images', imgPro, function (req, res) {
    // send the user their image
    res.sendFile(req.query.filename + "_" + req.query.width + "_" + req.query.height + "_thumb.jpg", { root: thumbPath }, function (err) {
        if (err) {
            console.log('Error: could not send image to user...', '\n');
        }
        else {
            console.log('Image successfully sent to user!', '\n');
        }
    });
});
exports.default = imagesRoute;
