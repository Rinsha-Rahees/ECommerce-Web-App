import React from 'react'
import { EMPTY_WISHLIST_ICON } from '../../assets/Constants'

function EmptyWishlist() {
  return (
    <div className='flex flex-col justify-center items-center w-full max-w-[85vw] h-fit font-mono my-24'>
        <img 
        className='w-16'
        src={EMPTY_WISHLIST_ICON?.src} alt="Empty Cart" 
        />
        <span className='font-bold text-3xl mt-5'>Wishlist is empty.</span>
    </div>
  )
}

export default EmptyWishlist