// importing packages
import express from 'express';

// import controller
import UserController from './controller';

// import libraries
import parser from '../lib/parser';

const router = express.Router();

router.post('/', parser(UserController, 'create'));

export default router;
