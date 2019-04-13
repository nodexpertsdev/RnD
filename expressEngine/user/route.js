// importing packages
import express from 'express';

// import controller
import { UserParser } from './parser';

const router = express.Router();

router.get('/', UserParser.read);
router.post('/', UserParser.create);

export default router;
