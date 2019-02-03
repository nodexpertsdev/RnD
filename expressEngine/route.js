// import packages
import express from 'express';

// import routes
import UserRoute from './user/route';

const app = express();

app.use('/', (req, res, next) => { // to be used to authenticate request
  const { headers } = req;
  if (headers.authkey !== "successive") {
    return res.status(403).json({
      error: true,
      message: "Forbidden",
    });
  }
  next();
})

app.use('/user', UserRoute);

export default app;
