import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { createAccountController } from "../controller/account.controller";
const router = Router()

router.post("/",authMiddleware,createAccountController)

export default router