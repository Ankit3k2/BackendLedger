import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index:true
    },
    status:{
        type:String,
        enum:["ACTIVE","FROZEN","CLOSED"],
        required: true,
        default:"ACTIVE"
    },
    currency:{
        required: true,
        default : "INR"
        ,type: String
    }
})

accountSchema.index({user:1,status:1})
const accountModel = mongoose.model("Account",accountSchema)

export {accountModel}