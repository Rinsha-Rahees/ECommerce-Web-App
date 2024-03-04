import React from 'react'
import TopBar from '../Components/TopBar'
import NavBarUI from '../Components/NavigationBarUI/NavBarUI'
import CategoryBar from '../Components/CategoryBarUI/CategoryBar'
import WishlistUI from '../Components/WishlistUI/WishlistUI'
import Footer from '../Components/FooterUI/Footer'

function WishList() {
  return (
    <>
        <TopBar/>
        <NavBarUI/>
        <CategoryBar/>
        <WishlistUI/>
        <Footer/>
    </>
  )
}

export default WishList