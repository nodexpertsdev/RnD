// importing packages
import express from "express";

// import controller
import { UserController } from './controller/index';

const router      = express.Router();

router.post('/', UserController.create);

export default router;
