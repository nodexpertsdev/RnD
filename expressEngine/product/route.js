// importing packages
import {
    Router
} from "express";

import { ProductController } from "./controller/index";


// import controller
import {
    ProductParser
} from './parser';

const router = Router();

router
    .post('/',
        ProductParser.run(ProductController, 'create'));

export default router;