import React from 'react'
import NavBarUI from './Components/NavigationBarUI/NavBarUI'
import TopBar from './Components/TopBar'
import AdvertisementBar from './Components/AdvertisementBar'
import ProductList from './Components/ProductSectionUI/ProductList'
import Footer from './Components/FooterUI/Footer'
import CategoryBar from './Components/CategoryBarUI/CategoryBar'
import Slides from './Components/HeroSectionUI/Slides'


function App() {

  return (
    <div className="flex flex-col items-center justify-start m-0 p-0 w-screen h-screen overflow-x-hidden">
      <TopBar/>
      <NavBarUI/>
      <CategoryBar/>
      <Slides/>
      <AdvertisementBar/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default App
