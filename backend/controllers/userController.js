const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET , {
        expiresIn: "1d"
    })
}

// register user
const registerUser = asyncHandler(async(req, res) => {
    const {name ,email, password} = req.body;
    // validate that request
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please fill in all required fields")
    }
    if(password.length < 6){
        res.status(400);
        throw new Error("password must be greater than 6 characters")
    }
    // check if user exists 
    const userExists = await User.findOne({ email })
    if(userExists){
        res.status(400)
        throw new Error("Email has already been registered")
    }

    // creater new user
    const user = await User.create({
        name,email , password
    })

    // generate token
    const token = generateToken(user._id)
    if(user){
        const {_id, name, email,role} = user
        res.cookie("token", token, {
            path:"/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400),
            // secure: true,
            // samesite: none,
        })
        // send user data
        res.status(201).json({
            _id, name, email, token,role
        })
    }else{
        res.status(400)
        throw new Error("Invalid user data")
    }

    res.send("register user...")
})

module.exports = {
    registerUser
}