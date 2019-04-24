// importing packages
import {
  Router,
} from 'express';

// import controller
import {
  ProductController,
} from './controller';


// import parser
import parser from '../lib/parser';

const router = Router();

router.post('/',
  parser(ProductController, 'create'));

router.delete('/:id',
  parser(ProductController, 'delete'));

export default router;
