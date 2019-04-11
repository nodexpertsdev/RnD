// importing packages
import express from 'express';

// import controller
// eslint-disable-next-line import/named
import { Parser } from './parser';

const router = express.Router();

router.post('/', Parser.create);

router.delete('/:id', Parser.delete);

export default router;
