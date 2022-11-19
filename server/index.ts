import * as path from 'path';
import * as express from 'express';
import api from "./routes/api"

const app: express.Express = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || '80';


const createApplication = (app: express.Express) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH');
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    app.use('/api', api);

    app.use(express.static(path.join(__dirname, '../')));
    app.get('/*', (req: express.Request, res: express.Response) => res.sendFile(path.join(__dirname, '../', 'index.html')));

    app.listen(port, () => console.log(`Express server listening at http://localhost:${port}`));
};

createApplication(app);

