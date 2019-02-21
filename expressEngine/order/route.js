// importing packages
import express from "express";

// import controller
import { OrderController } from './controller/index';

const router = express.Router();

router.post('/', OrderController.create);

export default router;
