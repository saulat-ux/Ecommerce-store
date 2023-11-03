const asyncHandler =require("express-async-handler");
const Product = require("../models/productModel");

const createProduct = asyncHandler(async(req, res) => {
   const {
    name,
    sku,category,
    brand,
    quantity,

    description,
    image,
    regularPrice,
    price,
    color,

   } = req.body

   if(!name || !category ||!brand || !quantity ||!description ){
    res.status(400)
    throw new Error("Please fill in all the fields")
   }

//    create product
const product = await Product.create({
    name,
    sku,
    category,
    brand,
    quantity,
    description,
    
    regularPrice,
    price,
    color,
})

res.status(201).json(product)
})

// get products
    const getProducts = asyncHandler(async(req, res) => {
       const products = await Product.find().sort("-createdAt")
       res.status(200).json(products)
    })


    // get single products
    const getProduct = asyncHandler(async(req, res) => {
        const product = await Product.findById(req.params.id)
        if(!product){
            throw new Error("product not found")
        }
        res.status(201).json(product)
     })

    //  Delete products
    const deleteProducts = asyncHandler(async(req, res) => {
        const product = await Product.findById(req.params.id)
        if(!product){
            res.status(404);
            throw new Error("product not found")
        }
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"product is deleted"})
     })
// update product
     const  updateProduct = asyncHandler(async(req, res) => {
        const {
            name,
            category,
            brand,
            quantity,
            description,
            image,
            regularPrice,
            price,
            color,
           } = req.body
           const product = await Product.findById(req.params.id)
           if(!product){
            res.status(404);
            throw new Error("product not found")
        }
        // update product
        const updatedProduct = await Product.findByIdAndUpadte({
            
          _id:  req.params.id},
          {
            name,
            category,
            brand,
            quantity,
            description,
            image,
            regularPrice,
            price,
            color,
          },
          {
            new: true,
            runValidators: true,
          }
          
          )
          res.status(200).json(updateProduct)

     })

module.exports= {
    createProduct,
    getProducts,
    getProduct,
    deleteProducts,
    updateProduct,
}