import React from "react";
import { bootsCollection } from "../Components/DataArray";
import ProductFullImages from "../Components/ProductDetailedViewUI/ProductFullImages";
import Carousel from "../Components/GenericComponents/Carousel";
import ProductDescription from "../Components/ProductDetailedViewUI/ProductDescription";
import NavBarUI from "../Components/NavigationBarUI/NavBarUI";
import TopBar from "../Components/TopBar";
import Footer from "../Components/FooterUI/Footer";
import CategoryBar from "../Components/CategoryBarUI/CategoryBar";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  const productId = params.productId;

  const prodDesc = bootsCollection.find((obj) => obj.id == productId);

  console.log(prodDesc);

  return (
    <>
      <TopBar />
      <NavBarUI />
      <CategoryBar />

      <div className="flex flex-col gap-10 md:flex-row justify-between w-full xl:max-w-[85vw] mt-8 p-8 font-mono">
        <div className="w-full hidden md:flex">
          <ProductFullImages images={prodDesc.images} />
        </div>
        <div className="w-full flex md:hidden">
          <Carousel images={prodDesc.images} />
        </div>

        <div className="w-full">
          <ProductDescription description={prodDesc} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
