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


app.use((req, res, next) => {
    // Handle preflight request
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Origin', 'https://ecommerce-store-tasleem-frontend.vercel.app');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.status(200).end();
      return;
    }
    next();
  });

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
        origin: ["https://ecommerce-store-tasleem-frontend.vercel.app/"],
        methods: ["GET", "POST", "DELETE",'OPTIONS'],
        credentials:true,
        allowedHeaders: 'Content-Type',
    
    })
)
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
