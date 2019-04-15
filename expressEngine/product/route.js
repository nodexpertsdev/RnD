// importing packages
import {
  Router,
} from 'express';

// import controller
import {
  ProductController,
} from './controller/index';


// import parser
import parser from '../lib/parser';

const router = Router();

router
  .post('/',
    parser(ProductController, 'create'));

export default router;
