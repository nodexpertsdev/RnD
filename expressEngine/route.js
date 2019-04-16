// import packages
import express from 'express';

// import routes
import UserRoute from './user/route';
import OrderRoute from './order/route';
import ProductRoute from './product/route';
import CustomerRoute from './customer/route';

const app = express();

app.use('/', (req, res, next) => { // to be used to authenticate request
  const { headers } = req;
  if (headers.authkey !== 'successive') {
    return res.status(403).json({
      error: true,
      message: 'Forbidden',
    });
  }
  next();
});
app.use('/customer', CustomerRoute)
app.use('/user', UserRoute);
app.use('/order', OrderRoute);
app.use('/products', ProductRoute);
export default app;
