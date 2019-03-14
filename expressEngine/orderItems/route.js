// importing packages
import express from "express";

// import controller
import { Parser } from './parser';

const router = express();

router.post('/', Parser.create);

export default router;
