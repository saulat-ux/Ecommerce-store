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

// app.use(
//     cors({
//         origin: ["http://localhost:3000"],
//         credentials: true,
    
//     })
// )

// adding this comment

app.use(
    cors({
        origin: ["https://shop-saulat-ux.vercel.app"],
        methods: ["GET", "PUT", "DELETE", "POST", "PATCH"],
        credentials:true,
        optionsSuccessStatus: 204,
    
    })
)


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://ecommerce-store-saulat.vercel.app/');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', true);
//     next();
// });

app.options('/api/v1/cart', cors());

// Handling OPTIONS requests for /api/v1/register
app.options('/api/v1/userregister', cors());

// Handling OPTIONS requests for /api/v1/login
app.options('/api/v1/userlogin', cors());


// router
app.use("/api/v1/users", userRoute )
app.use("/api/v1/products", productRouter )
app.use("/api/v1/cart", cartRouter )



app.get("/", (req,res) => {
    res.send("home page..")
})

const Port  = process.env.Port || 5000

// error middleware
app.use(errorHandler)

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         app.listen(Port, () => {
//             console.log(`server is running on port ${Port}`)
//         })
//     }).catch((error) => {
//         console.log(error)
//     })


    mongoose.connect('mongodb+srv://saulatzubair:ALS4W4Y8g14JRpwG@cluster-store.ls1d7eq.mongodb.net/shop-like-elite?retryWrites=true&w=majority')
    .then(() => {
        app.listen(Port, () => {
            console.log(`server is running on port ${Port}`)
        })
    }).catch((error) => {
        console.log(error)
    })
