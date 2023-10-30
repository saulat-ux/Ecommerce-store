const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = expressAsyncHandler(async(req, res, next) => {
    try {
            const token = req.cookies.token
            if(!token){
                res.status(401)
                throw new Error("not authorized, please login")
            }
            // vairfy the token
            const verified = jwt.verify(token, process.env.JWT_SECRET)
            // get user id from token 
            const user = await User.findById(verified.id).select("-password")
            if(!user){
                res.status(401)
                throw new Error("user not found")
            }else{
                req.user = user
                next()
            }


    } catch (error) {
        res.status(401)
        throw new Error("not authorized, please login")
    }
})


module.exports = {
    protect,
}