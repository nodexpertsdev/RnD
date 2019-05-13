// importing packages
import { Router } from 'express';
// import controller
import { CustomerController } from './controller';

import parser from '../lib/parser';

const router = Router();

router.post('/', parser(CustomerController, 'create'));
router.delete('/:id', parser(CustomerController, 'delete'));
router.put('/', parser(CustomerController, 'put'));

export default router;
