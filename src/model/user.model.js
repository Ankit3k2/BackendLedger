import mongoose from "mongoose";
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema({
    
    email:{
        type: String,
        unique:[true,"EMAIL ALREADY EXISTS"],
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"EMAIL IS NOT VALID"],
        trim: true,
        lowercase: true,
        required : [true,"email is required"]
    },
    name:{
        type:String,
        required : [true,"name is required"]

    },
    password:{
        type:String,
        required : [true,"password is required"]
    }

},
{
    timestamps: true
})


userSchema.pre("save",async function (next){

    if(!this.isModified("password")){
        return next()
    }
    const hash = await bcrypt.hash(this.password,10) 

    this.password = hash
    return next
    })

userSchema.methods.compare = async function(password){
    return await bcrypt.compare(password,this.password)
}


export const userModel = mongoose.model("User",userSchema)
