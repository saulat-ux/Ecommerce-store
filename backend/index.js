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
        origin: ["https://ecommerce-store-tasleem-frontend.vercel.app"],
        methods: ["GET", "POST", "DELETE"],
        credentials:true,
        allowedHeaders: 'Content-Type',
    
    })
)


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://ecommerce-store-tasleem-frontend.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.options('/api/v1/cart', cors());


app.options('/api/v1/users', cors());


app.options('/api/v1/products', cors());


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
