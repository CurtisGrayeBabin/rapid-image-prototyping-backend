import * as express from 'express';
const imagesRoute = express.Router();

imagesRoute.get(
	'/images',
	(req: express.Request, res: express.Response, next: express.NextFunction) => {
		res.send('hey, you made it to images');
	}
);

export default imagesRoute;
