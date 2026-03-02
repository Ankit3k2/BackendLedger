import express from "express"
import cookieparser from "cookie-parser"

import authRouter from "../routes/auth.routes.js"
import accountRouter from "../routes/account.routes.js"


const app = express()

app.use(cookieparser())
app.use(express.json())



app.use("/api/auth",authRouter)
app.use("/api/acount/",accountRouter)

export default app