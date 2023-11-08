import React, { useEffect, useState } from 'react'
import styles from './cart.module.scss'
import axios from 'axios';
import { API_URL } from '../../redux/features/cart/cartService';
import {RiDeleteBin5Fill} from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux';
import { RESET_CART } from '../../redux/features/cart/cartSlice'; 







const Cart = () => {
  const dispatch = useDispatch()

  const [isLoading, setIsloading] = useState(true)
  const [cartData, setCartData] = useState([])
  const { counter} = useSelector((state) => state.cart)



  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get(API_URL)
      console.log(res.data)
      const data= res.data
      
      setCartData(data)
      setIsloading(false)
  }
  fetchData();
},[])

useEffect(() => {

  dispatch(RESET_CART())
},[ dispatch, counter])

const len = cartData.length
console.log(len)

  const handleDelete = (id) => {
   
      const deleteProduct = async() => {
        const res = await axios.post(API_URL + id)
        console.log(res)
        setIsloading(false)
    }
    deleteProduct();

  }

  return (
   <section className='container'>
    <div className={styles.table}>
      <h2>Shoping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>
              s/n
            </th>
            <th>
              Product
            </th>
            <th>
              Price
            </th>
            <th>
              Quantity
            </th>
            <th>
              total
            </th>
            <th>
             Action
            </th>
          </tr>
        </thead>
        { cartData?.map((item) => (
             <tbody>
             <tr>
               <td>{counter}</td>
               <td>
                 <p>{item.name}</p>
                 <img src={item.imageURL} alt="product image" width={50} />
               </td>
               <td>{item.price}</td>
               <td>1</td>
               <td>{item.price}</td>
               <td>
                <RiDeleteBin5Fill onClick={() => handleDelete(item._id)}/>
                </td>
   
   
   
             </tr>
           </tbody>
        ))
       
      }
      </table>
    </div>
   </section>
  )
}

export default Cart