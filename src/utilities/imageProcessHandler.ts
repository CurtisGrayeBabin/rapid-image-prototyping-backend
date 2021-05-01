import * as fs from 'fs';
import * as sharp from 'sharp';

const imageHandler = (filename: string, width: number, height: number): number => {
    // check if image has been generated before
    const cacheCheckPath = `../assets/thumb/${filename}_thumb.jpg`;
    try {
        if (fs.existsSync(cacheCheckPath)) {
            // return image in cache
            return 0;
        }
    } catch (err) {
        console.log(err);
        return -1;
    }

    // need to know where the requested image is from
    const path = './assets/thumb';
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

export default imageHandler;
