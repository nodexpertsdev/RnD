/* eslint-disable no-console */
// import packages
import express from 'express';
import bodyParser from 'body-parser';
import SwaggerUi from 'swagger-ui-express';
import { config } from 'dotenv';

// import db methods
import db from './db/db';

// import routes
import Route from './route';

// import docs
import swaggerDocument from './doc/swagger.json';
import seed from './db/seedData';
import routeHelper from './lib/routeHelper';

// Set up the express app
const app = express();
config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routeHelper.liveRoute(), routeHelper.liveRequest);

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));

app.use('/api', Route);

app.use(routeHelper.notFound);

const { PORT } = process.env;
const port = PORT || 5000;

db.open().then(async () => {
  try {
    console.log('Db connected successfully');
    seed();
    await app.listen(port);
    console.log(`App running on port ${port}`);
  } catch (err) {
    console.warn(err);
  }
}).catch((err) => {
  console.warn(err);
});
