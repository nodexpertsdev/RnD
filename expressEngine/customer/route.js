// importing packages
import {
    Router
} from "express";
// import controller
import { CustomerController } from "./controller/index";

import parser from '../lib/parser';

const router = Router();

router
    .post('/',
        parser(CustomerController, 'create'));

export default router;