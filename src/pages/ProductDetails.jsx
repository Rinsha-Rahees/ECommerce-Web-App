import React, { useEffect, useState } from "react";
import ProductFullImages from "../Components/ProductDetailedViewUI/ProductFullImages";
import Carousel from "../Components/GenericComponents/Carousel";
import ProductDescription from "../Components/ProductDetailedViewUI/ProductDescription";
import NavBarUI from "../Components/NavigationBarUI/NavBarUI";
import TopBar from "../Components/TopBar";
import Footer from "../Components/FooterUI/Footer";
import CategoryBar from "../Components/CategoryBarUI/CategoryBar";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../Firebase/FirebaseDBCollection";
import ShimmerUI from '../Components/GenericComponents/ShimmerUI'

function ProductDetails() {
  const [productDetails, setProductDetails] = useState([]);
  const params = useParams();
  const productId = params.productId;
  const prodDesc = productDetails.find((obj) => obj.id == productId);

  useEffect(() => {
    products();
  }, []);

  const products = async () => {
    const result = await getAllProducts();
    setProductDetails(result);
  };

  return (
    <>
      <TopBar />
      <NavBarUI />
      <CategoryBar />
      {prodDesc? (
        <div className="flex flex-col gap-10 md:flex-row justify-between w-full xl:max-w-[85vw] mt-8 p-8 font-mono">
          <div className="w-full hidden md:flex">
            <ProductFullImages images={prodDesc?.images} />
          </div>
          <div className="w-full flex md:hidden">
            <Carousel images={prodDesc?.images} />
          </div>

          <div className="w-full">
            <ProductDescription description={prodDesc} />
          </div>
        </div>
      ) : (
        <ShimmerUI/>
      )}
      <Footer />
    </>
  );
}

export default ProductDetails;
