import { userModel } from "../src/model/user.model"
import  jwt  from "jsonwebtoken"


async function authMiddleware(req,res,next){



    const token = req.cookies.token || req.header.authorizations?.split(" ")[1]

    if(!token){
        return res.status(401).json({
            "message":"INVALID AUTHORIZATION"
        })
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
    
        const user = await userModel.findById(decoded.userId)
    
        req.user = user
    
        next()
    } catch (error) {

        return res.status(401).json({"message":"INVALID ACCESS , NO TOKEN FOUND"})
        
    }
}

export {authMiddleware}