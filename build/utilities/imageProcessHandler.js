"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var imageHandler = function (filename, width, height) {
    // check if image has been generated before
    var cacheCheckPath = "../assets/thumb/" + filename + "_thumb.jpg";
    try {
        if (fs.existsSync(cacheCheckPath)) {
            // return image in cache
            return 0;
        }
    }
    catch (err) {
        console.log(err);
        return -1;
    }
    // need to know where the requested image is from
    var path = './assets/thumb';
    // create image at this path
    /*
    sharp(path).resize(Number(width), Number(height)).toFile(`${filename}_thumb.jpg`,
        function(err) {
            console.log(`Sharp failed: ${err}`);
            return -1;
        }
    );
    */
    // will need to work on this 
    // success in resizing image
    return 1;
};
exports.default = imageHandler;
