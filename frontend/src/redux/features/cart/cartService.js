import axios from "axios";


// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;




export const API_URL = 'https://ecommerce-store-delta-three.vercel.app/api/v1/cart/';

console.log(API_URL)

// send product to backend
const  sendProductToCart = async (cartData) => {
  const response = await axios.post(API_URL, cartData)
 return response.data

}

// delete product from cart
const  deleteProductFromCart = async (id) => {
  const response = await axios.post(API_URL + id)
  return response.data
}

// get all cart products 
const getAllCartProducts = async() => {
  const response = await axios.get(API_URL)
  return response.data
}

const cartService = {
    sendProductToCart,
    deleteProductFromCart,
    getAllCartProducts,
  
    
}

export default cartService
