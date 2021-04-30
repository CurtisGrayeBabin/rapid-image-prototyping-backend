import * as express from 'express';
import imagesRoute from './api/images';

const app = express();

const port = 3000;

const logger = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	next();
};

app.use(logger);

app.get(
	'/api',
	logger,
	(req: express.Request, res: express.Response, next: express.NextFunction) => {
		res.send('server online');
		next();
	}
);

app.use('/api/', imagesRoute);

app.listen(port, (): void => {
	console.log(`Listening in on port ${port}`);
});

export default app;
