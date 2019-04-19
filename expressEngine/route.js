// import packages
import express from 'express';

// import routes
import UserRoute from './user/route';
import OrderRoute from './order/route';
import ProductRoute from './product/route';
import CustomerRoute from './customer/route';
import authMiddleware from './authMiddleware/authMiddleware';
import loginRoute from './login/route';


const app = express();

app.use('/customer', authMiddleware, CustomerRoute);
app.use('/user', authMiddleware, UserRoute);
app.use('/order', authMiddleware, OrderRoute);
app.use('/products', authMiddleware, ProductRoute);
app.use('/login', loginRoute);
export default app;
