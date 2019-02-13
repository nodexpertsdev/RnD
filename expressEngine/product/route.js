// importing packages
import {Router} from "express";

// import controller
import { ProductParser } from './parser';

const router = Router();

router
.post('/', ProductParser.create);

export default router;
