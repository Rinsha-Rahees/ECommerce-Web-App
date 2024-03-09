import React from "react";
import Slides from "../Components/HeroSectionUI/Slides";
import ProductList from "../Components/ProductSectionUI/ProductList";
import AdvertisementBar from "../Components/AdvertisementBar";
import NavBarUI from "../Components/NavigationBarUI/NavBarUI";
import TopBar from "../Components/TopBar";
import Footer from "../Components/FooterUI/Footer";
import CategoryBar from "../Components/CategoryBarUI/CategoryBar";
import CollapseUI from "../Components/GenericComponents/CollapseUI";

function Home() {
  return (
    <>
      <TopBar />
      <NavBarUI />
      <CategoryBar />
      <Slides />
      <AdvertisementBar />
      <ProductList />
      <Footer />
    </>
  );
}

export default Home;
