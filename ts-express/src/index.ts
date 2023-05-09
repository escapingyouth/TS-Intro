import express from 'express';
import { json } from 'body-parser';
import router from './routes/todos.js';
import { NextFunction, Request, Response } from 'express';

const app = express();

app.use(json);
app.use('/todos', router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
