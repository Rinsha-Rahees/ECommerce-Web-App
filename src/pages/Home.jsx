import React from "react";
import Slides from "../Components/HeroSectionUI/Slides";
import ProductList from "../Components/ProductSectionUI/ProductList";
import AdvertisementBar from "../Components/AdvertisementBar";
import NavBarUI from "../Components/NavigationBarUI/NavBarUI";
import TopBar from "../Components/TopBar";
import Footer from "../Components/FooterUI/Footer";
import CategoryBar from "../Components/CategoryBarUI/CategoryBar";

function Home() {
  return (
    <>
      <TopBar />
      <NavBarUI />
      <div className="flex flex-col items-center mt-20">
        <CategoryBar />
        <Slides />
        <AdvertisementBar />
        <ProductList />
      </div>
      <Footer />
    </>
  );
}

export default Home;
