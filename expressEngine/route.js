// import packages
import express from 'express';
import SwaggerUi from 'swagger-ui-express';


// import routes
import UserRoute from './user/route';
import OrderRoute from './order/route';
import ProductRoute from './product/route';
import CustomerRoute from './customer/route';
import authMiddleware from './authMiddleware/authMiddleware';
import loginRoute from './login/route';
import routeHelper from './lib/routeHelper';
import swaggerDocument from './doc/swagger.json';

const app = express();

app.use(routeHelper.liveRoute(), routeHelper.liveRequest);
app.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
app.use('/customer', authMiddleware, CustomerRoute);
app.use('/user', authMiddleware, UserRoute);
app.use('/order', authMiddleware, OrderRoute);
app.use('/products', authMiddleware, ProductRoute);
app.use('/login', loginRoute);
app.use(routeHelper.notFound);
export default app;
