/* eslint-disable no-console */
// import packages
import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import { logger } from './logger';

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
    logger().info.info('Db connected successfully');
    logger().warn.warn('This is a warning message');
    logger().debug.debug('This is a debug message');
    logger().error.error('This is an error message');
    seed();
    await app.listen(port);
    console.log(`App running on port ${port}`);
    logger().info.info(`App running on port ${port}`);
  } catch (err) {
    logger().warn.warn(err);
  }
}).catch((err) => {
  console.warn(err);
  logger().warn.warn(err);
});
