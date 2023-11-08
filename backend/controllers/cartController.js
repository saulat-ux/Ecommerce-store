const asyncHandler =require("express-async-handler");
const Cart = require("../models/cartModel");

const createCart = asyncHandler(async(req, res) => {
   const {
    name, 
    quantity,
    imageURL,   
    price,
   } = req.body

   if(!name){
    res.status(400)
    throw new Error("Please fill in all the fields")
   }

//    create product
const cart = await Cart.create({
    name,
    quantity, 
    imageURL,
    price,
})

res.status(201).json(cart)
})

// get cartproducts
const getCartProducts = asyncHandler(async(req, res) => {
    const cartProducts = await Cart.find().sort("-createdAt")
    res.status(200).json(cartProducts)
 })


    // get single products
    const getSingleCartProduct = asyncHandler(async(req, res) => {
        const cartProductSingle = await Cart.findById(req.params.id)
        if(!cartProductSingle){
            throw new Error("product not found")
        }
        res.status(201).json(cartProductSingle)
     })

    //  Delete products
    const deleteCARTProducts = asyncHandler(async(req, res) => {
        const cartProduct = await Cart.findById(req.params.id)
        if(!cartProduct){
            res.status(404);
            throw new Error("cart product not found")
        }
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"product is deleted"})
     })

module.exports= {
    createCart,
    getCartProducts,
    getSingleCartProduct ,
    deleteCARTProducts,
}