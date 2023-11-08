import React, { useEffect, useState } from 'react'
import Product from './product';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../redux/features/prod/productService';




const ProductDetail = () => {
  const {id} = useParams()
  const [singleProduct, setSingleProduct] = useState({})

 useEffect(() => {
  const getProduct = async() => {

    try {
      const res = await axios.get(API_URL + id)
      console.log(res.data)
      const productData = res.data;
      setSingleProduct(productData)
    } catch (error) {
      console.log(error)
    }

  }
  getProduct()
 },[])


  
  return (
    <section className='--bg-grey'>
    <div className="container">
      <h3>Product details</h3>
   <Product
   id={singleProduct.id}
   name={singleProduct.name}
   price={singleProduct.price}
   description={singleProduct.description}
   color={singleProduct.color}
   sku={singleProduct.sku}
   sold = {singleProduct.sold}
   imageURL={singleProduct.imageURL}
  
  
   />
    </div>
  </section>
  )
}

export default ProductDetail