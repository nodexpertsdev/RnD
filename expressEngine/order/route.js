// importing packages
import { Router } from "express";

// import parser
import parser from "../lib/parser";

// import controller
import { OrderController } from "./controller";

const router = Router();

router.post("/", parser(OrderController, "create"));

export default router;
