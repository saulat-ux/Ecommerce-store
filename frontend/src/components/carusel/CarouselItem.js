import React, { useEffect } from 'react'
import "./caruosel.scss"
import { Link, useNavigate } from 'react-router-dom';
import { shortenText } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_PROD ,sendProduct } from '../../redux/features/prod/productSlice';

// this is the frontend

const CarouselItem = ({imageURL,name,price, description,id}) => {

  
  const dispatch = useDispatch()
  const {isLoading , isSuccess} = useSelector((state) => state.auth)
  const navigate = useNavigate();



  const handleClick = async () => {
    const productData = {
      name,
      price,
      imageURL,
      description,
    }
    await dispatch(sendProduct(productData))
  }

  useEffect(() => {
    if(isSuccess) {
        navigate("/product-details")
    }
    dispatch(RESET_PROD())
},[isSuccess, dispatch, navigate])
  return (
    <div className='carouselItem'>
      {/* bring the mongo-db id here */}
      <Link to={`/product-details/${id}`}>
        <img className='product--image' src={imageURL} alt="product" />
        <p className='price'>{`${price}`}</p>
        <h4>{shortenText(name, 18)}</h4>
        <p className='--mb'>{shortenText(description, 26)}</p>
      </Link>
      <button className='--btn --btn-block --btn-primary' onClick={handleClick}>Add To Cart</button>
    </div>
  )
}

export default CarouselItem
