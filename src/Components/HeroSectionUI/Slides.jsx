import React from 'react'
import Carousel from '../GenericComponents/Carousel'
import { advertisementImages } from "../../assets/DataArray"

function Slides() {
    
  return (
    <div className='w-full mt-4'>
      <Carousel images={advertisementImages}/> 
    </div>
  )
}

export default Slides