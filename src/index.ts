import * as express from 'express';
import apiRoute from './api/api';
import imagesRoute from './api/images';

// server
const app = express();
const port: number = 3000;

// index handles GET / directly
app.get(
	'/',
	(req: express.Request, res: express.Response, next: express.NextFunction) => {
		res.send('Image server online... enter /api for details');
		next();
	}
);

// route handling for image processing
app.use('/', apiRoute);
// where the magic happens => /api/images?...
app.use('/api/', imagesRoute);

app.listen(port, (): void => {
	console.log(`Listening in on port ${port}`, '\n');
});

export default app;
