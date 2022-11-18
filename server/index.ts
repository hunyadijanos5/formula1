import * as path from 'path';
import express, {Express, Request, Response} from 'express';
import api from "./routes/api"

const app: Express = express();
const port = process.env.PORT || '9997';


const createApplication = (app: Express) => {
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

    app.use('/api', api);

    app.use(express.static(path.join(__dirname, '../build')));
    app.get('/*', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '../build', 'index.html')));

    app.listen(port, () => console.log(`Express server listening at http://localhost:${port}`));
};

createApplication(app);
