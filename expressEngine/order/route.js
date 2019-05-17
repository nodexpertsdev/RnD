// importing packages
import {
  Router,
} from 'express';

// import parser
import parser from '../lib/parser';

// import controller
import {
  OrderController,
} from './controller/index';

const router = Router();

router.post('/', parser(OrderController, 'create'));
router.put('/', parser(OrderController, 'update'));
router.get('/', parser(OrderController, 'get'));

export default router;
