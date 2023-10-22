import React from 'react'
import "./caruosel.scss"
import { Link } from 'react-router-dom';
import { shortenText } from '../../utils';

const CarouselItem = ({url,name,price, description}) => {
  return (
    <div className='carouselItem'>
      <Link to='/product-details'>
        <img className='product--image' src={url} alt="product" />
        <p className='price'>{`${price}`}</p>
        <h4>{shortenText(name, 18)}</h4>
        <p className='--mb'>{shortenText(description, 26)}</p>
      </Link>
      <button className='--btn --btn-block --btn-primary'>Add To Cart</button>
    </div>
  )
}

export default CarouselItem
