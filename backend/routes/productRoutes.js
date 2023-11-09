const express = require("express");
const { createProduct, getProducts, getProduct, deleteProducts, updateProduct } = require("../controllers/productController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const router = express.Router();

// router.post("/", protect, adminOnly,createProduct);
router.post("/",createProduct);

router.get("/",getProducts);
router.get("/:id",getProduct);
router.post("/:id", protect, adminOnly,deleteProducts);
router.patch("/:id", protect, adminOnly,updateProduct);






module.exports =router;