/* eslint-disable no-console */
// import packages
import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import { logger, getLocation } from './logger';

// import db methods
import db from './db/db';

// import routes
import Route from './route';

import seed from './db/seedData';

// Blocking console.log()
console.log = function () {};

// Set up the express app
const app = express();
config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', Route);

const { PORT } = process.env;
const port = PORT || 5000;

db.open().then(async () => {
  try {
    console.log('Db connected successfully');
    logger.info('Db connected successfully', getLocation());
    logger.warn('This is a warning message', getLocation());
    logger.debug('This is a debug message', getLocation());
    logger.error('This is an error message', getLocation());
    seed();
    await app.listen(port);
    console.log(`App running on port ${port}`);
    logger.info(`App running on port ${port}`, getLocation());
  } catch (err) {
    logger.warn(err, getLocation());
  }
}).catch((err) => {
  console.warn(err);
  logger.warn(err, getLocation());
});
