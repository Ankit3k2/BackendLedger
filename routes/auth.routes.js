import { Router } from "express"
import { userRegisterController } from "../controller/auth.controller.js"



const authRouter  = Router()

authRouter.post("/register",userRegisterController)

export default authRouter