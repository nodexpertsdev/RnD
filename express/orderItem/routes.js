// importing packages
import {
  Router,
} from 'express';

// import parser
import parser from '../lib/parser';

// import controller
import {
  orderItemController,
} from './controller';

const router = Router();

router.post('/', parser(orderItemController, 'create'));

export default router;
