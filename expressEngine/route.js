// import packages
import express from 'express';

// import routes
import UserRoute from './user/route';
import OrderRoute from './order/route';
import ProductRoute from './product/route';

import { Parser } from './user/parser';
import checkAuth from './check-auth';

const app = express();

app.post('/login', Parser.createToken);
app.use('/user', checkAuth, UserRoute);
app.use('/order', checkAuth, OrderRoute);
app.use('/products', checkAuth, ProductRoute);
export default app;
