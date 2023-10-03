import React from 'react'
import Slider from '../../components/slider/Slider'
import HomeInfoBox from './HomeInfoBox'
import './home.scss'

const Home = () => {

  return (
   <>
    <Slider/>
    <section>
      <div className="container">
        <HomeInfoBox/>
      </div>
    </section>
   </>
  )
}

export default Home
