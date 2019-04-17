// import packages
import express from 'express';
import bodyParser from 'body-parser';
import SwaggerUi from 'swagger-ui-express';

// import db methods
import db from './db/db';

// import routes
import Route from './route';

// import docs
import swaggerDocument from './doc/swagger.json';
import seed from './db/seedData';

// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/health-check', (req, res, next) => {
  res.status(200).json({
    status: 'ok',
    message: 'Health is good',
  })
});

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));

app.use('/api', Route);

const PORT = 5000;

db.open().then(async () => {
  try {
    console.log('Db connected successfully');
    seed()
    await app.listen(PORT);
    console.log(`App running on port ${PORT}`);
  } catch (err) {
    console.warn(err);
  }
}).catch((err) => {
  console.warn(err);
});
