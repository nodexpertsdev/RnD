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

// Set up the express app
const app = express();
config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/health-check', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Health is good',
  });
});

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));

app.use('/api', Route);

db.open().then(async () => {
  try {
    console.log('Db connected successfully');

    await app.listen(process.env.PORT || 5000);
    console.log(`App running on port ${process.env.PORT}`);
  } catch (err) {
    console.warn(err);
  }
}).catch((err) => {
  console.warn(err);
});
