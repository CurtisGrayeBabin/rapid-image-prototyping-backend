import * as express from 'express';
import imageHandler from '../utilities/imageProcessHandler';

const imagesRoute = express.Router();

// middleware that sends the user an image in the browswer
const imgPro = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	// typecasting saves lives
	const filename = (req.query.filename as unknown) as string;
	const width = (req.query.width as unknown) as number;
	const height = (req.query.height as unknown) as number;

	if (filename && width && height) {
		// image processing result
		const choice = imageHandler(filename, width, height);

		// result possibilities
		if (choice === -1) {
			res.send('Error: image not created :(').status(404);
			next();
		} else {
			// const path = `./assets/thumb/${filename}_thumb.jpg`;
			const path = `../assets/full/${filename}.jpg`;

			return res.sendFile(`${filename}.jpg`, { root: '../assets/full' }, (err) => {
				if (err) {
					console.log('Error: Invalid image filename given.');
					next();
				} else {
					console.log('File successfully sent to user!');
				}
			});
		}
	} else {
		next();
	}
};

// incorrect query string format route
imagesRoute.get(
	'/images',
	imgPro,
	(req: express.Request, res: express.Response, next: express.NextFunction) => {
		// user gets here by entering invalid parameters
		res.send('Try entering a query string in the proper format of [filename][width][height]!');
	}
);

export default imagesRoute;
