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

router.delete('/:id',
  parser(ProductController, 'delete'));
router.post('/', parser(ProductController, 'create'));
router.put('/', parser(ProductController, 'update'));
router.get('/', parser(ProductController, 'get'));

export default router;
