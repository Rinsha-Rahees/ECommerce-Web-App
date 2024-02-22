import React from "react";
import TopBar from "./Components/TopBar";
import NavBarUI from "./Components/NavigationBarUI/NavBarUI";
import CategoryBar from "./Components/CategoryBarUI/CategoryBar";
import ProductDetails from "./Components/ProductDetailedViewUI/ProductDetails";
import Footer from "./Components/FooterUI/Footer";

function ViewProduct() {
  return (
    <div className="flex flex-col items-center justify-start m-0 p-0 w-screen h-screen overflow-x-hidden">
      <TopBar/>
      <NavBarUI/>
      <CategoryBar/>
      <ProductDetails/>
      <Footer/>
    </div>
  );
}

export default ViewProduct;
