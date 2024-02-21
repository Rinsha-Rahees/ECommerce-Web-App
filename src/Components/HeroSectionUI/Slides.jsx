import React from 'react'
import Carousel from './Carousel'

function Slides() {

  const images = [
    "src/assets/Ads/baggy-ad.png",
    "src/assets/Ads/boots-ad.png",
    "src/assets/Ads/caps-ad.png",
    "src/assets/Ads/t-shirt-ad.png"
  ]
    
  return (
    <div className='w-full mt-4'>
      <Carousel slides={images}/> 
    </div>
  )
}

export default Slides