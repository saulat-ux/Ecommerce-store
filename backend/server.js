console.log("Hello World!!!");
const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");

const errorHandler = require("./middleware/errorMiddleware");


const app = express()

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(
    cors({
        origin: ["http://localhost:3000", "myotherapp"],
        credentials: true,
    
    })
)

// router
app.use("/api/v1/users", userRoute )
app.use("/api/v1/products", productRouter )
app.use("/api/v1/cart", cartRouter )



app.get("/", (req,res) => {
    res.json("home page..")
})

const Port  = process.env.Port || 5000

// error middleware
app.use(errorHandler)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(Port, () => {
            console.log(`server is running on port ${Port}`)
        })
    }).catch((error) => {
        console.log(error)
    })
