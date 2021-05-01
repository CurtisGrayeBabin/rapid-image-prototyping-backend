import * as express from 'express';
const apiRoute = express.Router();

// this route serves user instructions before the user enters /images
apiRoute.get(
	'/api',
	(req: express.Request, res: express.Response, next: express.NextFunction) => {
		res.send(
			'Inside /api => Get resized img from /images route with 3 required query string parameters: [filename][width][height]<p>Example: </p>localhost:3000/api/images?filename=santamonica&width=450&height=450'
		);
	}
);

export default apiRoute;
