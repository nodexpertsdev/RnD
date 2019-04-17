// importing packages
import express from 'express';

// import controller
import UserController from './controller';

// import parser
import parser from '../lib/parser';

const router = express.Router();

router.post('/', parser(UserController, 'create'));
router.get('/', parser(UserController, 'get'));
export default router;
