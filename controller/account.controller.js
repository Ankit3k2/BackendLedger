import { accountModel } from "../src/model/account.model";

async function createAccountController(req,res){
    const user = req.user

    const account = await accountModel.create({
        user : user._id
    })

    res.status(201).json({
        message: "ACCOUNT CREATED SUCCESSFULLY"
    })
}
export {createAccountController}