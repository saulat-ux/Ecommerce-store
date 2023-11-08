import React, { useEffect, useState } from 'react'
import styles from "./shop.module.scss"
import axios from 'axios';
import { API_URL } from '../../redux/features/prod/productService';
import CarouselItem from '../../components/carusel/CarouselItem';
import SearchBar from '../../components/SearchBar';


const Shop = () => {
  

    const [productData, setProductData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      const fetchData = async() => {
        const res = await axios.get(API_URL)
        console.log(res.data)
        const data= res.data
        setProductData(data)
    }
    fetchData();
},[])

   
    
  return (
    <div className={styles.container} > 
    <SearchBar onSearch = {setSearchTerm}/>
       <div className={styles.center}>

        <div className={styles.main}>

        {productData.filter((product)=> product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        
        .map((item) => (
              <CarouselItem
              name={item.name}
              price={item.price}
              imageURL={item.imageURL}
              description={item.description}
              id={item._id}
              />
        ))
      
}
</div>

</div>
    </div>
  )
}

export default Shop