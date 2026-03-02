import jwt from "jsonwebtoken"
import { userModel } from "../src/model/user.model.js";
import { sendRegistrationEmail } from "../services/gmail.service.js";
async function userRegisterController(req,res){
    const {name,email,password} = req.body

    const exists =  await userModel.findOne({
        email
    })

    if(exists){
        return res.status(422).json({
            message: "THE USER ALREADY EXISTS"
        })
    }
    
        const user = await userModel.create({
            email,name,password
        })
    
    const token = jwt.sign({userId: user._id},process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token)

    res.status(201).json({
        userID: user._id,
        email: user.email,
        name: user.name
    })
    await sendRegistrationEmail(user.email,user.names)
}

export {userRegisterController}