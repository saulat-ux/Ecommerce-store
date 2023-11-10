import React, { useEffect, useState } from 'react'
import styles from './cart.module.scss'
import axios from 'axios';
import { API_URL } from '../../redux/features/cart/cartService';
import {RiDeleteBin5Fill} from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux';
import { RESET_CART, deleteProductFromCart } from '../../redux/features/cart/cartSlice'; 
import Loader from '../../components/loader/Loader';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const [totalPrice , setTotalPrice] = useState('')

  const dispatch = useDispatch()

  const [isLoading, setIsloading] = useState(true)
  const [cartData, setCartData] = useState([])

  
 useEffect(() => {
  const fetchData = async() => {
    try {
      const res = await axios.get(API_URL)
    
      const data= res.data
      // console.log(data)
      setCartData(data)
      setIsloading(false)

      const total = data.reduce((acc,item) => acc +item.price , 0);
      const roundedTotal = Math.round(total)
      setTotalPrice(roundedTotal)
      // window.scrollTo(0, 0);
    } catch (error) {
      console.log('could not fetch data' + error)
    }
}

fetchData();
 },[])
    
  



  const handleDelete = async (id) => {
    await dispatch(deleteProductFromCart(id))
    const res = await axios.get(API_URL);
    const updatedData = res.data;
    setCartData(updatedData);
  }

  return (
   <section className='container'>
    <div className={styles.table}>
      {isLoading && <Loader/>}
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
        { cartData?.map((item, index) => (
             <tbody key={index}>
             <tr>
               <td>{index+1}</td>
               <td>
                 <p className={styles.p}>{item.name}</p>
                 <img className={styles.img} src={item.imageURL} alt="product image" width={50} />
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
    <div className={styles.horizontal}></div>
    <div className={styles.underCart}>
      <div>
        <button className={styles.theBtn2}>Clear cart</button>

      </div>
        <div className='cart-items'>
        <Link to='/shop' >
          <button className={styles.theBtn2}>
         Continue Shoping 

          </button>
        </Link>
        <div className='item-sections'>
        <h4>cart items(s):3</h4>
        <div className={styles.subTotal}>
        <h3>Subtotal:</h3>
        {/* add the total count */}
        <h3>${totalPrice}</h3>
        </div>

    <div className={styles.horizontal}></div>
        <p>Please choose a payment method</p>
        <form>

          <div className={styles.lable}> 
        <label>
          <input type="radio" />
          <span className={styles.span}>Paypal</span>
        </label>
        </div>

        <div className={styles.lable}> 
        <label>
          <input type="radio" />
          <span className={styles.span}>Flutterwave</span>
        </label>
        </div>

        <div className={styles.lable}> 
        <label>
          <input type="radio" />
          <span className={styles.span}>Stripe</span>
        </label>
        </div>

        <div className={styles.lable}> 
        <label>
          <input type="radio" />
          <span className={styles.span}>Wallet</span>
        </label>
        </div>

        <button className={styles.theBtn}>checkout</button>
        </form>
        </div>
        </div>
    </div>
   </section>
  )
}

export default Cart