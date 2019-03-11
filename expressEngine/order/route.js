// importing packages
import {
  Router,
} from 'express';
import {
  OrderParser,
} from './parser';

// import controller
import {
  OrderController,
} from './controller/index';

const router = Router();

router.post('/',
  OrderParser.run(OrderController, 'create'));

export default router;
