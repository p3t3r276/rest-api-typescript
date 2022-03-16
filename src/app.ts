import express from  'express'
import config from 'config'

import logger from './logger'
import connect from './db/connect';
import routes from './routes';

const PORT = config.get("port") as number;
const HOST = config.get("host") as string;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, HOST, () => {
    logger.info(`Server listening at http://${HOST}:${PORT}`);

    connect();

    routes(app)
})