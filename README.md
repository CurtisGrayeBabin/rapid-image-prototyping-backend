Hello! This project takes JPG images and resizes them using the express and sharp packages. All resized images are also cached. There are a few starter JPG images already included with the installation of this project.

This project requires Node.js to be installed before it can run.

To run image processing and endpoint tests:
1. npm run test

To manually test server:
1. npm run nodemon

To build src files to ./build:
1. npm run build

To lint:
1. npm run lint

The server can be run with either option:
1. npm run start 
2. node ./build/.

Enter "localhost:3000/" to ensure the server is running.

Enter "localhost:3000/api" for instructions to get resized images directly from the ./assets/full folder. You can also add your own images to ./assets/full so long as they are in JPG format only!

Enter a query string after "localhost:3000/api/images" such as:

localhost:3000/api/images?filename=santamonica&width=450&height=450

This will send to the user's browser a resized image of santamonica.jpg with new dimensions (450 x 450 pixels).
This resized version of the image will also be cached inside the ./assets/thumb folder and named in the format of: "{givenFilename}_{givenWidth}_{givenHeight}_thumb.jpg"