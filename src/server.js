import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js";

import app from "./app.js";


app.listen(process.env.PORT,
    ()=>{console.log(`APP IS RUNNING ON PORT ${process.env.PORT}`)}) 

connectDB()