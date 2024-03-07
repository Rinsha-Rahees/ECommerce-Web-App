import React from 'react'

function EmptyWishlist() {
  return (
    <div className='flex flex-col justify-center items-center w-full max-w-[85vw] h-fit font-mono my-24'>
        <img src="src/assets/empty-wishlist-icon.png" alt="Empty Cart" 
        />
        <span className='font-bold text-3xl'>Wishlist is empty.</span>
    </div>
  )
}

export default EmptyWishlist