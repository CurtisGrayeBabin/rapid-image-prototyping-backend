Hello, this project takes JPG images and resizes them using the express and sharp packages. All resized images are also cached. There are a few starter JPG images already included with the installation of this project.

This project requires Node.js to be installed before it can run.

To run image processing and endpoint tests:
1. npm run test

To build src files to ./build:
1. npm run build

To lint:
1. npm run lint

The server can be run with either option:
1. npm run start 
2. node ./build/.

Enter "localhost:3000/" to ensure the server is running.

Enter "localhost:3000/api" for instructions to get resized images directly from the ./assets/full folder. You can also add your own images to ./assets/full so long as they are JPG format only!

Enter a query string after "localhost:3000/api/images" such as:
localhost:3000/api/images?filename=santamonica&width=450&height=450

This will send to the user's browser a resized image of the santamonica.jpg image with new dimensions of 450 x 450 pixels.
This resized version of the image will also be cached inside the ./assets/thumb folder with a "_thumb.jpp" extension added.

Images can only be resized once; currently. Subsequent requests to resize an already processed image will yield the same image from the ./assets/thumb cache. If the user would like to resize an image again with new dimensions they can do so by deleting the thumb version of the image from the ./assets/thumb folder, and the user can then restart the process of querying the full image from ./assets/full to generate and cache the newly desired, resized image.
