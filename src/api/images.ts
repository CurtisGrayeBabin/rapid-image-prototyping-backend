import * as express from 'express';
import * as fs from 'fs';
import * as sharp from 'sharp';

const imagesRoute = express.Router();

// middleware that either processes an image or not
const imgPro = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	// typecasting saves lives
	const filename = (req.query.filename as unknown) as string;
	const width = (req.query.width as unknown) as number;
	const height = (req.query.height as unknown) as number;

	// have necessary query arguments
	if (filename && width && height) {
		// path to full size image
		const path = `./assets/full/${filename}.jpg`;
		// resize destination path
		const checkPath = `./assets/thumb/${filename}_thumb.jpg`;

		// check if image in cache
		if (fs.existsSync(checkPath)) {
			// send cached image
			console.log('Retrieving a cached image...', '\n');
			// move on to send the user their previously cached image
			next();
		} else {
			// resizing of image handled as a promise
			sharp(path)
				.resize(Number(width), Number(height))
				.toFile(`./assets/thumb/${filename}_thumb.jpg`)
				.then((resolve) => {
					// successfully wrote and cached image to ./assets/thumb
					console.log('Successfully resized and cached image!', '\n');
					// send user their newly resized and cached image
					next();
				})
				.catch((reject) => {
					// failed to resize the given image (likely a user error in entering values)
					console.log(
						'Invalid image request - please enter valid query values!',
						'\n'
					);
					res
						.status(404)
						.send(
							'<p>404 Image not found</p>Try entering a query string in the proper format of [filename][width][height]!<p>Example: </p>localhost:3000/api/images?filename=santamonica&width=450&height=450'
						);
				});
		}
	} else {
		// incomplete query string sent to endpoint
		res
			.status(404)
			.send(
				'<p>404 Image not found</p>Try entering a query string in the proper format of [filename][width][height]!<p>Example: </p>localhost:3000/api/images?filename=santamonica&width=450&height=450'
			);
	}
};

// send the user their (newly or previously) cached image
imagesRoute.get(
	'/images',
	imgPro,
	(req: express.Request, res: express.Response, next: express.NextFunction) => {
		// send the user their image
		res.sendFile(
			`${req.query.filename}_thumb.jpg`,
			{ root: './assets/thumb/' },
			(err) => {
				if (err) {
					console.log('Error: could not send image to user...', '\n');
				} else {
					console.log('Image successfully sent to user!', '\n');
				}
			}
		);
	}
);

export default imagesRoute;
