const express = require("express");
const { createCart, deleteCARTProducts, getCartProducts } = require("../controllers/cartController");

const router = express.Router();

router.post("/",createCart);
router.post("/:id",deleteCARTProducts);
router.get("/",getCartProducts);








module.exports =router;